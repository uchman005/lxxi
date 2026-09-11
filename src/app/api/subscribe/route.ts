import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/db';
import { subscribers } from '@/db/schema';
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

        const db = await getDb();

        const existing = await db.select().from(subscribers).where(eq(subscribers.email, email)).get();
        if (existing) {
            if (existing.status === 'unsubscribed') {
                await db.update(subscribers)
                    .set({ status: 'active', updatedAt: new Date() })
                    .where(eq(subscribers.email, email))
                    .run();
            }
            return NextResponse.json({ ok: true, message: "You're already subscribed." }, { status: 200 });
        }

        await db.insert(subscribers).values({ email }).run();
        await sendWelcomeEmail(email);

        return NextResponse.json({ ok: true }, { status: 201 });
    } catch (err) {
        console.error('[api/subscribe]', err);
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }
}
