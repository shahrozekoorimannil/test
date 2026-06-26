import { db } from "@/db";
import { productVariants, products } from "@/db/schema";
import { eq, desc, asc } from "drizzle-orm";
import { Search, AlertTriangle, ArrowUpRight, ArrowDownRight, Archive } from "lucide-react";
import Link from "next/link";

export default async function AdminInventoryPage() {
  const allVariants = await db.query.productVariants.findMany({
    with: {
      product: true,
    },
    orderBy: [asc(productVariants.inventoryQuantity)]
  });

  const lowStock = allVariants.filter(v => v.inventoryQuantity < 10 && v.inventoryQuantity > 0);
  const outOfStock = allVariants.filter(v => v.inventoryQuantity === 0);
  
  const totalStockValue = allVariants.reduce((sum, v) => sum + (Number(v.price) * v.inventoryQuantity), 0);
  const totalItems = allVariants.reduce((sum, v) => sum + v.inventoryQuantity, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-navy dark:text-white">Inventory Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Manage stock levels, pricing, and stock history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#111] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Stock Value</p>
          <p className="text-2xl font-bold text-navy dark:text-white mt-1">₹{totalStockValue.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-white dark:bg-[#111] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Items in Stock</p>
          <p className="text-2xl font-bold text-navy dark:text-white mt-1">{totalItems}</p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/30 shadow-sm">
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <AlertTriangle className="w-4 h-4" />
            <p className="text-sm font-medium">Low Stock Items</p>
          </div>
          <p className="text-2xl font-bold text-red-700 dark:text-red-400 mt-1">{lowStock.length}</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Archive className="w-4 h-4" />
            <p className="text-sm font-medium">Out of Stock</p>
          </div>
          <p className="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-1">{outOfStock.length}</p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by SKU or Variant Name..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold"
            />
          </div>
          <button className="text-sm font-medium text-white bg-navy hover:bg-gold px-4 py-2 rounded-lg transition-colors">
            Bulk Adjust Stock
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-[#151515] border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">Product / Variant</th>
                <th className="px-6 py-4 font-medium">SKU</th>
                <th className="px-6 py-4 font-medium">Current Stock</th>
                <th className="px-6 py-4 font-medium">Reserved</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {allVariants.map(variant => (
                <tr key={variant.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-navy dark:text-gray-200">{((variant as any).product?.name)}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{variant.title}</p>
                  </td>
                  <td className="px-6 py-4 font-mono text-gray-500">{variant.sku || "-"}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${
                      variant.inventoryQuantity === 0 ? 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' :
                      variant.inventoryQuantity < 10 ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                      'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    }`}>
                      {variant.inventoryQuantity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-orange-500 font-medium">
                    {variant.reservedQuantity > 0 ? variant.reservedQuantity : "-"}
                  </td>
                  <td className="px-6 py-4 font-medium text-navy dark:text-white">
                    ₹{Number(variant.price).toLocaleString('en-IN')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-sm font-medium text-navy dark:text-white px-3 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Adjust
                      </button>
                    </div>
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
