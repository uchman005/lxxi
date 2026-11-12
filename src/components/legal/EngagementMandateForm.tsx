'use client';

import { useState, type ReactNode } from 'react';
import { toast } from 'sonner';
import {
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Download,
    FileSignature,
    ShieldCheck,
} from 'lucide-react';

const ENGAGEMENT_TYPES = [
    'Alternative Investment Sourcing',
    'Asset Acquisition / Disposal',
    'Asset/Property Management',
    'Asset Recovery',
    'Brokerage',
    'Commodity Trade',
    'Infrastructures',
    'Investment Advisory',
    'Joint Venture / Structured Deal',
    'M/A Brokerage and Advisory',
    'Private Equity/Credit',
    'PPP /Government',
    'SPV/Strategic Need Facilitation',
    'Trade Finance',
    'Venture Structuring/Framework/Advisory',
    'Others',
];

const SERVICES_REQUIRED = [
    'Sourcing of assets',
    'Introductions and deal origination',
    'Negotiation and transaction facilitation',
    'Preliminary due diligence coordination',
    'Transaction structuring support',
    'Execution and closing support',
];

const CAPACITY_DOCUMENTS = [
    'Proof of Funds',
    'SBLC/Bank guarantee',
    'Bank Comfort Letter',
    'Irrevocable corporate purchase order (ICPO)',
    'Investor Commitment',
    'Board / Investment Committee Approval',
    'LPO',
    'Letter of Intent',
    'Proof of Appointment',
];

const STEPS = ['Client Information', 'Engagement & Scope', 'Capacity & Security', 'Declarations', 'Review & Sign'];

type FormState = {
    fullName: string;
    rcNumber: string;
    registeredAddress: string;
    contactPerson: string;
    email: string;
    phone: string;
    businessProfile: string;

    engagementTypes: string[];
    otherEngagementType: string;
    transactionDescription: string;

    servicesRequired: string[];
    excludedServices: string;

    capacityDocuments: string[];
    capacityTimeframe: string;
    escrowAgreeable: 'yes' | 'no';

    collateralDescription: string;
    securityDocumentsNote: string;

    authorizedSignatoryName: string;
    solvencyAgree: boolean;
    exclusivityPeriod: '' | '30' | '60' | '90';
    nonCircumventionAgree: boolean;
    confidentialityAgree: boolean;
    validityPeriod: '' | '30' | '60' | '90' | 'other';
    validityOther: string;
    additionalInstructions: string;

    designation: string;
    declarationDate: string;
    declarationAgree: boolean;
};

const initialState: FormState = {
    fullName: '',
    rcNumber: '',
    registeredAddress: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessProfile: '',

    engagementTypes: [],
    otherEngagementType: '',
    transactionDescription: '',

    servicesRequired: [],
    excludedServices: '',

    capacityDocuments: [],
    capacityTimeframe: '',
    escrowAgreeable: 'yes',

    collateralDescription: '',
    securityDocumentsNote: '',

    authorizedSignatoryName: '',
    solvencyAgree: false,
    exclusivityPeriod: '',
    nonCircumventionAgree: false,
    confidentialityAgree: false,
    validityPeriod: '',
    validityOther: '',
    additionalInstructions: '',

    designation: '',
    declarationDate: new Date().toISOString().slice(0, 10),
    declarationAgree: false,
};

const inputClasses =
    'w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-black placeholder:text-gray-400 ' +
    'focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200';

const labelClasses = 'block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2';

function Chip({
    label,
    selected,
    onClick,
}: {
    label: string;
    selected: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={selected}
            className={`text-left px-4 py-2.5 rounded-xl border text-sm leading-snug transition-all duration-200 ${selected
                    ? 'bg-amber-400 border-amber-400 text-black font-semibold'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-amber-400'
                }`}
        >
            {label}
        </button>
    );
}

function CheckRow({
    checked,
    onChange,
    children,
}: {
    checked: boolean;
    onChange: (v: boolean) => void;
    children: ReactNode;
}) {
    return (
        <label className="flex items-start gap-3 cursor-pointer bg-white border border-gray-300 rounded-xl px-4 py-3.5 hover:border-amber-400 transition-colors">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-amber-400 shrink-0"
            />
            <span className="text-sm text-gray-700 leading-relaxed">{children}</span>
        </label>
    );
}

