"use client";

interface Variant {
  id: string;
  title: string;
  color: string;
  sweepSize: string | null;
  price: number;
  inventoryQuantity: number;
}

interface VariantSelectorProps {
  variants: Variant[];
  selectedVariant: Variant;
  onSelect: (variant: Variant) => void;
}

export function VariantSelector({ variants, selectedVariant, onSelect }: VariantSelectorProps) {
  if (variants.length <= 1) return null;

  // Group by color
  const colors = Array.from(new Set(variants.map(v => v.color)));
  
  // Get available sweep sizes for the selected color
  const availableSizesForColor = variants
    .filter(v => v.color === selectedVariant.color && v.sweepSize !== null)
    .map(v => v.sweepSize as string);
  
  // Unique sweep sizes overall
  const allSizes = Array.from(new Set(variants.filter(v => v.sweepSize !== null).map(v => v.sweepSize as string)));

  const handleColorSelect = (color: string) => {
    // Find variant with new color and currently selected size (or first available size for new color)
    let newVariant = variants.find(v => v.color === color && v.sweepSize === selectedVariant.sweepSize);
    if (!newVariant) {
      newVariant = variants.find(v => v.color === color);
    }
    if (newVariant) onSelect(newVariant);
  };

  const handleSizeSelect = (size: string) => {
    // Find variant with currently selected color and new size
    const newVariant = variants.find(v => v.color === selectedVariant.color && v.sweepSize === size);
    if (newVariant) onSelect(newVariant);
  };

  return (
    <div className="space-y-6">
      {/* Color Selection */}
      {colors.length > 0 && colors[0] !== undefined && (
        <div>
          <h3 className="text-sm font-medium text-navy mb-3">Color: <span className="font-semibold">{selectedVariant.color}</span></h3>
          <div className="flex flex-wrap gap-3">
            {colors.map(color => {
              const isSelected = selectedVariant.color === color;
              return (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={`px-4 py-2 rounded-lg text-sm border-2 transition-colors ${
                    isSelected 
                      ? "border-gold text-navy font-semibold bg-gold/5" 
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {color}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Size Selection */}
      {allSizes.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-navy mb-3">Size: <span className="font-semibold">{selectedVariant.sweepSize}</span></h3>
          <div className="flex flex-wrap gap-3">
            {allSizes.map(size => {
              const isSelected = selectedVariant.sweepSize === size;
              const isAvailable = availableSizesForColor.includes(size);
              
              return (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  disabled={!isAvailable}
                  className={`px-4 py-2 rounded-lg text-sm border-2 transition-colors ${
                    isSelected 
                      ? "border-gold text-navy font-semibold bg-gold/5" 
                      : !isAvailable 
                        ? "border-gray-100 text-gray-300 cursor-not-allowed line-through"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
