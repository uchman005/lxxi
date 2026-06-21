import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms governing your use of the LXXI Limited website and services.',
  openGraph: {
    title: 'Terms of Service — LXXI Limited',
    description: 'The terms governing your use of the LXXI website and services.',
    images: ['/og-image.jpg'],
  },
};

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of"
      accent="Service"
      lastUpdated="June 2026"
      intro="These terms govern your access to and use of the LXXI Limited website and related services. By using this website, you agree to these terms. If you do not agree, please discontinue use."
      sections={[
        {
          id: 'use-of-the-site',
          heading: 'Use of the Site',
          body: [
            'You may use this website for lawful, informational purposes only. You agree not to misuse the site, interfere with its operation, or attempt to gain unauthorised access to any part of it.',
            'We may modify, suspend, or discontinue any part of the website at any time without notice.',
          ],
        },
        {
          id: 'no-investment-advice',
          heading: 'No Investment Advice',
          body: [
            'The content on this website is provided for general information only and does not constitute investment, legal, tax, or other professional advice, nor an offer or solicitation to buy or sell any security or investment.',
            'Any investment opportunities referenced are intended solely for qualified and professional investors and are subject to separate definitive documentation.',
          ],
        },
        {
          id: 'intellectual-property',
          heading: 'Intellectual Property',
          body: [
            'All content, trademarks, logos, and materials on this website are owned by or licensed to LXXI and are protected by applicable intellectual property laws.',
            'You may not reproduce, distribute, or create derivative works from any content without our prior written consent.',
          ],
        },
        {
          id: 'limitation-of-liability',
          heading: 'Limitation of Liability',
          body: [
            'The website is provided on an “as is” and “as available” basis without warranties of any kind. To the fullest extent permitted by law, LXXI disclaims all liability for any loss arising from your use of, or reliance on, this website.',
          ],
        },
        {
          id: 'governing-law',
          heading: 'Governing Law',
          body: [
            'These terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-law principles. Any disputes shall be subject to the exclusive jurisdiction of the competent courts.',
          ],
        },
      ]}
    />
  );
}
