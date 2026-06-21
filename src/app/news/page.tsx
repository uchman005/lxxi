import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import NewsFeed from '@/components/news/NewsFeed';
import InvestmentTeamCTA from '@/components/home/InvestmentCta';

export const metadata: Metadata = {
  title: 'Newsroom',
  description:
    'The latest news, press releases, and announcements from LXXI Limited — deals, partnerships, and market commentary across African capital markets.',
  keywords:
    'LXXI news, press releases, announcements, African investment news, company updates, market commentary',
  openGraph: {
    title: 'Newsroom — LXXI Limited',
    description: 'News, press releases, and announcements from LXXI Limited.',
    images: ['/og-image.jpg'],
  },
};

export default function News() {
  return (
    <main>
      <PageHero
        eyebrow="Newsroom"
        title="What's new at"
        accent="LXXI."
        subtitle="Deals, partnerships, and perspectives from across our markets — the stories shaping how we deploy capital in Africa."
        bgImage="/service-hero.jpg"
        primaryCta={{ label: 'Read Insights', href: '/insights' }}
        secondaryCta={{ label: 'Contact Press', href: '/contact' }}
      />
      <NewsFeed />
      <InvestmentTeamCTA />
    </main>
  );
}
