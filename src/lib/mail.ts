import { SendMailClient } from 'zeptomail';

const FROM = process.env.MAIL_FROM || 'noreply@lxxi.africa';
const FROM_NAME = process.env.MAIL_FROM_NAME || 'LXXI Limited';
// MAIL_NOTIFY_TO may be a single address or a comma-separated list (e.g. "info@lxxi.africa,business@lxxi.africa").
const NOTIFY_TO_RAW = process.env.MAIL_NOTIFY_TO || 'business@lxxi.africa';
const NOTIFY_TO_LIST = NOTIFY_TO_RAW.split(',').map((s) => s.trim()).filter(Boolean);
// Single display address — used in the footer's "contact us" mailto link.
const NOTIFY_TO = NOTIFY_TO_LIST[0] || 'business@lxxi.africa';

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
    to: string | string[];
    toName?: string;
    subject: string;
    html: string;
    replyTo?: { address: string; name?: string };
}): Promise<boolean> {
    const recipients = Array.isArray(opts.to) ? opts.to : [opts.to];
    const c = getClient();
    if (!c) {
        console.warn('[mail] ZEPTOMAIL_TOKEN not set — skipping email to', recipients.join(', '));
        return false;
    }
    try {
        await c.sendMail({
            from: { address: FROM, name: FROM_NAME },
            to: recipients.map((address) => ({ email_address: { address, name: opts.toName } })),
            ...(opts.replyTo ? { reply_to: [opts.replyTo] } : {}),
            subject: opts.subject,
            htmlbody: opts.html,
        });
        return true;
    } catch (err) {
        console.error('[mail] send failed to', recipients.join(', '), err);
        return false;
    }
}

const GOLD = '#E5B63E';
const BG = '#0A0A0A';
const CARD = '#111111';
const SITE_URL = 'https://lxxi.africa';
const LOGO_URL = `${SITE_URL}/logo.png`;
// Disclaimer always points to info@ regardless of MAIL_NOTIFY_TO's configured list.
const DISCLAIMER_CONTACT = 'info@lxxi.africa';

