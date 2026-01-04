import { NextResponse } from 'next/server';
import { getFilteredProducts } from '@/lib/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || 'all';
  const priceRange = searchParams.get('priceRange') || 'all';

  const filteredProducts = getFilteredProducts(search, category, priceRange);

  return NextResponse.json({
    products: filteredProducts,
    total: filteredProducts.length,
  });
}