const EngagementMandateForm = () => {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState<FormState>(initialState);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
        setForm((prev) => ({ ...prev, [key]: value }));

    const toggleInList = (key: 'engagementTypes' | 'servicesRequired' | 'capacityDocuments', value: string) => {
        setForm((prev) => {
            const list = prev[key];
            return {
                ...prev,
                [key]: list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
            };
        });
    };

    const validateStep = (index: number): string => {
        if (index === 0) {
            const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
            if (!form.fullName.trim() || !form.phone.trim()) return 'Please complete your name and phone number.';
            if (!validEmail) return 'Please enter a valid email address.';
        }
        if (index === 3) {
            if (!form.authorizedSignatoryName.trim()) return 'Please provide the name of your authorized signatory.';
            if (!form.solvencyAgree) return 'Please confirm the solvency declaration.';
            if (!form.exclusivityPeriod) return 'Please select an exclusivity period.';
            if (!form.nonCircumventionAgree) return 'Please confirm the non-circumvention acknowledgement.';
            if (!form.confidentialityAgree) return 'Please confirm the confidentiality clause.';
            if (!form.validityPeriod) return 'Please select a validity period.';
            if (form.validityPeriod === 'other' && !form.validityOther.trim()) return 'Please specify the validity period.';
        }
        return '';
    };

    const goNext = () => {
        const err = validateStep(step);
        if (err) {
            setError(err);
            return;
        }
        setError('');
        setStep((s) => Math.min(s + 1, STEPS.length - 1));
    };

    const goBack = () => {
        setError('');
        setStep((s) => Math.max(s - 1, 0));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.designation.trim()) {
            setError('Please provide your designation.');
            return;
        }
        if (!form.declarationAgree) {
            setError('Please confirm the client declaration to submit.');
            return;
        }

        setError('');
        setSubmitting(true);
        const toastId = toast.loading('Submitting your engagement form...');
        try {
            const res = await fetch('/api/engagement-mandate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.error || 'Failed to submit form.');
            toast.success('Mandate form received — our team will be in touch.', { id: toastId });
            setSubmitted(true);
        } catch (err) {
            toast.error(err instanceof Error ? err.message : 'Something went wrong.', { id: toastId });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="engagement-form" className="bg-[#0A0A0A] text-white py-20 md:py-28 scroll-mt-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
                <div className="text-center mb-12" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 bg-amber-400 text-black text-sm font-semibold px-5 py-2 rounded-full mb-6">
                        <FileSignature className="w-4 h-4" />
                        Start Your Engagement
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                        Client Engagement &amp;{' '}
                        <span className="font-playfair italic text-amber-400">Transaction Mandate</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Complete the form below to formally begin your engagement with LXXI across brokerage,
                        investment, or asset-related transactions. Your responses define scope, exclusivity, fee
                        basis, and transaction protocol.
                    </p>
                    <a
                        href="/documents/LXXI-Client-Engagement-Form.pdf"
                        download
                        className="inline-flex items-center gap-2 mt-5 text-sm text-gray-400 hover:text-amber-400 underline underline-offset-4 transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Prefer paper? Download the form as a PDF
                    </a>
                    <a
                        href={"/documents/LXXI-Client-Engagement-Form.pdf"}
                        download
                        className="ml-3 inline-flex items-center gap-2 bg-amber-400 text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-300 transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        {"Download Engagement Form"}
                    </a>
                </div>

                {!submitted && (
                    <div className="flex items-center justify-between gap-2 mb-10" data-aos="fade-up" data-aos-delay="100">
                        {STEPS.map((label, i) => (
                            <div key={label} className="flex-1 flex flex-col items-center gap-2">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold tabular-nums shrink-0 transition-colors ${i < step
                                            ? 'bg-amber-400 text-black'
                                            : i === step
                                                ? 'bg-white text-black'
                                                : 'bg-white/10 text-gray-500'
                                        }`}
                                >
                                    {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                                </div>
                                <span
                                    className={`hidden sm:block text-[11px] text-center leading-tight ${i === step ? 'text-amber-400 font-semibold' : 'text-gray-500'
                                        }`}
                                >
                                    {label}
                                </span>
                                {i < STEPS.length - 1 && (
                                    <div className="hidden" aria-hidden />
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <div className="bg-white text-black rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/30">
                    {submitted ? (
                        <div className="min-h-[380px] flex flex-col items-center justify-center text-center" data-aos="zoom-in">
                            <div className="w-16 h-16 rounded-full bg-amber-400/15 flex items-center justify-center mb-6">
                                <ShieldCheck className="w-9 h-9 text-amber-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Form received</h3>
                            <p className="text-gray-500 max-w-md leading-relaxed">
                                Thank you, {form.fullName.split(' ')[0] || 'there'}. Your Client Engagement Form has
                                been submitted for internal review. If aligned, we&apos;ll follow up with a Letter of
                                Instruction request. Upon approval, you&apos;ll receive an Engagement Acceptance notice
                                with a bank account opening form, followed by the engagement fee invoice — in line
                                with our{' '}
                                <a href="#purpose" className="text-amber-500 font-medium hover:text-amber-600">
                                    Terms of Engagement
                                </a>
                                .
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            {/* Step 0: Client Information */}
                            {step === 0 && (
                                <div className="space-y-5" data-aos="fade-up">
                                    <h3 className="text-xl font-bold mb-1">Client Information</h3>
                                    <p className="text-gray-500 text-sm mb-6">
                                        Tell us who we&apos;ll be engaging with.
                                    </p>

                                    <div>
                                        <label className={labelClasses}>Full Name *</label>
                                        <input
                                            className={inputClasses}
                                            value={form.fullName}
                                            onChange={(e) => set('fullName', e.target.value)}
                                            placeholder="Client or company name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className={labelClasses}>RC Number (if applicable)</label>
                                            <input
                                                className={inputClasses}
                                                value={form.rcNumber}
                                                onChange={(e) => set('rcNumber', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClasses}>Contact Person</label>
                                            <input
                                                className={inputClasses}
                                                value={form.contactPerson}
                                                onChange={(e) => set('contactPerson', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClasses}>Registered Address</label>
                                        <input
                                            className={inputClasses}
                                            value={form.registeredAddress}
                                            onChange={(e) => set('registeredAddress', e.target.value)}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className={labelClasses}>Email Address *</label>
                                            <input
                                                type="email"
                                                className={inputClasses}
                                                value={form.email}
                                                onChange={(e) => set('email', e.target.value)}
                                                placeholder="you@company.com"
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClasses}>Phone Number(s) *</label>
                                            <input
                                                className={inputClasses}
                                                value={form.phone}
                                                onChange={(e) => set('phone', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClasses}>Nature of Business / Investment Profile</label>
                                        <textarea
                                            rows={3}
                                            className={`${inputClasses} resize-none`}
                                            value={form.businessProfile}
                                            onChange={(e) => set('businessProfile', e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 1: Engagement & Scope */}
                            {step === 1 && (
                                <div className="space-y-8" data-aos="fade-up">
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Type of Engagement</h3>
                                        <p className="text-gray-500 text-sm mb-4">Select all that apply.</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            {ENGAGEMENT_TYPES.map((type) => (
                                                <Chip
                                                    key={type}
                                                    label={type}
                                                    selected={form.engagementTypes.includes(type)}
                                                    onClick={() => toggleInList('engagementTypes', type)}
                                                />
                                            ))}
                                        </div>
                                        {form.engagementTypes.includes('Others') && (
                                            <input
                                                className={`${inputClasses} mt-3`}
                                                placeholder="Please specify"
                                                value={form.otherEngagementType}
                                                onChange={(e) => set('otherEngagementType', e.target.value)}
                                            />
                                        )}
                                    </div>

                                    <div>
                                        <label className={labelClasses}>
                                            Brief Description of the Proposed Transaction or Mandate
                                        </label>
                                        <textarea
                                            rows={3}
                                            className={`${inputClasses} resize-none`}
                                            value={form.transactionDescription}
                                            onChange={(e) => set('transactionDescription', e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Scope of Services</h3>
                                        <p className="text-gray-500 text-sm mb-4">Select all applicable.</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            {SERVICES_REQUIRED.map((service) => (
                                                <Chip
                                                    key={service}
                                                    label={service}
                                                    selected={form.servicesRequired.includes(service)}
                                                    onClick={() => toggleInList('servicesRequired', service)}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClasses}>Any services expressly excluded? (if any)</label>
                                        <input
                                            className={inputClasses}
                                            value={form.excludedServices}
                                            onChange={(e) => set('excludedServices', e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Capacity & Security */}
                            {step === 2 && (
                                <div className="space-y-8" data-aos="fade-up">
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Transaction Capacity &amp; Protocol</h3>
                                        <p className="text-gray-500 text-sm mb-4">
                                            Capacity to proceed — select all applicable.
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            {CAPACITY_DOCUMENTS.map((doc) => (
                                                <Chip
                                                    key={doc}
                                                    label={doc}
                                                    selected={form.capacityDocuments.includes(doc)}
                                                    onClick={() => toggleInList('capacityDocuments', doc)}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClasses}>
                                            Estimated timeframe to provide required capacity documents
                                        </label>
                                        <input
                                            className={inputClasses}
                                            value={form.capacityTimeframe}
                                            onChange={(e) => set('capacityTimeframe', e.target.value)}
                                            placeholder="e.g. 2 weeks"
                                        />
                                    </div>

                                    <div>
                                        <label className={labelClasses}>
                                            Are you agreeable to the use of escrow or stakeholder accounts where
                                            deposits or advance payments are required?
                                        </label>
                                        <div className="flex gap-2.5">
                                            <Chip
                                                label="Yes"
                                                selected={form.escrowAgreeable === 'yes'}
                                                onClick={() => set('escrowAgreeable', 'yes')}
                                            />
                                            <Chip
                                                label="No"
                                                selected={form.escrowAgreeable === 'no'}
                                                onClick={() => set('escrowAgreeable', 'no')}
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-gray-200">
                                        <h3 className="text-xl font-bold mb-1 mt-6">Security Details</h3>
                                        <div className="space-y-5 mt-4">
                                            <div>
                                                <label className={labelClasses}>Kindly specify the proposed collateral</label>
                                                <textarea
                                                    rows={2}
                                                    className={`${inputClasses} resize-none`}
                                                    value={form.collateralDescription}
                                                    onChange={(e) => set('collateralDescription', e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className={labelClasses}>
                                                    Documents evidencing title, ownership, or security over the stated
                                                    collateral
                                                </label>
                                                <textarea
                                                    rows={2}
                                                    className={`${inputClasses} resize-none`}
                                                    value={form.securityDocumentsNote}
                                                    onChange={(e) => set('securityDocumentsNote', e.target.value)}
                                                    placeholder="List documents you can provide — attach copies separately via email"
                                                />
                                                <p className="text-xs text-gray-400 mt-2">
                                                    Please email supporting documents separately to{' '}
                                                    <a href="mailto:business@lxxi.africa" className="text-amber-500 underline">
                                                        business@lxxi.africa
                                                    </a>
                                                    .
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Declarations */}
                            {step === 3 && (
                                <div className="space-y-8" data-aos="fade-up">
                                    <div>
                                        <label className={labelClasses}>Authorized Signatory Name *</label>
                                        <input
                                            className={inputClasses}
                                            value={form.authorizedSignatoryName}
                                            onChange={(e) => set('authorizedSignatoryName', e.target.value)}
                                            placeholder="Name of the person signing on behalf of the client"
                                        />
                                        <p className="text-xs text-gray-400 mt-2">
                                            This name applies as your digital signature across the declarations below.
                                        </p>
                                    </div>

                                    <CheckRow checked={form.solvencyAgree} onChange={(v) => set('solvencyAgree', v)}>
                                        <strong>Solvency Declaration</strong> — I/we affirm and warrant that I/we am/are
                                        solvent, carrying on business as a going concern, and not in debt distress,
                                        bankruptcy, liquidation, receivership, administration, or in the process of
                                        winding up, nor is any such proceeding pending, threatened, or contemplated
                                        against me/us.
                                    </CheckRow>

                                    <div>
                                        <label className={labelClasses}>
                                            Exclusivity — appoint LXXI Limited as exclusive broker/adviser for this
                                            transaction for a period of *
                                        </label>
                                        <div className="flex flex-wrap gap-2.5">
                                            {(['30', '60', '90'] as const).map((p) => (
                                                <Chip
                                                    key={p}
                                                    label={`${p} Days`}
                                                    selected={form.exclusivityPeriod === p}
                                                    onClick={() => set('exclusivityPeriod', p)}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <CheckRow
                                        checked={form.nonCircumventionAgree}
                                        onChange={(v) => set('nonCircumventionAgree', v)}
                                    >
                                        <strong>Non-Circumvention</strong> — I/we acknowledge that we shall not directly
                                        or indirectly bypass, avoid, or circumvent LXXI Limited in respect of any asset,
                                        opportunity, counterparty, or transaction introduced by LXXI and its
                                        representatives during this engagement and for 12 months thereafter.
                                    </CheckRow>

                                    <CheckRow
                                        checked={form.confidentialityAgree}
                                        onChange={(v) => set('confidentialityAgree', v)}
                                    >
                                        <strong>Confidentiality</strong> — I/we agree that all information exchanged in
                                        the course of this engagement shall be treated as confidential and used solely
                                        for the purpose of this transaction.
                                    </CheckRow>

                                    <div>
                                        <label className={labelClasses}>Proposed validity period of this mandate *</label>
                                        <div className="flex flex-wrap gap-2.5">
                                            {(['30', '60', '90', 'other'] as const).map((p) => (
                                                <Chip
                                                    key={p}
                                                    label={p === 'other' ? 'Other' : `${p} Days`}
                                                    selected={form.validityPeriod === p}
                                                    onClick={() => set('validityPeriod', p)}
                                                />
                                            ))}
                                        </div>
                                        {form.validityPeriod === 'other' && (
                                            <input
                                                className={`${inputClasses} mt-3`}
                                                placeholder="Please specify"
                                                value={form.validityOther}
                                                onChange={(e) => set('validityOther', e.target.value)}
                                            />
                                        )}
                                    </div>

                                    <div>
                                        <label className={labelClasses}>
                                            Any specific instructions, limitations, or deal-breakers we should note
                                        </label>
                                        <textarea
                                            rows={3}
                                            className={`${inputClasses} resize-none`}
                                            value={form.additionalInstructions}
                                            onChange={(e) => set('additionalInstructions', e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Review & Sign */}
                            {step === 4 && (
                                <div className="space-y-8" data-aos="fade-up">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Review your submission</h3>
                                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 bg-gray-50 rounded-2xl p-6 text-sm">
                                            <div>
                                                <dt className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-1">Client</dt>
                                                <dd className="text-gray-800">{form.fullName || '—'}</dd>
                                            </div>
                                            <div>
                                                <dt className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-1">Email</dt>
                                                <dd className="text-gray-800">{form.email || '—'}</dd>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <dt className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-1">Type of Engagement</dt>
                                                <dd className="text-gray-800">
                                                    {form.engagementTypes.length ? form.engagementTypes.join(', ') : '—'}
                                                </dd>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <dt className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-1">Scope of Services</dt>
                                                <dd className="text-gray-800">
                                                    {form.servicesRequired.length ? form.servicesRequired.join(', ') : '—'}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-1">Exclusivity</dt>
                                                <dd className="text-gray-800">{form.exclusivityPeriod ? `${form.exclusivityPeriod} days` : '—'}</dd>
                                            </div>
                                            <div>
                                                <dt className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-1">Validity</dt>
                                                <dd className="text-gray-800">
                                                    {form.validityPeriod === 'other'
                                                        ? form.validityOther || 'Other'
                                                        : form.validityPeriod
                                                            ? `${form.validityPeriod} days`
                                                            : '—'}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className={labelClasses}>Designation *</label>
                                            <input
                                                className={inputClasses}
                                                value={form.designation}
                                                onChange={(e) => set('designation', e.target.value)}
                                                placeholder="e.g. Managing Director"
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClasses}>Date</label>
                                            <input
                                                type="date"
                                                className={inputClasses}
                                                value={form.declarationDate}
                                                onChange={(e) => set('declarationDate', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <CheckRow checked={form.declarationAgree} onChange={(v) => set('declarationAgree', v)}>
                                        I/We confirm that the information provided above is accurate and acknowledge
                                        that this form shall constitute the basis of our engagement, subject to
                                        applicable laws and definitive transaction documentation. Typing my/our name
                                        as the authorized signatory above constitutes a digital signature to this form.
                                    </CheckRow>
                                </div>
                            )}

                            {error && <p className="text-sm text-red-500 font-medium mt-6">{error}</p>}

                            <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={goBack}
                                    disabled={step === 0}
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-black disabled:opacity-0 disabled:pointer-events-none transition-colors"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    Back
                                </button>

                                {step < STEPS.length - 1 ? (
                                    <button
                                        type="button"
                                        onClick={goNext}
                                        className="inline-flex items-center gap-1.5 bg-black hover:bg-amber-400 hover:text-black text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-300"
                                    >
                                        Continue
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 transition-all duration-300 text-black font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {submitting ? 'Submitting...' : 'Submit Mandate Form'}
                                    </button>
                                )}
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EngagementMandateForm;
