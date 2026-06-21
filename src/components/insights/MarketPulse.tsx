const tickers = [
    { label: "Brent Crude", value: "$84.12", change: "+0.4%", up: true },
    { label: "Gold (Spot)", value: "$2,662.50", change: "+0.9%", up: true },
    { label: "USD/ZAR", value: "19.42", change: "+0.1%", up: true },
    { label: "NGN/USD", value: "1,548.30", change: "-0.3%", up: false },
    { label: "MSCI EFM Africa", value: "1,204.6", change: "+0.6%", up: true },
];

const MarketPulse = () => {
    return (
        <div className="bg-black border-y border-white/10 text-white flex items-stretch overflow-hidden">
            {/* Fixed label */}
            <div className="shrink-0 flex items-center gap-2 bg-amber-400 text-black px-4 md:px-6 py-3">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                <span className="text-xs md:text-sm font-bold tracking-wider whitespace-nowrap">
                    MARKET PULSE
                </span>
            </div>

            {/* Scrolling ticker */}
            <div className="relative flex-1 overflow-hidden whitespace-nowrap flex items-center">
                <div className="flex gap-10 animate-marquee py-3 text-sm">
                    {[...tickers, ...tickers].map((item, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span className="text-gray-300">{item.label}</span>
                            <span className="font-semibold">{item.value}</span>
                            <span className={item.up ? "text-emerald-400" : "text-red-400"}>
                                {item.up ? "▲" : "▼"} {item.change.replace(/^[+-]/, "")}
                            </span>
                            <span className="text-white/20 pl-6">|</span>
                        </span>
                    ))}
                    {/* Trending tag duplicated for seamless loop */}
                    {[0, 1].map((i) => (
                        <span key={`trend-${i}`} className="flex items-center gap-2 pr-10">
                            <span className="text-amber-400 font-semibold tracking-wide">TRENDING</span>
                            <span className="text-gray-300">Data Center Growth in Nairobi</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarketPulse;
