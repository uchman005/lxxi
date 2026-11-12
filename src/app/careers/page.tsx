import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import CareersBody from '@/components/careers/CareersBody';
import InvestmentTeamCTA from '@/components/home/InvestmentCta';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Build a career at LXXI Limited, the African-focused investment, structured brokerage, and transaction facilitation company headquartered in Abuja. We welcome CVs from exceptional people.',
  keywords:
    'LXXI careers, jobs in Africa, investment careers, finance jobs, private equity careers, work at LXXI',
  openGraph: {
    title: 'Careers — LXXI Limited',
    description: 'Build a career with purpose at LXXI Limited.',
    images: ['/logo.png'],
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
        primaryCta={{ label: 'Send Your CV', href: '#positions' }}
        secondaryCta={{ label: 'About LXXI', href: '/about' }}
      />
      <CareersBody />
      <InvestmentTeamCTA />
    </main>
  );
}
