import type { Metadata } from 'next';
import Hero from '@/components/about/Hero';
import Mission from '@/components/about/Mission';
import TimelineSection from '@/components/about/TimeLine';
import OurPrinciples from '@/components/about/OurPrinciples';
import Leadership from '@/components/about/Leadership';
import TrustedPartners from '@/components/home/TrustedPartners';
import BoardAndTestimonials from '@/components/about/BoardAndTestimonials';

export const metadata: Metadata = {
  title: 'LXXI Limited — Defined by Purpose. Driven by Africa.',
  description:
    'For over 5 years, LXXI Limited has connected capital, businesses, investors, and strategic partners with real opportunities across Africa. Meet our leadership and board, and explore our story and principles.',
  keywords:
    'LXXI, LXXI Limited, about LXXI, African investment, structured brokerage, transaction facilitation, private equity, private credit, real estate, commodity trading, Abuja, Nigeria',
  openGraph: {
    title: 'LXXI Limited — Defined by Purpose. Driven by Africa.',
    description:
      'Making African opportunities investable, African businesses financeable, and African assets commercially productive.',
    images: ['/logo.png'],
  },
};

export default function About() {
  return (
    <main>
      <Hero />
      <Mission />
      <TimelineSection />
      <OurPrinciples />
      <Leadership />
      <BoardAndTestimonials />
      <TrustedPartners title='Trusted by Institutions that matter' />
    </main>
  );
}
