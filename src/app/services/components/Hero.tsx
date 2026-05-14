import { Globe, TrendingUp, Target } from 'lucide-react';

function ServiceCards() {
    const serviceCards = [
        {
            icon: Globe,
            title: "Our Services",
            description: "End-to-end Investment solutions built for Africa",
            color: "amber",
        },
        {
            icon: TrendingUp,
            title: "Our Sectors",
            description: "Where we invest to drive growth and impact.",
            color: "emerald",
        },
        {
            icon: Target,
            title: "Our Approach",
            description: "A disciplined process. Aligned Partnerships. Sustainable outcomes.",
            color: "sky",
        },
    ];
    return (
        <div className="w-full max-w-md space-y-2 border border-white/40 bg-white/10 rounded-2xl p-2">
            {serviceCards.map((card, index) => {
                const IconComponent = card.icon;

                return (
                    <div
                        key={index}
                        className="bg-[#111111] border border-white/30 rounded-2xl p-4 hover:border-amber-400/40 
                       transition-all duration-300 group hover:-translate-y-1 flex gap-4 items-center"
                        data-aos="fade-up"
                        data-aos-delay={300 + index * 200}
                    >
                        <div className={`w-12 h-12 rounded-2xl bg-${card.color}-400/10 
                           flex items-center justify-center mb-6 
                           group-hover:scale-110 transition-transform duration-300 mt-2`}>
                            <IconComponent
                                className={`w-7 h-7 text-${card.color}-400`}
                                strokeWidth={2.2}
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-3 text-white">
                                {card.title}
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const ServiceHero = () => {
    return (
        <div className="min-h-screen pt-16 md:pt-0 bg-[#0A0A0A] text-white overflow-hidden">
            {/* Main Hero Section */}
            <div className="relative min-h-screen flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.29), rgba(10, 10, 10, 0.88)), 
                             url('/service-hero.jpg')`,
                        backgroundPosition: 'center 10%'
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div
                        className="lg:col-span-7"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                    >
                        <div className="mb-4" data-aos="fade-down" data-aos-delay="200">
                            <span className="text-amber-400 text-sm tracking-[3px] font-medium">OUR SERVICES</span>
                        </div>

                        <h1
                            className="text-3xl md:text-5xl lg:text-5xl font-bold leading-[1.05] mb-6"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Structured solutions.<br />
                            <span className="font-playfair italic text-amber-400">Real</span>
                            {" "} impact.
                        </h1>

                        <p
                            className="max-w-lg text-md md:text-lg text-gray-300 leading-relaxed mb-10"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            LXXI provides institutional-grade structured brokerage and strategic asset
                            management, bridging the gap between global capital and Africa’s most promising
                            physical assets.
                        </p>

                        {/* Buttons */}
                        <div
                            className="flex flex-wrap gap-4"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            <button
                                className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 text-black 
                           font-semibold px-8 py-4 rounded-full flex items-center gap-3 group text-lg"
                                data-aos="zoom-in"
                                data-aos-delay="900"
                            >
                                Speak with us
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>

                            <button
                                className="border border-white/60 hover:border-white/90 hover:bg-white/5 
                           transition-all duration-300 font-medium px-8 py-4 rounded-full text-lg"
                                data-aos="zoom-in"
                                data-aos-delay="1000"
                            >
                                Explore our Approach
                            </button>
                        </div>
                    </div>

                    {/* Right Sidebar Cards */}
                    <div
                        className="lg:col-span-5 flex justify-end"
                        data-aos="fade-left"
                        data-aos-duration="1100"
                    >
                        <div className="w-full max-w-md space-y-3">
                            <ServiceCards />
                        </div>
                    </div>
                </div>

                {/* Bottom City Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />
            </div>
        </div>
    );
};

export default ServiceHero;
