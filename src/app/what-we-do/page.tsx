import Link from 'next/link';

export default function Investments() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/investments-bg.jpg')] bg-cover bg-center opacity-15" />
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">What We Do</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Discover how LXXI drives value through diversified alternative investments.
          </p>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-4 text-center"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
          >
            Core Strategies
          </h2>
          <p
            className="text-lg mb-12 text-center max-w-3xl mx-auto"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our strategies are designed for resilience, growth, and long-term value creation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Private Equity',
                description: 'We acquire and transform businesses to unlock their full potential through active management.',
                href: '#',
              },
              {
                title: 'Real Estate',
                description: 'Investing in high-potential properties with strong fundamentals and growth prospects.',
                href: '#',
              },
              {
                title: 'Private Credit',
                description: 'Providing flexible financing solutions to fuel innovation and expansion.',
                href: '#',
              },
            ].map((strategy, index) => (
              <div
                key={strategy.title}
                className="glass dark:glass-dark p-6 rounded-lg hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 100}`}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {strategy.title}
                </h3>
                <p className="mb-4" style={{ color: 'var(--foreground)' }}>
                  {strategy.description}
                </p>
                <Link
                  href={strategy.href}
                  className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-semibold"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 bg-gray-200 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
          >
            Why Invest with LXXI?
          </h2>
          <p
            className="text-lg mb-12 max-w-3xl mx-auto"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our disciplined approach and global expertise set us apart in alternative investments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="glass dark:glass-dark p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Global Reach
              </h3>
              <p style={{ color: 'var(--foreground)' }}>
                Access to opportunities across markets with our extensive network.
              </p>
            </div>
            <div
              className="glass dark:glass-dark p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Proven Results
              </h3>
              <p style={{ color: 'var(--foreground)' }}>
                A track record of delivering strong returns for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-4 text-white"
            data-aos="fade-up"
          >
            Start Your Investment Journey
          </h2>
          <p
            className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Connect with our team to explore how LXXI can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block glass dark:glass-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}