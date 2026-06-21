import type { Metadata } from 'next';
import InsightsHero from '@/components/insights/Hero';
import MarketPulse from '@/components/insights/MarketPulse';
import ResearchReports from '@/components/insights/ResearchReports';
import IntelligenceHub from '@/components/insights/IntelligenceHub';
import SovereignBrief from '@/components/insights/SovereignBrief';

export const metadata: Metadata = {
  title: 'Insights — LXXI Limited',
  description:
    'Insights that shape better investment decisions. Research reports, market intelligence, and thematic analysis on African capital markets from LXXI.',
  keywords:
    'LXXI insights, African market intelligence, research reports, investment analysis, sovereign wealth, capital markets',
  openGraph: {
    title: 'Insights — LXXI Limited',
    description:
      'Institutional intelligence on African capital markets — research reports, trends, and analysis.',
    images: ['/og-image.jpg'],
  },
};

export default function Insights() {
  return (
    <main>
      <InsightsHero />
      <MarketPulse />
      <ResearchReports />
      <IntelligenceHub />
      <SovereignBrief />
    </main>
  );
}
