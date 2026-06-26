import { db } from "@/db";
import { categories } from "@/db/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { Plus, Search, Edit, Trash } from "lucide-react";
import { format } from "date-fns";

export default async function AdminCategoriesPage() {
  const allCategories = await db.query.categories.findMany({
    orderBy: [desc(categories.createdAt)],
    with: {
      products: true,
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold text-navy dark:text-white">Categories</h1>
          <p className="text-gray-500 text-sm mt-1">Organize products into categories for easier navigation.</p>
        </div>
        <button className="bg-navy text-white hover:bg-gold px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" /> Add Category
        </button>
      </div>

      <div className="bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search categories..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-[#151515] border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">Category Name</th>
                <th className="px-6 py-4 font-medium">Slug</th>
                <th className="px-6 py-4 font-medium">Products</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {allCategories.map(cat => (
                <tr key={cat.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        {/* icon/image */}
                      </div>
                      <p className="font-semibold text-navy dark:text-gray-200">{cat.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-gray-500">{cat.slug}</td>
                  <td className="px-6 py-4 text-navy dark:text-gray-300 font-medium">
                    {((cat as any).products?.length) || 0} Products
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-navy dark:hover:text-white transition-colors"><Edit className="w-4 h-4" /></button>
                      <button className="p-2 text-red-400 hover:text-red-600 transition-colors"><Trash className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {allCategories.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-500">No categories found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
