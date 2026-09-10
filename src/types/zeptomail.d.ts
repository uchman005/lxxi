declare module 'zeptomail' {
    interface ZeptoAddress {
        address: string;
        name?: string;
    }

    interface ZeptoRecipient {
        email_address: ZeptoAddress;
    }

    interface SendMailPayload {
        from: ZeptoAddress;
        to: ZeptoRecipient[];
        // Unlike `to`/`cc`/`bcc`, ZeptoMail's API takes reply_to as a flat
        // address list — not wrapped in `email_address` — omitting the
        // wrapper here previously caused "Mandatory Field missing" (TM_3201).
        reply_to?: ZeptoAddress[];
        subject: string;
        htmlbody?: string;
        textbody?: string;
    }

    export class SendMailClient {
        constructor(opts: { url: string; token: string });
        sendMail(payload: SendMailPayload): Promise<unknown>;
    }
}
