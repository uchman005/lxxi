import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import OpportunityGrid from '@/components/opportunities/OpportunityGrid';
import InstitutionalInquiry from '@/components/sectors/InstitutionalInquiry';

export const metadata: Metadata = {
  title: 'Investment Opportunities',
  description:
    'Explore live, qualified-investor opportunities sourced and structured by LXXI across real estate, infrastructure, commodities, and private equity in African markets.',
  keywords:
    'LXXI opportunities, investment opportunities, co-investment, deal flow, African real assets, private equity, infrastructure',
  openGraph: {
    title: 'Investment Opportunities — LXXI Limited',
    description: 'Selectively sourced, rigorously structured opportunities for qualified investors.',
    images: ['/og-image.jpg'],
  },
};

export default function Opportunities() {
  return (
    <main>
      <PageHero
        eyebrow="Live Opportunities"
        title="Where capital meets"
        accent="opportunity."
        subtitle="A curated pipeline of structured opportunities across Africa's most resilient sectors. Access is reserved for qualified investors."
        bgImage="/carousel3.png"
        primaryCta={{ label: 'Request Access', href: '#inquiry' }}
        secondaryCta={{ label: 'View Sectors', href: '/sectors' }}
      />

      {/* Qualified investor disclaimer */}
      <div className="bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            For qualified and professional investors only. The information shown is illustrative and does not
            constitute an offer or solicitation to invest. Capital at risk.
          </p>
        </div>
      </div>

      <OpportunityGrid />
      <div id="inquiry" className="scroll-mt-24">
        <InstitutionalInquiry source="opportunities" />
      </div>
    </main>
  );
}
