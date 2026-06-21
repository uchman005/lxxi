import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] text-white px-6">
            {/* Background accents */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto text-center py-24">
                {/* Eyebrow */}
                <div className="flex items-center justify-center gap-3 mb-8" data-aos="fade-down">
                    <div className="h-px w-12 bg-amber-400" />
                    <span className="text-amber-400 text-sm tracking-[3px] font-medium uppercase">
                        Error 404
                    </span>
                    <div className="h-px w-12 bg-amber-400" />
                </div>

                {/* Big 404 */}
                <h1
                    className="text-gold-gradient text-7xl md:text-9xl font-bold leading-none mb-6"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                >
                    404
                </h1>

                {/* Heading */}
                <h2
                    className="text-3xl md:text-4xl font-bold mb-5"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    This page is being{" "}
                    <span className="font-playfair italic text-amber-400">structured.</span>
                </h2>

                {/* Subtext */}
                <p
                    className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto mb-10"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    The section you&apos;re looking for hasn&apos;t been published yet, or the link may
                    have moved. Explore our live pages while we finish building this one.
                </p>

                {/* CTAs */}
                <div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <Link
                        href="/"
                        className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 text-black
                       font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-3 group text-lg"
                    >
                        Back to Home
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>

                    <Link
                        href="/sectors"
                        className="border border-white/60 hover:border-white/90 hover:bg-white/5
                       transition-all duration-300 font-medium px-8 py-4 rounded-full flex items-center justify-center gap-3 group text-lg"
                    >
                        Explore Sectors
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
