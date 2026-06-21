import { Compass, Handshake, Target } from 'lucide-react';

const pillars = [
    {
        icon: Compass,
        title: 'Discipline',
        description: 'Every decision is governed by a repeatable framework. We never compromise diligence for speed, and we walk away when the structure does not fit.',
    },
    {
        icon: Handshake,
        title: 'Alignment',
        description: 'We co-invest alongside our partners and structure incentives so that our success is inseparable from the success of those we back.',
    },
    {
        icon: Target,
        title: 'Outcomes',
        description: 'We measure ourselves on realised, risk-adjusted returns and tangible impact on the ground — not on assets under management alone.',
    },
];

const Pillars = () => {
    return (
        <section className="bg-gray-100 text-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                <div className="mb-12 md:mb-16 max-w-3xl">
                    <div className="flex items-center gap-3 mb-5" data-aos="fade-right">
                        <div className="h-px w-12 bg-amber-400" />
                        <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                            Guiding Pillars
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-up">
                        What anchors every{' '}
                        <span className="font-playfair italic text-amber-400">capital decision.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.title}
                                className="group bg-white border border-black/5 rounded-3xl p-8 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 transition-all duration-500"
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                            >
                                <div className="w-12 h-12 bg-amber-400/15 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6 text-amber-500" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">{pillar.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
