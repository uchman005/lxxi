import Link from 'next/link';

export default function Insights() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/insights-bg.jpg')] bg-cover bg-center opacity-15" />
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Insights</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Stay informed with our thought leadership on markets and opportunities.
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-4 text-center"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
          >
            Explore Our Insights
          </h2>
          <p
            className="text-lg mb-8 text-center max-w-3xl mx-auto"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Dive into our latest analyses and perspectives.
          </p>
          <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="flex space-x-4">
              <button className="glass dark:glass-dark px-4 py-2 rounded-full font-semibold text-blue-400 hover:bg-blue-400 hover:text-white dark:hover:bg-blue-300 dark:hover:text-gray-900 transition-all">
                All
              </button>
              <button className="glass dark:glass-dark px-4 py-2 rounded-full font-semibold text-blue-400 hover:bg-blue-400 hover:text-white dark:hover:bg-blue-300 dark:hover:text-gray-900 transition-all">
                Private Credit
              </button>
              <button className="glass dark:glass-dark px-4 py-2 rounded-full font-semibold text-blue-400 hover:bg-blue-400 hover:text-white dark:hover:bg-blue-300 dark:hover:text-gray-900 transition-all">
                ESG
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Rise of Private Credit',
                excerpt: 'How private credit is reshaping institutional portfolios.',
                href: '/insights/private-credit',
                date: 'Nov 2025',
              },
              {
                title: 'Sustainable Investing in 2025',
                excerpt: 'Why ESG factors are critical for long-term returns.',
                href: '/insights/sustainable-investing',
                date: 'Oct 2025',
              },
              {
                title: 'Navigating Market Volatility',
                excerpt: 'Strategies to thrive in uncertain economic climates.',
                href: '/insights/market-volatility',
                date: 'Sep 2025',
              },
              {
                title: 'The Future of Real Estate',
                excerpt: 'Trends shaping the global property market.',
                href: '/insights/real-estate',
                date: 'Aug 2025',
              },
            ].map((insight, index) => (
              <div
                key={insight.title}
                className="glass dark:glass-dark p-6 rounded-lg hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 100}`}
              >
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{insight.date}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-4 text-white"
            data-aos="fade-up"
          >
            Stay Ahead
          </h2>
          <p
            className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Subscribe to our insights or connect with our team for tailored advice.
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