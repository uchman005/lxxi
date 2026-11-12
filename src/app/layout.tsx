import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import AOSInitializer from '@/components/AOSInitializer';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import OrganizationJsonLd from '@/components/OrganizationJsonLd';

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
    'LXXI Limited is an African-focused investment, structured brokerage and strategic transaction facilitation company headquartered in Abuja, Nigeria, connecting capital, businesses, investors and strategic partners with real opportunities across Africa.',
  keywords:
    'LXXI, LXXI Limited, African investment, structured brokerage, transaction facilitation, private equity, private credit, real estate, infrastructure, capital goods, commodity trading, strategic partnerships, Abuja, Nigeria, Africa',
  openGraph: {
    type: 'website',
    siteName: 'LXXI Limited',
    locale: 'en_US',
    url: 'https://lxxi.africa',
    title: 'LXXI Limited — Defined by Purpose. Driven by Africa.',
    description:
      'Making African opportunities investable, African businesses financeable and African assets commercially productive by connecting capital, expertise and strategic partnerships.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LXXI Limited — Defined by Purpose. Driven by Africa.',
    description:
      'Making African opportunities investable, African businesses financeable and African assets commercially productive by connecting capital, expertise and strategic partnerships.',
    images: ['/logo.png'],
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
        <OrganizationJsonLd />
        <Providers>
          <AOSInitializer />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
          <Toaster richColors theme="dark" position="top-center" />
        </Providers>
      </body>
    </html>
  );
}