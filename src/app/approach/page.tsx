import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Methodology from '@/components/approach/Methodology';
import Pillars from '@/components/approach/Pillars';
import InvestmentTeamCTA from '@/components/home/InvestmentCta';

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'How LXXI creates long-term value: a disciplined, five-stage transaction process — origination, structuring, capital mobilisation, execution, and post-transaction support — anchored by discipline, alignment, and measurable outcomes.',
  keywords:
    'LXXI approach, investment process, due diligence, value creation, risk management, African private markets',
  openGraph: {
    title: 'Our Approach — LXXI Limited',
    description: 'A disciplined process, repeated with rigour — how LXXI creates long-term value.',
    images: ['/logo.png'],
  },
};

export default function Approach() {
  return (
    <main>
      <PageHero
        eyebrow="Our Approach"
        title="A disciplined path to"
        accent="durable value."
        subtitle="We pair macroeconomic conviction with on-the-ground execution — a repeatable methodology that turns complex opportunities into resilient, long-term returns."
        bgImage="/approach.png"
        primaryCta={{ label: 'Speak With Us', href: '/contact' }}
        secondaryCta={{ label: 'View Sectors', href: '/sectors' }}
      />
      <Methodology />
      <Pillars />
      <InvestmentTeamCTA />
    </main>
  );
}
