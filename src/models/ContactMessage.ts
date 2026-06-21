import mongoose, { Schema, model, models } from 'mongoose';

export interface IContactMessage {
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, lowercase: true },
        subject: { type: String, trim: true, default: '' },
        message: { type: String, required: true, trim: true },
    },
    { timestamps: true },
);

const ContactMessage =
    models.ContactMessage || model<IContactMessage>('ContactMessage', ContactMessageSchema);
export default ContactMessage as mongoose.Model<IContactMessage>;
