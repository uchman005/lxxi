import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import WhyPartner from '@/components/investors/WhyPartner';
import InstitutionalInquiry from '@/components/sectors/InstitutionalInquiry';

export const metadata: Metadata = {
  title: 'For Investors',
  description:
    'Partner with LXXI to access institutional-grade African opportunities. Discover our governance, investor types, and how to begin a confidential conversation.',
  keywords:
    'LXXI investors, institutional investors, family offices, co-investment, African private markets, DFI, qualified investors',
  openGraph: {
    title: 'For Investors — LXXI Limited',
    description: 'A bridge between global capital and African growth. Partner with LXXI.',
    images: ['/og-image.jpg'],
  },
};

export default function Investors() {
  return (
    <main>
      <PageHero
        eyebrow="For Investors"
        title="Invest alongside"
        accent="conviction."
        subtitle="We work with a select group of partners who share our belief in Africa's long-term potential. Enquiries are handled with complete discretion."
        bgImage="/about_mission.png"
        primaryCta={{ label: 'Request Information', href: '#inquiry' }}
        secondaryCta={{ label: 'Explore Opportunities', href: '/opportunities' }}
      />
      <WhyPartner />
      <div id="inquiry" className="scroll-mt-24">
        <InstitutionalInquiry source="investors" />
      </div>
    </main>
  );
}
