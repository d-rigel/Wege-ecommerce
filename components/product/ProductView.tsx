import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductViewProps {
  products: Product[];
}

export default function ProductView({ products }: ProductViewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}