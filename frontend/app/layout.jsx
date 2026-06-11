import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Asom Bazaar — Authentic Handcrafted Assamese Products',
  description: 'Discover mekhela chadors, muga silk, tribal jewellery and rare handcrafts — made by real artisan women in Assam, delivered anywhere in India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
