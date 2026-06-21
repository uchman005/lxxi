import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import CareersBody from '@/components/careers/CareersBody';
import InvestmentTeamCTA from '@/components/home/InvestmentCta';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join LXXI Limited. Explore open roles across our African hubs and build a career at the intersection of African ambition and global capital.',
  keywords:
    'LXXI careers, jobs in Africa, investment careers, finance jobs, private equity careers, work at LXXI',
  openGraph: {
    title: 'Careers — LXXI Limited',
    description: 'Build a career with purpose across our African hubs.',
    images: ['/og-image.jpg'],
  },
};

export default function Careers() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Shape the future of"
        accent="African capital."
        subtitle="We hire exceptional people who combine institutional discipline with genuine conviction in Africa's potential. Come build with us."
        bgImage="/about_hero.png"
        primaryCta={{ label: 'View Open Roles', href: '#positions' }}
        secondaryCta={{ label: 'About LXXI', href: '/about' }}
      />
      <CareersBody />
      <InvestmentTeamCTA />
    </main>
  );
}
