import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

declare global {
    var _mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global._mongooseCache ?? { conn: null, promise: null };
global._mongooseCache = cached;

/**
 * Lazily connects to MongoDB and caches the connection across hot-reloads
 * and serverless invocations. Call this inside route handlers — never at
 * module top-level — so `next build` works without a live database.
 */
export async function connectDB(): Promise<typeof mongoose> {
    if (!MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined. Add it to your environment.');
    }

    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        cached.promise = null;
        throw err;
    }

    return cached.conn;
}
