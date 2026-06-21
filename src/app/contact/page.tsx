import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ContactSection from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with LXXI Limited. Reach our team at business@lxxi.africa or through our offices across Africa for investment, partnership, and press enquiries.',
  keywords:
    'LXXI contact, contact LXXI, investment enquiries, African investment firm contact, business@lxxi.africa',
  openGraph: {
    title: 'Contact — LXXI Limited',
    description: "Let's start a conversation. Reach the LXXI team across our African hubs.",
    images: ['/og-image.jpg'],
  },
};

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="We'd love to"
        accent="hear from you."
        subtitle="Reach out to discuss investment opportunities, partnerships, or to learn more about how LXXI deploys capital across Africa."
        bgImage="/about_mission.png"
        align="center"
      />
      <ContactSection />
    </main>
  );
}
