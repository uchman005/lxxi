const timelineData = [
    {
        year: "2021",
        title: "Foundation In Abuja",
        description:
            "LXXI was established by partners who believed that African capital, thoughtfully deployed, could reshape the continent’s economic trajectory — a single office, a shared conviction, and the discipline of long-term thinking.",
    },
    {
        year: "2023",
        title: "Global Capital Partnerships",
        description:
            "We built trusted relationships with international investors who believe in Africa’s future. Through these partnerships, we brought funding into key sectors like infrastructure, agriculture, and technology- helping African businesses expand and create opportunities.",
    },
    {
        year: "2026",
        title: "Formalised Engagement Framework",
        description:
            "We introduced our Terms of Engagement and Trade Engagement & Due Diligence Protocol — a verification-first framework that brings clarity, transparency, and discipline to every brokerage, facilitation, and trade transaction.",
    },
];

export default function TimelineSection() {
    return (
        <section className="bg-[#0B0F14] text-white py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

                {/* LEFT SIDE */}
                <div>
                    <p className="text-yellow-400 uppercase text-sm mb-4 tracking-wider">
                        Our Story
                    </p>

                    <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6">
                        A legacy built <br />
                        on <span className="text-yellow-400 italic">conviction</span>
                    </h2>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                        <span className="text-white font-medium">LXXI LIMITED</span> is an African-focused investment, structured brokerage, and strategic transaction facilitation company headquartered in Abuja — purpose-built to originate, structure, and execute complex opportunities across Africa’s frontier and emerging markets.
                    </p>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                        We operate at the intersection of capital, assets, and execution —
                        bridging global investors and African opportunities through deep
                        local intelligence.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        Where global capital often sees risk and fragmentation,{" "}
                        <span className="text-yellow-400">
                            we see structure, alignment, and long-term value
                        </span>
                    </p>

                    <div className="mt-10">
                        <h3 className="text-yellow-400 text-lg tracking-wide">
                            5 YEARS OF MILESTONES
                        </h3>
                        <p className="text-gray-500 text-sm mt-2">
                            Scroll to explore our journey through Africa’s transformative years
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE - TIMELINE */}
                <div className="relative max-h-[500px] overflow-y-auto pr-4">

                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-yellow-500/40" />

                    <div className="space-y-12">
                        {timelineData.map((item, i) => (
                            <div key={i} className="relative pl-12">

                                {/* Dot */}
                                <div className="absolute left-[7px] top-2 w-3 h-3 rounded-full bg-yellow-400" />

                                {/* Year */}
                                <p className="text-yellow-400 text-sm mb-2">
                                    {item.year}
                                </p>

                                {/* Content */}
                                <h4 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h4>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}