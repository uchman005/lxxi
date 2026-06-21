import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Inquiry from '@/models/Inquiry';
import { sendInquiryEmails } from '@/lib/mail';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const fullName = String(body.fullName ?? '').trim();
        const email = String(body.email ?? '').trim();
        const organization = String(body.organization ?? '').trim();
        const sector = String(body.sector ?? '').trim();
        const message = String(body.message ?? '').trim();
        const source = String(body.source ?? 'sectors').trim();

        if (!fullName || !organization || !message) {
            return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
        }
        if (!EMAIL_RE.test(email)) {
            return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
        }

        await connectDB();
        const inquiry = await Inquiry.create({ fullName, email, organization, sector, message, source });
        await sendInquiryEmails({ fullName, email, organization, sector, message, source });

        return NextResponse.json({ ok: true, id: inquiry._id }, { status: 201 });
    } catch (err) {
        console.error('[api/inquiry]', err);
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }
}
