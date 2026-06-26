import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Zap } from "lucide-react";
import { dummyProducts } from "@/data/dummy";
import { ProductCard } from "@/components/product/ProductCard";

const validSlugs = {
  "atomberg-fans-malappuram": {
    title: "Buy Atomberg Smart Fans in Malappuram | Techno Designer",
    h1: "Atomberg Fans in Malappuram",
    desc: "Authorized dealer of Atomberg Smart BLDC Fans in Malappuram. Save up to 65% on electricity bills with our premium collection of energy-efficient fans.",
    categoryFilter: "Smart BLDC Fans",
    brandFilter: "Atomberg"
  },
  "smart-bldc-fans-malappuram": {
    title: "Smart BLDC Fans in Malappuram | Save 65% Electricity",
    h1: "Smart BLDC Fans in Malappuram",
    desc: "Upgrade to Smart BLDC Fans and save on electricity. Techno Designer Fans & Lights is your trusted showroom for energy-efficient cooling in Malappuram.",
    categoryFilter: "Smart BLDC Fans",
    brandFilter: null
  },
  "designer-fans-malappuram": {
    title: "Premium Designer Fans in Malappuram | Luxury Collection",
    h1: "Designer Fans in Malappuram",
    desc: "Elevate your home's interior with our luxury collection of designer fans. Exclusive showroom for premium ceiling fans in Malappuram.",
    categoryFilter: "Designer Fans",
    brandFilter: null
  },
  "premium-lighting-malappuram": {
    title: "Premium Lighting Showroom in Malappuram | Techno Designer",
    h1: "Premium Lighting in Malappuram",
    desc: "Discover exquisite decorative lights and luxury chandeliers at Malappuram's best premium lighting showroom. Transform your living spaces today.",
    categoryFilter: "Decorative Lights",
    brandFilter: null
  },
  "chandeliers-malappuram": {
    title: "Buy Luxury Chandeliers in Malappuram | Best Designs",
    h1: "Luxury Chandeliers in Malappuram",
    desc: "Shop from the largest collection of luxury and modern chandeliers in Malappuram. Add a touch of royalty to your home.",
    categoryFilter: "Chandeliers",
    brandFilter: null
  }
};

type Props = {
  params: { local_slug: string }
};

export function generateMetadata({ params }: Props): Metadata {
  const data = validSlugs[params.local_slug as keyof typeof validSlugs];
  if (!data) return {};

  return {
    title: data.title,
    description: data.desc,
    alternates: {
      canonical: `https://technodesigner.com/${params.local_slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.desc,
      url: `https://technodesigner.com/${params.local_slug}`,
      siteName: "Techno Designer Fans & Lights",
      locale: "en_IN",
      type: "website",
    }
  };
}

export default function LocalSeoPage({ params }: Props) {
  const data = validSlugs[params.local_slug as keyof typeof validSlugs];
  if (!data) notFound();

  // Filter products based on the SEO page intent
  const relatedProducts = dummyProducts.filter(p => {
    let match = true;
    if (data.categoryFilter) match = match && p.category === data.categoryFilter;
    if (data.brandFilter) match = match && p.brand === data.brandFilter;
    return match;
  }).slice(0, 8);

  return (
    <div className="bg-white min-h-screen">
      {/* SEO Hero Header */}
      <section className="bg-navy py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">{data.h1}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {data.desc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-gold text-navy hover:bg-white hover:text-navy px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Visit Our Showroom
            </Link>
            <Link href="/products" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all">
              Browse Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-navy">Located in Malappuram</h3>
                <p className="text-sm text-gray-500">Easily accessible showroom with ample parking</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-navy">Authorized Dealers</h3>
                <p className="text-sm text-gray-500">100% genuine products with official warranty</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-navy">Expert Consultation</h3>
                <p className="text-sm text-gray-500">Get free advice on lighting and cooling needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-4">Our Top Picks for You</h2>
              <p className="text-gray-500">Handpicked {data.categoryFilter?.toLowerCase() || 'products'} available in our Malappuram store.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-gold font-semibold hover:text-navy transition-colors">
              View Entire Range <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <p className="text-gray-500">Products are currently being updated for this section. Please visit our store.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Bottom SEO Text */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-navy">
            <h2>Why Choose Techno Designer Fans & Lights in Malappuram?</h2>
            <p>Techno Designer Fans & Lights is the premier destination for modern home cooling and illumination in the heart of Malappuram district. Whether you are building a new home or renovating an existing space, our expert staff will guide you in choosing the perfect {data.categoryFilter || 'products'} that align with your interior design and budget.</p>
            <p>We take pride in our extensive after-sales support and direct brand partnerships, ensuring peace of mind with every purchase.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
