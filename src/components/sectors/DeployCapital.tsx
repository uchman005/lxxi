import Image from 'next/image';
import { Building2, Ship, Network, TrendingUp } from 'lucide-react';

const sectors = [
    {
        title: "Real Estate",
        icon: Building2,
        image: "/carousel2.png",
        description: "Structured developments, real assets and strategic urban-growth opportunities across high-demand African corridors.",
        gold: false,
    },
    {
        title: "Commodity Trading",
        icon: Ship,
        image: "/service-hero.jpg",
        description: "Cross-border flows of raw energy, agriculture and metals to markets, structured for volume, velocity and value.",
        gold: true,
    },
    {
        title: "General Goods & Infrastructure",
        icon: Network,
        image: "/approach.png",
        description: "Supporting the systems, logistics and trade networks that power modern economies and enable regional connectivity.",
        gold: false,
    },
    {
        title: "Private Equity & Venture Catalysis",
        icon: TrendingUp,
        image: "/carousel3.png",
        description: "Backing complex businesses and ambitious founders shaping the next growth cycle with conviction and discipline.",
        gold: true,
    },
];

const DeployCapital = () => {
    return (
        <section id="sectors-grid" className="bg-white text-black scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                {/* Heading */}
                <div className="mb-12 md:mb-16">
                    <div className="flex items-center gap-3 mb-5" data-aos="fade-right">
                        <div className="h-px w-12 bg-amber-400" />
                        <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                            Our Sectors
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Where we deploy capital &{" "}
                        <span className="font-playfair italic text-amber-400">create impact.</span>
                    </h2>
                    <p
                        className="mt-5 max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        We deploy capital and structure partnerships in sectors positioned for
                        resilient, long-term growth.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sectors.map((sector, index) => {
                        const IconComponent = sector.icon;
                        return (
                            <div
                                key={sector.title}
                                className="group relative h-72 md:h-80 rounded-3xl overflow-hidden border border-black/5
                           transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30"
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                            >
                                {/* Image */}
                                <Image
                                    src={sector.image}
                                    alt={sector.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end">
                                    <div className="w-12 h-12 rounded-2xl bg-amber-400/15 backdrop-blur-sm border border-amber-400/30
                               flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-6 h-6 text-amber-400" strokeWidth={2} />
                                    </div>
                                    <h3
                                        className={`text-2xl md:text-3xl font-bold mb-2 ${sector.gold ? "text-amber-400" : "text-white"
                                            }`}
                                    >
                                        {sector.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed max-w-md
                               opacity-90 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0
                               transition-all duration-500">
                                        {sector.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DeployCapital;
