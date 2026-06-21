'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';
import { Mail, Lock, User, Eye, EyeOff, CheckCircle2, ShieldCheck } from 'lucide-react';

type AuthMode = 'login' | 'register';

const inputClasses =
    'w-full bg-white/5 border border-white/15 rounded-xl pl-11 pr-11 py-3.5 text-sm text-white ' +
    'placeholder:text-gray-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200';

const highlights = [
    'Institutional-grade access',
    'Confidential deal flow',
    'Curated research & briefings',
];

const AuthForm = ({ mode }: { mode: AuthMode }) => {
    const isRegister = mode === 'register';

    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: '',
        confirm: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (error) setError('');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

        if (isRegister && !form.fullName.trim()) {
            setError('Please enter your full name.');
            return;
        }
        if (!validEmail) {
            setError('Please enter a valid email address.');
            return;
        }
        if (form.password.length < 8) {
            setError('Password must be at least 8 characters.');
            return;
        }
        if (isRegister && form.password !== form.confirm) {
            setError('Passwords do not match.');
            return;
        }

        setError('');
        setSubmitting(true);
        const toastId = toast.loading(isRegister ? 'Creating your account...' : 'Signing you in...');
        try {
            if (isRegister) {
                const res = await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        fullName: form.fullName.trim(),
                        email: form.email.trim(),
                        password: form.password,
                    }),
                });
                const data = await res.json().catch(() => ({}));
                if (!res.ok) throw new Error(data.error || 'Registration failed.');
            }

            const result = await signIn('credentials', {
                redirect: false,
                email: form.email.trim(),
                password: form.password,
            });

            if (result?.error) {
                throw new Error(
                    isRegister
                        ? 'Account created, but automatic sign-in failed. Please sign in.'
                        : 'Invalid email or password.',
                );
            }

            toast.success(isRegister ? 'Account created — welcome to LXXI.' : 'Signed in successfully.', {
                id: toastId,
            });
            setSubmitted(true);
            router.push('/');
            router.refresh();
        } catch (err) {
            toast.error(err instanceof Error ? err.message : 'Something went wrong.', { id: toastId });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white grid grid-cols-1 lg:grid-cols-2">
            {/* Brand panel */}
            <div className="relative hidden lg:flex flex-col justify-between p-12 xl:p-16 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('/about_hero.png')" }}
                />
                <div className="absolute inset-0 bg-linear-to-br from-[#0A0A0A]/80 via-[#0A0A0A]/70 to-[#0A0A0A]" />

                <div className="relative z-10">
                    <Link href="/">
                        <Image src="/logo.png" alt="LXXI" width={120} height={48} className="h-14 w-auto" />
                    </Link>
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl xl:text-4xl font-bold leading-tight mb-8 max-w-md">
                        Where Africa meets{' '}
                        <span className="font-playfair italic text-amber-400">global capital.</span>
                    </h2>
                    <ul className="space-y-4">
                        {highlights.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative z-10 flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Bank-grade encryption · Qualified investors only
                </div>
            </div>

            {/* Form panel */}
            <div className="flex items-center justify-center px-6 py-28 lg:py-12">
                <div className="w-full max-w-md">
                    {/* Mobile logo */}
                    <Link href="/" className="lg:hidden inline-block mb-10">
                        <Image src="/logo.png" alt="LXXI" width={120} height={48} className="h-12 w-auto" />
                    </Link>

                    {submitted ? (
                        <div className="text-center" data-aos="zoom-in">
                            <div className="w-16 h-16 rounded-full bg-amber-400/15 flex items-center justify-center mb-6 mx-auto">
                                <CheckCircle2 className="w-9 h-9 text-amber-400" />
                            </div>
                            <h1 className="text-2xl font-bold mb-3">
                                {isRegister ? 'Application received' : 'Welcome back'}
                            </h1>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                {isRegister
                                    ? 'Thank you for registering. Our team will review your request and grant access shortly.'
                                    : 'You have been signed in. Redirecting you to your dashboard.'}
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
                            >
                                Return home →
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8">
                                <span className="text-amber-400 text-xs tracking-[3px] font-medium uppercase">
                                    {isRegister ? 'Request Access' : 'Investor Portal'}
                                </span>
                                <h1 className="text-3xl md:text-4xl font-bold mt-3">
                                    {isRegister ? 'Create your account' : 'Sign in'}
                                </h1>
                                <p className="text-gray-400 mt-2 text-sm">
                                    {isRegister
                                        ? 'Join a select network of institutional partners.'
                                        : 'Access your institutional dashboard and deal flow.'}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                {isRegister && (
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
                                        <input
                                            name="fullName"
                                            type="text"
                                            value={form.fullName}
                                            onChange={handleChange}
                                            placeholder="Full name"
                                            className={inputClasses}
                                        />
                                    </div>
                                )}

                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email address"
                                        className={inputClasses}
                                    />
                                </div>

                                <div className="relative">
                                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
                                    <input
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        className={inputClasses}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((s) => !s)}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-400 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                                    </button>
                                </div>

                                {isRegister && (
                                    <div className="relative">
                                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
                                        <input
                                            name="confirm"
                                            type={showPassword ? 'text' : 'password'}
                                            value={form.confirm}
                                            onChange={handleChange}
                                            placeholder="Confirm password"
                                            className={inputClasses}
                                        />
                                    </div>
                                )}

                                {!isRegister && (
                                    <div className="flex justify-end">
                                        <button type="button" className="text-xs text-gray-400 hover:text-amber-400 transition-colors">
                                            Forgot password?
                                        </button>
                                    </div>
                                )}

                                {error && <p className="text-sm text-red-400 font-medium">{error}</p>}

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full bg-amber-400 hover:bg-amber-300 transition-all duration-300 text-black
                             font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {submitting
                                        ? isRegister
                                            ? 'Creating...'
                                            : 'Signing in...'
                                        : isRegister
                                            ? 'Create Account'
                                            : 'Sign In'}
                                </button>
                            </form>

                            <p className="text-sm text-gray-400 mt-8 text-center">
                                {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
                                <Link
                                    href={isRegister ? '/login' : '/register'}
                                    className="text-amber-400 font-semibold hover:text-amber-300 transition-colors"
                                >
                                    {isRegister ? 'Sign in' : 'Request access'}
                                </Link>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
};

export default AuthForm;
