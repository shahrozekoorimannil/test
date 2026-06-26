import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-3xl tracking-tight text-white">
                TECHNO<span className="text-gold">.</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Premium destination for designer fans, smart BLDC cooling solutions, and luxury lighting in Malappuram, Kerala. Elevate your living spaces.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all text-sm font-semibold">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all text-sm font-semibold">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all text-sm font-semibold">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-gold text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-gold text-sm transition-colors">Contact Us</Link></li>
              <li><Link href="/track-order" className="text-gray-300 hover:text-gold text-sm transition-colors">Track Order</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-gold text-sm transition-colors">FAQs</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-gold text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-gold text-sm transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-gold">Categories</h3>
            <ul className="space-y-3">
              <li><Link href="/category/designer-fans" className="text-gray-300 hover:text-gold text-sm transition-colors">Premium Designer Fans</Link></li>
              <li><Link href="/category/bldc-fans" className="text-gray-300 hover:text-gold text-sm transition-colors">Smart BLDC Fans</Link></li>
              <li><Link href="/category/chandeliers" className="text-gray-300 hover:text-gold text-sm transition-colors">Luxury Chandeliers</Link></li>
              <li><Link href="/category/wall-lights" className="text-gray-300 hover:text-gold text-sm transition-colors">Decorative Wall Lights</Link></li>
              <li><Link href="/brands" className="text-gray-300 hover:text-gold text-sm transition-colors">Top Brands</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>Techno Designer Fans & Lights, Main Road, Malappuram, Kerala 676505</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>info@technodesigner.com</span>
              </li>
            </ul>

            <h3 className="font-heading font-semibold text-lg mb-4 text-gold">Newsletter</h3>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-gold text-white"
              />
              <button className="bg-gold text-navy px-4 py-2 rounded-md text-sm font-semibold hover:bg-gold-light transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Techno Designer Fans & Lights. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons could go here */}
            <span className="text-xs text-gray-500">Secure Payments via Razorpay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
