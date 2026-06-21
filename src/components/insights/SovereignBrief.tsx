'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';

const SovereignBrief = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
        if (!valid) {
            setError("Please enter a valid email address.");
            return;
        }
        setError("");
        setSubmitting(true);
        const toastId = toast.loading("Subscribing...");
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.trim() }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.error || "Subscription failed.");
            toast.success(data.message || "You're subscribed — welcome to the Brief.", { id: toastId });
            setSubmitted(true);
        } catch (err) {
            toast.error(err instanceof Error ? err.message : "Something went wrong.", { id: toastId });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="bg-[#0A0A0A] text-white">
            {/* Newsletter */}
            <div className="border-y border-white/10 bg-[#0E1012]">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
                                Sovereign Insights{" "}
                                <span className="font-playfair italic text-amber-400">Brief</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed max-w-md">
                                A concise monthly dispatch of our sharpest thinking on African capital
                                markets — delivered to institutional inboxes.
                            </p>
                        </div>

                        <div data-aos="fade-left" data-aos-delay="150">
                            {submitted ? (
                                <div className="flex items-center gap-3 bg-amber-400/10 border border-amber-400/30 rounded-xl px-5 py-4">
                                    <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
                                    <p className="text-sm text-gray-200">
                                        You&apos;re subscribed. The next brief lands in your inbox soon.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (error) setError("");
                                            }}
                                            placeholder="Your institutional email"
                                            className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-sm
                                 placeholder:text-gray-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20
                                 transition-all duration-200"
                                        />
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="shrink-0 bg-amber-400 hover:bg-amber-300 transition-all duration-300 text-black
                                 font-bold uppercase tracking-wider px-7 py-3.5 rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {submitting ? "..." : "Subscribe"}
                                        </button>
                                    </div>
                                    {error && <p className="text-sm text-red-400 font-medium mt-2">{error}</p>}
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission quote */}
            <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28 text-center">
                <p
                    className="font-playfair text-2xl md:text-4xl leading-snug text-gray-200"
                    data-aos="fade-up"
                >
                    &ldquo;Great investments begin with{" "}
                    <span className="text-amber-400 italic">exceptional insights</span>. Our mission is
                    to illuminate the path for institutional capital in Africa.&rdquo;
                </p>
            </div>
        </section>
    );
};

export default SovereignBrief;
