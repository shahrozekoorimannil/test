"use server";

import { db } from "@/db";
import { 
  orders, 
  orderItems, 
  payments, 
  shippingDetails, 
  productVariants, 
  inventoryHistoryLogs 
} from "@/db/schema";
import { razorpay } from "@/lib/razorpay";
import { checkoutPayloadSchema } from "@/lib/validations";
import { auth } from "@/lib/auth";
import { eq, sql } from "drizzle-orm";

export async function createOrder(payload: any) {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    // 1. Zod Validation
    const parsed = checkoutPayloadSchema.safeParse(payload);
    if (!parsed.success) {
      return { success: false, error: "Invalid checkout data." };
    }
    const { items, shippingAddress } = parsed.data;

    // 2. Fetch Prices & Verify Stock (Outside transaction to calculate total first, or inside to be safe)
    // For simplicity and safety against race conditions, we do everything inside the transaction
    
    return await db.transaction(async (tx) => {
      let totalAmount = 0;
      
      // We need to fetch current prices to prevent tampering
      // In a real implementation we'd batch fetch, but here we iterate
      const validItems = [];
      for (const item of items) {
        if (!item.variantId) throw new Error("Variant required");
        
        const variant = await tx.query.productVariants.findFirst({
          where: eq(productVariants.id, item.variantId),
        });

        if (!variant) throw new Error(`Product not found: ${item.variantId}`);
        if (variant.inventoryQuantity < item.quantity) {
          throw new Error(`Insufficient stock for ${variant.title}. Only ${variant.inventoryQuantity} left.`);
        }

        totalAmount += Number(variant.price) * item.quantity;
        validItems.push({ ...item, price: variant.price, title: variant.title });
      }

      // 3. Create Order (PENDING)
      const [newOrder] = await tx.insert(orders).values({
        userId: userId || null,
        totalAmount: totalAmount.toString(),
        status: "PENDING",
      }).returning();

      // 4. Create Shipping Details
      await tx.insert(shippingDetails).values({
        orderId: newOrder.id,
        ...shippingAddress,
      });

      // 5. Reserve Stock & Create Order Items
      for (const item of validItems) {
        await tx.insert(orderItems).values({
          orderId: newOrder.id,
          productId: item.productId,
          variantId: item.variantId,
          quantity: item.quantity,
          price: item.price.toString(),
        });

        // Reserve Stock: decrement available, increment reserved
        await tx.update(productVariants)
          .set({
            inventoryQuantity: sql`${productVariants.inventoryQuantity} - ${item.quantity}`,
            reservedQuantity: sql`${productVariants.reservedQuantity} + ${item.quantity}`,
          })
          .where(eq(productVariants.id, item.variantId as string));

        // Log history
        await tx.insert(inventoryHistoryLogs).values({
          variantId: item.variantId as string,
          changeType: "STOCK_RESERVED",
          quantityChanged: item.quantity,
          previousQuantity: 0, // Simplified for brevity
          newQuantity: 0,
          reason: `Reserved for Order ${newOrder.id}`,
        });
      }

      // 6. Create Razorpay Order
      const rzpOrder = await razorpay.orders.create({
        amount: Math.round(totalAmount * 100), // in paise
        currency: "INR",
        receipt: newOrder.id,
      });

      // 7. Create Payment Record (PENDING)
      await tx.insert(payments).values({
        orderId: newOrder.id,
        razorpayOrderId: rzpOrder.id,
        amount: totalAmount.toString(),
        status: "PENDING",
      });

      return {
        success: true,
        orderId: newOrder.id,
        razorpayOrderId: rzpOrder.id,
        amount: totalAmount * 100,
        currency: "INR",
      };
    });

  } catch (error: any) {
    console.error("Order Creation Failed:", error);
    return { success: false, error: error.message || "Failed to create order" };
  }
}
