import Link from 'next/link';

type Cta = {
    label: string;
    href: string;
};

type PageHeroProps = {
    eyebrow: string;
    title: string;
    accent?: string;
    subtitle?: string;
    bgImage?: string;
    primaryCta?: Cta;
    secondaryCta?: Cta;
    align?: 'left' | 'center';
};

const PageHero = ({
    eyebrow,
    title,
    accent,
    subtitle,
    bgImage = '/carousel1.png',
    primaryCta,
    secondaryCta,
    align = 'left',
}: PageHeroProps) => {
    const centered = align === 'center';

    return (
        <section className="relative bg-[#0A0A0A] text-white overflow-hidden pt-32 md:pt-44 pb-16 md:pb-24">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
                style={{ backgroundImage: `url('${bgImage}')` }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/85 to-[#0A0A0A] pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-[36rem] h-[36rem] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                <div className={centered ? 'max-w-3xl mx-auto text-center' : 'max-w-3xl'}>
                    {/* Eyebrow */}
                    <div
                        className={`flex items-center gap-3 mb-6 ${centered ? 'justify-center' : ''}`}
                        data-aos="fade-down"
                    >
                        <div className="h-px w-12 bg-amber-400" />
                        <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                            {eyebrow}
                        </span>
                        {centered && <div className="h-px w-12 bg-amber-400" />}
                    </div>

                    {/* Heading */}
                    <h1
                        className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {title}
                        {accent && (
                            <>
                                {' '}
                                <span className="font-playfair italic text-amber-400">{accent}</span>
                            </>
                        )}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p
                            className={`text-md md:text-lg text-gray-300 leading-relaxed mb-10 ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'
                                }`}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {subtitle}
                        </p>
                    )}

                    {/* CTAs */}
                    {(primaryCta || secondaryCta) && (
                        <div
                            className={`flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            {primaryCta && (
                                <Link
                                    href={primaryCta.href}
                                    className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 text-black
                             font-semibold px-8 py-4 rounded-full flex items-center gap-3 group text-lg"
                                >
                                    {primaryCta.label}
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            )}
                            {secondaryCta && (
                                <Link
                                    href={secondaryCta.href}
                                    className="border border-white/60 hover:border-white/90 hover:bg-white/5
                             transition-all duration-300 font-medium px-8 py-4 rounded-full text-lg"
                                >
                                    {secondaryCta.label}
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHero;
