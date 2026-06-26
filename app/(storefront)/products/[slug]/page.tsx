"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import { dummyProducts, dummyReviews } from "@/data/dummy";
import { ProductGallery } from "@/components/product/ProductGallery";
import { VariantSelector } from "@/components/product/VariantSelector";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useRecentlyViewedStore } from "@/store/recently-viewed";
import { Star, Heart, ShoppingCart, Truck, ShieldCheck, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const product = dummyProducts.find(p => p.slug === slug);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const cartAddItem = useCartStore(state => state.addItem);
  const { items: wishlistItems, addItem: wishlistAdd, removeItem: wishlistRemove } = useWishlistStore();
  const addRecentlyViewed = useRecentlyViewedStore(state => state.addItem);

  const isWishlisted = product ? wishlistItems.some(i => i.productId === product.id) : false;

  useEffect(() => {
    if (product) {
      addRecentlyViewed({
        productId: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.image,
        slug: product.slug
      });
    }
  }, [product, addRecentlyViewed]);

  if (!product) return notFound();

  const handleAddToCart = () => {
    cartAddItem({
      id: `${product.id}-${selectedVariant?.id || 'base'}`,
      productId: product.id,
      variantId: selectedVariant?.id,
      name: product.name,
      price: selectedVariant?.price || product.price,
      quantity,
      imageUrl: product.image,
      variantTitle: selectedVariant?.title,
    });
    // Normally you'd trigger a toast notification here
  };

  const toggleWishlist = () => {
    if (isWishlisted) {
      wishlistRemove(product.id);
    } else {
      wishlistAdd({
        productId: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.image,
        slug: product.slug,
      });
    }
  };

  const currentPrice = selectedVariant?.price || product.price;
  
  // Provide a mix of the main image and generic ones for the gallery
  const galleryImages = [
    product.image,
    "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=800&q=80"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Product Top Section */}
      <section className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Gallery */}
          <div className="sticky top-32 h-fit">
            <ProductGallery images={galleryImages} />
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <div className="mb-6 border-b border-gray-100 pb-6">
              <div className="text-sm text-gray-500 mb-2">{product.brand}</div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="font-semibold text-navy">{product.rating}</span>
                  <span className="text-gray-500 underline cursor-pointer">({product.reviews} reviews)</span>
                </div>
                {product.isNew && (
                  <span className="bg-navy text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                )}
              </div>

              <div className="flex items-end gap-3 mb-4">
                <span className="text-3xl font-bold text-navy">₹{currentPrice.toLocaleString('en-IN')}</span>
                {product.compareAtPrice && currentPrice < product.compareAtPrice && (
                  <>
                    <span className="text-lg text-gray-400 line-through mb-1">₹{product.compareAtPrice.toLocaleString('en-IN')}</span>
                    <span className="text-green-600 font-semibold mb-1 text-sm">
                      Save {Math.round(((product.compareAtPrice - currentPrice) / product.compareAtPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-500">Inclusive of all taxes</p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && selectedVariant && (
              <div className="mb-8">
                <VariantSelector 
                  variants={product.variants} 
                  selectedVariant={selectedVariant}
                  onSelect={setSelectedVariant} 
                />
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center border-2 border-gray-200 rounded-lg h-12 w-32">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-navy transition-colors"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-semibold text-navy">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-navy transition-colors"
                  >
                    +
                  </button>
                </div>
                
                {/* Add to Cart */}
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-navy text-white hover:bg-gold h-12 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-navy/20"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                
                {/* Wishlist */}
                <button 
                  onClick={toggleWishlist}
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-colors ${
                    isWishlisted ? "border-red-100 bg-red-50 text-red-500" : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-navy"
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500" : ""}`} />
                </button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy">Free Delivery</h4>
                  <p className="text-xs text-gray-500">Across Malappuram District</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy">2 Year Warranty</h4>
                  <p className="text-xs text-gray-500">Official Brand Warranty</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Details Tabs (Specs & FAQs) */}
      <section className="bg-gray-50 border-y border-gray-200 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Technical Specifications */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-6">Technical Specifications</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className={`flex items-center justify-between p-4 ${idx !== product.specifications.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <span className="text-gray-500">{spec.name}</span>
                    <span className="font-medium text-navy text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-gold" /> Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {product.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <span className="font-semibold text-navy pr-4">{faq.question}</span>
                      {openFaq === idx ? <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                    </button>
                    {openFaq === idx && (
                      <div className="p-5 pt-0 text-gray-600 border-t border-gray-50 mt-2">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
         <div className="container mx-auto px-4 lg:px-8">
           <h2 className="text-2xl font-heading font-bold text-navy mb-8">Customer Reviews ({product.reviews})</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {dummyReviews.map(review => (
               <div key={review.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                 <div className="flex text-gold mb-3">
                   {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
                 </div>
                 <h4 className="font-semibold text-navy mb-2 line-clamp-1">{review.content.substring(0, 30)}...</h4>
                 <p className="text-gray-600 text-sm mb-4 line-clamp-3">{review.content}</p>
                 <div className="flex items-center justify-between mt-auto">
                   <span className="font-medium text-navy text-sm">{review.author}</span>
                   <span className="text-xs text-gray-400">{review.date}</span>
                 </div>
               </div>
             ))}
           </div>
         </div>
      </section>

    </div>
  );
}
