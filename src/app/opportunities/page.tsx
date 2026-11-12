import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import OpportunityGrid from '@/components/opportunities/OpportunityGrid';
import InstitutionalInquiry from '@/components/sectors/InstitutionalInquiry';

export const metadata: Metadata = {
  title: 'Investment Opportunities',
  description:
    'How LXXI sources, verifies, and shares opportunities across real estate, commodity trading, infrastructure and capital goods, and private equity and private credit in Africa — with mandates shared privately after engagement.',
  keywords:
    'LXXI opportunities, investment opportunities, deal origination, African real assets, private equity, private credit, infrastructure, commodity trading',
  openGraph: {
    title: 'Investment Opportunities — LXXI Limited',
    description: 'Selectively sourced, rigorously structured opportunities — shared privately with qualified clients after engagement.',
    images: ['/logo.png'],
  },
};

export default function Opportunities() {
  return (
    <main>
      <PageHero
        eyebrow="Opportunities"
        title="Where capital meets"
        accent="opportunity."
        subtitle="Opportunities across Africa's most resilient sectors, shared privately with qualified clients and counterparties after engagement and verification."
        bgImage="/carousel3.png"
        primaryCta={{ label: 'Request Access', href: '#inquiry' }}
        secondaryCta={{ label: 'Client Engagement Form', href: '/terms-of-engagement#engagement-form' }}
      />

      {/* Disclaimer */}
      <div className="bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Opportunity details are shared only with qualified clients and counterparties after engagement and
            verification. Nothing on this page constitutes an offer or solicitation to invest.
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
