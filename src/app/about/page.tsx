import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import GlobalConnectivity from '@/components/GlobalConnectivity';
import Legacy from '@/components/Legacy';
import DynamicMarkets from '@/components/DynamicMarkets';
import Leadership from '@/components/Leadership';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'LXXI Limited — Defined by Purpose. Driven by Africa.',
  description:
    'For over 5 years, LXXI LIMITED has been at the intersection of African ambition and global capital. Explore our investment strategy, leadership, and vision.',
  keywords:
    'LXXI, African investments, venture capital, private equity, emerging markets, Africa capital',
  openGraph: {
    title: 'LXXI Limited — Defined by Purpose. Driven by Africa.',
    description:
      'Pioneering alternative investments across Africa\'s most dynamic markets.',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <GlobalConnectivity />
      <Legacy />
      <DynamicMarkets />
      <Leadership />
      <CTA />
    </main>
  );
}
