import mongoose, { Schema, model, models } from 'mongoose';

export interface IUser {
    fullName: string;
    email: string;
    passwordHash: string;
    role: 'investor' | 'admin';
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
    {
        fullName: { type: String, required: true, trim: true },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            index: true,
        },
        // Excluded from query results by default; opt in with .select('+passwordHash')
        passwordHash: { type: String, required: true, select: false },
        role: { type: String, enum: ['investor', 'admin'], default: 'investor' },
    },
    { timestamps: true },
);

const User = models.User || model<IUser>('User', UserSchema);
export default User as mongoose.Model<IUser>;
