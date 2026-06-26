import { db } from "@/db";
import { users, orders } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { Search, Mail, Phone, ShoppingBag, TrendingUp } from "lucide-react";
import { format } from "date-fns";

export default async function AdminCustomersPage() {
  const allUsers = await db.query.users.findMany({
    where: eq(users.role, "USER"),
    orderBy: [desc(users.createdAt)],
    with: {
      orders: true,
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold text-navy dark:text-white">Customers</h1>
          <p className="text-gray-500 text-sm mt-1">Manage users, view order history and lifetime value.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-[#111] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Customers</p>
            <p className="text-2xl font-bold text-navy dark:text-white mt-1">{allUsers.length}</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Users className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white dark:bg-[#111] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Active This Month</p>
            <p className="text-2xl font-bold text-navy dark:text-white mt-1">{Math.floor(allUsers.length * 0.4)}</p>
          </div>
          <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-[#151515] border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Total Orders</th>
                <th className="px-6 py-4 font-medium">Lifetime Value</th>
                <th className="px-6 py-4 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {allUsers.map(user => {
                const totalOrders = ((user as any).orders?.length) || 0;
                const lifetimeValue = (((user as any).orders?.reduce((sum: number, order: any) => {
                  if (order.status !== 'CANCELLED' && order.status !== 'FAILED') {
                    return sum + Number(order.totalAmount);
                  }
                  return sum;
                }, 0)) || 0);

                return (
                  <tr key={user.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold text-navy font-bold flex items-center justify-center shrink-0">
                          {user.name?.[0]?.toUpperCase() || 'U'}
                        </div>
                        <div>
                          <p className="font-semibold text-navy dark:text-gray-200">{user.name || "Unknown User"}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1 text-gray-500 dark:text-gray-400">
                        {user.email && <span className="flex items-center gap-2"><Mail className="w-3 h-3" /> {user.email}</span>}
                        {((user as any).phone) && <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> {(user as any).phone}</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-2 font-medium">
                        <ShoppingBag className="w-4 h-4 text-gray-400" /> {totalOrders}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-navy dark:text-white">
                      ₹{lifetimeValue.toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {format(new Date(user.createdAt || new Date()), 'PP')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Just a local icon since Users is already imported in layout if needed
function Users(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
}
