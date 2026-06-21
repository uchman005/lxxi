import { GiAfrica } from "react-icons/gi";

const AfricaFocusSection = () => {
    const regions = [
        {
            title: "The scale of African opportunity",
            description: "Africa represents one of the most compelling long-term investment landscapes globally.",
            highlight: true,
        },
        {
            title: "East Africa",
            description: "Infrastructure-led growth corridors and expanding consumer markets across key economies.",
        },
        {
            title: "West Africa",
            description: "Private equity, credit, and commodity-driven opportunities in high-growth frontier markets.",
        },
        {
            title: "South Africa",
            description: "Sophisticated sovereign and private markets with institutional-grade investment potential.",
        },
        {
            title: "North Africa",
            description: "Strategic gateway markets connecting Africa, Europe, and the Middle East through trade and industry.",
        },
    ];

    return (
        <section className="bg-[#0A0A0A] py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
                    <span className="text-amber-400 uppercase tracking-[4px] text-sm font-semibold mb-4">
                        AFRICA FOCUS
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-4xl">
                        Present Across{' '}
                        <span className="text-amber-400 font-playfair">Africa&apos;s Most Dynamic Markets</span>
                    </h2>
                    <p className="mt-6 text-gray-400 max-w-2xl text-lg">
                        Africa represents one of the most compelling long-term investment landscapes globally.
                        LXXI identifies and develops opportunities across high-growth sectors, combining local insight with global standards.
                    </p>
                </div>

                {/* Africa Map */}
                <div className="relative h-[380px] md:h-[420px] mb-20 flex justify-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="relative w-full max-w-3xl">
                        {/* Placeholder Map - Replace with real SVG or image if needed */}
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-size-[40px_40px] rounded-3xl border border-white/10" />

                        {/* Africa Map Silhouette (using Tailwind + simple CSS) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-[480px] md:text-[540px] font-black text-white/5 tracking-[-0.07em] select-none">
                                <GiAfrica />
                            </div>
                        </div>

                        {/* Region Labels */}
                        <div className="absolute top-32 left-28 text-amber-400 text-sm font-medium flex items-center gap-2">
                            ● WEST AFRICA
                        </div>
                        <div className="absolute top-32 right-28 text-amber-400 text-sm font-medium flex items-center gap-2">
                            ● EAST AFRICA
                        </div>
                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-amber-400 text-sm font-medium flex items-center gap-2">
                            ● SOUTH AFRICA
                        </div>
                        <div className="absolute top-5 left-1/2 -translate-x-1/2 text-amber-400 text-sm font-medium flex items-center gap-2">
                            ● NORTH AFRICA
                        </div>
                    </div>
                </div>

                {/* Regions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6" data-aos="fade-up" data-aos-delay="400">
                    {regions.map((region, index) => (
                        <div
                            key={index}
                            className={`group p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col
                ${region.highlight
                                    ? 'border-amber-400/50 bg-linear-to-b from-amber-400/10 to-transparent'
                                    : 'border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10'}`}
                        >
                            <h3 className={`text-2xl font-semibold mb-6 transition-colors duration-300
                ${region.highlight ? 'text-amber-400' : 'text-white group-hover:text-amber-400'}`}>
                                {region.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed flex-1">
                                {region.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AfricaFocusSection;