import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import EngagementMandate from '@/models/EngagementMandate';
import { sendEngagementMandateEmails } from '@/lib/mail';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ExclusivityPeriod = '30' | '60' | '90';
type ValidityPeriod = '30' | '60' | '90' | 'other';

const isExclusivityPeriod = (v: string): v is ExclusivityPeriod => v === '30' || v === '60' || v === '90';
const isValidityPeriod = (v: string): v is ValidityPeriod =>
    v === '30' || v === '60' || v === '90' || v === 'other';

const str = (v: unknown) => String(v ?? '').trim();
const strArray = (v: unknown) => (Array.isArray(v) ? v.map((x) => String(x).trim()).filter(Boolean) : []);
const bool = (v: unknown) => v === true;

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const data = {
            fullName: str(body.fullName),
            rcNumber: str(body.rcNumber),
            registeredAddress: str(body.registeredAddress),
            contactPerson: str(body.contactPerson),
            email: str(body.email),
            phone: str(body.phone),
            businessProfile: str(body.businessProfile),

            engagementTypes: strArray(body.engagementTypes),
            otherEngagementType: str(body.otherEngagementType),
            transactionDescription: str(body.transactionDescription),

            servicesRequired: strArray(body.servicesRequired),
            excludedServices: str(body.excludedServices),

            capacityDocuments: strArray(body.capacityDocuments),
            capacityTimeframe: str(body.capacityTimeframe),
            escrowAgreeable: str(body.escrowAgreeable) === 'no' ? 'no' as const : 'yes' as const,

            collateralDescription: str(body.collateralDescription),
            securityDocumentsNote: str(body.securityDocumentsNote),

            authorizedSignatoryName: str(body.authorizedSignatoryName),
            solvencyAgree: bool(body.solvencyAgree),
            exclusivityPeriod: str(body.exclusivityPeriod),
            nonCircumventionAgree: bool(body.nonCircumventionAgree),
            confidentialityAgree: bool(body.confidentialityAgree),
            validityPeriod: str(body.validityPeriod),
            validityOther: str(body.validityOther),
            additionalInstructions: str(body.additionalInstructions),

            designation: str(body.designation),
            declarationDate: str(body.declarationDate),
            declarationAgree: bool(body.declarationAgree),
        };

        if (!data.fullName || !data.email || !data.phone) {
            return NextResponse.json({ error: 'Please complete all required client information fields.' }, { status: 400 });
        }
        if (!EMAIL_RE.test(data.email)) {
            return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
        }
        if (!data.authorizedSignatoryName || !isExclusivityPeriod(data.exclusivityPeriod)) {
            return NextResponse.json({ error: 'Please complete the exclusivity declaration.' }, { status: 400 });
        }
        if (!data.solvencyAgree || !data.nonCircumventionAgree || !data.confidentialityAgree) {
            return NextResponse.json({ error: 'Please confirm all required declarations.' }, { status: 400 });
        }
        if (!isValidityPeriod(data.validityPeriod)) {
            return NextResponse.json({ error: 'Please select a validity period.' }, { status: 400 });
        }
        if (!data.designation || !data.declarationAgree) {
            return NextResponse.json({ error: 'Please complete the client declaration to submit.' }, { status: 400 });
        }

        const record = {
            ...data,
            exclusivityPeriod: data.exclusivityPeriod as ExclusivityPeriod,
            validityPeriod: data.validityPeriod as ValidityPeriod,
        };

        await connectDB();
        const doc = await EngagementMandate.create(record);
        await sendEngagementMandateEmails(record);

        return NextResponse.json({ ok: true, id: doc._id }, { status: 201 });
    } catch (err) {
        console.error('[api/engagement-mandate]', err);
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }
}
