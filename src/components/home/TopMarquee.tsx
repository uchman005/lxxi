export default function TopMarquee() {
    const items = [
        "East Africa – Infrastructure & Logistics",
        "West Africa – Private Credit & Agri-industrial",
        "Southern Africa – Real Assets & Energy",
        "North Africa – Real Estate & Strategic Co-investment",
    ];

    return (
        <div className="bg-black text-white overflow-hidden whitespace-nowrap">
            <div className="flex gap-12 animate-marquee py-3 text-sm">
                {[...items, ...items].map((item, i) => (
                    <span key={i} className="relative pl-4">
                        <span className="absolute left-0 text-yellow-400">•</span>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}