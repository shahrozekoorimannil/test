const fs = require('fs');

const brands = ['Atomberg', 'V-Guard', 'Havells', 'Crompton', 'AO Smith', 'Volaris'];
const finishes = ['Matte Black', 'Pearl White', 'Antique Brass', 'Rose Gold', 'Brushed Nickel'];
const sweepSizes = ['1200mm', '1400mm', '900mm'];

function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProducts(category, count, priceRange, isFan = true) {
  const products = [];
  for (let i = 1; i <= count; i++) {
    const brand = randomElement(brands);
    const baseName = isFan ? `Smart Fan Series ${i}` : `Luxury Light Collection ${i}`;
    const name = `${brand} ${baseName}`;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const price = randomInt(priceRange[0], priceRange[1]);
    
    // Generate variants
    const variants = [];
    const numVariants = randomInt(1, 4);
    for (let v = 0; v < numVariants; v++) {
      variants.push({
        id: `v-${slug}-${v}`,
        title: `${name} - Variant ${v + 1}`,
        color: randomElement(finishes),
        sweepSize: isFan ? randomElement(sweepSizes) : null,
        price: price + (v * 500),
        inventoryQuantity: randomInt(10, 100),
      });
    }

    products.push({
      id: `prod-${category.replace(' ', '-').toLowerCase()}-${i}`,
      name,
      slug,
      brand,
      category,
      price,
      compareAtPrice: price + randomInt(500, 2000),
      image: isFan 
        ? "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        : "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      rating: Number((Math.random() * (5 - 3.5) + 3.5).toFixed(1)),
      reviews: randomInt(5, 500),
      isNew: Math.random() > 0.7,
      description: `Experience the pinnacle of design and performance with the ${name}. Crafted for modern homes in Malappuram.`,
      variants,
      specifications: [
        { name: "Brand", value: brand },
        { name: "Material", value: "Premium Grade Aluminum/Glass" },
        { name: "Warranty", value: "2 Years On-Site" },
      ],
      faqs: [
        { question: "Is installation included?", answer: "We provide expert installation services across Malappuram." },
        { question: "What is the warranty period?", answer: "This product comes with a comprehensive 2-year warranty." }
      ]
    });
  }
  return products;
}

const bldcFans = generateProducts('Smart BLDC Fans', 20, [3000, 6000]);
const designerFans = generateProducts('Designer Fans', 15, [4500, 12000]);
const decorativeLights = generateProducts('Decorative Lights', 15, [1500, 8000], false);
const chandeliers = generateProducts('Chandeliers', 10, [15000, 85000], false);
const pendantLights = generateProducts('Pendant Lights', 10, [2500, 15000], false);

const allProducts = [...bldcFans, ...designerFans, ...decorativeLights, ...chandeliers, ...pendantLights];

const fileContent = `
export type Product = {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  description: string;
  variants: { id: string; title: string; color: string; sweepSize: string | null; price: number; inventoryQuantity: number }[];
  specifications: { name: string; value: string }[];
  faqs: { question: string; answer: string }[];
};

export const dummyProducts: Product[] = ${JSON.stringify(allProducts, null, 2)};

export const dummyBrands = [
  { name: "Atomberg", slug: "atomberg", logo: "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200&q=60" },
  { name: "V-Guard", slug: "v-guard", logo: "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200&q=60" },
  { name: "Havells", slug: "havells", logo: "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200&q=60" },
  { name: "Crompton", slug: "crompton", logo: "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200&q=60" },
  { name: "AO Smith", slug: "ao-smith", logo: "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200&q=60" },
  { name: "Volaris", slug: "volaris", logo: "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200&q=60" },
];

export const dummyCategories = [
  { name: "Smart BLDC Fans", slug: "smart-bldc-fans", count: 20 },
  { name: "Designer Fans", slug: "designer-fans", count: 15 },
  { name: "Decorative Lights", slug: "decorative-lights", count: 15 },
  { name: "Chandeliers", slug: "chandeliers", count: 10 },
  { name: "Pendant Lights", slug: "pendant-lights", count: 10 },
];

export const dummyReviews = [
  {
    id: "1",
    author: "Rahul M.",
    rating: 5,
    content: "Bought the Atomberg BLDC fan. Excellent service by Techno Designer. Delivery was super fast to Perinthalmanna.",
    date: "2 days ago"
  },
  {
    id: "2",
    author: "Sneha K.",
    rating: 4,
    content: "The chandelier collection is amazing. The store in Malappuram has a huge variety. Highly recommended.",
    date: "1 week ago"
  },
  {
    id: "3",
    author: "Anil P.",
    rating: 5,
    content: "Premium quality fans and lights. The staff was very helpful in choosing the right lighting for my living room.",
    date: "2 weeks ago"
  }
];
`;

if (!fs.existsSync('./scripts')) fs.mkdirSync('./scripts');
if (!fs.existsSync('./data')) fs.mkdirSync('./data');

fs.writeFileSync('./data/dummy.ts', fileContent);
console.log('Dummy data generated with ' + allProducts.length + ' products.');
