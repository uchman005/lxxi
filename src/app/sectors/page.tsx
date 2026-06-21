import type { Metadata } from 'next';
import SectorsHero from '@/components/sectors/Hero';
import DeployCapital from '@/components/sectors/DeployCapital';
import InvestmentThesis from '@/components/sectors/InvestmentThesis';
import InstitutionalInquiry from '@/components/sectors/InstitutionalInquiry';

export const metadata: Metadata = {
  title: 'Investment Sectors — LXXI Limited',
  description:
    'Explore the core sectors where LXXI deploys capital across Africa — Real Estate, Commodity Trading, General Goods & Infrastructure, and Private Equity & Venture Catalysis.',
  keywords:
    'LXXI sectors, African real estate, commodity trading, infrastructure, private equity, venture catalysis, emerging markets',
  openGraph: {
    title: 'Investment Sectors — LXXI Limited',
    description:
      'Investing where Africa is building tomorrow. Discover the sectors driving resilient, long-term growth.',
    images: ['/og-image.jpg'],
  },
};

export default function Sectors() {
  return (
    <main>
      <SectorsHero />
      <DeployCapital />
      <InvestmentThesis />
      <InstitutionalInquiry />
    </main>
  );
}
