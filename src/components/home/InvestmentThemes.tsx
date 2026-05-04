import Image from 'next/image';

const InvestmentThemes = () => {
    const themes = [
        {
            category: "INFRASTRUCTURE",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
            tag: "Real Assets • 2024",
            title: "East Africa Infrastructure Corridor",
            description: "A multi-jurisdictional investment targeting transport, energy, and logistics networks across Kenya, Tanzania, and Rwanda — anchored by long-term concession agreements.",
        },
        {
            category: "AGRI-INDUSTRIAL",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
            tag: "Real Assets • 2024",
            title: "West Africa Agri-Industrial Initiative",
            description: "Scaling productive agricultural land and processing infrastructure across Nigeria, Ghana, and Côte d'Ivoire — capturing compounding value from field to market.",
        },
        {
            category: "PRIVATE CREDIT",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
            tag: "Alternative Investments • 2025",
            title: "Pan-African Private Credit Fund",
            description: "A dedicated credit vehicle providing structured debt to mid-market African businesses, filling the critical gap left by retreating traditional lenders across the continent.",
        },
    ];

    return (
        <section className="bg-[#0A0A0A] py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div data-aos="fade-right">
                        <span className="text-amber-400 uppercase tracking-[3px] text-sm font-semibold">
                            FEATURED
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mt-2">
                            Investment <span className="text-amber-400">Themes</span>
                        </h2>
                    </div>

                    <a
                        href="/insights"
                        className="group flex items-center gap-3 text-white hover:text-amber-400 transition-colors mt-6 md:mt-0"
                        data-aos="fade-left"
                    >
                        <span className="text-lg font-medium">VIEW ALL INSIGHTS</span>
                        <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                </div>

                {/* Themes Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {themes.map((theme, index) => (
                        <div
                            key={index}
                            className="group bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden hover:border-amber-400/30 transition-all duration-500 flex flex-col h-full"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={theme.image}
                                    alt={theme.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                                {/* Category Label */}
                                <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md px-5 py-1.5 rounded-full text-xs font-semibold tracking-widest text-amber-400 border border-amber-400/30">
                                    {theme.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <p className="text-amber-400 text-sm font-medium mb-3">
                                    {theme.tag}
                                </p>

                                <h3 className="text-2xl font-semibold text-white leading-tight mb-4 group-hover:text-amber-400 transition-colors">
                                    {theme.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed text-[15.5px] flex-1">
                                    {theme.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InvestmentThemes;