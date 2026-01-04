import { notFound } from 'next/navigation';
import { getProductById, PRODUCTS } from '@/lib/data/products';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductDetails from '@/components/product/ProductDetails';


export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - ShopHub`,
    description: product.description,
  };
}


export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <ProductDetails product={product} />
      </main>
      <Footer />
    </div>
  );
}