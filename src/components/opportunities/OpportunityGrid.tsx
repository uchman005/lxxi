import { MapPin, Lock, Send, ShieldCheck, Handshake } from 'lucide-react';

/** Sector focus areas. Live mandates are never published here — they are shared privately after engagement. */
const focusAreas = [
    {
        title: 'Real Estate',
        sector: 'Real Estate',
        geography: 'Across Africa',
        description:
            'Property acquisitions, disposals, development financing, and strategic property partnerships in high-demand urban and logistics corridors.',
    },
    {
        title: 'Commodity Trading',
        sector: 'Commodities',
        geography: 'Across Africa',
        description:
            'Structured transactions in agricultural commodities, minerals, metals, and energy products — verified suppliers matched with qualified international buyers.',
    },
    {
        title: 'Infrastructure & Capital Goods',
        sector: 'Infrastructure',
        geography: 'Across Africa',
        description:
            'Financing and commercial partnerships for infrastructure, industrial equipment, transportation assets, and energy projects.',
    },
    {
        title: 'Private Equity & Private Credit',
        sector: 'Private Markets',
        geography: 'Across Africa',
        description:
            'Businesses seeking investment or financing, connected with institutional investors, private capital providers, and lenders.',
    },
];

const steps = [
    {
        icon: Send,
        title: 'Submit an Enquiry',
        description:
            'Tell us what you are looking for through the confidential enquiry form below, or begin formally with our Client Engagement Form.',
    },
    {
        icon: ShieldCheck,
        title: 'Engagement & Verification',
        description:
            'Engagements proceed under our Terms of Engagement and Trade Protocol. Every party is verified before any introduction is made.',
    },
    {
        icon: Handshake,
        title: 'Matching & Execution',
        description:
            'Qualified parties are matched to suitable mandates, and LXXI coordinates structuring, documentation, and closing.',
    },
];

const OpportunityGrid = () => {
    return (
        <>
            {/* Focus areas */}
            <section className="bg-[#0A0A0A] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                    <div className="mb-12 md:mb-16 max-w-3xl">
                        <div className="flex items-center gap-3 mb-5" data-aos="fade-right">
                            <div className="h-px w-12 bg-amber-400" />
                            <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                                Where We Source
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5" data-aos="fade-up">
                            Selectively sourced,{' '}
                            <span className="font-playfair italic text-amber-400">rigorously structured.</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                            Live mandates are shared privately with qualified clients and counterparties once they have
                            engaged LXXI and completed verification. We do not publish deal terms or return targets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {focusAreas.map((area, index) => (
                            <div
                                key={area.title}
                                className="group bg-[#111111] border border-white/10 rounded-3xl p-7 md:p-8 hover:border-amber-400/40 hover:-translate-y-2 transition-all duration-500"
                                data-aos="fade-up"
                                data-aos-delay={(index % 2) * 120}
                            >
                                <div className="flex items-start justify-between gap-4 mb-5">
                                    <span className="bg-amber-400/10 text-amber-400 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                                        {area.sector}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 text-gray-400">
                                        <Lock className="w-3 h-3" />
                                        On request
                                    </span>
                                </div>

                                <h3 className="text-2xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
                                    {area.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">{area.description}</p>

                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 border-t border-white/5">
                                    <span className="flex items-center gap-2 text-sm text-gray-300">
                                        <MapPin className="w-4 h-4 text-amber-400" />
                                        {area.geography}
                                    </span>
                                    <span className="flex items-center gap-2 text-sm text-gray-300">
                                        <ShieldCheck className="w-4 h-4 text-amber-400" />
                                        Shared after verification
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
                            From enquiry to{' '}
                            <span className="font-playfair italic text-amber-400">execution.</span>
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
