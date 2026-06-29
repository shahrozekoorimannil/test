import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-navy dark:text-white mb-6">
            About Techno Designer
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Welcome to Techno Designer Fans & Lights, Kerala's premier destination for luxury electrical fixtures, smart BLDC fans, and architectural lighting solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-3xl aspect-square relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-700">
              {/* Fallback pattern since we don't have a specific image */}
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              <div className="absolute font-heading font-bold text-4xl text-navy/20 dark:text-white/10">
                Showroom Excellence
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-navy dark:text-white mb-6">Our Legacy</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Based in the heart of Malappuram, Kerala, we have established ourselves as the go-to showroom for architects, interior designers, and homeowners seeking uncompromising quality in their electrical fittings.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We believe that lighting and fans are not just functional necessities, but crucial elements of interior design that define the ambiance and character of any space.
            </p>

            <div className="space-y-4">
              {[
                "Premium Curated Collections",
                "Expert Lighting Consultation",
                "Energy Efficient Smart Solutions",
                "Dedicated After-Sales Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0" />
                  <span className="font-medium text-navy dark:text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-4">Visit Our Showroom</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Experience our collections in person at our state-of-the-art experience center.
          </p>
          <div className="inline-flex flex-col text-left bg-white dark:bg-black p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <span className="font-bold text-navy dark:text-white mb-2">Techno Designer Fans & Lights</span>
            <span className="text-gray-600 dark:text-gray-400">Main Road, City Center</span>
            <span className="text-gray-600 dark:text-gray-400">Malappuram, Kerala - 676505</span>
            <span className="text-gold font-medium mt-4">📞 +91 98765 43210</span>
          </div>
        </div>
      </div>
    </div>
  );
}
