import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Private Equity',
    description:
      'Growth-stage investments in high-potential African businesses across technology, agriculture, manufacturing, and consumer sectors.',
    href: '/services#private-equity',
  },
  {
    id: '02',
    title: 'Venture Capital',
    description:
      'Backing Africa\'s next generation of entrepreneurs with patient capital and strategic guidance for tech-led businesses.',
    href: '/services#venture-capital',
  },
  {
    id: '03',
    title: 'Real Estate',
    description:
      'Premium real estate investments across Africa\'s fastest-growing cities — commercial, residential, and hospitality assets.',
    href: '/services#real-estate',
  },
  {
    id: '04',
    title: 'Infrastructure',
    description:
      'Long-term infrastructure investments delivering essential services and catalysing broad-based economic development.',
    href: '/services#infrastructure',
  },
  {
    id: '05',
    title: 'Private Credit',
    description:
      'Bespoke lending solutions providing African businesses access to flexible, competitive capital outside traditional banking.',
    href: '/services#private-credit',
  },
  {
    id: '06',
    title: 'Hedge Funds',
    description:
      'Sophisticated liquid strategies generating alpha across African and emerging market asset classes for institutional investors.',
    href: '/services#hedge-funds',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0E1012] relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(229,182,62,1) 1px, transparent 1px), linear-gradient(90deg, rgba(229,182,62,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-end">
          <div>
            <div
              className="flex items-center gap-3 mb-5"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <div className="h-px w-10 bg-[#E5B63E]" />
              <span className="text-[#E5B63E] text-xs font-semibold tracking-[0.25em] uppercase">
                What We Do
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              data-aos="fade-right"
              data-aos-delay="80"
            >
              Investment{' '}
              <span className="font-playfair italic text-[#E5B63E]">Strategies</span>
              <br />
              Built for Africa
            </h2>
          </div>
          <p
            className="text-gray-400 text-base leading-relaxed lg:max-w-md"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Across six asset classes, we deploy capital with discipline and deep
            local knowledge — connecting African opportunity to global standards.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(229,182,62,0.07)] rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <a
              key={service.id}
              href={service.href}
              className="group bg-[#0E1012] p-8 hover:bg-[#131619] transition-all duration-300 flex flex-col gap-4 relative"
              data-aos="fade-up"
              data-aos-delay={80 + i * 60}
            >
              {/* Number */}
              <div className="text-[#E5B63E]/30 font-bold text-5xl leading-none font-playfair select-none">
                {service.id}
              </div>

              {/* Title + arrow */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-white text-lg font-semibold group-hover:text-[#E5B63E] transition-colors duration-200">
                  {service.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="text-[#E5B63E] opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-200 flex-shrink-0 mt-0.5"
                />
              </div>

              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Bottom gold line on hover */}
              <div className="h-px w-0 group-hover:w-full bg-[#E5B63E]/40 transition-all duration-400" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
