import { SendMailClient } from 'zeptomail';

const FROM = process.env.MAIL_FROM || 'noreply@lxxi.africa';
const FROM_NAME = process.env.MAIL_FROM_NAME || 'LXXI Limited';
const NOTIFY_TO = process.env.MAIL_NOTIFY_TO || 'business@lxxi.africa';

let client: SendMailClient | null = null;

function getClient(): SendMailClient | null {
    const token = process.env.ZEPTOMAIL_TOKEN;
    const url = process.env.ZEPTOMAIL_URL || 'api.zeptomail.com/';
    if (!token) return null;
    if (!client) client = new SendMailClient({ url, token });
    return client;
}

/**
 * Sends an email via ZeptoMail. Never throws — failures are logged so that a
 * mail outage cannot break a database write or a user's form submission.
 */
async function safeSend(opts: {
    to: string;
    toName?: string;
    subject: string;
    html: string;
    replyTo?: { address: string; name?: string };
}): Promise<boolean> {
    const c = getClient();
    if (!c) {
        console.warn('[mail] ZEPTOMAIL_TOKEN not set — skipping email to', opts.to);
        return false;
    }
    try {
        await c.sendMail({
            from: { address: FROM, name: FROM_NAME },
            to: [{ email_address: { address: opts.to, name: opts.toName } }],
            ...(opts.replyTo ? { reply_to: [{ email_address: opts.replyTo }] } : {}),
            subject: opts.subject,
            htmlbody: opts.html,
        });
        return true;
    } catch (err) {
        console.error('[mail] send failed to', opts.to, err);
        return false;
    }
}

const GOLD = '#E5B63E';
const BG = '#0A0A0A';
const CARD = '#111111';

/** Branded dark/gold HTML email shell with inline styles for client compatibility. */
function renderEmail(heading: string, bodyHtml: string): string {
    return `
  <div style="margin:0;padding:0;background:${BG};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG};padding:32px 0;">
      <tr><td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${CARD};border:1px solid rgba(229,182,62,0.15);border-radius:16px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;">
          <tr><td style="padding:28px 32px;border-bottom:1px solid rgba(255,255,255,0.06);">
            <span style="color:${GOLD};font-size:20px;font-weight:bold;letter-spacing:2px;">LXXI</span>
            <span style="color:#888;font-size:12px;letter-spacing:3px;text-transform:uppercase;"> &nbsp;Limited</span>
          </td></tr>
          <tr><td style="padding:36px 32px;">
            <h1 style="margin:0 0 18px;color:#ffffff;font-size:22px;font-weight:bold;">${heading}</h1>
            <div style="color:#b8b8b8;font-size:15px;line-height:1.7;">${bodyHtml}</div>
          </td></tr>
          <tr><td style="padding:24px 32px;border-top:1px solid rgba(255,255,255,0.06);">
            <p style="margin:0;color:#666;font-size:12px;line-height:1.6;">
              LXXI Limited &middot; Abuja, Nigeria &middot;
              <a href="mailto:${NOTIFY_TO}" style="color:${GOLD};text-decoration:none;">${NOTIFY_TO}</a><br/>
              This message was sent in response to an enquiry on lxxi.africa.
            </p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </div>`;
}

const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ----------------------------- Flow helpers ----------------------------- */

