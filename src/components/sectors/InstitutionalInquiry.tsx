'use client';

import { useState } from 'react';
import { MapPin, Mail, CheckCircle2 } from 'lucide-react';

const sectorOptions = [
    "Real Estate",
    "Commodity Trading",
    "General Goods & Infrastructure",
    "Private Equity & Venture Catalysis",
];

const initialForm = {
    fullName: "",
    organization: "",
    sector: sectorOptions[0],
    message: "",
};

const inputClasses =
    "w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-black placeholder:text-gray-400 " +
    "focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200";

const InstitutionalInquiry = () => {
    const [form, setForm] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (error) setError("");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.fullName.trim() || !form.organization.trim() || !form.message.trim()) {
            setError("Please complete all required fields.");
            return;
        }
        setSubmitted(true);
    };

    return (
        <section className="bg-[#0A0A0A] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                <div className="bg-gray-50 text-black rounded-3xl overflow-hidden border border-black/5 shadow-2xl shadow-black/20">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* Left: info */}
                        <div className="lg:col-span-5 p-8 md:p-12" data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                                Institutional{" "}
                                <span className="font-playfair italic text-amber-400">Inquiry</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-10 max-w-sm">
                                Engage our sector specialists to discuss bespoke brokerage opportunities and
                                managed asset portfolios tailored to institutional requirements.
                            </p>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-amber-400/15 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-amber-500" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                                            Global Headquarters
                                        </div>
                                        <div className="text-sm font-medium text-gray-800">Johannesburg, SA</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-amber-400/15 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-amber-500" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                                            Email
                                        </div>
                                        <a
                                            href="mailto:info@lxxi.io"
                                            className="text-sm font-medium text-gray-800 hover:text-amber-500 transition-colors"
                                        >
                                            info@lxxi.io
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: form */}
                        <div className="lg:col-span-7 bg-white p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-black/5" data-aos="fade-left" data-aos-delay="150">
                            {submitted ? (
                                <div
                                    className="h-full min-h-[320px] flex flex-col items-center justify-center text-center"
                                    data-aos="zoom-in"
                                >
                                    <div className="w-16 h-16 rounded-full bg-amber-400/15 flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-9 h-9 text-amber-500" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">Request Received</h3>
                                    <p className="text-gray-500 max-w-sm leading-relaxed">
                                        Thank you, {form.fullName.split(" ")[0] || "there"}. Our team will review your
                                        inquiry and respond with complete discretion.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setForm(initialForm);
                                            setSubmitted(false);
                                        }}
                                        className="mt-8 text-sm font-semibold text-amber-500 hover:text-amber-600 transition-colors"
                                    >
                                        Submit another inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="fullName" className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                id="fullName"
                                                name="fullName"
                                                type="text"
                                                value={form.fullName}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className={inputClasses}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="organization" className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                                                Organization
                                            </label>
                                            <input
                                                id="organization"
                                                name="organization"
                                                type="text"
                                                value={form.organization}
                                                onChange={handleChange}
                                                placeholder="Institutional Fund LP"
                                                className={inputClasses}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="sector" className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                                            Sector of Interest
                                        </label>
                                        <select
                                            id="sector"
                                            name="sector"
                                            value={form.sector}
                                            onChange={handleChange}
                                            className={inputClasses}
                                        >
                                            {sectorOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Briefly describe your investment requirements..."
                                            className={`${inputClasses} resize-none`}
                                        />
                                    </div>

                                    {error && (
                                        <p className="text-sm text-red-500 font-medium">{error}</p>
                                    )}

                                    <button
                                        type="submit"
                                        className="w-full bg-amber-400 hover:bg-amber-300 transition-all duration-300 text-black
                                   font-bold uppercase tracking-wider px-6 py-4 rounded-xl text-sm"
                                    >
                                        Submit Consultation Request
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstitutionalInquiry;
