import { ShieldCheck, Globe2, LineChart, Lock } from 'lucide-react';

const reasons = [
    {
        icon: ShieldCheck,
        title: 'Institutional Governance',
        description: 'Global standards of compliance, reporting, and risk oversight applied to every mandate.',
    },
    {
        icon: Globe2,
        title: 'On-the-Ground Reach',
        description: 'Proprietary networks across Africa\'s primary economic hubs unlock off-market access.',
    },
    {
        icon: LineChart,
        title: 'Aligned Returns',
        description: 'We co-invest and structure incentives so our interests sit alongside yours.',
    },
    {
        icon: Lock,
        title: 'Complete Discretion',
        description: 'Enquiries and allocations are handled with confidentiality at every stage.',
    },
];

const investorTypes = [
    {
        title: 'Institutional Investors',
        description: 'Pension funds, sovereign allocators, and insurers seeking diversified African exposure.',
    },
    {
        title: 'Family Offices',
        description: 'Multi-generational capital looking for differentiated, long-horizon real-asset strategies.',
    },
    {
        title: 'High-Net-Worth Individuals',
        description: 'Qualified investors pursuing curated co-investment and structured opportunities.',
    },
    {
        title: 'DFIs & Development Capital',
        description: 'Partners blending commercial returns with measurable developmental impact.',
    },
];

const stats = [
    { value: '$2B+', label: 'Sector Exposure' },
    { value: '15+', label: 'African Markets' },
    { value: '85+', label: 'Structured Deals' },
    { value: 'A+', label: 'Institutional Rigor' },
];

const WhyPartner = () => {
    return (
        <>
            {/* Why partner */}
            <section className="bg-[#0A0A0A] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                    <div className="mb-12 md:mb-16 max-w-3xl">
                        <div className="flex items-center gap-3 mb-5" data-aos="fade-right">
                            <div className="h-px w-12 bg-amber-400" />
                            <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                                Why Partner With Us
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-up">
                            A bridge between global capital and{' '}
                            <span className="font-playfair italic text-amber-400">African growth.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={reason.title}
                                    className="group bg-[#111111] border border-white/10 rounded-3xl p-7 hover:border-amber-400/40 hover:-translate-y-2 transition-all duration-500"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="w-12 h-12 bg-amber-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6 text-amber-400" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats band */}
            <div className="bg-linear-to-r from-amber-400 to-yellow-400 text-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 md:py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={stat.label} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-xs uppercase tracking-[3px] font-semibold text-black/70">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Investor types */}
            <section className="bg-gray-100 text-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                    <div className="mb-12 md:mb-16 max-w-3xl">
                        <div className="flex items-center gap-3 mb-5" data-aos="fade-right">
                            <div className="h-px w-12 bg-amber-400" />
                            <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                                Who We Work With
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-up">
                            Built for discerning{' '}
                            <span className="font-playfair italic text-amber-400">capital partners.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {investorTypes.map((type, index) => (
                            <div
                                key={type.title}
                                className="group bg-white border border-black/5 rounded-3xl p-8 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <h3 className="text-2xl font-semibold mb-3 group-hover:text-amber-500 transition-colors">
                                    {type.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyPartner;
