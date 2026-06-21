import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How LXXI Limited uses cookies and similar technologies on its website, and how you can manage your preferences.',
  openGraph: {
    title: 'Cookie Policy — LXXI Limited',
    description: 'How LXXI uses cookies and how you can manage your preferences.',
    images: ['/og-image.jpg'],
  },
};

export default function Cookies() {
  return (
    <LegalLayout
      title="Cookie"
      accent="Policy"
      lastUpdated="June 2026"
      intro="This policy explains how LXXI Limited uses cookies and similar technologies to recognise you when you visit our website, and the choices available to you."
      sections={[
        {
          id: 'what-are-cookies',
          heading: 'What Are Cookies',
          body: [
            'Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to improve efficiency, and to provide reporting information.',
          ],
        },
        {
          id: 'how-we-use-cookies',
          heading: 'How We Use Cookies',
          body: [
            'We use strictly necessary cookies to enable core functionality, performance cookies to understand how the site is used, and functional cookies to remember your preferences.',
            'We may use analytics cookies to measure traffic and improve the experience. These do not identify you personally.',
          ],
        },
        {
          id: 'managing-cookies',
          heading: 'Managing Cookies',
          body: [
            'You can control and delete cookies through your browser settings. Most browsers allow you to refuse or remove cookies; however, doing so may affect the functionality of this website.',
            'Where required, we will request your consent before placing non-essential cookies on your device.',
          ],
        },
        {
          id: 'changes',
          heading: 'Changes to This Policy',
          body: [
            'We may update this policy from time to time to reflect changes in technology, regulation, or our practices. The latest version will always be available on this page.',
          ],
        },
      ]}
    />
  );
}
