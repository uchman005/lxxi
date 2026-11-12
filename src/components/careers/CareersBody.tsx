import { Compass, Users, Sparkles, Mail, ArrowRight } from 'lucide-react';

const values = [
    {
        icon: Compass,
        title: 'Conviction',
        description: 'We back our judgement with rigour and act decisively when others hesitate.',
    },
    {
        icon: Users,
        title: 'Partnership',
        description: 'We win together — with our clients, our partners, and each other.',
    },
    {
        icon: Sparkles,
        title: 'Excellence',
        description: 'We hold institutional standards in everything, from diligence to detail.',
    },
];

const CAREERS_EMAIL = 'business@lxxi.africa';
const careersMailto = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent('Career enquiry — LXXI Limited')}`;

const teams = [
    'Real Estate & Brokerage',
    'Capital Goods, Trade & Infrastructure',
    'Business Development',
    'Legal, Risk & Compliance',
    'Operations',
    'Innovation & Technology',
];

const benefits = [
    'Exposure to complex, cross-border transactions',
    'Work across five business areas and four African regions',
    'Learn directly from an experienced leadership team',
    'A verification-first culture built on integrity',
    'Room to grow with a young, ambitious company',
    'A flat, meritocratic culture',
];

const CareersBody = () => {
    return (
        <>
            {/* Culture / values */}
            <section className="bg-[#0A0A0A] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                    <div className="mb-12 md:mb-16 max-w-3xl">
                        <div className="flex items-center gap-3 mb-5" data-aos="fade-right">
                            <div className="h-px w-12 bg-amber-400" />
                            <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                                Our Culture
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-up">
                            Build a career with{' '}
                            <span className="font-playfair italic text-amber-400">purpose.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className="group bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-amber-400/40 hover:-translate-y-2 transition-all duration-500"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 120}
                                >
                                    <div className="w-12 h-12 bg-amber-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6 text-amber-400" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Open positions */}
            <section id="positions" className="bg-gray-100 text-black scroll-mt-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                    <div className="mb-12 md:mb-16 max-w-3xl">
                        <div className="flex items-center gap-3 mb-5" data-aos="fade-right">
                            <div className="h-px w-12 bg-amber-400" />
                            <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                                Join Us
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-up">
                            No open roles right now —{' '}
                            <span className="font-playfair italic text-amber-400">but talk to us.</span>
                        </h2>
                    </div>

                    <div
                        className="bg-white border border-black/5 rounded-3xl p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                        data-aos="fade-up"
                    >
                        <div className="lg:col-span-7">
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We don&apos;t have advertised vacancies at the moment, but we&apos;re always keen to hear
                                from exceptional people. Send your CV with a short note on the area you&apos;d like to
                                work in, and we&apos;ll keep it on file for future openings.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {teams.map((team) => (
                                    <span
                                        key={team}
                                        className="text-xs font-semibold text-gray-600 bg-gray-100 border border-black/5 px-3 py-1.5 rounded-full"
                                    >
                                        {team}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-5 lg:justify-self-end">
                            <a
                                href={careersMailto}
                                className="group inline-flex items-center gap-3 bg-black text-white text-sm font-semibold px-6 py-4 rounded-full hover:bg-amber-400 hover:text-black transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                Send your CV to {CAREERS_EMAIL}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-[#0A0A0A] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5" data-aos="fade-right">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-px w-12 bg-amber-400" />
                                <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                                    Why LXXI
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                More than a role —{' '}
                                <span className="font-playfair italic text-amber-400">a platform.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="150">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((benefit) => (
                                    <div
                                        key={benefit}
                                        className="flex items-start gap-3 bg-[#111111] border border-white/10 rounded-2xl p-5"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                                        <span className="text-gray-300 text-sm leading-relaxed">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CareersBody;
