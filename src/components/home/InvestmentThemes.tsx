import Image from 'next/image';
import Link from 'next/link';

const InvestmentThemes = () => {
    const themes = [
        {
            category: "INFRASTRUCTURE",
            image: "/charts/1.png",
            tag: "Infrastructure & Capital Goods",
            title: "East African Trade & Logistics Corridors",
            description: "Transport, energy, and logistics networks connecting Kenya, Tanzania, and Rwanda — where LXXI structures financing and commercial partnerships for productive assets.",
        },
        {
            category: "AGRI-INDUSTRIAL",
            image: "/charts/2.png",
            tag: "Commodity Trading",
            title: "West African Agri-Commodity Value Chains",
            description: "Cocoa, sesame, grains, and palm products from Nigeria, Ghana, and Côte d'Ivoire — connecting verified suppliers with qualified international buyers.",
        },
        {
            category: "PRIVATE CREDIT",
            image: "/charts/3.png",
            tag: "Private Equity & Private Credit",
            title: "Mid-Market Growth Financing",
            description: "Connecting mid-market African businesses with private credit providers and lenders — filling the gap left by retreating traditional lenders across the continent.",
        },
    ];

    return (
        <section className="bg-[#0A0A0A] py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div data-aos="fade-right">
                        <span className="text-amber-400 uppercase tracking-[3px] text-sm font-semibold">
                            FOCUS
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mt-2">
                            Investment <span className="text-amber-400 font-playfair">Themes</span>
                        </h2>
                    </div>

                    <Link
                        href="/sectors"
                        className="group flex items-center gap-3 text-white hover:text-amber-400 transition-colors mt-6 md:mt-0"
                        data-aos="fade-left"
                    >
                        <span className="text-lg font-medium">EXPLORE OUR SECTORS</span>
                        <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
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
                                    width={400}
                                    height={400}
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent" />

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