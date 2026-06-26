import Image from "next/image";

export default function BrandsPage() {
  const brands = [
    "Atomberg", "Havells", "Crompton", "Orient", "V-Guard", 
    "Philips", "Syska", "Wipro", "Panasonic", "Luminous"
  ];

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl lg:text-5xl font-heading font-bold text-navy dark:text-white mb-6">
          Premium Brands We Carry
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          We partner with the world's leading electrical and lighting manufacturers to bring you unparalleled quality, innovation, and design.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {brands.map((brand, i) => (
          <div 
            key={i} 
            className="aspect-[3/2] bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-2xl flex items-center justify-center hover:shadow-xl hover:border-gold transition-all group"
          >
            <h3 className="text-xl font-bold text-gray-400 group-hover:text-navy dark:group-hover:text-gold transition-colors">
              {brand}
            </h3>
          </div>
        ))}
      </div>
      
      <div className="mt-20 bg-navy rounded-3xl p-10 lg:p-16 text-center text-white">
        <h2 className="text-3xl font-heading font-bold mb-4">Are you a manufacturer?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          We are always looking to expand our catalog with high-quality, innovative products. If you're interested in partnering with Techno Designer, we'd love to hear from you.
        </p>
        <button className="bg-gold text-navy hover:bg-white px-8 py-3 rounded-full font-bold transition-colors">
          Become a Partner
        </button>
      </div>
    </div>
  );
}
