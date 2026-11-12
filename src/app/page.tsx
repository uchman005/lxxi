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
  title: 'LXXI Limited',
  description:
    'LXXI Limited is an African-focused investment, structured brokerage and strategic transaction facilitation company headquartered in Abuja, Nigeria, connecting capital, businesses, investors and strategic partners with real opportunities across Africa.',
  keywords:
    'LXXI, LXXI Limited, African investment, structured brokerage, transaction facilitation, private equity, private credit, real estate, infrastructure, capital goods, commodity trading, strategic partnerships, Abuja, Nigeria, Africa',
  openGraph: {
    title: 'LXXI Limited — Defined by Purpose. Driven by Africa.',
    description:
      'Making African opportunities investable, African businesses financeable and African assets commercially productive by connecting capital, expertise and strategic partnerships.',
    images: ['/logo.png'],
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
