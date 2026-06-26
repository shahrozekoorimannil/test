import { db } from "@/db";
import { products, categories, brands, productVariants } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import Link from "next/link";
import { Plus, Search, Edit, Copy, Trash, MoreVertical } from "lucide-react";
import { format } from "date-fns";

export default async function AdminProductsPage() {
  const catalog = await db.query.products.findMany({
    orderBy: [desc(products.createdAt)],
    with: {
      category: true,
      brand: true,
      variants: true,
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-navy dark:text-white">Products</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your catalog, inventory, and variants.</p>
        </div>
        <Link href="/admin/products/new" className="bg-navy text-white hover:bg-gold px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" /> Add Product
        </Link>
      </div>

      <div className="bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="text-sm font-medium text-gray-600 dark:text-gray-400 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900">
              Filter
            </button>
            <button className="text-sm font-medium text-gray-600 dark:text-gray-400 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900">
              Export CSV
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-[#151515] border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Inventory</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Base Price</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {catalog.map((product: any) => {
                const totalStock = product.variants.reduce((acc: number, v: any) => acc + v.inventoryQuantity, 0);
                return (
                  <tr key={product.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shrink-0"></div>
                        <div>
                          <p className="font-semibold text-navy dark:text-gray-200">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.status === 'ACTIVE' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${totalStock < 10 ? 'text-red-500' : 'text-navy dark:text-white'}`}>
                          {totalStock} in stock
                        </span>
                        <span className="text-xs text-gray-400">for {product.variants.length} variants</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                      {product.category?.name || "Uncategorized"}
                    </td>
                    <td className="px-6 py-4 font-semibold text-navy dark:text-white">
                      ₹{Number(product.basePrice).toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-gray-400 hover:text-navy dark:hover:text-white transition-colors"><Edit className="w-4 h-4" /></button>
                        <button className="p-2 text-gray-400 hover:text-navy dark:hover:text-white transition-colors"><Copy className="w-4 h-4" /></button>
                        <button className="p-2 text-red-400 hover:text-red-600 transition-colors"><Trash className="w-4 h-4" /></button>
                        <button className="p-2 text-gray-400 hover:text-navy dark:hover:text-white transition-colors"><MoreVertical className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-sm text-gray-500">
          <span>Showing 1 to {catalog.length} of {catalog.length} products</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 border border-gray-200 dark:border-gray-800 rounded disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 border border-gray-200 dark:border-gray-800 rounded disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
