import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Disclosures',
  description:
    'Important regulatory and risk disclosures regarding LXXI Limited and the information presented on this website.',
  openGraph: {
    title: 'Disclosures — LXXI Limited',
    description: 'Important regulatory and risk disclosures from LXXI Limited.',
    images: ['/og-image.jpg'],
  },
};

export default function Disclosures() {
  return (
    <LegalLayout
      title="Important"
      accent="Disclosures"
      lastUpdated="June 2026"
      intro="The following disclosures apply to all information presented on this website and to any engagement with LXXI Limited. Please read them carefully."
      sections={[
        {
          id: 'qualified-investors',
          heading: 'Qualified Investors Only',
          body: [
            'Information regarding investment opportunities is intended exclusively for qualified, professional, and institutional investors. It is not directed at, and should not be relied upon by, retail investors.',
            'Nothing on this website constitutes an offer or solicitation in any jurisdiction where such an offer or solicitation would be unlawful.',
          ],
        },
        {
          id: 'risk-warning',
          heading: 'Risk Warning',
          body: [
            'Investing in alternative and emerging-market assets involves significant risk, including the potential loss of capital. Returns are not guaranteed and may be volatile.',
            'Past performance is not indicative of future results. The value of investments and any income from them may fall as well as rise.',
          ],
        },
        {
          id: 'forward-looking',
          heading: 'Forward-Looking Statements',
          body: [
            'Certain statements on this website may be forward-looking. These reflect current expectations and are subject to risks and uncertainties that could cause actual outcomes to differ materially.',
            'LXXI undertakes no obligation to update any forward-looking statement except as required by law.',
          ],
        },
        {
          id: 'regulatory-status',
          heading: 'Regulatory Status',
          body: [
            'LXXI Limited operates in accordance with applicable laws and regulations in the jurisdictions in which it does business. Specific terms of any engagement are set out in definitive offering and contractual documentation.',
            'This material is for informational purposes only and does not constitute investment advice or a recommendation.',
          ],
        },
      ]}
    />
  );
}
