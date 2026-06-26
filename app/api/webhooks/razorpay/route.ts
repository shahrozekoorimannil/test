import { NextResponse } from "next/server";
import { db } from "@/db";
import { orders, payments, productVariants, inventoryHistoryLogs, orderItems } from "@/db/schema";
import { verifyWebhookSignature } from "@/lib/razorpay";
import { eq, sql } from "drizzle-orm";
import { sendOrderConfirmation } from "@/lib/emails";

export async function POST(req: Request) {
  try {
    const bodyText = await req.text();
    const signature = req.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    const secret = process.env.RAZORPAY_WEBHOOK_SECRET || "dummy_webhook_secret";
    const isValid = verifyWebhookSignature(bodyText, signature, secret);

    if (!isValid) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(bodyText);

    // Handle Payment Success
    if (event.event === "payment.captured") {
      const paymentEntity = event.payload.payment.entity;
      const rzpOrderId = paymentEntity.order_id;

      const txResult = await db.transaction(async (tx) => {
        // 1. Find our Payment Record
        const paymentRecord = await tx.query.payments.findFirst({
          where: eq(payments.razorpayOrderId, rzpOrderId),
        });

        if (!paymentRecord) throw new Error("Payment record not found");
        if (paymentRecord.status === "PAID") return; // Already processed

        // 2. Mark Payment as PAID
        await tx.update(payments)
          .set({ status: "PAID", razorpayPaymentId: paymentEntity.id })
          .where(eq(payments.id, paymentRecord.id));

        // 3. Mark Order as PROCESSING
        await tx.update(orders)
          .set({ status: "PROCESSING" })
          .where(eq(orders.id, paymentRecord.orderId));

        // 4. Finalize Stock Deduction (Convert Reserved -> Sold)
        const items = await tx.query.orderItems.findMany({
          where: eq(orderItems.orderId, paymentRecord.orderId),
        });

        for (const item of items) {
          if (!item.variantId) continue;

          // Remove from reservedQuantity, inventoryQuantity is already deducted. 
          // Wait, earlier I deducted inventoryQuantity. 
          // Actually, if we just hold it in reservedQuantity, we just need to decrement reservedQuantity now.
          await tx.update(productVariants)
            .set({
              reservedQuantity: sql`${productVariants.reservedQuantity} - ${item.quantity}`,
            })
            .where(eq(productVariants.id, item.variantId));

          await tx.insert(inventoryHistoryLogs).values({
            variantId: item.variantId,
            changeType: "ORDER_PLACED",
            quantityChanged: item.quantity,
            previousQuantity: 0,
            newQuantity: 0,
            reason: `Payment successful for Order ${paymentRecord.orderId}`,
          });
        }
        
        return { orderId: paymentRecord.orderId, amount: paymentRecord.amount };
      });
      
      if (txResult) {
        // Fire Email Notification (Async)
        const customerEmail = event.payload.payment.entity.email || "customer@example.com";
        const customerName = event.payload.payment.entity.contact || "Customer";
        sendOrderConfirmation(customerEmail, {
          orderId: txResult.orderId,
          customerName: customerName,
          totalAmount: txResult.amount
        });
      }

      return NextResponse.json({ status: "ok" });
    }

    // Handle Payment Failed
    if (event.event === "payment.failed") {
      const paymentEntity = event.payload.payment.entity;
      const rzpOrderId = paymentEntity.order_id;

      await db.transaction(async (tx) => {
        const paymentRecord = await tx.query.payments.findFirst({
          where: eq(payments.razorpayOrderId, rzpOrderId),
        });

        if (!paymentRecord) return;

        // 1. Mark as FAILED
        await tx.update(payments).set({ status: "FAILED" }).where(eq(payments.id, paymentRecord.id));
        await tx.update(orders).set({ status: "CANCELLED" }).where(eq(orders.id, paymentRecord.orderId));

        // 2. Release Reserved Stock (increment available, decrement reserved)
        const items = await tx.query.orderItems.findMany({
          where: eq(orderItems.orderId, paymentRecord.orderId),
        });

        for (const item of items) {
          if (!item.variantId) continue;

          await tx.update(productVariants)
            .set({
              inventoryQuantity: sql`${productVariants.inventoryQuantity} + ${item.quantity}`,
              reservedQuantity: sql`${productVariants.reservedQuantity} - ${item.quantity}`,
            })
            .where(eq(productVariants.id, item.variantId));

          await tx.insert(inventoryHistoryLogs).values({
            variantId: item.variantId,
            changeType: "STOCK_RELEASED",
            quantityChanged: item.quantity,
            previousQuantity: 0,
            newQuantity: 0,
            reason: `Payment failed for Order ${paymentRecord.orderId}`,
          });
        }
      });

      return NextResponse.json({ status: "ok" });
    }

    // Ignore other events
    return NextResponse.json({ status: "ignored" });

  } catch (error: any) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
