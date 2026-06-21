import { Compass, Users, Sparkles, MapPin, ArrowRight, Briefcase, Clock } from 'lucide-react';

const values = [
    {
        icon: Compass,
        title: 'Conviction',
        description: 'We back our judgement with rigour and act decisively when others hesitate.',
    },
    {
        icon: Users,
        title: 'Partnership',
        description: 'We win together — with our investors, our portfolio, and each other.',
    },
    {
        icon: Sparkles,
        title: 'Excellence',
        description: 'We hold institutional standards in everything, from diligence to detail.',
    },
];

const positions = [
    { role: 'Investment Associate', location: 'Johannesburg, SA', type: 'Full-time', team: 'Investments' },
    { role: 'Structured Finance Analyst', location: 'Lagos, Nigeria', type: 'Full-time', team: 'Capital Markets' },
    { role: 'Real Assets Manager', location: 'Nairobi, Kenya', type: 'Full-time', team: 'Asset Management' },
    { role: 'Investor Relations Lead', location: 'Remote · Africa', type: 'Full-time', team: 'Distribution' },
    { role: 'Research Analyst, Macro', location: 'Johannesburg, SA', type: 'Contract', team: 'Research' },
];

const benefits = [
    'Competitive, performance-linked compensation',
    'Carried interest and co-investment access',
    'Pan-African mobility across our hubs',
    'Continuous learning and CFA sponsorship',
    'Private healthcare and wellbeing support',
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
                                Open Positions
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-up">
                            Roles open across{' '}
                            <span className="font-playfair italic text-amber-400">our hubs.</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {positions.map((position, index) => (
                            <a
                                key={position.role}
                                href="/contact"
                                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-black/5 rounded-2xl p-6 md:p-7 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 70}
                            >
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                                        {position.role}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-gray-500">
                                        <span className="flex items-center gap-1.5">
                                            <Briefcase className="w-4 h-4 text-amber-500" />
                                            {position.team}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4 text-amber-500" />
                                            {position.location}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-amber-500" />
                                            {position.type}
                                        </span>
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-2 text-amber-500 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all shrink-0">
                                    Apply
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        ))}
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
