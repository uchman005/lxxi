import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How LXXI Limited collects, uses, and protects personal information across our website and services.',
  openGraph: {
    title: 'Privacy Policy — LXXI Limited',
    description: 'How LXXI collects, uses, and protects your personal information.',
    images: ['/og-image.jpg'],
  },
};

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy"
      accent="Policy"
      lastUpdated="June 2026"
      intro="LXXI Limited (“LXXI”, “we”, “us”) is committed to protecting the privacy of investors, partners, and visitors. This policy explains what information we collect, how we use it, and the choices available to you."
      sections={[
        {
          id: 'information-we-collect',
          heading: 'Information We Collect',
          body: [
            'We collect information you provide directly to us — such as your name, organisation, email address, and any details submitted through our inquiry, contact, or registration forms.',
            'We also collect limited technical information automatically when you visit our website, including IP address, browser type, device information, and pages viewed, through cookies and similar technologies.',
          ],
        },
        {
          id: 'how-we-use-information',
          heading: 'How We Use Information',
          body: [
            'We use the information we collect to respond to enquiries, evaluate investor eligibility, provide and improve our services, send relevant communications where permitted, and comply with legal and regulatory obligations.',
            'We do not sell your personal information. We process it only for the purposes described in this policy or as otherwise permitted by applicable law.',
          ],
        },
        {
          id: 'sharing-and-disclosure',
          heading: 'Sharing & Disclosure',
          body: [
            'We may share information with trusted service providers who act on our behalf, with professional advisers, and where required by law, regulation, or legal process.',
            'Any third party that processes information on our behalf is bound by confidentiality obligations and may only use the information as instructed by LXXI.',
          ],
        },
        {
          id: 'data-security',
          heading: 'Data Security & Retention',
          body: [
            'We maintain administrative, technical, and physical safeguards designed to protect personal information against unauthorised access, loss, or misuse.',
            'We retain personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law.',
          ],
        },
        {
          id: 'your-rights',
          heading: 'Your Rights',
          body: [
            'Subject to applicable law, you may request access to, correction of, or deletion of your personal information, and may object to or restrict certain processing.',
            'To exercise any of these rights, contact us using the details below. We will respond within the timeframe required by applicable law.',
          ],
        },
      ]}
    />
  );
}
