import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ComingSoon from '@/components/shared/ComingSoon';
import InvestmentTeamCTA from '@/components/home/InvestmentCta';

export const metadata: Metadata = {
  title: 'Newsroom',
  description:
    'News and announcements from LXXI Limited, the African-focused investment, structured brokerage, and strategic transaction facilitation company headquartered in Abuja, Nigeria.',
  keywords:
    'LXXI news, LXXI Limited announcements, press, company updates, African investment, structured brokerage',
  openGraph: {
    title: 'Newsroom — LXXI Limited',
    description: 'News and announcements from LXXI Limited.',
    images: ['/logo.png'],
  },
};

export default function News() {
  return (
    <main>
      <PageHero
        eyebrow="Newsroom"
        title="What's new at"
        accent="LXXI."
        subtitle="Announcements, partnerships, and perspectives from across our markets — published here as they happen."
        bgImage="/service-hero.jpg"
        primaryCta={{ label: 'Media Enquiries', href: '/contact' }}
        secondaryCta={{ label: 'About LXXI', href: '/about' }}
      />
      <ComingSoon
        eyebrow="Coming soon"
        title="Our newsroom is"
        accent="being prepared."
        body="We'll publish company announcements and market perspectives here. In the meantime, our team is happy to help with media and partnership enquiries."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'Subscribe to Insights', href: '/insights#brief' }}
      />
      <InvestmentTeamCTA />
    </main>
  );
}
