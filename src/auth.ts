import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/db';
import User from '@/models/User';

export const { handlers, auth, signIn, signOut } = NextAuth({
    session: { strategy: 'jwt' },
    pages: { signIn: '/login' },
    trustHost: true,
    providers: [
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const email = String(credentials?.email ?? '').toLowerCase().trim();
                const password = String(credentials?.password ?? '');
                if (!email || !password) return null;

                await connectDB();
                const user = await User.findOne({ email }).select('+passwordHash');
                if (!user?.passwordHash) return null;

                const valid = await bcrypt.compare(password, user.passwordHash);
                if (!valid) return null;

                return {
                    id: user._id.toString(),
                    name: user.fullName,
                    email: user.email,
                    role: user.role,
                };
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = (user as { role?: string }).role ?? 'investor';
            }
            return token;
        },
        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.role = token.role as string;
            }
            return session;
        },
    },
});
