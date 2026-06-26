"use client";

import { useState } from "react";
import { dummyBrands, dummyCategories } from "@/data/dummy";

interface FiltersProps {
  onFilterChange: (filters: any) => void;
  className?: string;
}

export function Filters({ onFilterChange, className = "" }: FiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);

  const handleCategoryChange = (slug: string) => {
    const updated = selectedCategories.includes(slug)
      ? selectedCategories.filter(c => c !== slug)
      : [...selectedCategories, slug];
    setSelectedCategories(updated);
    onFilterChange({ categories: updated, brands: selectedBrands, priceRange });
  };

  const handleBrandChange = (slug: string) => {
    const updated = selectedBrands.includes(slug)
      ? selectedBrands.filter(b => b !== slug)
      : [...selectedBrands, slug];
    setSelectedBrands(updated);
    onFilterChange({ categories: selectedCategories, brands: updated, priceRange });
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Categories */}
      <div>
        <h3 className="font-heading font-semibold text-lg text-navy mb-4 border-b border-gray-100 pb-2">Categories</h3>
        <div className="space-y-3">
          {dummyCategories.map(cat => (
            <label key={cat.slug} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedCategories.includes(cat.slug) ? 'bg-gold border-gold text-white' : 'border-gray-300 group-hover:border-gold'}`}>
                {selectedCategories.includes(cat.slug) && (
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                )}
              </div>
              <span className="text-gray-600 group-hover:text-navy transition-colors">{cat.name}</span>
              <span className="ml-auto text-xs text-gray-400">({cat.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-heading font-semibold text-lg text-navy mb-4 border-b border-gray-100 pb-2">Brands</h3>
        <div className="space-y-3">
          {dummyBrands.map(brand => (
            <label key={brand.slug} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedBrands.includes(brand.slug) ? 'bg-gold border-gold text-white' : 'border-gray-300 group-hover:border-gold'}`}>
                {selectedBrands.includes(brand.slug) && (
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                )}
              </div>
              <span className="text-gray-600 group-hover:text-navy transition-colors">{brand.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-heading font-semibold text-lg text-navy mb-4 border-b border-gray-100 pb-2">Price</h3>
        <div className="px-2">
          <input 
            type="range" 
            min="0" 
            max="100000" 
            step="1000"
            value={priceRange[1]} 
            onChange={(e) => {
              const newRange: [number, number] = [0, parseInt(e.target.value)];
              setPriceRange(newRange);
              onFilterChange({ categories: selectedCategories, brands: selectedBrands, priceRange: newRange });
            }}
            className="w-full accent-gold"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>₹0</span>
            <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
