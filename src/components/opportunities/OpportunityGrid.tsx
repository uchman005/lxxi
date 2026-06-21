import { MapPin, TrendingUp, Search, FileSearch, Handshake } from 'lucide-react';

const opportunities = [
    {
        title: 'Grade-A Logistics Park',
        sector: 'Real Estate',
        geography: 'Lagos, Nigeria',
        target: '18–22% IRR',
        status: 'Open',
        statusOpen: true,
        description: 'Development of a last-mile logistics hub serving West Africa\'s fastest-growing consumer corridor.',
    },
    {
        title: 'Structured Commodity Facility',
        sector: 'Commodity Trading',
        geography: 'Pan-African',
        target: '12–15% Yield',
        status: 'Open',
        statusOpen: true,
        description: 'Senior secured facility financing the cross-border flow of agricultural and energy commodities.',
    },
    {
        title: 'Renewable Energy Platform',
        sector: 'Infrastructure',
        geography: 'Nairobi, Kenya',
        target: '16–20% IRR',
        status: 'Closing Soon',
        statusOpen: true,
        description: 'Co-investment into a utility-scale solar and storage platform with contracted offtake.',
    },
    {
        title: 'Growth-Stage Venture Fund',
        sector: 'Private Equity',
        geography: 'Johannesburg, SA',
        target: '20%+ IRR',
        status: 'Allocated',
        statusOpen: false,
        description: 'Catalyst capital for category-defining founders across fintech and industrial technology.',
    },
];

const steps = [
    {
        icon: Search,
        title: 'Express Interest',
        description: 'Submit a confidential request to access the qualified-investor data room.',
    },
    {
        icon: FileSearch,
        title: 'Diligence',
        description: 'Review the structured documentation, terms, and independent diligence findings.',
    },
    {
        icon: Handshake,
        title: 'Commit & Co-Invest',
        description: 'Finalise allocation and invest alongside LXXI under aligned terms.',
    },
];

const OpportunityGrid = () => {
    return (
        <>
            {/* Opportunities */}
            <section className="bg-[#0A0A0A] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                    <div className="mb-12 md:mb-16 max-w-3xl">
                        <div className="flex items-center gap-3 mb-5" data-aos="fade-right">
                            <div className="h-px w-12 bg-amber-400" />
                            <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                                Current Mandates
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-up">
                            Selectively sourced,{' '}
                            <span className="font-playfair italic text-amber-400">rigorously structured.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {opportunities.map((opp, index) => (
                            <div
                                key={opp.title}
                                className="group bg-[#111111] border border-white/10 rounded-3xl p-7 md:p-8 hover:border-amber-400/40 hover:-translate-y-2 transition-all duration-500"
                                data-aos="fade-up"
                                data-aos-delay={(index % 2) * 120}
                            >
                                <div className="flex items-start justify-between gap-4 mb-5">
                                    <span className="bg-amber-400/10 text-amber-400 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                                        {opp.sector}
                                    </span>
                                    <span
                                        className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${opp.statusOpen
                                            ? 'bg-emerald-400/10 text-emerald-400'
                                            : 'bg-white/5 text-gray-500'
                                            }`}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full ${opp.statusOpen ? 'bg-emerald-400 animate-pulse' : 'bg-gray-500'}`} />
                                        {opp.status}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
                                    {opp.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">{opp.description}</p>

                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 border-t border-white/5">
                                    <span className="flex items-center gap-2 text-sm text-gray-300">
                                        <MapPin className="w-4 h-4 text-amber-400" />
                                        {opp.geography}
                                    </span>
                                    <span className="flex items-center gap-2 text-sm text-gray-300">
                                        <TrendingUp className="w-4 h-4 text-amber-400" />
                                        {opp.target}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="bg-gray-100 text-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                    <div className="mb-12 md:mb-16 max-w-3xl">
                        <div className="flex items-center gap-3 mb-5" data-aos="fade-right">
                            <div className="h-px w-12 bg-amber-400" />
                            <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                                How It Works
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-up">
                            From interest to{' '}
                            <span className="font-playfair italic text-amber-400">allocation.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={step.title}
                                    className="bg-white border border-black/5 rounded-3xl p-8"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 120}
                                >
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="w-12 h-12 bg-amber-400/15 rounded-2xl flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-amber-500" strokeWidth={2} />
                                        </div>
                                        <span className="text-4xl font-bold text-black/10">0{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OpportunityGrid;
