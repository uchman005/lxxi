import mongoose, { Schema, model, models } from 'mongoose';

export interface IInquiry {
    fullName: string;
    email: string;
    organization: string;
    sector: string;
    message: string;
    source: string;
    createdAt: Date;
    updatedAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
    {
        fullName: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, lowercase: true },
        organization: { type: String, required: true, trim: true },
        sector: { type: String, trim: true, default: '' },
        message: { type: String, required: true, trim: true },
        source: { type: String, trim: true, default: 'sectors' },
    },
    { timestamps: true },
);

const Inquiry = models.Inquiry || model<IInquiry>('Inquiry', InquirySchema);
export default Inquiry as mongoose.Model<IInquiry>;
