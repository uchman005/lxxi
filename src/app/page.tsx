import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-15" />
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            LXXI: Shaping the <span className="text-blue-400">Future</span> of Wealth
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Innovative strategies for enduring value in alternative investments.
          </p>
          <div className="space-x-4">
            <Link
              href="/investments"
              className="inline-block glass dark:glass-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300"
            >
              Discover Investments
            </Link>
            <Link
              href="/insights"
              className="inline-block glass dark:glass-dark border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-400 hover:text-white dark:border-blue-300 dark:text-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-900 transition-all duration-300"
            >
              Read Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
          >
            Our Approach
          </h2>
          <p
            className="text-lg mb-12 max-w-3xl mx-auto"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At LXXI, we combine disciplined analysis with bold innovation to unlock opportunities in alternative investments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Long-Term Vision',
                description: 'We focus on sustainable growth, aligning investments with global trends and enduring value.',
              },
              {
                title: 'Data-Driven Decisions',
                description: 'Our strategies are grounded in rigorous research and advanced analytics.',
              },
              {
                title: 'Client-Centric',
                description: 'Tailored solutions that prioritize our clients’ unique goals and risk profiles.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="glass dark:glass-dark p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 100}`}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--foreground)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-gray-200 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-4 text-center"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
          >
            Our Insights
          </h2>
          <p
            className="text-lg mb-12 text-center max-w-3xl mx-auto"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Stay ahead with our thought leadership on markets, trends, and opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Rise of Private Credit',
                excerpt: 'Exploring how private credit is reshaping institutional portfolios.',
                href: '/insights/private-credit',
              },
              {
                title: 'Sustainable Investing in 2025',
                excerpt: 'Why ESG factors are critical for long-term returns.',
                href: '/insights/sustainable-investing',
              },
              {
                title: 'Navigating Market Volatility',
                excerpt: 'Strategies to thrive in uncertain economic climates.',
                href: '/insights/market-volatility',
              },
            ].map((insight, index) => (
              <div
                key={insight.title}
                className="glass dark:glass-dark p-6 rounded-lg hover:scale-105 transition-transform duration-300"
                data-aos="fade-right"
                data-aos-delay={`${100 + index * 100}`}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {insight.title}
                </h3>
                <p className="mb-4" style={{ color: 'var(--foreground)' }}>
                  {insight.excerpt}
                </p>
                <Link
                  href={insight.href}
                  className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-semibold"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Strategies Section */}
      <section className="py-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
          >
            Key Strategies
          </h2>
          <p
            className="text-lg mb-12 max-w-3xl mx-auto"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover our core investment strategies designed for resilience and growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Private Equity',
                description: 'Driving value through active management and strategic partnerships.',
              },
              {
                title: 'Real Estate',
                description: 'Investing in high-potential properties with strong fundamentals.',
              },
            ].map((strategy, index) => (
              <div
                key={strategy.title}
                className="glass dark:glass-dark p-6 rounded-lg"
                data-aos="fade-left"
                data-aos-delay={`${100 + index * 100}`}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {strategy.title}
                </h3>
                <p style={{ color: 'var(--foreground)' }}>{strategy.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/investments"
            className="inline-block mt-12 glass dark:glass-dark hover:text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Explore All Strategies
          </Link>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-4 text-white"
            data-aos="fade-up"
          >
            Ready to Shape Your Future?
          </h2>
          <p
            className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Partner with LXXI to unlock the potential of alternative investments.
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