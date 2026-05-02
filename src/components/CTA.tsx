'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-[#0E1012] relative overflow-hidden">
      {/* Background imagery */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80"
          alt="Investment team"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1012] via-[#0E1012]/80 to-[#0E1012]" />
      </div>

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E5B63E]/6 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div
          className="flex items-center justify-center gap-3 mb-6"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="h-px w-10 bg-[#E5B63E]" />
          <span className="text-[#E5B63E] text-xs font-semibold tracking-[0.25em] uppercase">
            Get Started
          </span>
          <div className="h-px w-10 bg-[#E5B63E]" />
        </div>

        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Speak With Our{' '}
          <span className="font-playfair italic text-[#E5B63E]">Investment Team</span>
        </h2>

        <p
          className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Ready to explore Africa's most compelling investment opportunities?
          Schedule a confidential consultation with our expert team today.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link
            href="/contact"
            className="btn-gold inline-flex items-center gap-2.5 px-10 py-4 rounded text-sm font-bold tracking-wide"
          >
            <Calendar size={16} strokeWidth={2.5} />
            Schedule a Consultation
          </Link>
          <Link
            href="/about"
            className="btn-outline-gold inline-flex items-center gap-2 px-10 py-4 rounded text-sm font-semibold tracking-wide"
          >
            Learn More
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Trust indicators */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {[
            'Confidential & Secure',
            'Response within 24hrs',
            'No commitment required',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E5B63E]" />
              <span className="text-gray-400 text-xs font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
