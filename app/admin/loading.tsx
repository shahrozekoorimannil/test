import { Loader2 } from "lucide-react";

export default function AdminLoading() {
  return (
    <div className="w-full h-full min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <Loader2 className="w-8 h-8 animate-spin text-navy dark:text-gold" />
      <p className="text-gray-500 text-sm font-medium animate-pulse">Loading dashboard...</p>
    </div>
  );
}
