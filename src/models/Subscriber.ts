import mongoose, { Schema, model, models } from 'mongoose';

export interface ISubscriber {
    email: string;
    status: 'active' | 'unsubscribed';
    createdAt: Date;
    updatedAt: Date;
}

const SubscriberSchema = new Schema<ISubscriber>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            index: true,
        },
        status: { type: String, enum: ['active', 'unsubscribed'], default: 'active' },
    },
    { timestamps: true },
);

const Subscriber = models.Subscriber || model<ISubscriber>('Subscriber', SubscriberSchema);
export default Subscriber as mongoose.Model<ISubscriber>;
