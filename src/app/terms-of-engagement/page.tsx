import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Engagement',
  description:
    'LXXI Limited’s standard client engagement process — from the Client Engagement Form and Letter of Instruction through mandate activation, execution, and our engagement fee policy.',
  openGraph: {
    title: 'Terms of Engagement — LXXI Limited',
    description:
      'How LXXI Limited engages clients for brokerage, facilitation, and advisory services, including our engagement fee policy and fee structure.',
    images: ['/logo.png'],
  },
};

export default function TermsOfEngagement() {
  return (
    <LegalLayout
      title="Terms of"
      accent="Engagement"
      lastUpdated="5 January 2026"
      downloadHref="/documents/LXXI-Terms-of-Engagement.pdf"
      downloadLabel="Download PDF"
      intro="This page outlines LXXI Limited's standard client engagement process, from initial engagement through transaction execution and post-transaction relationship. It applies to all brokerage, facilitation, and advisory services provided by LXXI Limited, except asset/property management, asset acquisition or disposal, and commodity trade services. It is designed to provide clarity, transparency, and confidence to clients, facilitators, partners, and counterparties engaging or referring LXXI's services."
      sections={[
        {
          id: 'purpose',
          heading: 'Purpose',
          body: [
            'LXXI Limited operates as a structured brokerage, advisory, and property management institution. All engagements follow a defined process to ensure commercial alignment, risk management, and successful transaction outcomes.',
          ],
        },
        {
          id: 'engagement-fee-policy',
          heading: 'Engagement Fee Policy',
          body: [
            'With effect from 5 January 2026, all LXXI engagements are subject to an Engagement Fee equal to 5% of the total applicable brokerage/service fee for the requested service.',
          ],
          list: [
            'The engagement fee is mandatory.',
            'It confirms seriousness of intent and activates internal resources.',
            'It is deducted from the total brokerage fee payable upon successful transaction completion.',
          ],
          note: 'Illustration: if a transaction is worth $2 million and the brokerage fee is 5% ($100,000), the engagement fee is 5% of that fee ($5,000), leaving a balance of $95,000 payable at completion.',
        },
        {
          id: 'what-the-fee-covers',
          heading: 'What the Engagement Fee Covers',
          body: ['The engagement fee covers early-stage professional services including:'],
          list: [
            'Transaction assessment and feasibility review',
            'Market intelligence and deal validation',
            'Due diligence and compliance needs',
            'Initial counterparty sourcing and outreach',
            'Structuring input and execution roadmap',
            'Allocation of deal team and resources',
            'Legal and administrative services',
          ],
          note: 'No introductions, documentation, negotiations, or counterparty engagements commence until the engagement fee is received.',
        },
        {
          id: 'engagement-journey',
          heading: 'Overview of the Client Engagement Journey',
          orderedList: [
            'Client Engagement Form (CEF)',
            'Letter of Instruction (LOI)',
            'Internal review & acceptance/rejection',
            'Engagement fee payment',
            'Mandate activation',
            'Documentation, negotiations, and introductions (as the case may be)',
            'Transaction execution',
            'Deal closure & settlement',
            'Post-transaction success, follow-up & relationship continuity',
          ],
        },
        {
          id: 'client-engagement-form',
          heading: 'Client Engagement Form (CEF)',
          body: [
            'The engagement journey begins with completion of the Client Engagement Form. Submission of the CEF allows LXXI to assess suitability and alignment before proceeding.',
            'The CEF captures:',
          ],
          list: [
            'Client identity and ownership structure',
            'Authorised representatives',
            'Nature and scope of the requested transaction',
            'Asset class, geography, and estimated transaction value',
            'Target timelines and commercial expectations',
          ],
        },
        {
          id: 'letter-of-instruction',
          heading: 'Letter of Instruction (LOI)',
          body: [
            'Upon completion of the CEF, the client issues a Letter of Instruction to LXXI Limited. The LOI formally mandates LXXI Limited and outlines:',
          ],
          list: [
            'Description of services required',
            'Transaction value, objectives, scope, and dynamics',
            'Acknowledgment of the engagement fee (5% of total service/brokerage fee)',
            'Acknowledgment of applicable brokerage/service fees',
            'Confidentiality and exclusivity terms (where applicable)',
            'Validity period of the instruction',
          ],
          note: 'The LOI serves as the client’s formal instruction to proceed, subject to internal review and acceptance. For credit transactions, details of the proposed security/collateral must be submitted with the CEF and LOI for review. The reviewing committee reserves the right to request additional documents for pre-evaluation; this does not imply the transaction has been accepted. All submissions and correspondence should be sent to business@lxxi.africa.',
        },
        {
          id: 'internal-review',
          heading: 'Internal Review & Engagement Acceptance',
          body: [
            'Following receipt of the CEF and LOI, a dedicated committee conducts an internal review covering:',
          ],
          list: [
            'Commercial viability and profitability',
            'Legal and regulatory considerations',
            'Reputational and counterparty risk',
            'Internal capacity and alignment',
          ],
          note: 'Upon approval, LXXI issues an Engagement Acceptance notice with an attached invoice for the engagement fee. If not approved, an Engagement Rejection is issued instead.',
        },
        {
          id: 'fee-payment-mandate-activation',
          heading: 'Engagement Fee Payment & Mandate Activation',
          body: [
            'An engagement fee invoice (5% of the applicable brokerage/service fee) is issued upon acceptance.',
          ],
          list: [
            'Payment of the engagement fee formally activates the mandate.',
            'Execution activities commence only after payment confirmation.',
            'After payment, an official notice of receipt is sent alongside a detailed checklist of documents required from the client for the transaction.',
          ],
          note: 'Upon activation, an NDNCA and an engagement/brokerage agreement are executed, a transaction lead is assigned, and a structured execution plan is communicated. The engagement fee is non-refundable, as it covers the legal, administrative, compliance, and documentation phase of the transaction.',
        },
        {
          id: 'documentation-and-execution',
          heading: 'Transaction Documentation and Execution',
          body: [
            'LXXI reviews all documents communicated in the checklist and undertakes execution activities, which may include:',
          ],
          list: [
            'Counterparty sourcing and introductions',
            'Commercial and structural negotiations',
            'Deal structuring and term alignment',
            'Due diligence coordination',
            'Regulatory, compliance, and closing support',
          ],
          note: 'Clients receive periodic updates and are consulted at all key decision points.',
        },
        {
          id: 'deal-closure',
          heading: 'Deal Closure & Settlement',
          body: ['At transaction completion:'],
          list: [
            'The final brokerage/service fee is confirmed.',
            'The engagement fee already paid is deducted.',
            'The balance of the brokerage/service fee becomes payable.',
          ],
          note: 'Upon settlement, the transaction is formally closed.',
        },
        {
          id: 'post-transaction',
          heading: 'Post-Transaction Success & Relationship Continuity',
          body: [
            'LXXI Limited remains engaged for up to 12 months post-closure to ensure transaction success through:',
          ],
          list: [
            'Completion and value-delivery reporting',
            'Transition or handover support (where applicable)',
            'Post-deal review and optimisation discussions',
          ],
          note: 'LXXI views every transaction as the foundation for a long-term relationship. Clients may be supported through repeat or portfolio-wide mandates, strategic advisory and asset management services, and ongoing market intelligence and opportunity sourcing.',
        },
        {
          id: 'fee-structure',
          heading: 'Fee Structure',
          body: [
            'LXXI Limited operates a success-based brokerage and advisory model. Our fees reflect the value of access, structuring expertise, execution capability, and transaction risk we assume across complex and often cross-border transactions.',
            'The brokerage/service (success) fee is charged as a percentage of the transaction value, or as an agreed fixed fee, depending on the nature, size, and complexity of the transaction. Fees are transaction-specific, clearly communicated upfront, and documented in the Engagement/Brokerage Agreement.',
            'Indicative fee ranges — actual fees depend on deal size, jurisdiction, complexity, timeline, and risk profile:',
          ],
          table: {
            headers: ['Transaction Size (₦ or equivalent)', 'Fee (%)'],
            rows: [
              ['0 – ₦1 billion', '5%'],
              ['₦1 – ₦10 billion', '4%'],
              ['₦10 billion and above', '3%'],
            ],
          },
          note: 'For asset recovery, fees range between 5–10% of the total value of the asset recovered, depending on the complexity of the transaction.',
        },
      ]}
    />
  );
}
