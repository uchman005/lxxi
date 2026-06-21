import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  { value: '$4.2B', label: 'Assets Under Management', icon: TrendingUp },
  { value: '15', label: 'Partnerships Established', icon: Users },
  { value: '5yrs', label: 'Legacy of Excellence', icon: Award },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/about_hero.png"
          alt="African City Skyline at Night"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Multi-layer dark overlay */}
        <div className="absolute inset-0 bg-[#0E1012]/70" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0E1012]/30 via-transparent to-[#0E1012]/80" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0E1012]/80 via-[#0E1012]/30 to-transparent" />

        {/* Gold accent glow */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#E5B63E]/8 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#E5B63E]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center">
        {/* Spacer for navbar */}
        <div className="h-28 md:h-32" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-10 md:py-10">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-6"
            data-aos="fade-right"
            data-aos-delay="0"
          >
            <div className="h-px w-12 bg-[#E5B63E]" />
            <span className="text-[#E5B63E] text-xs font-semibold tracking-[0.25em] uppercase">
              About LXXI
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.05] mb-6 max-w-4xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Defined by{' '}
            <span className="font-playfair italic text-[#E5B63E]">Purpose.</span>
            <br />
            <span className="text-white">Driven by Africa.</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            For over 5 years, LXXI LIMITED has been at the intersection of African
            ambition and global capital - building enduring wealth through disciplined
            strategy, deep-rooted relationships, and an unwavering belief in the
            continent’s potential.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              href="/about"
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-bold tracking-wide"
            >
              Join Our Community
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link
              href="/services"
              className="btn-outline-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold tracking-wide"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10">
        <div className="bg-[rgba(14,16,18,0.85)] backdrop-blur-md border-t border-[rgba(229,182,62,0.15)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-4 py-7 px-6 ${i < stats.length - 1
                      ? 'md:border-r border-[rgba(229,182,62,0.1)]'
                      : ''
                      }`}
                    data-aos="fade-up"
                    data-aos-delay={400 + i * 100}
                  >
                    <div className="w-10 h-10 rounded bg-[rgba(229,182,62,0.12)] flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#E5B63E]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="stat-number text-2xl md:text-3xl text-[#E5B63E] leading-none mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
