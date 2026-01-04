'use client';
import { useRouter, useSearchParams } from 'next/navigation';

interface FilterSectionProps {
  initialCategory?: string;
  initialPriceRange?: string;
}

export default function FilterSection({ 
  initialCategory = 'all', 
  initialPriceRange = 'all' 
}: FilterSectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categories = ['all', 'Shoes', 'Shirts', 'Electronics'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-50', label: 'Under $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: 'over-100', label: 'Over $100' }
  ];

  const handleFilterChange = (filterType: 'category' | 'priceRange', value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value === 'all') {
      params.delete(filterType);
    } else {
      params.set(filterType, value);
    }

    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const handleClearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('category');
    params.delete('priceRange');
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Filters</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={initialCategory === category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 capitalize">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label
                key={range.value}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="radio"
                  name="priceRange"
                  value={range.value}
                  checked={initialPriceRange === range.value}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleClearFilters}
          className="w-full mt-4 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}