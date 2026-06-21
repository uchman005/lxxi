import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import AOSInitializer from '@/components/AOSInitializer';
import Providers from '@/components/Providers';
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
  metadataBase: new URL('https://lxxi.africa'),
  title: {
    default: 'LXXI Limited — Defined by Purpose. Driven by Africa.',
    template: '%s — LXXI Limited',
  },
  description:
    'LXXI Limited has been at the intersection of African ambition and global capital for over 5 years. Explore our investment strategy, leadership, and vision for Africa.',
  keywords:
    'LXXI, alternative investments, venture capital, private equity, Africa investment, emerging markets, African capital, strategic partnerships',
  openGraph: {
    type: 'website',
    siteName: 'LXXI Limited',
    locale: 'en_US',
    url: 'https://lxxi.africa',
    title: 'LXXI Limited — Defined by Purpose. Driven by Africa.',
    description: "Pioneering alternative investments across Africa's most dynamic markets.",
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
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
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable}`}>
      <body className='flex flex-col justify-between min-h-full'>
        <Providers>
          <AOSInitializer />
          <Navbar />
          {children}
          <Footer />
          <Toaster richColors theme="dark" position="top-center" />
        </Providers>
      </body>
    </html>
  );
}