import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import { sendRegistrationEmail } from '@/lib/mail';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const fullName = String(body.fullName ?? '').trim();
        const email = String(body.email ?? '').trim().toLowerCase();
        const password = String(body.password ?? '');

        if (!fullName) {
            return NextResponse.json({ error: 'Please enter your full name.' }, { status: 400 });
        }
        if (!EMAIL_RE.test(email)) {
            return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
        }
        if (password.length < 8) {
            return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 });
        }

        await connectDB();

        const existing = await User.findOne({ email });
        if (existing) {
            return NextResponse.json({ error: 'An account with this email already exists.' }, { status: 409 });
        }

        const passwordHash = await bcrypt.hash(password, 12);
        await User.create({ fullName, email, passwordHash });
        await sendRegistrationEmail({ fullName, email });

        return NextResponse.json({ ok: true }, { status: 201 });
    } catch (err) {
        console.error('[api/register]', err);
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }
}
