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
        reply_to?: ZeptoRecipient[];
        subject: string;
        htmlbody?: string;
        textbody?: string;
    }

    export class SendMailClient {
        constructor(opts: { url: string; token: string });
        sendMail(payload: SendMailPayload): Promise<unknown>;
    }
}
