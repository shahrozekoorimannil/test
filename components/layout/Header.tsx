"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Search, User, Menu, X, ChevronDown } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const cartItems = useCartStore(state => state.items);
  const wishlistItems = useWishlistStore(state => state.items);
  
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-navy hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading font-bold text-2xl tracking-tight text-navy">
            TECHNO<span className="text-gold">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/products" className="text-sm font-medium text-navy hover:text-gold transition-colors">Shop All</Link>
          
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-navy hover:text-gold transition-colors">
              Categories <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="py-2">
                <Link href="/category/designer-fans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gold">Designer Fans</Link>
                <Link href="/category/bldc-fans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gold">Smart BLDC Fans</Link>
                <Link href="/category/chandeliers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gold">Chandeliers</Link>
                <Link href="/category/wall-lights" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gold">Wall Lights</Link>
              </div>
            </div>
          </div>
          
          <Link href="/brands" className="text-sm font-medium text-navy hover:text-gold transition-colors">Brands</Link>
          <Link href="/about" className="text-sm font-medium text-navy hover:text-gold transition-colors">About Us</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 lg:gap-6">
          <button className="text-navy hover:text-gold transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          
          <Link href="/account" className="hidden sm:block text-navy hover:text-gold transition-colors">
            <User className="w-5 h-5" />
          </Link>

          <Link href="/wishlist" className="relative text-navy hover:text-gold transition-colors">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative text-navy hover:text-gold transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-navy/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col">
            <div className="p-5 flex items-center justify-between border-b border-gray-100">
              <span className="font-heading font-bold text-xl text-navy">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-navy">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <nav className="flex flex-col px-5 space-y-4">
                <Link href="/products" className="text-lg font-medium text-navy" onClick={() => setIsMobileMenuOpen(false)}>Shop All</Link>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Categories</span>
                  <Link href="/category/designer-fans" className="block py-2 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Designer Fans</Link>
                  <Link href="/category/bldc-fans" className="block py-2 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Smart BLDC Fans</Link>
                  <Link href="/category/chandeliers" className="block py-2 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Chandeliers</Link>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <Link href="/brands" className="text-lg font-medium text-navy block py-2" onClick={() => setIsMobileMenuOpen(false)}>Brands</Link>
                  <Link href="/account" className="text-lg font-medium text-navy block py-2" onClick={() => setIsMobileMenuOpen(false)}>My Account</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
