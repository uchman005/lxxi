'use client';

import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const filters = [
    "All",
    "Market Intelligence",
    "Private Equity",
    "Private Credit",
    "Real Estate",
    "Infrastructure",
    "Commodities",
];

const segments = ["Macroeconomics", "Capital Markets"];

const InsightsHero = () => {
    const [query, setQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState(0);
    const [activeSegment, setActiveSegment] = useState(0);

    return (
        <section className="relative bg-[#0A0A0A] text-white overflow-hidden pt-28 md:pt-36 pb-12 md:pb-16">
            {/* Background accents */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.12] pointer-events-none"
                style={{ backgroundImage: "url('/carousel1.png')" }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/80 to-[#0A0A0A] pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-[36rem] h-[36rem] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-6" data-aos="fade-down">
                    <div className="h-px w-12 bg-amber-400" />
                    <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                        Institutional Intelligence
                    </span>
                </div>

                {/* Heading */}
                <h1
                    className="text-4xl md:text-6xl font-bold leading-[1.05] mb-10 max-w-3xl"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Insights That Shape Better{" "}
                    <span className="font-playfair italic text-amber-400">Investment Decisions</span>
                </h1>

                {/* Search row */}
                <div
                    className="flex flex-col sm:flex-row gap-3 max-w-3xl mb-8"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {/* Search input */}
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search the archive..."
                            className="w-full bg-white/5 border border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-sm
                         placeholder:text-gray-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20
                         transition-all duration-200"
                        />
                    </div>

                    {/* Segmented control */}
                    <div className="flex shrink-0 bg-white/5 border border-white/15 rounded-xl p-1">
                        {segments.map((segment, index) => (
                            <button
                                key={segment}
                                type="button"
                                onClick={() => setActiveSegment(index)}
                                className={`px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${activeSegment === index
                                    ? "bg-amber-400 text-black"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {segment}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filter pills */}
                <div
                    className="flex flex-wrap items-center gap-2.5"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    {filters.map((filter, index) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(index)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${activeFilter === index
                                ? "bg-amber-400 text-black"
                                : "border border-white/20 text-gray-300 hover:border-amber-400/50 hover:text-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                    <button
                        type="button"
                        className="flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold tracking-wide
                       border border-white/20 text-gray-300 hover:border-amber-400/50 hover:text-white transition-all duration-200"
                    >
                        More
                        <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InsightsHero;
