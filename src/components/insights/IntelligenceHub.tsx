import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react';

const recentInsights = [
    {
        category: "Macro",
        title: "Patient Population: The New Frontier of Trust",
        image: "/carousel2.png",
        readTime: "6 min read",
    },
    {
        category: "Capital Flows",
        title: "Gold Reserves Reshape the Post-Pandemic Bloc",
        image: "/carousel3.png",
        readTime: "8 min read",
    },
];

const trendingInsights = [
    "Why Frontier Markets Are Outperforming",
    "The Case for African Sovereign Debt",
    "De-dollarisation and Regional Trade",
    "Energy Transition: Who Funds the Grid?",
];

const popularReports = [
    { title: "2026 Africa Allocation Outlook", meta: "Flagship · 48 pages" },
    { title: "Private Credit in Frontier Markets", meta: "Sector · 22 pages" },
    { title: "Infrastructure Yield Compendium", meta: "Data · 31 pages" },
];

const marketSnapshot = [
    { name: "JSE All-Share", value: "78,420", change: "+1.2%", up: true, highlight: true },
    { name: "NGX 30", value: "3,114", change: "+0.4%", up: true, highlight: false },
    { name: "Nairobi NSE 20", value: "1,896", change: "-0.6%", up: false, highlight: false },
    { name: "EGX 30", value: "29,740", change: "+2.1%", up: true, highlight: true },
];

const IntelligenceHub = () => {
    return (
        <section className="bg-[#0A0A0A] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                    {/* Main column */}
                    <div className="lg:col-span-2 space-y-14">
                        {/* Featured Insights */}
                        <div data-aos="fade-up">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-10 bg-amber-400" />
                                <span className="text-amber-400 text-xs tracking-[3px] font-medium uppercase">
                                    Featured Insights
                                </span>
                            </div>

                            <Link
                                href="#"
                                className="group block relative h-[26rem] rounded-3xl overflow-hidden border border-white/10"
                            >
                                <Image
                                    src="/carousel1.png"
                                    alt="The Future of Sovereign Wealth"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />
                                <div className="absolute inset-0 p-7 md:p-10 flex flex-col justify-end">
                                    <span className="self-start bg-amber-400 text-black text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                                        Sovereign Strategy
                                    </span>
                                    <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-3 max-w-xl">
                                        The Future of Sovereign Wealth and the New Capital Order
                                    </h3>
                                    <p className="text-gray-300 text-sm md:text-base max-w-lg mb-5 leading-relaxed">
                                        How resource-rich nations are rewriting the playbook on long-horizon
                                        institutional capital across the continent.
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                                        Read Analysis
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Recent Intelligence */}
                        <div data-aos="fade-up">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-10 bg-amber-400" />
                                <span className="text-amber-400 text-xs tracking-[3px] font-medium uppercase">
                                    Recent Intelligence
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {recentInsights.map((insight, index) => (
                                    <Link
                                        key={insight.title}
                                        href="#"
                                        className="group bg-[#111111] border border-white/10 rounded-2xl overflow-hidden
                               hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-500"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 120}
                                    >
                                        <div className="relative h-44 overflow-hidden">
                                            <Image
                                                src={insight.image}
                                                alt={insight.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                                        </div>
                                        <div className="p-5">
                                            <span className="text-amber-400 text-[11px] font-bold uppercase tracking-wider">
                                                {insight.category}
                                            </span>
                                            <h4 className="text-lg font-semibold leading-snug mt-2 mb-3 group-hover:text-amber-400 transition-colors">
                                                {insight.title}
                                            </h4>
                                            <span className="text-gray-500 text-xs">{insight.readTime}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Market Snapshot */}
                        <div data-aos="fade-up">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-10 bg-amber-400" />
                                <span className="text-amber-400 text-xs tracking-[3px] font-medium uppercase">
                                    Market Snapshot
                                </span>
                            </div>

                            <div className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden">
                                {marketSnapshot.map((row, index) => (
                                    <div
                                        key={row.name}
                                        className={`flex items-center justify-between px-5 md:px-6 py-4 ${index !== marketSnapshot.length - 1 ? "border-b border-white/5" : ""
                                            } ${row.highlight ? "bg-amber-400/5" : ""}`}
                                    >
                                        <span className="text-sm font-medium text-gray-200">{row.name}</span>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm font-semibold tabular-nums">{row.value}</span>
                                            <span
                                                className={`flex items-center gap-1 text-xs font-semibold tabular-nums w-16 justify-end ${row.up ? "text-emerald-400" : "text-red-400"
                                                    }`}
                                            >
                                                {row.up ? (
                                                    <TrendingUp className="w-3.5 h-3.5" />
                                                ) : (
                                                    <TrendingDown className="w-3.5 h-3.5" />
                                                )}
                                                {row.change}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* Trending Insights */}
                        <div
                            className="bg-[#111111] border border-white/10 rounded-2xl p-6"
                            data-aos="fade-left"
                        >
                            <h3 className="text-lg font-semibold mb-5">Trending Insights</h3>
                            <ul className="space-y-5">
                                {trendingInsights.map((item, index) => (
                                    <li key={item}>
                                        <Link href="#" className="group flex gap-4 items-start">
                                            <span className="text-amber-400 font-bold text-lg leading-none w-6 shrink-0">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-sm text-gray-300 leading-snug group-hover:text-amber-400 transition-colors">
                                                {item}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Reports */}
                        <div
                            className="bg-[#111111] border border-white/10 rounded-2xl p-6"
                            data-aos="fade-left"
                            data-aos-delay="120"
                        >
                            <h3 className="text-lg font-semibold mb-5">Popular Reports</h3>
                            <ul className="space-y-4">
                                {popularReports.map((report) => (
                                    <li key={report.title}>
                                        <Link
                                            href="#"
                                            className="group flex items-start justify-between gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0"
                                        >
                                            <div>
                                                <p className="text-sm font-medium text-gray-200 leading-snug group-hover:text-amber-400 transition-colors">
                                                    {report.title}
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1">{report.meta}</p>
                                            </div>
                                            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-amber-400 shrink-0 transition-colors" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default IntelligenceHub;
