"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { Filters } from "@/components/product/Filters";
import { dummyProducts } from "@/data/dummy";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ProductsPage() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({ categories: [], brands: [], priceRange: [0, 100000] });
  const [sortOption, setSortOption] = useState("featured");

  const filteredProducts = useMemo(() => {
    return dummyProducts.filter(p => {
      // @ts-ignore
      if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(p.category.toLowerCase().replace(/ /g, '-'))) return false;
      // @ts-ignore
      if (activeFilters.brands.length > 0 && !activeFilters.brands.includes(p.brand.toLowerCase().replace(/ /g, '-'))) return false;
      if (p.price > activeFilters.priceRange[1]) return false;
      return true;
    }).sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "rating") return b.rating - a.rating;
      return 0; // featured/newest
    });
  }, [activeFilters, sortOption]);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-navy font-medium">All Products</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy">Premium Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
            <button 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="flex items-center gap-2 text-navy font-medium"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>
            <div className="text-sm text-gray-500">{filteredProducts.length} Results</div>
          </div>

          {/* Sidebar Filters */}
          <aside className={`lg:w-1/4 shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-28">
              <Filters onFilterChange={setActiveFilters} />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-500 hidden lg:block">
                Showing <span className="font-semibold text-navy">{filteredProducts.length}</span> results
              </div>
              
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm text-gray-500 whitespace-nowrap">Sort by:</span>
                <div className="relative w-full sm:w-48">
                  <select 
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="w-full appearance-none bg-gray-50 border border-gray-200 text-navy text-sm rounded-lg pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest Arrivals</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-2xl text-center shadow-sm">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SlidersHorizontal className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-heading font-bold text-navy mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
              </div>
            )}
            
            {/* Pagination Placeholder */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-colors font-medium">1</button>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-colors font-medium">2</button>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-colors font-medium">3</button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
