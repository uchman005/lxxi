const InvestmentTeamCTA = () => {
    return (
        <section className="bg-black py-28 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Top Tagline */}
                <div className="flex items-center justify-center gap-4 mb-6" data-aos="fade-up">
                    <div className="h-px w-12 bg-amber-400" />
                    <span className="text-amber-400 uppercase tracking-[3px] text-sm font-semibold">
                        Investing in Africa&apos;s Future
                    </span>
                    <div className="h-px w-12 bg-amber-400" />
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8" data-aos="fade-up" data-aos-delay="100">
                    Speak With Our <span className="text-amber-400 font-playfair">Investment Team</span>
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="200">
                    We work with a select group of investors who share our conviction in Africa&apos;s long-term potential.
                    Enquiries are handled with complete discretion.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center text-sm items-center mb-16" data-aos="fade-up" data-aos-delay="300">
                    <a
                        href="/opportunities"
                        className="inline-block bg-amber-400 hover:bg-amber-500 transition-all text-black font-semibold px-6 py-5 rounded-xl text-lg tracking-wide min-w-[260px]"
                    >
                        EXPLORE OPPORTUNITIES
                    </a>

                    <a
                        href="/contact"
                        className="inline-block border border-white/60 hover:border-white hover:bg-white/10 transition-all text-white font-medium px-6 py-5 rounded-xl text-lg tracking-wide min-w-[260px]"
                    >
                        REQUEST INFORMATION
                    </a>
                </div>

                {/* Investor Types */}
                <p className="text-gray-400 text-base tracking-wide" data-aos="fade-up" data-aos-delay="400">
                    Institutional investors &nbsp;·&nbsp; Family offices &nbsp;·&nbsp; High-net-worth individuals
                </p>
            </div>

            {/* Subtle Background Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -z-10" />
        </section>
    );
};

export default InvestmentTeamCTA;