import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { orders, orderItems, products, productVariants, shippingDetails } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { Package, Clock, CheckCircle, XCircle } from "lucide-react";

export default async function OrdersPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  // Fetch orders with relations
  const userOrders = await db.query.orders.findMany({
    where: eq(orders.userId, session.user.id),
    orderBy: [desc(orders.createdAt)],
    with: {
      shippingDetails: true,
      items: {
        with: {
          product: true,
          variant: true,
        }
      }
    }
  });

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "DELIVERED": return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "CANCELLED": return <XCircle className="w-5 h-5 text-red-500" />;
      case "SHIPPED": return <Package className="w-5 h-5 text-gold" />;
      default: return <Clock className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-heading font-bold text-navy mb-8">My Orders</h1>

        {userOrders.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
            <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-navy mb-2">No orders yet</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't made your first purchase.</p>
            <a href="/products" className="bg-navy text-white px-6 py-2 rounded-lg hover:bg-gold transition-colors">Start Shopping</a>
          </div>
        ) : (
          <div className="space-y-6">
            {userOrders.map((order: any) => (
              <div key={order.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Order #{order.id.split('-')[0]}</span>
                    <div className="flex items-center gap-2 mt-1">
                      {getStatusIcon(order.status)}
                      <span className="font-semibold text-navy">{order.status}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-left md:text-right">
                    <span className="text-xs text-gray-500 block">Placed on {new Date(order.createdAt).toLocaleDateString()}</span>
                    <span className="font-bold text-lg text-navy">₹{Number(order.totalAmount).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {order.items.map((item: any) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 bg-gray-50 rounded-lg shrink-0 overflow-hidden border border-gray-100">
                        <img src={item.variant?.imageId || item.product?.imageId || "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200"} alt={item.product?.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-navy text-sm line-clamp-1">{item.product?.name}</h4>
                        <p className="text-xs text-gray-500 mb-1">{item.variant?.title}</p>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Qty: {item.quantity}</span>
                          <span className="font-semibold text-navy">₹{Number(item.price).toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex gap-4">
                  <button className="text-sm font-semibold text-navy hover:text-gold transition-colors">Download Invoice</button>
                  <button className="text-sm font-semibold text-navy hover:text-gold transition-colors">Reorder</button>
                  {order.status === "PENDING" || order.status === "PROCESSING" ? (
                     <button className="text-sm font-semibold text-red-500 hover:text-red-700 transition-colors ml-auto">Cancel Order</button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
