import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import WhatWeDoBody from '@/components/what-we-do/WhatWeDoBody';
import InvestmentTeamCTA from '@/components/home/InvestmentCta';

export const metadata: Metadata = {
  title: 'What We Do',
  description:
    'LXXI invests across private equity, real estate, private credit, and infrastructure — disciplined strategies built for the long arc of African growth.',
  keywords:
    'LXXI strategies, private equity, real estate, private credit, infrastructure, African investment strategy',
  openGraph: {
    title: 'What We Do — LXXI Limited',
    description: 'Four disciplines, one conviction — how LXXI deploys capital across Africa.',
    images: ['/og-image.jpg'],
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
