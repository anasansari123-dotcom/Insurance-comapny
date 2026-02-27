import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Arambhya Financial Services | Secure Your Future with Confidence',
    template: '%s | Arambhya Financial Services',
  },
  description:
    'Premium insurance and financial solutions. Life, Health, Motor, Business insurance and Investment plans. Trust, transparency, and fast claims.',
  keywords: ['insurance', 'financial services', 'life insurance', 'health insurance', 'motor insurance', 'Arambhya'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#0a0a0a] font-sans text-zinc-100 antialiased">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
