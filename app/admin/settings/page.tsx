"use client";

import { Save } from "lucide-react";
import { toast } from "sonner";

export default function AdminSettingsPage() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Settings updated successfully");
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-heading font-bold text-navy dark:text-white">Store Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Configure your business details, taxes, shipping, and API keys.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Business Information */}
        <div className="bg-white dark:bg-[#111] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-navy dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">Business Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Store Name</label>
              <input type="text" defaultValue="Techno Designer Fans & Lights" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Contact Email</label>
              <input type="email" defaultValue="contact@technofans.com" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
              <input type="tel" defaultValue="+91 9876543210" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">WhatsApp Number</label>
              <input type="tel" defaultValue="+91 9876543210" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Store Address</label>
              <textarea rows={3} defaultValue="123 Main Road, Malappuram, Kerala" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold"></textarea>
            </div>
          </div>
        </div>

        {/* Finance & Tax */}
        <div className="bg-white dark:bg-[#111] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-navy dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">Tax & Shipping</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">GST Number</label>
              <input type="text" defaultValue="32AABCU9603R1ZM" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Base Shipping Charge (₹)</label>
              <input type="number" defaultValue="50" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Free Shipping Threshold (₹)</label>
              <input type="number" defaultValue="2000" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold" />
            </div>
          </div>
        </div>

        {/* API Credentials */}
        <div className="bg-white dark:bg-[#111] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-navy dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">Integrations</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Razorpay Key ID</label>
              <input type="password" defaultValue="rzp_test_12345" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Resend API Key</label>
              <input type="password" defaultValue="re_123456789" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Cloudinary URL</label>
              <input type="password" defaultValue="cloudinary://abc:xyz@cloud" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold" />
            </div>
          </div>
        </div>

        <div className="flex justify-end pb-12">
          <button type="submit" className="bg-navy text-white hover:bg-gold px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all">
            <Save className="w-5 h-5" /> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
