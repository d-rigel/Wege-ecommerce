import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: 'Classic Running Shoes',
    price: 89.99,
    category: 'Shoes',
    description: 'Comfortable running shoes with excellent cushioning and breathability. Perfect for daily runs and workouts.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    inStock: true,
    rating: 4.5
  },
  {
    id: 'prod-002',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    category: 'Shirts',
    description: 'High-quality cotton t-shirt with a modern fit. Soft, durable, and perfect for everyday wear.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    inStock: true,
    rating: 4.7
  },
  {
    id: 'prod-003',
    name: 'Wireless Headphones',
    price: 149.99,
    category: 'Electronics',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    inStock: true,
    rating: 4.8
  },
  {
    id: 'prod-004',
    name: 'Leather Sneakers',
    price: 119.99,
    category: 'Shoes',
    description: 'Stylish leather sneakers that combine comfort with elegant design. Perfect for casual outings.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    inStock: true,
    rating: 4.6
  },
  {
    id: 'prod-005',
    name: 'Designer Polo Shirt',
    price: 45.99,
    category: 'Shirts',
    description: 'Classic polo shirt with a modern twist. Made from breathable fabric for all-day comfort.',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop',
    inStock: false,
    rating: 4.4
  },
  {
    id: 'prod-006',
    name: 'Smart Watch',
    price: 299.99,
    category: 'Electronics',
    description: 'Feature-packed smartwatch with health tracking, GPS, and smartphone connectivity.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-007',
    name: 'Canvas Sneakers',
    price: 39.99,
    category: 'Shoes',
    description: 'Lightweight canvas sneakers perfect for casual wear. Comfortable and versatile.',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop',
    inStock: true,
    rating: 4.3
  },
  {
    id: 'prod-008',
    name: 'Linen Summer Shirt',
    price: 55.99,
    category: 'Shirts',
    description: 'Breathable linen shirt perfect for warm weather. Lightweight and stylish.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
    inStock: true,
    rating: 4.5
  },
  {
    id: 'prod-009',
    name: 'Bluetooth Speaker',
    price: 79.99,
    category: 'Electronics',
    description: 'Portable Bluetooth speaker with rich sound quality and 12-hour battery life.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    inStock: true,
    rating: 4.6
  },
  {
    id: 'prod-010',
    name: 'High-Top Basketball Shoes',
    price: 159.99,
    category: 'Shoes',
    description: 'Professional basketball shoes with superior ankle support and traction.',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop',
    inStock: true,
    rating: 4.7
  },
  {
    id: 'prod-011',
    name: 'Formal Dress Shirt',
    price: 65.99,
    category: 'Shirts',
    description: 'Elegant dress shirt for formal occasions. Wrinkle-resistant and comfortable.',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop',
    inStock: true,
    rating: 4.8
  },
  {
    id: 'prod-012',
    name: 'Wireless Earbuds',
    price: 99.99,
    category: 'Electronics',
    description: 'Compact wireless earbuds with excellent sound quality and charging case.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    inStock: true,
    rating: 4.7
  }
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(product => product.id === id);
}

export function getFilteredProducts(
  searchQuery: string = '',
  category: string = 'all',
  priceRange: string = 'all'
): Product[] {
  return PRODUCTS.filter(product => {
    // Category filter
    if (category && category !== 'all') {
      if (product.category !== category) return false;
    }

    // this is mockup query for price range filter to get range of prices
    if (priceRange && priceRange !== 'all') {
      const price = product.price;
      switch (priceRange) {
        case 'under-50':
          if (price >= 50) return false;
          break;
        case '50-100':
          if (price < 50 || price > 100) return false;
          break;
        case 'over-100':
          if (price <= 100) return false;
          break;
      }
    }

    // This is my mockup search query filter to search by product name,, description and category
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const searchText = `${product.name} ${product.description} ${product.category}`.toLowerCase();
      if (!searchText.includes(query)) return false;
    }

    return true;
  });
}