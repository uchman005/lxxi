import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';
import EngagementMandateForm from '@/components/legal/EngagementMandateForm';

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
      engagementCta={{ href: '#engagement-form', label: 'Start Client Engagement Form' }}
      intro="This page outlines LXXI Limited's standard client engagement process, from initial engagement through transaction execution and post-transaction relationship. It applies to all brokerage, facilitation, and advisory services provided by LXXI Limited, except asset/property management, asset acquisition or disposal, and commodity trade services (commodity trades follow LXXI's Trade Engagement & Due Diligence Protocol). It is designed to provide clarity, transparency, and confidence to clients, facilitators, partners, and counterparties engaging or referring LXXI's services."
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
          note: 'No introductions, documentation, negotiations, or counterparty engagements commence until the engagement fee is paid into the designated account.',
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
          note: 'You can complete the Client Engagement Form digitally below — no need to download or print anything.',
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
            'Acknowledgment of the engagement fee',
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
          bodyAfter: [
            'Upon approval, LXXI issues an Engagement Acceptance notice with an attached bank account opening form. The form is to be completed and returned to LXXI with all the requested account opening documents attached. The account is opened in one of LXXI’s affiliated banks — the choice of bank depends on the desired service and location — and its details are to be communicated to LXXI as soon as the account is created.',
          ],
          note: 'If the engagement is not approved, an Engagement Rejection notice is issued communicating the reason for the decision.',
        },
        {
          id: 'fee-payment-mandate-activation',
          heading: 'Engagement Fee Payment & Mandate Activation',
          body: [
            'An engagement fee invoice (5% of the applicable brokerage/service fee) is issued upon receipt of the new account details. The engagement fee is paid into this newly opened account, with a lien placed on it.',
          ],
          list: [
            'Payment of the engagement fee formally activates the mandate.',
            'Execution activities commence only after payment confirmation.',
            'After payment confirmation, an official notice of receipt is sent alongside a detailed checklist of the documents expected from the client for the transaction, an NDNCA, and a Brokerage Agreement.',
          ],
          bodyAfter: [
            'Upon activation, the executed NDNCA and Brokerage Agreement are exchanged, after which a transaction lead is assigned and a structured execution plan is communicated.',
          ],
          note: 'The engagement fee in the newly created account remains under lien until after the documentation phase of the transaction.',
        },
        {
          id: 'documentation-and-execution',
          heading: 'Transaction Documentation and Execution',
          body: [
            'LXXI receives and reviews all the documents communicated to the client in the checklist, and begins undertaking execution activities, which may include:',
          ],
          list: [
            'Counterparty sourcing and introductions',
            'Commercial and structural negotiations',
            'Deal structuring and term alignment',
            'Due diligence coordination',
            'Regulatory, compliance, and closing support',
          ],
          bodyAfter: [
            'During documentation, clients receive periodic updates and are consulted at all key decision points.',
            'Once both internal and counterparty documentation is complete, and the counterparty’s risk team has approved the transaction as having passed its risk assessment, LXXI is entitled to draw down the engagement fee deposited in the newly created account using the Irrevocable Payment Order issued by the client.',
          ],
          note: 'All requested documents are expected to be submitted in full within 10 business days. Any need for an extension must be communicated by email, and an extension cannot exceed 5 business days. The engagement fee, once drawn, is non-refundable.',
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
          heading: 'Post-Transaction Success',
          body: [
            'LXXI Limited remains engaged for up to 12 months post-closure to ensure transaction success through:',
          ],
          list: [
            'Completion and value-delivery reporting',
            'Transition or handover support (where applicable)',
            'Post-deal review and optimisation discussions',
          ],
          note: 'In the case of a credit transaction, LXXI remains engaged until the credit is paid up in full.',
        },
        {
          id: 'relationship-continuity',
          heading: 'Relationship Continuity',
          body: [
            'LXXI Limited views every transaction as the foundation for a long-term relationship. Clients may be supported through:',
          ],
          list: [
            'Repeat or portfolio-wide mandates',
            'Strategic advisory and asset management services',
            'Ongoing market intelligence and opportunity sourcing',
          ],
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
    >
      <EngagementMandateForm />
    </LegalLayout>
  );
}
