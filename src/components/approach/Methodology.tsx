const steps = [
    {
        number: '01',
        title: 'Identify',
        description: 'Rigorous sourcing of off-market opportunities through deep local intelligence and proprietary networks.',
    },
    {
        number: '02',
        title: 'Assess',
        description: 'Multi-layered due diligence and institutional risk modelling across legal, financial, and operational dimensions.',
    },
    {
        number: '03',
        title: 'Invest',
        description: 'Disciplined capital deployment and bespoke transaction structuring engineered for downside protection.',
    },
    {
        number: '04',
        title: 'Grow',
        description: 'Active asset management and hands-on value creation, aligning operators with long-term shareholder interests.',
    },
    {
        number: '05',
        title: 'Realize',
        description: 'Exit-oriented strategies designed to crystallise value and maximise risk-adjusted returns at the right moment.',
    },
];

const Methodology = () => {
    return (
        <section className="bg-[#0A0A0A] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                <div className="mb-12 md:mb-16 max-w-3xl">
                    <div className="flex items-center gap-3 mb-5" data-aos="fade-right">
                        <div className="h-px w-12 bg-amber-400" />
                        <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                            Methodology
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-up">
                        A disciplined process,{' '}
                        <span className="font-playfair italic text-amber-400">repeated with rigour.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="group bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            <div className="text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors mb-6">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed flex-1">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
