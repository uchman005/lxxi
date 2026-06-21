import { ShieldAlert } from 'lucide-react';

export type LegalSection = {
    id: string;
    heading: string;
    body: string[];
};

type LegalLayoutProps = {
    title: string;
    accent?: string;
    lastUpdated: string;
    intro: string;
    sections: LegalSection[];
};

const LegalLayout = ({ title, accent, lastUpdated, intro, sections }: LegalLayoutProps) => {
    return (
        <main className="bg-white text-black">
            {/* Header */}
            <section className="relative bg-[#0A0A0A] text-white overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20">
                <div className="absolute top-0 left-1/4 w-[36rem] h-[36rem] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="flex items-center gap-3 mb-6" data-aos="fade-down">
                        <div className="h-px w-12 bg-amber-400" />
                        <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                            Legal
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-4" data-aos="fade-up">
                        {title}
                        {accent && (
                            <>
                                {' '}
                                <span className="font-playfair italic text-amber-400">{accent}</span>
                            </>
                        )}
                    </h1>
                    <p className="text-gray-400 text-sm" data-aos="fade-up" data-aos-delay="100">
                        Last updated: {lastUpdated}
                    </p>
                </div>
            </section>

            {/* Body */}
            <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* TOC */}
                    <aside className="lg:col-span-4 xl:col-span-3">
                        <div className="lg:sticky lg:top-28">
                            <h2 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
                                On this page
                            </h2>
                            <nav>
                                <ul className="space-y-2.5">
                                    {sections.map((section, index) => (
                                        <li key={section.id}>
                                            <a
                                                href={`#${section.id}`}
                                                className="group flex gap-3 text-sm text-gray-600 hover:text-amber-500 transition-colors"
                                            >
                                                <span className="text-amber-400 font-semibold tabular-nums">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                {section.heading}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Draft notice */}
                            <div className="mt-8 flex gap-3 bg-amber-400/10 border border-amber-400/30 rounded-xl p-4">
                                <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    This is a working draft for illustrative purposes and should be reviewed
                                    by qualified legal counsel before publication.
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="lg:col-span-8 xl:col-span-9">
                        <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl" data-aos="fade-up">
                            {intro}
                        </p>

                        <div className="space-y-12">
                            {sections.map((section, index) => (
                                <div key={section.id} id={section.id} className="scroll-mt-28" data-aos="fade-up">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-5 flex items-baseline gap-3">
                                        <span className="text-amber-400 text-lg font-semibold tabular-nums">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        {section.heading}
                                    </h2>
                                    <div className="space-y-4 max-w-3xl">
                                        {section.body.map((paragraph, i) => (
                                            <p key={i} className="text-gray-600 leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-black/10">
                            <p className="text-sm text-gray-500">
                                Questions about this policy? Contact us at{' '}
                                <a
                                    href="mailto:business@lxxi.africa"
                                    className="text-amber-500 font-medium hover:text-amber-600 transition-colors"
                                >
                                    business@lxxi.africa
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LegalLayout;
