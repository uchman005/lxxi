import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import WhatWeDoBody from '@/components/what-we-do/WhatWeDoBody';
import InvestmentTeamCTA from '@/components/home/InvestmentCta';

export const metadata: Metadata = {
  title: 'What We Do',
  description:
    'LXXI originates, structures, and facilitates transactions across private equity and private credit, real estate, infrastructure and capital goods, commodity trading, and strategic partnerships in Africa.',
  keywords:
    'LXXI strategies, private equity, real estate, private credit, infrastructure, African investment strategy',
  openGraph: {
    title: 'What We Do — LXXI Limited',
    description: 'Four disciplines, one conviction — how LXXI deploys capital across Africa.',
    images: ['/logo.png'],
  },
};

export default function WhatWeDo() {
  return (
    <main>
      <PageHero
        eyebrow="What We Do"
        title="Disciplined strategies for"
        accent="real impact."
        subtitle="Across four complementary disciplines, we channel global capital into the assets and businesses building Africa's future."
        bgImage="/carousel2.png"
        primaryCta={{ label: 'Explore Sectors', href: '/sectors' }}
        secondaryCta={{ label: 'Our Approach', href: '/approach' }}
      />
      <WhatWeDoBody />
      <InvestmentTeamCTA />
    </main>
  );
}
