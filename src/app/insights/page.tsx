import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ComingSoon from '@/components/shared/ComingSoon';
import SovereignBrief from '@/components/insights/SovereignBrief';

export const metadata: Metadata = {
  title: 'Insights — LXXI Limited',
  description:
    'Market intelligence and perspectives on African transactions from LXXI Limited — across private equity and private credit, real estate, infrastructure and capital goods, and commodity trading.',
  keywords:
    'LXXI insights, African market intelligence, private equity, private credit, real estate, infrastructure, commodity trading',
  openGraph: {
    title: 'Insights — LXXI Limited',
    description: 'Market intelligence and perspectives on African transactions from LXXI Limited.',
    images: ['/logo.png'],
  },
};

export default function Insights() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Intelligence for"
        accent="African transactions."
        subtitle="Perspectives from our work across private equity and private credit, real estate, infrastructure, and commodity trading."
        bgImage="/approach.png"
        primaryCta={{ label: 'Subscribe', href: '#brief' }}
        secondaryCta={{ label: 'Explore Our Sectors', href: '/sectors' }}
      />
      <ComingSoon
        eyebrow="Coming soon"
        title="Our research library is"
        accent="on its way."
        body="We're preparing market notes and sector perspectives drawn from the transactions we originate, structure, and execute across Africa. Subscribe below to receive them as soon as they're published."
        primaryCta={{ label: 'Speak With Our Team', href: '/contact' }}
        secondaryCta={{ label: 'Explore Our Sectors', href: '/sectors' }}
      />
      <div id="brief" className="scroll-mt-24">
        <SovereignBrief />
      </div>
    </main>
  );
}
