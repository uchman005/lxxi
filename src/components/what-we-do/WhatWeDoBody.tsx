import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Banknote, Network, Ship, Handshake } from 'lucide-react';

const strategies = [
    {
        icon: Banknote,
        title: 'Private Equity & Private Credit',
        description: 'Connecting businesses seeking investment or financing with institutional investors, private capital providers, lenders, and strategic investment partners.',
        image: '/service-hero.jpg',
    },
    {
        icon: Building2,
        title: 'Real Estate',
        description: 'Facilitating property acquisitions, disposals, development financing, real estate investments, and strategic property partnerships.',
        image: '/carousel3.png',
    },
    {
        icon: Network,
        title: 'Infrastructure & Capital Goods',
        description: 'Structuring financing and commercial partnerships for infrastructure, industrial equipment, transportation assets, energy projects, and other productive assets.',
        image: '/approach.png',
    },
    {
        icon: Ship,
        title: 'Commodity Trading',
        description: 'Facilitating structured transactions in agricultural commodities, minerals, metals, and energy products, connecting verified suppliers with qualified international buyers.',
        image: '/carousel1.png',
    },
    {
        icon: Handshake,
        title: 'Strategic Investments & Partnerships',
        description: 'Originating opportunities, structuring transactions, and bringing together the right financial and commercial partners to execute complex business projects.',
        image: '/carousel2.png',
    },
];

const reasons = [
    {
        title: 'Structural Tailwinds',
        description: 'We focus on demographics, urbanisation, and integration trends that compound over decades — not quarters.',
    },
    {
        title: 'Verify First, Commit Second',
        description: 'Every party and proposition is verified before commitments are made. Transactions are structured for resilience before they are structured for upside.',
    },
];

const WhatWeDoBody = () => {
    return (
        <>
            {/* Core strategies */}
            <section className="bg-[#0A0A0A] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                    <div className="mb-12 md:mb-16 max-w-3xl">
                        <div className="flex items-center gap-3 mb-5" data-aos="fade-right">
                            <div className="h-px w-12 bg-amber-400" />
                            <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                                Core Business Areas
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-up">
                            Five business areas, one{' '}
                            <span className="font-playfair italic text-amber-400">conviction.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {strategies.map((strategy, index) => {
                            const Icon = strategy.icon;
                            return (
                                <div
                                    key={strategy.title}
                                    className={`group relative h-72 rounded-3xl overflow-hidden border border-white/10 hover:-translate-y-2 transition-all duration-500 ${strategies.length % 2 === 1 && index === strategies.length - 1 ? 'md:col-span-2' : ''}`}
                                    data-aos="fade-up"
                                    data-aos-delay={(index % 2) * 120}
                                >
                                    <Image
                                        src={strategy.image}
                                        alt={strategy.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="w-12 h-12 rounded-2xl bg-amber-400/15 backdrop-blur-sm border border-amber-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6 text-amber-400" strokeWidth={2} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{strategy.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed max-w-md">{strategy.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why invest */}
            <section className="bg-gray-100 text-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5" data-aos="fade-right">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-px w-12 bg-amber-400" />
                                <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                                    Why LXXI
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                                Built for the long{' '}
                                <span className="font-playfair italic text-amber-400">arc of growth.</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed max-w-md mb-8">
                                Africa is not a single trade — it is a generational opportunity. We connect capital with opportunities where fundamentals, not headlines, drive value.
                            </p>
                            <Link
                                href="/sectors"
                                className="inline-flex items-center gap-2 text-amber-500 text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all"
                            >
                                Explore Our Sectors
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left" data-aos-delay="150">
                            {reasons.map((reason) => (
                                <div key={reason.title} className="bg-white border border-black/5 rounded-3xl p-8">
                                    <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhatWeDoBody;
