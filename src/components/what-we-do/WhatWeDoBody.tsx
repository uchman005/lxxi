import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Layers, Building2, Banknote, Network } from 'lucide-react';

const strategies = [
    {
        icon: Building2,
        title: 'Private Equity',
        description: 'Control and growth investments in established, cash-generative businesses across the continent.',
        image: '/carousel2.png',
    },
    {
        icon: Layers,
        title: 'Real Estate',
        description: 'Income-producing and development real assets in high-demand urban and logistics corridors.',
        image: '/carousel3.png',
    },
    {
        icon: Banknote,
        title: 'Private Credit',
        description: 'Bespoke, secured lending and structured financing for resilient, asset-backed borrowers.',
        image: '/service-hero.jpg',
    },
    {
        icon: Network,
        title: 'Infrastructure',
        description: 'Long-duration capital for the energy, logistics, and digital backbone of African growth.',
        image: '/approach.png',
    },
];

const reasons = [
    {
        title: 'Structural Tailwinds',
        description: 'We invest behind demographics, urbanisation, and integration trends that compound over decades — not quarters.',
    },
    {
        title: 'Downside Discipline',
        description: 'Capital preservation comes first. Every position is structured for resilience before it is structured for upside.',
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
                                Core Strategies
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-up">
                            Four disciplines, one{' '}
                            <span className="font-playfair italic text-amber-400">conviction.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {strategies.map((strategy, index) => {
                            const Icon = strategy.icon;
                            return (
                                <div
                                    key={strategy.title}
                                    className="group relative h-72 rounded-3xl overflow-hidden border border-white/10 hover:-translate-y-2 transition-all duration-500"
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
                                    Why Invest
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                                Built for the long{' '}
                                <span className="font-playfair italic text-amber-400">arc of growth.</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed max-w-md mb-8">
                                Africa is not a single trade — it is a generational opportunity. We position
                                capital where fundamentals, not headlines, drive returns.
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
