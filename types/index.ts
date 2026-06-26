export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  brand: string;
  badges: string[]; // e.g. "Best Seller", "New Arrival", "Premium Choice"
  rating: number;
  reviews: number;
  stock: number;
  specifications: Record<string, string>;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  itemCount: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
