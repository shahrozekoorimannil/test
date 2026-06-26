"use client";

import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Critical Error</h1>
            <p className="text-gray-500 text-sm">
              We encountered a critical application error. Our technical team has been notified.
            </p>
          </div>

          {error.digest && (
            <p className="text-xs text-gray-400 font-mono">Error ID: {error.digest}</p>
          )}

          <div className="pt-4">
            <button
              onClick={() => reset()}
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <RefreshCcw className="w-4 h-4" /> Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
