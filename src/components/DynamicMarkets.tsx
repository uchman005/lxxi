'use client';

import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';

const markets = [
  {
    city: 'Lagos',
    country: 'Nigeria',
    description: 'Africa\'s largest economy and financial hub, home to our flagship operations.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    sectors: ['Finance', 'Tech', 'Energy'],
  },
  {
    city: 'Nairobi',
    country: 'Kenya',
    description: 'East Africa\'s innovation capital driving tech-led growth across the region.',
    image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=800&q=80',
    sectors: ['Fintech', 'Agri', 'Infra'],
  },
  {
    city: 'Johannesburg',
    country: 'South Africa',
    description: 'The continent\'s most sophisticated capital market and financial ecosystem.',
    image: 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=800&q=80',
    sectors: ['Mining', 'Finance', 'Real Estate'],
  },
  {
    city: 'Accra',
    country: 'Ghana',
    description: 'West Africa\'s gateway market with a fast-growing middle class and stable democracy.',
    image: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?auto=format&fit=crop&w=800&q=80',
    sectors: ['Oil & Gas', 'Tech', 'Trade'],
  },
  {
    city: 'Cairo',
    country: 'Egypt',
    description: 'North Africa\'s powerhouse bridging African and Middle Eastern markets.',
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
    sectors: ['Tourism', 'Infra', 'Finance'],
  },
];

export default function DynamicMarkets() {
  return (
    <section id="markets" className="py-24 md:py-32 bg-[#0E1012] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div
              className="flex items-center gap-3 mb-5"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <div className="h-px w-10 bg-[#E5B63E]" />
              <span className="text-[#E5B63E] text-xs font-semibold tracking-[0.25em] uppercase">
                Investment Focus
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Pioneers Across Africa&apos;s Most{' '}
              <span className="font-playfair italic text-[#E5B63E]">Dynamic Markets</span>
            </h2>
          </div>
          <a
            href="/sectors"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm text-[#E5B63E] font-semibold hover:gap-3 transition-all"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            View all markets
            <ArrowRight size={15} strokeWidth={2.5} />
          </a>
        </div>

        {/* Market cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {markets.map((market, i) => (
            <div
              key={market.country}
              className={`location-card rounded-xl overflow-hidden cursor-pointer group ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              data-aos="fade-up"
              data-aos-delay={100 + i * 80}
            >
              {/* Image */}
              <div className="relative h-64 md:h-72">
                <Image
                  src={market.image}
                  alt={`${market.city}, ${market.country} skyline`}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1012] via-[#0E1012]/50 to-transparent" />

                {/* Country badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center gap-1.5 bg-[rgba(229,182,62,0.15)] backdrop-blur-sm border border-[rgba(229,182,62,0.3)] rounded-full px-3 py-1">
                    <MapPin size={11} className="text-[#E5B63E]" />
                    <span className="text-[#E5B63E] text-xs font-semibold tracking-wide">
                      {market.country}
                    </span>
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-white text-2xl font-bold mb-1">{market.city}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {market.description}
                  </p>
                  {/* Sector tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {market.sectors.map((s) => (
                      <span
                        key={s}
                        className="text-xs text-[#E5B63E] bg-[rgba(229,182,62,0.12)] border border-[rgba(229,182,62,0.2)] px-2 py-0.5 rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
