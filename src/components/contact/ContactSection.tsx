'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { MapPin, Mail, Phone, Clock, CheckCircle2 } from 'lucide-react';

const initialForm = { name: '', email: '', subject: '', message: '' };

const inputClasses =
    'w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-black placeholder:text-gray-400 ' +
    'focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200';

const contactDetails = [
    { icon: MapPin, label: 'Headquarters', value: 'Abuja, Nigeria' },
    { icon: Mail, label: 'Email', value: 'business@lxxi.africa', href: 'mailto:business@lxxi.africa' },
    { icon: Phone, label: 'Phone', value: '+234 80 2502 1402', href: 'tel:+2348025021402' },
    { icon: Clock, label: 'Response time', value: 'Within 24 hours' },
];

const offices = [
    { city: 'Abuja', country: 'Nigeria', role: 'Global Headquarters' },
    { city: 'Johannesburg', country: 'South Africa', role: 'Southern Africa' },
    { city: 'Nairobi', country: 'Kenya', role: 'East Africa' },
    { city: 'Lagos', country: 'Nigeria', role: 'West Africa' },
];

const ContactSection = () => {
    const [form, setForm] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (error) setError('');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
        if (!form.name.trim() || !form.message.trim()) {
            setError('Please complete all required fields.');
            return;
        }
        if (!validEmail) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        setSubmitting(true);
        const toastId = toast.loading('Sending your message...');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.error || 'Failed to send message.');
            toast.success("Message sent — we'll be in touch within 24 hours.", { id: toastId });
            setSubmitted(true);
        } catch (err) {
            toast.error(err instanceof Error ? err.message : 'Something went wrong.', { id: toastId });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="bg-[#0A0A0A] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left: details */}
                    <div className="lg:col-span-5" data-aos="fade-right">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-12 bg-amber-400" />
                            <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                                Get In Touch
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                            Let&apos;s start a{' '}
                            <span className="font-playfair italic text-amber-400">conversation.</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-10 max-w-md">
                            Whether you&apos;re an investor, partner, or prospective team member, our team
                            responds to every enquiry with discretion and care.
                        </p>

                        <div className="space-y-5">
                            {contactDetails.map((detail) => {
                                const Icon = detail.icon;
                                const content = (
                                    <div className="flex items-start gap-4">
                                        <div className="w-11 h-11 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0">
                                            <Icon className="w-5 h-5 text-amber-400" strokeWidth={2} />
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                                                {detail.label}
                                            </div>
                                            <div className="text-sm font-medium text-gray-200">{detail.value}</div>
                                        </div>
                                    </div>
                                );
                                return detail.href ? (
                                    <a key={detail.label} href={detail.href} className="block hover:opacity-80 transition-opacity">
                                        {content}
                                    </a>
                                ) : (
                                    <div key={detail.label}>{content}</div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: form */}
                    <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="150">
                        <div className="bg-white text-black rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/20">
                            {submitted ? (
                                <div className="min-h-[380px] flex flex-col items-center justify-center text-center" data-aos="zoom-in">
                                    <div className="w-16 h-16 rounded-full bg-amber-400/15 flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-9 h-9 text-amber-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">Message sent</h3>
                                    <p className="text-gray-500 max-w-sm leading-relaxed">
                                        Thank you, {form.name.split(' ')[0] || 'there'}. We&apos;ll be in touch within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                                                Full Name
                                            </label>
                                            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="John Doe" className={inputClasses} />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                                                Email
                                            </label>
                                            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClasses} />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                                            Subject
                                        </label>
                                        <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="How can we help?" className={inputClasses} />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                                            Message
                                        </label>
                                        <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell us a little about your enquiry..." className={`${inputClasses} resize-none`} />
                                    </div>

                                    {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full bg-amber-400 hover:bg-amber-300 transition-all duration-300 text-black font-bold uppercase tracking-wider px-6 py-4 rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {submitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Offices */}
                <div className="mt-16 md:mt-20">
                    <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
                        <div className="h-px w-12 bg-amber-400" />
                        <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">Our Offices</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {offices.map((office, index) => (
                            <div
                                key={`${office.city}-${office.role}`}
                                className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-amber-400/40 transition-all duration-500"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <MapPin className="w-5 h-5 text-amber-400 mb-4" />
                                <h3 className="text-lg font-semibold">{office.city}</h3>
                                <p className="text-gray-500 text-sm mb-2">{office.country}</p>
                                <p className="text-xs uppercase tracking-widest text-amber-400/80 font-semibold">{office.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
