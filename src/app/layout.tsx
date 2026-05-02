import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import AOSInitializer from '@/components/AOSInitializer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LXXI Limited — Defined by Purpose. Driven by Africa.',
  description:
    'LXXI Limited has been at the intersection of African ambition and global capital for over 5 years. Explore our investment strategy, leadership, and vision for Africa.',
  keywords:
    'LXXI, alternative investments, venture capital, private equity, Africa investment, emerging markets, African capital, strategic partnerships',
  openGraph: {
    title: 'LXXI Limited — Defined by Purpose. Driven by Africa.',
    description: "Pioneering alternative investments across Africa's most dynamic markets.",
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className='flex flex-col justify-between min-h-full'>
        <AOSInitializer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}