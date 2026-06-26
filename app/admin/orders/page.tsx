import { db } from "@/db";
import { orders } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import Link from "next/link";
import { Search, Eye, Filter, Download } from "lucide-react";
import { format } from "date-fns";

export default async function AdminOrdersPage() {
  const allOrders = await (db.query.orders.findMany as any)({
    orderBy: [desc(orders.createdAt)],
    with: {
      user: true,
      shippingDetails: true,
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold text-navy dark:text-white">Orders</h1>
          <p className="text-gray-500 text-sm mt-1">Manage fulfillments, refunds, and tracking.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by Order ID or Customer..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-[#151515] border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Total</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {allOrders.map((order: any) => (
                <tr key={order.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors">
                  <td className="px-6 py-4 font-mono font-medium text-navy dark:text-white">
                    #{order.id.split('-')[0]}
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {format(new Date(order.createdAt), 'PP p')}
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-navy dark:text-gray-200">{order.user?.name || "Guest"}</p>
                    <p className="text-xs text-gray-500">{order.user?.email || order.shippingDetails?.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      order.status === 'DELIVERED' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      order.status === 'CANCELLED' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                      order.status === 'SHIPPED' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                      order.status === 'PROCESSING' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-navy dark:text-white">
                    ₹{Number(order.totalAmount).toLocaleString('en-IN')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/admin/orders/${order.id}`} className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-navy dark:text-white rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium">
                      <Eye className="w-4 h-4" /> View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}
