'use client';

import { Shield, Handshake, Leaf } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Unmatched Market Intel',
    description:
      'Proprietary insights and data-driven intelligence from across Africa\'s most dynamic economies, giving our partners a decisive edge.',
  },
  {
    icon: Handshake,
    title: 'Strategic Alliances',
    description:
      'A curated network of 100+ strategic partners spanning governments, institutional investors, and industry leaders across 20+ African markets.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Growth',
    description:
      'Investments anchored in ESG principles that generate returns while building lasting value for communities and ecosystems.',
  },
];

const milestones = [
  { number: '15+', label: 'Years Experience' },
  { number: '100+', label: 'Strategic Partners' },
  { number: '20+', label: 'African Markets' },
];

export default function Legacy() {
  return (
    <section id="legacy" className="py-24 md:py-32 bg-[#131619] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#E5B63E 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Gold glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#E5B63E]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="flex items-center justify-center gap-3 mb-5"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="h-px w-10 bg-[#E5B63E]" />
            <span className="text-[#E5B63E] text-xs font-semibold tracking-[0.25em] uppercase">
              Our Legacy
            </span>
            <div className="h-px w-10 bg-[#E5B63E]" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A legacy built through years of{' '}
            <span className="font-playfair italic text-[#E5B63E]">African expertise</span>
          </h2>

          <p
            className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Decades of on-the-ground experience combined with global financial
            acumen make LXXI the definitive partner for African market success.
          </p>
        </div>

        {/* Milestone stats */}
        <div className="grid grid-cols-3 gap-px bg-[rgba(229,182,62,0.1)] rounded-2xl overflow-hidden mb-16" data-aos="fade-up" data-aos-delay="200">
          {milestones.map((m) => (
            <div
              key={m.label}
              className="bg-[#131619] flex flex-col items-center justify-center py-10 px-4 text-center"
            >
              <div className="stat-number text-4xl md:text-5xl text-[#E5B63E] mb-2">{m.number}</div>
              <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass-card rounded-xl p-8 group hover:border-[rgba(229,182,62,0.3)] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(229,182,62,0.05)]"
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <div className="w-12 h-12 rounded-lg bg-[rgba(229,182,62,0.1)] flex items-center justify-center mb-5 group-hover:bg-[rgba(229,182,62,0.18)] transition-colors">
                  <Icon size={22} className="text-[#E5B63E]" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                <div className="mt-5 h-px bg-gradient-to-r from-[#E5B63E]/20 to-transparent group-hover:from-[#E5B63E]/40 transition-all" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
