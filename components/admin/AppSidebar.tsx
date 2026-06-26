"use client";

import { Calculator, LayoutDashboard, Package, ShoppingCart, Users, Tags, Star, Settings, FileText, BellRing, Box } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "POS Counter", href: "/admin/pos", icon: Calculator },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Inventory", href: "/admin/inventory", icon: Box },
  { name: "Categories", href: "/admin/categories", icon: Tags },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Reviews", href: "/admin/reviews", icon: Star },
  { name: "Coupons", href: "/admin/coupons", icon: BellRing },
  { name: "Audit Logs", href: "/admin/logs", icon: FileText },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0A0A0A] flex flex-col shrink-0 h-full">
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800 shrink-0">
        <h2 className="text-xl font-heading font-bold text-navy dark:text-white">
          Techno <span className="text-gold">Admin</span>
        </h2>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href));
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? "bg-navy text-white dark:bg-gray-800 dark:text-gold" 
                  : "text-gray-600 hover:bg-gray-100 hover:text-navy dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 shrink-0">
        <p className="text-xs text-gray-500 dark:text-gray-500 text-center">Techno Designer v2.0</p>
      </div>
    </aside>
  );
}
