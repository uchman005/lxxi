'use client';

import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

const leaders = [
  {
    name: 'Oluwatosin Adeyemi',
    title: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    bio: 'Visionary leader with 20+ years driving African capital markets and building transformative partnerships across the continent.',
  },
  {
    name: 'Ademola Olowo',
    title: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Operations strategist with deep expertise in scaling investment platforms across emerging markets.',
  },
  {
    name: 'Bukola Ogunsanya',
    title: 'Director of Strategy',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Strategy architect with a track record of identifying high-growth opportunities across Africa\'s most dynamic sectors.',
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 md:py-32 bg-[#131619] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5"
        style={{
          background: 'radial-gradient(ellipse at right, #E5B63E, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="flex items-center justify-center gap-3 mb-5"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="h-px w-10 bg-[#E5B63E]" />
            <span className="text-[#E5B63E] text-xs font-semibold tracking-[0.25em] uppercase">
              Our Leadership
            </span>
            <div className="h-px w-10 bg-[#E5B63E]" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Architects of{' '}
            <span className="font-playfair italic text-[#E5B63E]">African Vision</span>
          </h2>

          <p
            className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Guided by seasoned executives who combine deep African expertise with
            global capital market mastery.
          </p>
        </div>

        {/* Leadership grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className="leader-card glass-card rounded-xl overflow-hidden group hover:border-[rgba(229,182,62,0.3)] transition-all duration-300 hover:shadow-xl hover:shadow-[rgba(229,182,62,0.05)]"
              data-aos="fade-up"
              data-aos-delay={100 + i * 120}
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D21] via-[#1A1D21]/20 to-transparent" />

                {/* Social overlay on hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 z-10">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[rgba(229,182,62,0.15)] border border-[rgba(229,182,62,0.3)] flex items-center justify-center text-[#E5B63E] hover:bg-[#E5B63E] hover:text-black transition-all"
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[rgba(229,182,62,0.15)] border border-[rgba(229,182,62,0.3)] flex items-center justify-center text-[#E5B63E] hover:bg-[#E5B63E] hover:text-black transition-all"
                  >
                    <Twitter size={14} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="h-px bg-gradient-to-r from-[#E5B63E]/40 to-transparent mb-4" />
                <p className="text-[#E5B63E] text-xs font-semibold tracking-widest uppercase mb-1">
                  {leader.title}
                </p>
                <h3 className="text-white text-lg font-bold mb-3">{leader.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
