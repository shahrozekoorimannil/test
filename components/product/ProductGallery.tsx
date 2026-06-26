"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // If no images, use a placeholder
  const galleryImages = images.length > 0 ? images : ["https://images.unsplash.com/photo-1544941916-24e5491122a6?w=800&q=80"];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            // @ts-ignore
            src={galleryImages[activeIndex]}
            alt={`Product view ${activeIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {galleryImages.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative aspect-square w-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all snap-start ${
                activeIndex === idx ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover bg-gray-50" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
