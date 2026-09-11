import { NextResponse } from 'next/server';
import { getDb } from '@/db';
import { contactMessages } from '@/db/schema';
import { sendContactEmails } from '@/lib/mail';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const name = String(body.name ?? '').trim();
        const email = String(body.email ?? '').trim();
        const subject = String(body.subject ?? '').trim();
        const message = String(body.message ?? '').trim();

        if (!name || !message) {
            return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
        }
        if (!EMAIL_RE.test(email)) {
            return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
        }

        const db = await getDb();
        const doc = await db.insert(contactMessages).values({ name, email, subject, message }).returning().get();
        await sendContactEmails({ name, email, subject, message });

        return NextResponse.json({ ok: true, id: doc.id }, { status: 201 });
    } catch (err) {
        console.error('[api/contact]', err);
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }
}
