"use client";

import Link from "next/link";
import Image from "next/image";
import { useWishlistStore } from "@/store/wishlist";
import { Trash2, Heart, ArrowRight } from "lucide-react";

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4">
        <div className="w-24 h-24 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6">
          <Heart className="w-10 h-10 text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-navy dark:text-white mb-2">Your wishlist is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">Keep track of the luxury lighting and fans you love by adding them to your wishlist.</p>
        <Link 
          href="/products" 
          className="bg-navy text-white hover:bg-gold px-8 py-3 rounded-full font-medium transition-colors"
        >
          Discover Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="flex items-center gap-3 mb-10">
        <Heart className="w-8 h-8 text-red-500 fill-red-500" />
        <h1 className="text-3xl lg:text-4xl font-heading font-bold text-navy dark:text-white">My Wishlist</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.productId} className="group bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
            <div className="relative aspect-square bg-gray-50 dark:bg-gray-900 overflow-hidden">
              <Image 
                src={item.imageUrl || "/file.svg"} 
                alt={item.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button 
                onClick={() => removeItem(item.productId)}
                className="absolute top-3 right-3 w-8 h-8 bg-white/90 dark:bg-black/50 backdrop-blur text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors z-10"
                aria-label="Remove from wishlist"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-5 flex flex-col justify-between h-[140px]">
              <div>
                <Link href={`/products/${item.slug}`}>
                  <h3 className="font-bold text-navy dark:text-white truncate hover:text-gold transition-colors">{item.name}</h3>
                </Link>
              </div>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold text-navy dark:text-gold">₹{item.price.toLocaleString('en-IN')}</span>
                <Link 
                  href={`/products/${item.slug}`}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 text-navy dark:text-white rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                  aria-label="View product options"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
