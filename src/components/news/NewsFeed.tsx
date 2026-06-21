import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const featured = {
    category: 'Press Release',
    date: 'June 2026',
    title: 'LXXI Closes Landmark Cross-Border Infrastructure Mandate',
    excerpt:
        'The transaction marks one of the largest structured infrastructure deals advised by the firm to date, deepening LXXI\'s footprint across East and Southern Africa.',
    image: '/carousel1.png',
    href: '#',
};

const articles = [
    {
        category: 'Market Note',
        date: 'May 2026',
        title: 'Why African Sovereign Debt Is Drawing Institutional Flows',
        image: '/charts/1.png',
        href: '#',
    },
    {
        category: 'Company',
        date: 'May 2026',
        title: 'LXXI Expands Advisory Team Across Nairobi and Lagos',
        image: '/carousel2.png',
        href: '#',
    },
    {
        category: 'Insight',
        date: 'Apr 2026',
        title: 'The Data Centre Boom Reshaping Nairobi\'s Skyline',
        image: '/charts/2.png',
        href: '#',
    },
    {
        category: 'Press Release',
        date: 'Apr 2026',
        title: 'Strategic Partnership Announced With Regional Energy Developer',
        image: '/carousel3.png',
        href: '#',
    },
    {
        category: 'Market Note',
        date: 'Mar 2026',
        title: 'Commodity Corridors: Reading the Next Trade Cycle',
        image: '/charts/3.png',
        href: '#',
    },
    {
        category: 'Company',
        date: 'Mar 2026',
        title: 'LXXI Recognised for Excellence in Frontier-Market Advisory',
        image: '/approach.png',
        href: '#',
    },
];

const NewsFeed = () => {
    return (
        <section className="bg-[#0A0A0A] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                {/* Featured */}
                <Link
                    href={featured.href}
                    className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20 items-center"
                    data-aos="fade-up"
                >
                    <div className="relative h-64 sm:h-80 lg:h-[26rem] rounded-3xl overflow-hidden border border-white/10">
                        <Image
                            src={featured.image}
                            alt={featured.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <span className="bg-amber-400 text-black text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                                {featured.category}
                            </span>
                            <span className="text-gray-500 text-sm">{featured.date}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-amber-400 transition-colors">
                            {featured.title}
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                            {featured.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                            Read Story
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </Link>

                {/* Section label */}
                <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
                    <div className="h-px w-12 bg-amber-400" />
                    <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                        Latest Updates
                    </span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {articles.map((article, index) => (
                        <Link
                            key={article.title}
                            href={article.href}
                            className="group bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-500"
                            data-aos="fade-up"
                            data-aos-delay={(index % 3) * 120}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-amber-400 text-[11px] font-bold uppercase tracking-wider">
                                        {article.category}
                                    </span>
                                    <span className="text-gray-500 text-xs">{article.date}</span>
                                </div>
                                <h3 className="text-lg font-semibold leading-snug flex items-start justify-between gap-3">
                                    <span className="group-hover:text-amber-400 transition-colors">{article.title}</span>
                                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-amber-400 shrink-0 mt-1 transition-colors" />
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsFeed;
