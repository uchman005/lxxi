const thesisPoints = [
    {
        number: "01",
        title: "Macroeconomic Alignment",
        description: "Targeting industries aligned with continental GDP growth and trade integration trends.",
    },
    {
        number: "02",
        title: "Regional Connectivity",
        description: "Prioritising assets that reduce cross-border value chains and logistics efficiency.",
    },
    {
        number: "03",
        title: "Risk Mitigation",
        description: "Applying institutional-grade diligence to manage sovereign and operational volatility.",
    },
];

const stats = [
    { value: "$2B+", label: "Sector Exposure" },
    { value: "15+", label: "African Markets" },
    { value: "A+", label: "Institutional Rigor" },
];

const InvestmentThesis = () => {
    return (
        <section className="bg-gray-100 text-black">
            {/* Thesis Block */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left: copy */}
                    <div className="lg:col-span-6" data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                            Our Investment{" "}
                            <span className="font-playfair italic text-amber-400">Thesis</span>
                        </h2>
                        <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                            <p>
                                LXXI&apos;s sector selection is not arbitrary. We operate at the intersection of
                                macroeconomic forecasting and on-the-ground operational intelligence. Every asset
                                class we engage with must meet our strict criteria for structural resilience and
                                regional growth potential.
                            </p>
                            <p>
                                We prioritise sectors that exhibit capital-demand inelasticity, where our structured
                                brokerage approach can bridge the gap between global capital and critical African
                                development needs.
                            </p>
                            <p>
                                Our methodology focuses on risk-adjusted returns, ensuring that institutional rigour
                                is applied at every phase of the asset lifecycle — from initial identification to
                                long-term value realisation.
                            </p>
                        </div>
                    </div>

                    {/* Right: numbered points card */}
                    <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="150">
                        <div className="bg-white border border-black/5 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5">
                            <div className="space-y-8">
                                {thesisPoints.map((point, index) => (
                                    <div
                                        key={point.number}
                                        className="flex gap-5 group"
                                        data-aos="fade-up"
                                        data-aos-delay={200 + index * 120}
                                    >
                                        <span className="text-amber-400 font-bold text-lg leading-none pt-1 shrink-0 w-8">
                                            {point.number}
                                        </span>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-semibold mb-1.5">
                                                {point.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Banner */}
            <div className="bg-linear-to-r from-amber-400 to-yellow-400 text-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 md:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                            >
                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm uppercase tracking-[3px] font-semibold text-black/70">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestmentThesis;
