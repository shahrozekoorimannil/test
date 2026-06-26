import Link from "next/link";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">404</h1>
          <p className="text-xl font-semibold text-gray-700">Page not found</p>
          <p className="text-gray-500 text-sm mt-2">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="pt-6 flex flex-col gap-3">
          <Link href="/" className="w-full flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-gold transition-colors">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
