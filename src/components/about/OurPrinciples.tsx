import { ShieldCheck, Lightbulb, Handshake, Target } from 'lucide-react';

const principles = [
    {
        number: "01",
        title: "Integrity",
        icon: ShieldCheck,
        description: "We act with absolute transparency and hold ourselves to the highest standards of conduct in every decision, every transaction, every relationship.",
    },
    {
        number: "02",
        title: "Innovation",
        icon: Lightbulb,
        description: "We invest in forward-thinking ideas that solve real challenges across Africa. By backing scalable businesses and emerging sectors, we position capital where growth is both meaningful and enduring.",
    },
    {
        number: "03",
        title: "Collaboration",
        icon: Handshake,
        description: "We build impactful partnerships across markets, institutions, and communities. By aligning global capital with local expertise, we unlock opportunities that create shared and lasting value.",
    },
    {
        number: "04",
        title: "Impact",
        icon: Target,
        description: "We measure success by the strength of the businesses we build and the economies we strengthen. Our investments are designed to deliver sustainable returns while contributing to long-term development across Africa.",
    },
];

const OurPrinciples = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="w-full md:w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-start mb-6 ml-6">
                    <div className="bg-black text-white text-sm font-semibold px-6 py-2 rounded-full">
                        Our Principles
                    </div>
                </div>

                <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-black max-w-6xl leading-tight my-10"
                    data-aos="fade-up"
                >
                    The values that govern every decision
                </h2>

                {/* Principles Grid */}
                <div className="bg-black p-8 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {principles.map((principle, index) => {
                        const IconComponent = principle.icon;

                        return (
                            <div
                                key={index}
                                className={`group relative bg-[#111111] border rounded-3xl p-8 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-400/20`}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                {/* Number */}
                                <div className="text-5xl text-center font-bold text-white/10 group-hover:text-white/20 transition-colors mb-6">
                                    {principle.number}
                                </div>

                                {/* Icon */}
                                <div className="flex justify-center">
                                    <div className={`w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <IconComponent
                                            className={`w-8 h-8 text-amber-400`}
                                            strokeWidth={2}
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl text-center font-semibold mb-4">
                                    {principle.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed text-[15px] flex-1">
                                    {principle.description}
                                </p>

                                {/* Subtle bottom accent */}
                                <div className="h-0.5 w-12 bg-linear-to-r from-amber-400 to-transparent mt-8" />
                            </div>
                        );
                    })}
                </div>

                {/* Footer Statement */}
                <div
                    className="text-center mt-16 text-gray-700 text-md max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    These are not aspirational statements. They are the operating standards by which LXXI has been run for.
                </div>
            </div>
        </section>
    );
};

export default OurPrinciples;