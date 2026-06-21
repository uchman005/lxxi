const SectorsHero = () => {
    return (
        <div className="min-h-screen pt-16 md:pt-0 bg-[#0A0A0A] text-white overflow-hidden">
            <div className="relative min-h-screen flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.30), rgba(10, 10, 10, 0.88)),
                             url('/carousel1.png')`,
                        backgroundPosition: 'center 20%',
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
                    <div className="max-w-3xl">
                        {/* Eyebrow */}
                        <div
                            className="flex items-center gap-3 mb-6"
                            data-aos="fade-down"
                            data-aos-delay="150"
                        >
                            <div className="h-px w-12 bg-amber-400" />
                            <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                                Our Sectors
                            </span>
                        </div>

                        {/* Heading */}
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Investing where<br />
                            Africa is building{" "}
                            <span className="font-playfair italic text-amber-400">tomorrow.</span>
                        </h1>

                        {/* Description */}
                        <p
                            className="max-w-xl text-md md:text-lg text-gray-300 leading-relaxed mb-10"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            We focus on sectors that anchor Africa&apos;s long-term productivity,
                            unlocking inelastic growth and delivering resilient returns for our investors.
                        </p>

                        {/* Buttons */}
                        <div
                            className="flex flex-wrap gap-4"
                            data-aos="fade-up"
                            data-aos-delay="700"
                        >
                            <a
                                href="#sectors-grid"
                                className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 text-black
                           font-semibold px-8 py-4 rounded-full flex items-center gap-3 group text-lg"
                                data-aos="zoom-in"
                                data-aos-delay="850"
                            >
                                View All Sectors
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>

                            <a
                                href="/contact"
                                className="border border-white/60 hover:border-white/90 hover:bg-white/5
                           transition-all duration-300 font-medium px-8 py-4 rounded-full text-lg"
                                data-aos="zoom-in"
                                data-aos-delay="950"
                            >
                                Partner With Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom City Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />
            </div>
        </div>
    );
};

export default SectorsHero;
