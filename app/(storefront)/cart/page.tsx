"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cart";
import { Trash2, ArrowRight, ShoppingBag, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4">
        <div className="w-24 h-24 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-navy dark:text-white mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">Looks like you haven't added any premium lighting or fans to your cart yet.</p>
        <Link 
          href="/products" 
          className="bg-navy text-white hover:bg-gold px-8 py-3 rounded-full font-medium transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <h1 className="text-3xl lg:text-4xl font-heading font-bold text-navy dark:text-white mb-10">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 lg:p-6 bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-2xl">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-50 dark:bg-gray-900 rounded-xl relative overflow-hidden shrink-0">
                  <Image 
                    src={item.imageUrl || "/file.svg"} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-navy dark:text-white lg:text-lg leading-tight">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Variant: {item.variantTitle}
                      </p>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded-lg">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-2 text-gray-500 hover:text-navy dark:hover:text-white"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-500 hover:text-navy dark:hover:text-white"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="font-bold text-navy dark:text-gold text-lg">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 lg:p-8 sticky top-32">
            <h2 className="text-xl font-bold text-navy dark:text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-sm mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>
                <span className="text-green-600 dark:text-green-400 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="flex justify-between items-end mb-8">
              <span className="font-bold text-navy dark:text-white text-lg">Total</span>
              <span className="font-bold text-2xl text-navy dark:text-gold">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            
            <Link 
              href="/checkout"
              className="w-full flex items-center justify-center gap-2 bg-navy text-white hover:bg-gold py-4 rounded-xl font-bold text-lg transition-all"
            >
              Proceed to Checkout
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
