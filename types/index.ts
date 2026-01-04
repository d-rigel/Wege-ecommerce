export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  inStock: boolean;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterOptions {
  category: string;
  priceRange: string;
  searchQuery: string;
}