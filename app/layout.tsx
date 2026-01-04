import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/components/providers/CartProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wege ShopingHub - Your E-Commerce Store',
  description: 'Browse and shop quality products at great prices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