/** Branded, image-lit HTML email shell with inline styles for client compatibility. */
function renderEmail(heading: string, bodyHtml: string): string {
    return `
  <div style="margin:0;padding:0;background:${BG};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG};padding:44px 0;">
      <tr><td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;font-family:Arial,Helvetica,sans-serif;">

          <!-- Logo -->
          <tr><td align="center" style="padding:0 24px 28px;">
            <img src="${LOGO_URL}" width="132" height="74" alt="LXXI Limited" style="display:block;border:0;border-radius:10px;" />
          </td></tr>

          <!-- Card -->
          <tr><td style="background:${CARD};border:1px solid rgba(229,182,62,0.18);border-radius:18px;overflow:hidden;box-shadow:0 18px 40px rgba(0,0,0,0.45);">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="height:4px;line-height:4px;font-size:0;background-color:${GOLD};">&nbsp;</td></tr>
              <tr><td style="padding:40px 36px 4px;">
                <h1 style="margin:0 0 20px;color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:normal;font-style:italic;letter-spacing:0.2px;">${heading}</h1>
                <div style="color:#b8b8b8;font-size:15px;line-height:1.75;">${bodyHtml}</div>
              </td></tr>
              <tr><td style="padding:8px 36px 32px;">
                <div style="height:1px;line-height:1px;font-size:0;background-color:rgba(255,255,255,0.08);margin:20px 0 24px;">&nbsp;</div>
                <p style="margin:0;color:#777;font-size:12px;line-height:1.8;">
                  <strong style="color:#aaa;">LXXI Limited</strong> &middot; Abuja, Nigeria<br/>
                  <a href="mailto:${NOTIFY_TO}" style="color:${GOLD};text-decoration:none;">${NOTIFY_TO}</a>
                  &nbsp;&middot;&nbsp;
                  <a href="${SITE_URL}" style="color:${GOLD};text-decoration:none;">lxxi.africa</a>
                </p>
              </td></tr>
            </table>
          </td></tr>

          <!-- Disclaimer -->
          <tr><td align="center" style="padding:24px 32px 0;">
            <p style="margin:0;color:#4d4d4d;font-size:10px;line-height:1.7;">
              This is an automated message from LXXI Limited related to an action taken on lxxi.africa.
              If you did not initiate this request, please disregard this email or contact us at
              <a href="mailto:${DISCLAIMER_CONTACT}" style="color:#666;text-decoration:underline;">${DISCLAIMER_CONTACT}</a>.
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
        to: NOTIFY_TO_LIST,
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
        to: NOTIFY_TO_LIST,
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

export async function sendEngagementMandateEmails(data: {
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
    exclusivityPeriod: string;
    validityPeriod: string;
    validityOther: string;
    additionalInstructions: string;
    designation: string;
    declarationDate: string;
}): Promise<void> {
    const firstName = data.fullName.split(' ')[0] || 'there';
    const periodLabel = (p: string) => (p === 'other' ? esc(data.validityOther || 'Other') : `${esc(p)} days`);

    const row = (label: string, value: string) =>
        value
            ? `<tr><td style="padding:6px 12px 6px 0;color:#888;font-size:13px;white-space:nowrap;vertical-align:top;">${esc(
                  label,
              )}</td><td style="padding:6px 0;color:#e5e5e5;font-size:13px;">${value}</td></tr>`
            : '';

    const tagList = (items: string[]) =>
        items.length
            ? items
                  .map(
                      (i) =>
                          `<span style="display:inline-block;margin:2px 4px 2px 0;padding:3px 10px;background:rgba(229,182,62,0.12);border:1px solid rgba(229,182,62,0.3);border-radius:999px;color:${GOLD};font-size:12px;">${esc(
                              i,
                          )}</span>`,
                  )
                  .join('')
            : '<span style="color:#666;">None selected</span>';

    await safeSend({
        to: data.email,
        toName: data.fullName,
        subject: 'We received your Client Engagement Form — LXXI Limited',
        html: renderEmail(
            `Thank you, ${esc(firstName)}.`,
            `<p>We've received your Client Engagement and Transaction Mandate Form and our team will review it for suitability and alignment before proceeding.</p>
       <p style="margin-top:16px;color:#888;">What happens next: our internal committee reviews your submission, and — if aligned — we'll issue a Letter of Instruction request and, upon acceptance, an engagement fee invoice. No introductions, documentation, or negotiations commence until the engagement fee is received.</p>
       <p style="margin-top:16px;">You can review our full <a href="https://lxxi.africa/terms-of-engagement" style="color:${GOLD};">Terms of Engagement</a> at any time.</p>`,
        ),
    });

    await safeSend({
        to: NOTIFY_TO_LIST,
        toName: 'LXXI Team',
        subject: `New engagement mandate: ${data.fullName}`,
        replyTo: { address: data.email, name: data.fullName },
        html: renderEmail(
            'New Client Engagement Form submission',
            `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${row('Client', esc(data.fullName))}
        ${row('RC Number', esc(data.rcNumber))}
        ${row('Address', esc(data.registeredAddress))}
        ${row('Contact person', esc(data.contactPerson))}
        ${row('Email', esc(data.email))}
        ${row('Phone', esc(data.phone))}
        ${row('Profile', esc(data.businessProfile))}
       </table>
       <p style="margin:18px 0 6px;color:#fff;font-size:13px;font-weight:bold;">Type of engagement</p>
       ${tagList(data.engagementTypes)}
       ${data.otherEngagementType ? `<p style="margin-top:6px;color:#cfcfcf;font-size:13px;">Other: ${esc(data.otherEngagementType)}</p>` : ''}
       ${data.transactionDescription ? `<blockquote style="margin:10px 0 0;padding:12px 14px;background:rgba(255,255,255,0.04);border-left:3px solid ${GOLD};border-radius:6px;color:#cfcfcf;font-size:13px;">${esc(data.transactionDescription)}</blockquote>` : ''}

       <p style="margin:18px 0 6px;color:#fff;font-size:13px;font-weight:bold;">Scope of services</p>
       ${tagList(data.servicesRequired)}
       ${data.excludedServices ? `<p style="margin-top:6px;color:#cfcfcf;font-size:13px;">Excluded: ${esc(data.excludedServices)}</p>` : ''}

       <p style="margin:18px 0 6px;color:#fff;font-size:13px;font-weight:bold;">Transaction capacity & protocol</p>
       ${tagList(data.capacityDocuments)}
       <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:6px;">
        ${row('Capacity timeframe', esc(data.capacityTimeframe))}
        ${row('Escrow agreeable', data.escrowAgreeable === 'yes' ? 'Yes' : 'No')}
       </table>

       ${
           data.collateralDescription || data.securityDocumentsNote
               ? `<p style="margin:18px 0 6px;color:#fff;font-size:13px;font-weight:bold;">Security details</p>
       <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${row('Proposed collateral', esc(data.collateralDescription))}
        ${row('Supporting documents', esc(data.securityDocumentsNote))}
       </table>`
               : ''
       }

       <p style="margin:18px 0 6px;color:#fff;font-size:13px;font-weight:bold;">Declarations</p>
       <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${row('Authorized signatory', esc(data.authorizedSignatoryName))}
        ${row('Exclusivity period', `${esc(data.exclusivityPeriod)} days`)}
        ${row('Validity period', periodLabel(data.validityPeriod))}
        ${row('Designation', esc(data.designation))}
        ${row('Date', esc(data.declarationDate))}
       </table>
       ${data.additionalInstructions ? `<p style="margin-top:12px;color:#888;font-size:13px;">Additional instructions:</p><blockquote style="margin:6px 0 0;padding:12px 14px;background:rgba(255,255,255,0.04);border-left:3px solid ${GOLD};border-radius:6px;color:#cfcfcf;font-size:13px;">${esc(data.additionalInstructions)}</blockquote>` : ''}`,
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
        to: NOTIFY_TO_LIST,
        toName: 'LXXI Team',
        subject: `New portal registration: ${data.fullName}`,
        html: renderEmail(
            'New investor registration',
            `<p><strong style="color:#fff;">Name:</strong> ${esc(data.fullName)}<br/>
        <strong style="color:#fff;">Email:</strong> ${esc(data.email)}</p>`,
        ),
    });
}
