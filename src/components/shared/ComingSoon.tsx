import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

type Cta = { label: string; href: string };

type ComingSoonProps = {
    eyebrow: string;
    title: string;
    accent?: string;
    body: string;
    primaryCta?: Cta;
    secondaryCta?: Cta;
};

/** Honest placeholder for sections that will carry real content later (news, research, etc.). */
const ComingSoon = ({ eyebrow, title, accent, body, primaryCta, secondaryCta }: ComingSoonProps) => {
    return (
        <section className="bg-[#0A0A0A] text-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28 text-center">
                <div
                    className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-semibold uppercase tracking-[3px] px-4 py-2 rounded-full mb-8"
                    data-aos="fade-down"
                >
                    <Clock className="w-3.5 h-3.5" />
                    {eyebrow}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" data-aos="fade-up">
                    {title}
                    {accent && (
                        <>
                            {' '}
                            <span className="font-playfair italic text-amber-400">{accent}</span>
                        </>
                    )}
                </h2>
                <p
                    className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {body}
                </p>
                {(primaryCta || secondaryCta) && (
                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {primaryCta && (
                            <Link
                                href={primaryCta.href}
                                className="group inline-flex items-center gap-2 bg-amber-400 text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition-colors"
                            >
                                {primaryCta.label}
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        )}
                        {secondaryCta && (
                            <Link
                                href={secondaryCta.href}
                                className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-full hover:border-amber-400 hover:text-amber-400 transition-colors"
                            >
                                {secondaryCta.label}
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ComingSoon;
