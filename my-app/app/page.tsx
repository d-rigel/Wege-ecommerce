import { Suspense } from 'react';
import { PRODUCTS } from '@/lib/data/products';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductView from '@/components/product/ProductView';
import FilterSection from '@/components/product/FilterSection';
import SearchBar from '@/components/product/SearchBar';

// ✅ Server Component - SSR Enabled
export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const searchQuery = typeof params.search === 'string' ? params.search : '';
  const category = typeof params.category === 'string' ? params.category : 'all';
  const priceRange = typeof params.priceRange === 'string' ? params.priceRange : 'all';

  // Server-side filtering
  const filteredProducts = PRODUCTS.filter(product => {
    if (category && category !== 'all' && product.category !== category) {
      return false;
    }

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

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const searchText = `${product.name} ${product.description} ${product.category}`.toLowerCase();
      if (!searchText.includes(query)) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Our Products</h1>
          <p className="text-gray-600">Find exactly what you're looking for with our easy filters</p>
        </div>

        <SearchBar initialValue={searchQuery} />

        <div className="grid lg:grid-cols-4 gap-8 mt-8">
          <aside className="lg:col-span-1">
            <FilterSection 
              initialCategory={category}
              initialPriceRange={priceRange}
            />
          </aside>

          <div className="lg:col-span-3">
            <Suspense fallback={<div className="text-center py-12">Loading products...</div>}>
              {filteredProducts.length > 0 ? (
                <>
                  <div className="mb-4 text-sm text-gray-600">
                    Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                  </div>
                  <ProductView products={filteredProducts} />
                </>
              ) : (
                <div className="text-center py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your filters or search query
                  </p>
                </div>
              )}
            </Suspense>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

