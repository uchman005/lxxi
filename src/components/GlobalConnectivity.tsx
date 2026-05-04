'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function GlobalConnectivity() {
  return (
    <section id="global" className="py-24 md:py-32 bg-[#0E1012] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Globe Visual */}
          <div
            className="relative order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="relative w-full aspect-square max-w-[540px] mx-auto">
              {/* Glow behind globe */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-[#E5B63E]/8 blur-3xl" />
              </div>
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-[rgba(229,182,62,0.08)] animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[rgba(229,182,62,0.05)] animate-[spin_20s_linear_infinite_reverse]" />

              {/* Globe image */}
              <div className="relative w-full h-full p-8">
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=85"
                    alt="Digital globe showing Africa connections"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0E1012]/30" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E5B63E]/15 via-transparent to-[#E5B63E]/10" />
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -right-4 top-1/4 glass-card rounded-lg px-4 py-3 shadow-xl"
                data-aos="fade-left" data-aos-delay="400">
                <div className="text-[#E5B63E] font-bold text-lg">20+</div>
                <div className="text-gray-400 text-xs tracking-wider uppercase">African Markets</div>
              </div>
              <div className="absolute -left-4 bottom-1/4 glass-card rounded-lg px-4 py-3 shadow-xl"
                data-aos="fade-right" data-aos-delay="500">
                <div className="text-[#E5B63E] font-bold text-lg">100+</div>
                <div className="text-gray-400 text-xs tracking-wider uppercase">Strategic Partners</div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <div
              className="flex items-center gap-3 mb-5"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <div className="h-px w-10 bg-[#E5B63E]" />
              <span className="text-[#E5B63E] text-xs font-semibold tracking-[0.25em] uppercase">
                Our Reach
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Global connectivity with{' '}
              <span className="font-playfair italic text-[#E5B63E]">African</span>{' '}
              experience
            </h2>

            <div className="h-px bg-gradient-to-r from-[#E5B63E]/30 to-transparent mb-6" />

            <p
              className="text-gray-400 text-base leading-loose mb-5"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              At LXXI Limited, we are rewriting Africa&pos;s wealth narrative. Our
              approach bridges capital, opportunities, and strategic alliances —
              connecting the continent&pos;s most promising ventures to international
              markets and expertise.
            </p>

            <p
              className="text-gray-400 text-base leading-loose mb-8"
              data-aos="fade-left"
              data-aos-delay="250"
            >
              With deep roots across 20+ African markets and a global network of
              100+ strategic partners, we deliver unmatched access to the continent&pos;s
              fastest-growing economies and sectors.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-2 text-[#E5B63E] text-sm font-semibold hover:gap-3 transition-all duration-200"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Learn more about our approach
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
