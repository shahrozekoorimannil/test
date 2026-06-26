import { db } from "@/db";
import { orders, users, products, payments, productVariants } from "@/db/schema";
import { eq, sum, count, desc, lt, and } from "drizzle-orm";
import { IndianRupee, ShoppingCart, Users, Package, AlertCircle } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export default async function AdminDashboard() {
  // 1. Fetch Metrics
  // const [totalRevenueResult] = await db
  //   .select({ total: sum(payments.amount) })
  //   .from(payments)
  //   .where(eq(payments.status, "PAID"));
    
  // const [ordersResult] = await db.select({ count: count() }).from(orders);
  
  // const [customersResult] = await db
  //   .select({ count: count() })
  //   .from(users)
  //   .where(eq(users.role, "USER"));
    
  // const [productsResult] = await db.select({ count: count() }).from(products);

  // // 2. Fetch Low Stock Variants
  // const lowStock = await db.query.productVariants.findMany({
  //   where: lt(productVariants.inventoryQuantity, 10),
  //   limit: 5,
  //   with: {
  //     product: true
  //   }
  // });

  // // 3. Fetch Recent Orders
  // const recentOrders = await db.query.orders.findMany({
  //   orderBy: [desc(orders.createdAt)],
  //   limit: 5,
  //   with: {
  //     user: true
  //   }
  // });

  const totalRevenueResult = { total: 1545000 };
  const ordersResult = { count: 342 };
  const customersResult = { count: 128 };
  const productsResult = { count: 185 };
  
  const lowStock = [
    { id: "1", product: { name: "Decorative Fan" }, title: "White", inventoryQuantity: 2 },
    { id: "2", product: { name: "Wall Sconce" }, title: "Gold", inventoryQuantity: 0 },
  ];

  const recentOrders = [
    { id: "ORD-123", createdAt: new Date(), status: "PROCESSING", totalAmount: 4500, user: { name: "John Doe" } },
    { id: "ORD-124", createdAt: new Date(), status: "DELIVERED", totalAmount: 12500, user: { name: "Jane Smith" } },
  ];

  const revenue = totalRevenueResult?.total || 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-heading font-bold text-navy dark:text-white">Dashboard Overview</h1>
        <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
          Last 30 Days
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Revenue" value={`₹${Number(revenue).toLocaleString('en-IN')}`} icon={IndianRupee} trend="+12%" />
        <MetricCard title="Total Orders" value={ordersResult.count.toString()} icon={ShoppingCart} trend="+5%" />
        <MetricCard title="Customers" value={customersResult.count.toString()} icon={Users} trend="+18%" />
        <MetricCard title="Products" value={productsResult.count.toString()} icon={Package} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-navy dark:text-white">Recent Orders</h2>
            <Link href="/admin/orders" className="text-sm text-gold hover:underline">View all</Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-gray-500 uppercase border-b border-gray-200 dark:border-gray-800">
                <tr>
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {recentOrders.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-gray-500">No orders found.</td>
                  </tr>
                )}
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                    <td className="py-4 font-mono text-xs text-navy dark:text-gray-300">#{order.id.split('-')[0]}</td>
                    <td className="py-4 text-gray-700 dark:text-gray-300">{order.user?.name || "Guest"}</td>
                    <td className="py-4 text-gray-500">{format(new Date(order.createdAt), 'MMM dd, yyyy')}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === 'DELIVERED' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 text-right font-semibold text-navy dark:text-white">₹{Number(order.totalAmount).toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 text-red-600 dark:text-red-400">
            <AlertCircle className="w-5 h-5" />
            <h2 className="text-xl font-bold">Low Stock Alerts</h2>
          </div>
          
          <div className="space-y-4">
            {lowStock.length === 0 ? (
              <p className="text-gray-500 text-sm">Inventory levels are healthy.</p>
            ) : (
              lowStock.map((variant) => (
                <div key={variant.id} className="flex justify-between items-start border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0">
                  <div>
                    <h4 className="text-sm font-medium text-navy dark:text-gray-200 line-clamp-1">{variant.product?.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{variant.title}</p>
                  </div>
                  <span className="inline-flex items-center justify-center px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 shrink-0">
                    {variant.inventoryQuantity} left
                  </span>
                </div>
              ))
            )}
          </div>
          
          <Link href="/admin/inventory" className="block w-full text-center text-sm text-gold hover:underline mt-6">
            Manage Inventory
          </Link>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon: Icon, trend }: { title: string, value: string, icon: any, trend?: string }) {
  return (
    <div className="bg-white dark:bg-[#111] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <Icon className="w-5 h-5 text-gold" />
        </div>
        {trend && (
          <span className={`text-xs font-bold ${trend.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-navy dark:text-white mt-1">{value}</p>
    </div>
  );
}
