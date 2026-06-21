import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Subscriber from '@/models/Subscriber';
import { sendWelcomeEmail } from '@/lib/mail';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const email = String(body.email ?? '').trim().toLowerCase();

        if (!EMAIL_RE.test(email)) {
            return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
        }

        await connectDB();

        const existing = await Subscriber.findOne({ email });
        if (existing) {
            if (existing.status === 'unsubscribed') {
                existing.status = 'active';
                await existing.save();
            }
            return NextResponse.json({ ok: true, message: "You're already subscribed." }, { status: 200 });
        }

        await Subscriber.create({ email });
        await sendWelcomeEmail(email);

        return NextResponse.json({ ok: true }, { status: 201 });
    } catch (err) {
        console.error('[api/subscribe]', err);
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }
}
