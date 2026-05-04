const WhatWeDoSection = () => {
    const stats = [
        {
            number: "5+",
            label: "Core investment sectors across the continent"
        },
        {
            number: "4",
            label: "African regions under active coverage"
        },
        {
            number: "7I",
            label: "A number representing our founding conviction"
        },
    ];

    return (
        <section className="bg-[#0A0A0A] py-24 relative overflow-hidden">
            {/* Background Logo */}
            {/* <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <span className="text-[28rem] font-bold tracking-[-0.05em] text-white/10 select-none">
                    LXXI
                </span>
            </div> */}

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* Left Content */}
                    <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
                        <div className="inline-flex items-center gap-3">
                            <div className="h-px w-12 bg-amber-400" />
                            <span className="text-amber-400 uppercase tracking-[4px] text-sm font-semibold">
                                WHAT WE DO
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            A Structured path to <span className="text-amber-400">African</span><br />
                            Private Markets
                        </h2>

                        <div className="h-1 w-24 bg-amber-400" />
                    </div>

                    {/* Right Description */}
                    <div className="lg:col-span-7 text-lg text-gray-300 leading-relaxed space-y-6" data-aos="fade-left">
                        <p>
                            LXXI is a structured brokerage and investment facilitation platform purpose-built for Africa. We identify, structure, and facilitate investment opportunities across five core sectors — connecting disciplined capital with carefully vetted, high-conviction opportunities that institutional and private investors would otherwise struggle to access.
                        </p>
                        <p>
                            We operate as a trusted intermediary, not a fund manager. Our role is to reduce friction, increase transparency, and create durable alignment between investors and the real assets underlying each transaction.
                        </p>
                        <p>
                            Through this approach, LXXI serves as a critical conduit in Africa’s formalization economy — helping investors access opportunities that are often opaque, difficult to source, and fragmented. By standardizing process, increasing visibility, and aligning incentives, we help investors deploy capital with greater clarity, confidence, and impact.
                        </p>
                    </div>
                </div>

                {/* Statistics Grid */}
                <div className="mt-20 grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group border border-white/10 hover:border-amber-400/30 bg-white/5 hover:bg-white/10 transition-all duration-500 p-10 rounded-3xl backdrop-blur-sm"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-4 group-hover:scale-105 transition-transform duration-500">
                                {stat.number}
                            </div>
                            <div className="space-y-2">
                                <p className="text-lg md:text-xl font-semibold text-white">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;