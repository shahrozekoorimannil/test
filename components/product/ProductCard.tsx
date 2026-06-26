import Link from "next/link";
import { Star, Heart } from "lucide-react";
import { useWishlistStore } from "@/store/wishlist";
import type { Product } from "@/data/dummy";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { items: wishlistItems, addItem, removeItem } = useWishlistStore();
  const isWishlisted = wishlistItems.some(i => i.productId === product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isWishlisted) {
      removeItem(product.id);
    } else {
      addItem({
        productId: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.image,
        slug: product.slug,
      });
    }
  };

  return (
    <Link href={`/products/${product.slug}`} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100">
      <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-navy text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            NEW
          </span>
        )}
        <button 
          onClick={toggleWishlist}
          className="absolute top-3 right-3 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-navy shadow-sm transition-colors"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
        </button>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span>{product.rating}</span>
          <span className="ml-1">({product.reviews})</span>
        </div>
        <h3 className="font-heading font-semibold text-lg text-navy mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{product.category}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            {product.compareAtPrice && (
              <span className="text-xs text-gray-400 line-through">₹{product.compareAtPrice.toLocaleString('en-IN')}</span>
            )}
            <span className="font-bold text-lg text-navy">₹{product.price.toLocaleString('en-IN')}</span>
          </div>
          <span className="text-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
        </div>
      </div>
    </Link>
  );
}
