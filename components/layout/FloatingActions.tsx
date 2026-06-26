"use client";

import { MessageCircle, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        // @ts-ignore
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        // @ts-ignore
        href="tel:+919876543210"
        className="w-14 h-14 bg-gold text-navy rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Call Now"
      >
        <PhoneCall className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
