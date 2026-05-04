import type { Metadata } from 'next';
import HeroCarousel from '@/components/home/HeroCarousel';
import TopMarquee from '@/components/home/TopMarquee';
import Approach from '@/components/home/Approach';
import ProcessGrid from '@/components/home/ProcessGrid';
import TrustedPartners from '@/components/home/TrustedPartners';
import WhatWeDoSection from '@/components/home/WhatWeDo';
import AfricaFocusSection from '@/components/home/AfricaFocus';
import InvestmentThemes from '@/components/home/InvestmentThemes';
import InvestmentTeamCTA from '@/components/home/InvestmentCta';

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
      <HeroCarousel />
      <TopMarquee />
      <Approach />
      <ProcessGrid />
      <TrustedPartners />
      <WhatWeDoSection />
      <AfricaFocusSection />
      <InvestmentThemes />
      <InvestmentTeamCTA />
    </main>
  );
}
