"use server";

import { db } from "@/db";
import { 
  orders, 
  orderItems, 
  payments, 
  productVariants, 
  inventoryHistoryLogs 
} from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// Authorization helper
async function requireAdmin() {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized: Admin access required");
  }
  return session.user;
}

export async function processPOSOrder(payload: any) {
  try {
    const admin = await requireAdmin();
    const { items, customer, paymentMethod, totalAmount } = payload;

    return await db.transaction(async (tx) => {
      let finalAmount = 0;
      const validItems = [];

      // Verify stock
      for (const item of items) {
        if (!item.variantId) throw new Error("Variant required");
        
        const variant = await tx.query.productVariants.findFirst({
          where: eq(productVariants.id, item.variantId),
        });

        if (!variant) throw new Error(`Product not found: ${item.variantId}`);
        if (variant.inventoryQuantity < item.quantity) {
          throw new Error(`Insufficient stock for ${variant.title}.`);
        }

        finalAmount += Number(variant.price) * item.quantity;
        validItems.push({ ...item, price: variant.price, title: variant.title });
      }

      // 1. Create Order (COMPLETED / DELIVERED immediately for POS)
      const [newOrder] = await tx.insert(orders).values({
        userId: customer?.id || null,
        totalAmount: finalAmount.toString(),
        status: "DELIVERED", // Handed over counter
      }).returning();

      // 2. Process Items & Deduct Stock Instantly (Skipping RESERVED)
      for (const item of validItems) {
        await tx.insert(orderItems).values({
          orderId: newOrder.id,
          productId: item.productId,
          variantId: item.variantId,
          quantity: item.quantity,
          price: item.price.toString(),
        });

        await tx.update(productVariants)
          .set({
            inventoryQuantity: sql`${productVariants.inventoryQuantity} - ${item.quantity}`,
          })
          .where(eq(productVariants.id, item.variantId as string));

        // Log history directly to SOLD
        await tx.insert(inventoryHistoryLogs).values({
          variantId: item.variantId as string,
          changeType: "ORDER_PLACED",
          quantityChanged: item.quantity,
          previousQuantity: 0,
          newQuantity: 0,
          reason: `POS Sale at Counter (Order ${newOrder.id})`,
        });
      }

      // 3. Create Payment Record (PAID)
      await tx.insert(payments).values({
        orderId: newOrder.id,
        razorpayOrderId: `POS_${Date.now()}`,
        amount: finalAmount.toString(),
        status: "PAID",
      });

      revalidatePath("/admin/pos");
      revalidatePath("/admin/inventory");
      revalidatePath("/admin/orders");

      return { success: true, orderId: newOrder.id };
    });

  } catch (error: any) {
    console.error("POS Order Failed:", error);
    return { success: false, error: error.message || "Failed to process POS order" };
  }
}

export async function updateOrderStatus(orderId: string, newStatus: string) {
  try {
    await requireAdmin();
    await db.update(orders).set({ status: newStatus }).where(eq(orders.id, orderId));
    revalidatePath("/admin/orders");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
