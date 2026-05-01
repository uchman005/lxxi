import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AOSInitializer from '@/components/AOSInitializer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'LXXI',
  description: 'Pioneering alternative investments with vision and precision.',
  keywords: 'LXXI, alternative investments, venture capital, private equity, hedge funds, real estate, infrastructure, private credit, emerging markets, technology startups, sustainable investments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <AOSInitializer />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}