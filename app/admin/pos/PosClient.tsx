"use client";

import { useState } from "react";
import { usePosStore } from "@/store/pos";
import { Search, Plus, Minus, Trash2, CreditCard, Banknote, QrCode, SplitSquareHorizontal, User, Printer } from "lucide-react";
import { toast } from "sonner";
import { processPOSOrder } from "@/actions/admin";

export default function PosClient({ initialCatalog }: { initialCatalog: any[] }) {
  const { items, customer, paymentMethod, addItem, updateQuantity, removeItem, setCustomer, setPaymentMethod, clear, getTotals } = usePosStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Flatten catalog for easy searching (Search by name or SKU)
  const searchableItems = initialCatalog.flatMap(p => 
    p.variants.map((v: any) => ({
      productId: p.id,
      variantId: v.id,
      name: p.name,
      variantTitle: v.title,
      price: Number(v.price),
      sku: v.sku || p.sku,
      stock: v.inventoryQuantity,
      image: v.imageId || p.imageId
    }))
  );

  const filteredItems = searchableItems.filter(i => 
    i.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    i.sku?.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 12); // Limit to 12 results for performance

  const handleCheckout = async () => {
    if (items.length === 0) return toast.error("Cart is empty");
    if (!paymentMethod) return toast.error("Select a payment method");

    setIsProcessing(true);
    try {
      const payload = {
        items: items.map(i => ({ productId: i.productId, variantId: i.variantId, quantity: i.quantity })),
        customer: customer || null,
        paymentMethod: paymentMethod,
        totalAmount: total
      };
      const res = await processPOSOrder(payload);
      if (res.success && 'orderId' in res) {
        toast.success(`Order #${(res as any).orderId?.substring(0,8)} placed successfully!`);
        clear();
      } else {
        toast.error((res as any).error || "Failed to place order");
      }
    } catch (err: any) {
      toast.error("An error occurred");
    } finally {
      setIsProcessing(false);
    }
  };

  const { subtotal, tax, total } = getTotals();

  return (
    <div className="flex h-full w-full bg-gray-50 dark:bg-[#0A0A0A]">
      
      {/* Left: Product Selection */}
      <div className="flex-1 flex flex-col border-r border-gray-200 dark:border-gray-800 h-full overflow-hidden">
        
        {/* Top Bar */}
        <div className="p-4 bg-white dark:bg-[#111] border-b border-gray-200 dark:border-gray-800 shrink-0 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by product name, SKU, or scan barcode..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border-transparent rounded-lg focus:bg-white dark:focus:bg-black focus:ring-2 focus:ring-navy dark:focus:ring-gold transition-all outline-none"
              autoFocus
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map(item => (
              <div 
                key={item.variantId} 
                onClick={() => {
                  if (item.stock > 0) addItem({ ...item, quantity: 1 });
                  else toast.error("Out of stock!");
                }}
                className={`bg-white dark:bg-[#111] p-3 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm cursor-pointer hover:border-gold transition-colors relative overflow-hidden ${item.stock === 0 ? 'opacity-50 grayscale' : ''}`}
              >
                <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg mb-3">
                   {/* Placeholder for image */}
                </div>
                <h4 className="text-sm font-semibold text-navy dark:text-gray-200 line-clamp-1">{item.name}</h4>
                <p className="text-xs text-gray-500 mb-2">{item.variantTitle}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-navy dark:text-white">₹{item.price.toLocaleString('en-IN')}</span>
                  <span className="text-xs font-medium text-gray-500">{item.stock} left</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Cart & Checkout */}
      <div className="w-[400px] flex flex-col bg-white dark:bg-[#111] shrink-0 h-full shadow-xl z-10">
        
        {/* Customer Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 shrink-0">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-navy dark:text-white flex items-center gap-2">
              <User className="w-5 h-5" />
              {customer ? customer.name : "Walk-in Customer"}
            </h3>
            <button className="text-xs text-gold hover:underline">Change</button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#0A0A0A] inner-shadow">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <Search className="w-12 h-12 mb-4 opacity-20" />
              <p>Scan or search to add products</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="bg-white dark:bg-[#111] p-3 rounded-lg border border-gray-200 dark:border-gray-800 flex gap-3">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-navy dark:text-white line-clamp-1">{item.name}</h4>
                  <p className="text-xs text-gray-500 mb-2">{item.variantTitle}</p>
                  <div className="flex items-center gap-3">
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="p-1 rounded bg-gray-100 dark:bg-gray-800 text-navy dark:text-white hover:bg-gray-200"><Minus className="w-3 h-3" /></button>
                    <span className="text-sm font-medium w-4 text-center dark:text-white">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded bg-gray-100 dark:bg-gray-800 text-navy dark:text-white hover:bg-gray-200"><Plus className="w-3 h-3" /></button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="font-bold text-navy dark:text-white">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  <button onClick={() => removeItem(item.id)} className="text-red-500 hover:bg-red-50 p-1 rounded"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Payment & Totals Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] shrink-0">
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between text-gray-500"><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
            <div className="flex justify-between text-gray-500"><span>Tax (18%)</span><span>₹{tax.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span></div>
            <div className="flex justify-between font-bold text-xl text-navy dark:text-white mt-2 pt-2 border-t border-dashed border-gray-300 dark:border-gray-700">
              <span>Total</span><span>₹{total.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-4">
            <PaymentBtn type="CASH" icon={Banknote} current={paymentMethod} onClick={() => setPaymentMethod("CASH")} />
            <PaymentBtn type="UPI" icon={QrCode} current={paymentMethod} onClick={() => setPaymentMethod("UPI")} />
            <PaymentBtn type="CARD" icon={CreditCard} current={paymentMethod} onClick={() => setPaymentMethod("CARD")} />
            <PaymentBtn type="SPLIT" icon={SplitSquareHorizontal} current={paymentMethod} onClick={() => setPaymentMethod("SPLIT")} />
          </div>

          <div className="flex gap-2">
            <button className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-navy dark:text-white flex items-center justify-center">
              <Printer className="w-6 h-6" />
            </button>
            <button 
              onClick={handleCheckout}
              disabled={isProcessing || items.length === 0}
              className="flex-1 bg-navy text-white hover:bg-gold py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "Complete Sale"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentBtn({ type, icon: Icon, current, onClick }: { type: string, icon: any, current: string | null, onClick: () => void }) {
  const active = current === type;
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-2 rounded-lg border-2 transition-all ${
        active ? 'border-navy dark:border-gold bg-navy/5 dark:bg-gold/10' : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
      }`}
    >
      <Icon className={`w-5 h-5 mb-1 ${active ? 'text-navy dark:text-gold' : 'text-gray-500'}`} />
      <span className={`text-[10px] font-bold ${active ? 'text-navy dark:text-gold' : 'text-gray-500'}`}>{type}</span>
    </button>
  );
}
