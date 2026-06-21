import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const stats = [
    { value: "$1.4B+", label: "ASSETS UNDER ADVICE" },
    { value: "12", label: "AFRICAN MARKETS" },
    { value: "85+", label: "STRUCTURED DEALS" },
    { value: "100%", label: "REGULATORY COMPLIANCE" },
];

const approachSteps = [
    {
        number: "01",
        title: "Identify",
        description: "Rigorous sourcing of off-market opportunities through local intelligence.",
        link: "#",
    },
    {
        number: "02",
        title: "Assess",
        description: "Deep-dive due diligence and multi-layered risk mitigation strategies.",
        link: "#",
    },
    {
        number: "03",
        title: "Invest",
        description: "Strategic capital deployment and structured transaction structuring for stability.",
        link: "#",
    },
    {
        number: "04",
        title: "Grow",
        description: "Active asset management and strategic value creation in the ground.",
        link: "#",
    },
    {
        number: "05",
        title: "Realize",
        description: "Exit-oriented strategies designed to maximise shareholder returns.",
        link: "#",
    },
];

const StrategicFootprint = () => {

    return (
        <div className="bg-black text-white">
            {/* Stats Bar */}
            <section className="bg-white text-black pt-12 border-b border-white/10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
                    Strategic African <span className='text-amber-400 font-playfair'>Footprint</span>
                </h2>
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center bg-black/80 p-6 rounded-xl"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm uppercase tracking-widest text-gray-200">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Golden Banner */}
            <div className="bg-linear-to-r from-amber-400 to-yellow-400 py-12 px-6 text-black">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-black/10 rounded-full px-5 py-2 mb-6">
                        <div className="w-3 h-3 bg-black rounded-full animate-pulse" />
                        <span className="text-sm font-semibold tracking-wider">STRATEGIC PRESENCE</span>
                    </div>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed">
                        Operating across major hubs including Lagos, Nairobi, Johannesburg, and Casablanca.
                        Our regional presence enables us to navigate complex local regulatory environments with institutional precision.
                    </p>
                </div>
            </div>

            {/* Our Approach Section */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="mb-16">
                    <div className="uppercase text-amber-400 text-sm tracking-[3px] font-medium mb-3">
                        OUR APPROACH
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        How LXXI Creates Long<br />Term Value
                    </h2>
                </div>

                {/* Approach Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {approachSteps.map((step, index) => (
                        <div
                            key={index}
                            className="group bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            <div className="text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors mb-6">
                                {step.number}
                            </div>

                            <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>

                            <p className="text-gray-400 leading-relaxed flex-1 mb-8">
                                {step.description}
                            </p>

                            <Link
                                href={step.link}
                                className="inline-flex items-center gap-3 text-amber-400 font-medium group-hover:gap-4 transition-all mt-auto"
                            >
                                Learn More
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StrategicFootprint;