export async function sendInquiryEmails(data: {
    fullName: string;
    email: string;
    organization: string;
    sector: string;
    message: string;
    source?: string;
}): Promise<void> {
    const firstName = data.fullName.split(' ')[0] || 'there';

    await safeSend({
        to: data.email,
        toName: data.fullName,
        subject: 'We received your enquiry — LXXI Limited',
        html: renderEmail(
            `Thank you, ${esc(firstName)}.`,
            `<p>We've received your institutional enquiry regarding <strong style="color:#fff;">${esc(
                data.sector,
            )}</strong> and our team will be in touch with complete discretion.</p>
       <p style="margin-top:16px;color:#888;">A copy of your message:</p>
       <blockquote style="margin:8px 0 0;padding:14px 16px;background:rgba(255,255,255,0.04);border-left:3px solid ${GOLD};border-radius:6px;color:#cfcfcf;">${esc(
           data.message,
       )}</blockquote>`,
        ),
    });

    await safeSend({
        to: NOTIFY_TO,
        toName: 'LXXI Team',
        subject: `New inquiry: ${data.organization}`,
        replyTo: { address: data.email, name: data.fullName },
        html: renderEmail(
            'New institutional inquiry',
            `<p><strong style="color:#fff;">Name:</strong> ${esc(data.fullName)}<br/>
        <strong style="color:#fff;">Email:</strong> ${esc(data.email)}<br/>
        <strong style="color:#fff;">Organization:</strong> ${esc(data.organization)}<br/>
        <strong style="color:#fff;">Sector:</strong> ${esc(data.sector)}<br/>
        <strong style="color:#fff;">Source:</strong> ${esc(data.source || 'sectors')}</p>
       <p style="margin-top:16px;color:#888;">Message:</p>
       <blockquote style="margin:8px 0 0;padding:14px 16px;background:rgba(255,255,255,0.04);border-left:3px solid ${GOLD};border-radius:6px;color:#cfcfcf;">${esc(
           data.message,
       )}</blockquote>`,
        ),
    });
}

export async function sendContactEmails(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
}): Promise<void> {
    const firstName = data.name.split(' ')[0] || 'there';

    await safeSend({
        to: data.email,
        toName: data.name,
        subject: 'We received your message — LXXI Limited',
        html: renderEmail(
            `Thank you, ${esc(firstName)}.`,
            `<p>Thanks for reaching out to LXXI. We've received your message and a member of our team will respond within 24 hours.</p>
       ${data.subject ? `<p style="margin-top:16px;color:#888;">Subject: <span style="color:#cfcfcf;">${esc(data.subject)}</span></p>` : ''}
       <blockquote style="margin:8px 0 0;padding:14px 16px;background:rgba(255,255,255,0.04);border-left:3px solid ${GOLD};border-radius:6px;color:#cfcfcf;">${esc(
           data.message,
       )}</blockquote>`,
        ),
    });

    await safeSend({
        to: NOTIFY_TO,
        toName: 'LXXI Team',
        subject: `New contact message${data.subject ? `: ${data.subject}` : ''}`,
        replyTo: { address: data.email, name: data.name },
        html: renderEmail(
            'New contact message',
            `<p><strong style="color:#fff;">Name:</strong> ${esc(data.name)}<br/>
        <strong style="color:#fff;">Email:</strong> ${esc(data.email)}<br/>
        <strong style="color:#fff;">Subject:</strong> ${esc(data.subject || '—')}</p>
       <blockquote style="margin:8px 0 0;padding:14px 16px;background:rgba(255,255,255,0.04);border-left:3px solid ${GOLD};border-radius:6px;color:#cfcfcf;">${esc(
           data.message,
       )}</blockquote>`,
        ),
    });
}

export async function sendWelcomeEmail(email: string): Promise<void> {
    await safeSend({
        to: email,
        subject: 'Welcome to the Sovereign Insights Brief',
        html: renderEmail(
            'You\'re subscribed.',
            `<p>Thank you for subscribing to the <strong style="color:#fff;">Sovereign Insights Brief</strong> — LXXI's monthly dispatch on African capital markets.</p>
       <p style="margin-top:16px;">Look out for our next brief in your inbox soon.</p>`,
        ),
    });
}

export async function sendRegistrationEmail(data: {
    fullName: string;
    email: string;
}): Promise<void> {
    const firstName = data.fullName.split(' ')[0] || 'there';
    await safeSend({
        to: data.email,
        toName: data.fullName,
        subject: 'Your LXXI account request was received',
        html: renderEmail(
            `Welcome, ${esc(firstName)}.`,
            `<p>Your request to access the LXXI investor portal has been received and your account has been created.</p>
       <p style="margin-top:16px;">Our team reviews new registrations to confirm investor eligibility. You'll be notified once access is granted.</p>`,
        ),
    });

    await safeSend({
        to: NOTIFY_TO,
        toName: 'LXXI Team',
        subject: `New portal registration: ${data.fullName}`,
        html: renderEmail(
            'New investor registration',
            `<p><strong style="color:#fff;">Name:</strong> ${esc(data.fullName)}<br/>
        <strong style="color:#fff;">Email:</strong> ${esc(data.email)}</p>`,
        ),
    });
}
