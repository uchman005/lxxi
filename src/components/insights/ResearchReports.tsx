import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const reports = [
    {
        category: "Urban Futures",
        title: "Sustainable Cities: Urban Tech Roadmap",
        image: "/charts/1.png",
        href: "#",
    },
    {
        category: "Trade Corridors",
        title: "The Digital Silk Road: Africa-Asia Corridors",
        image: "/charts/2.png",
        href: "#",
    },
    {
        category: "Digital Assets",
        title: "Crypto-Regulation and Sovereign Issuance",
        image: "/charts/3.png",
        href: "#",
    },
];

const ResearchReports = () => {
    return (
        <section className="bg-white text-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                {/* Header */}
                <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Research <span className="font-playfair italic text-amber-400">Reports</span>
                        </h2>
                        <p className="mt-3 text-gray-600 text-base md:text-lg">
                            Comprehensive thematic studies for long-term allocation.
                        </p>
                    </div>

                    {/* Decorative pagination */}
                    <div className="hidden md:flex items-center gap-3" data-aos="fade-left">
                        <button
                            aria-label="Previous"
                            className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center
                         text-gray-500 hover:border-amber-400 hover:text-amber-500 transition-all duration-200"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            aria-label="Next"
                            className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center
                         text-gray-500 hover:border-amber-400 hover:text-amber-500 transition-all duration-200"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {reports.map((report, index) => (
                        <Link
                            key={report.title}
                            href={report.href}
                            className="group flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                        >
                            {/* Image */}
                            <div className="relative h-60 rounded-2xl overflow-hidden mb-5">
                                <Image
                                    src={report.image}
                                    alt={report.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                                <span className="absolute top-4 left-4 bg-amber-400 text-black text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                                    {report.category}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold leading-snug mb-3 group-hover:text-amber-500 transition-colors">
                                {report.title}
                            </h3>
                            <span className="mt-auto inline-flex items-center gap-2 text-amber-500 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                                Download Access
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchReports;
