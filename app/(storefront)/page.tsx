import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Zap, Truck, CheckCircle } from "lucide-react";
import { dummyProducts, dummyBrands, dummyReviews } from "@/data/dummy";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero Section - Premium Apple-style */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Premium Designer Fan" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-3xl animate-in slide-in-from-bottom-8 duration-1000">
            <span className="text-gold font-mono tracking-widest text-sm font-semibold uppercase mb-4 block">
              Redefining Elegance
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
              The Art of <br />
              <span className="text-gold italic">Air & Light.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-xl font-sans font-light leading-relaxed">
              Discover Malappuram's finest collection of premium designer fans and luxury chandeliers. Engineered for performance, crafted for beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-gold text-navy hover:bg-white hover:text-navy px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Shop Now 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/category/designer-fans" 
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="bg-gray-50 border-b border-gray-200 py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <ShieldCheck className="w-8 h-8 text-gold" />
              <span className="text-sm font-medium text-navy">100% Genuine Products</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Zap className="w-8 h-8 text-gold" />
              <span className="text-sm font-medium text-navy">Energy Efficient</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Truck className="w-8 h-8 text-gold" />
              <span className="text-sm font-medium text-navy">Fast Delivery</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <CheckCircle className="w-8 h-8 text-gold" />
              <span className="text-sm font-medium text-navy">Warranty Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Shop by Category</h2>
            <p className="text-gray-500">Find exactly what you need to illuminate and cool your space.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Designer Fans', 'Smart BLDC Fans', 'Luxury Chandeliers', 'Wall Lights'].map((category, i) => (
              <Link href={`/category/${category.toLowerCase().replace(/ /g, '-')}`} key={i} className="group block relative h-80 rounded-2xl overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors z-10" />
                <img 
                  src={`https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                  alt={category} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-heading font-semibold text-white mb-2">{category}</h3>
                  <span className="text-white text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Trending Now</h2>
              <p className="text-gray-500">Our most popular cooling and lighting solutions.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-gold font-semibold hover:text-navy transition-colors">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dummyProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow group">
                <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-navy text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                      NEW
                    </span>
                  )}
                  {/* Using a generic placeholder image since cloudinary links might fail */}
                  <img 
                    src="https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span>{product.rating}</span>
                    <span>({product.reviews})</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-navy mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{product.brand}</p>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-lg text-navy">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.compareAtPrice && (
                      <span className="text-sm text-gray-400 line-through">₹{product.compareAtPrice.toLocaleString('en-IN')}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Brand Showcase */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy mb-12">Authorized Partners For</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            {dummyBrands.map((brand, i) => (
              <div key={i} className="text-2xl font-heading font-bold text-gray-400 hover:text-navy transition-colors">
                {brand.name.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Promotional Banner */}
      <section className="py-12 bg-navy text-white my-10">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">Festive Offer</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Up to 30% Off on Selected Designer Fans</h2>
            <p className="text-gray-300 max-w-xl">Upgrade your home this season. Use code FESTIVE30 at checkout to avail the discount on our premium Atomberg and Crompton collections.</p>
          </div>
          <Link href="/products?sale=true" className="shrink-0 bg-white text-navy hover:bg-gold px-8 py-4 rounded-full font-semibold transition-all">
            Shop The Sale
          </Link>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4 lg:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-16">Why Malappuram Chooses Us</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             <div>
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">Expert Curation</h3>
                <p className="text-gray-600">We handpick only the best quality fans and lighting fixtures that blend aesthetics with long-lasting performance.</p>
             </div>
             <div>
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">BLDC Specialists</h3>
                <p className="text-gray-600">Pioneers in bringing energy-efficient smart BLDC technology to Malappuram, helping you save up to 65% on electricity bills.</p>
             </div>
             <div>
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">Local Warranty Support</h3>
                <p className="text-gray-600">Direct brand tie-ups ensure you get seamless warranty claims and after-sales service right here in Malappuram.</p>
             </div>
           </div>
         </div>
      </section>

      {/* 8. Customer Reviews */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-navy mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1 text-gold">
              <Star className="w-5 h-5 fill-gold" /><Star className="w-5 h-5 fill-gold" /><Star className="w-5 h-5 fill-gold" /><Star className="w-5 h-5 fill-gold" /><Star className="w-5 h-5 fill-gold" />
              <span className="text-navy font-semibold ml-2">4.9/5 Average Rating</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dummyReviews.map(review => (
              <div key={review.id} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex text-gold mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.content}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-navy">{review.author}</span>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
