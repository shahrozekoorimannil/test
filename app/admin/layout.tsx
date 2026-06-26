import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { ThemeProvider } from "next-themes";
import { AppSidebar } from "@/components/admin/AppSidebar";
import { ThemeToggle } from "@/components/admin/ThemeToggle";
import { CommandPalette } from "@/components/admin/CommandPalette";
import { Bell } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Role-Based Access Control (RBAC) - Strictly check for ADMIN role
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex h-screen bg-white dark:bg-[#0A0A0A] overflow-hidden w-full">
        {/* Sidebar */}
        <AppSidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden w-full">
          
          {/* Admin Top Header */}
          <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0A0A0A] flex items-center justify-between px-6 shrink-0 z-10">
            <div className="flex items-center gap-4">
              <CommandPalette />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-500 hover:text-navy dark:text-gray-400 dark:hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <ThemeToggle />
              <div className="w-8 h-8 rounded-full bg-gold text-navy font-bold flex items-center justify-center">
                {session.user.name?.[0] || 'A'}
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50/50 dark:bg-black/20">
            {children}
          </main>
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
