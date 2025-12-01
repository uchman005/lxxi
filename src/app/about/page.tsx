import Link from 'next/link';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center opacity-15" />
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About LXXI</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Pioneering alternative investments with vision, precision, and integrity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
          >
            Our Mission
          </h2>
          <p
            className="text-lg mb-12 max-w-3xl mx-auto"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At LXXI, we are committed to delivering exceptional value through innovative investment strategies that empower our clients and shape the future of wealth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="glass dark:glass-dark p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Innovation
              </h3>
              <p style={{ color: 'var(--foreground)' }}>
                We embrace cutting-edge approaches to unlock new opportunities in alternative markets.
              </p>
            </div>
            <div
              className="glass dark:glass-dark p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Integrity
              </h3>
              <p style={{ color: 'var(--foreground)' }}>
                Trust and transparency guide every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-200 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-4 text-center"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
          >
            Our Team
          </h2>
          <p
            className="text-lg mb-12 text-center max-w-3xl mx-auto"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Meet the experts driving LXXI’s success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jane Doe',
                role: 'Chief Investment Officer',
                bio: 'With over 20 years in private equity, Jane leads our investment strategy.',
              },
              {
                name: 'John Smith',
                role: 'Head of Real Estate',
                bio: 'John’s expertise in global markets shapes our real estate portfolio.',
              },
              {
                name: 'Emily Chen',
                role: 'Chief Operating Officer',
                bio: 'Emily ensures operational excellence across all our initiatives.',
              },
            ].map((member, index) => (
              <div
                key={member.name}
                className="glass dark:glass-dark p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 100}`}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {member.name}
                </h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p style={{ color: 'var(--foreground)' }}>{member.bio}</p>
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
            Join Our Vision
          </h2>
          <p
            className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Learn more about our investment opportunities or join our team.
          </p>
          <div className="space-x-4">
            <Link
              href="/investments"
              className="inline-block glass dark:glass-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Explore Investments
            </Link>
            <Link
              href="/careers"
              className="inline-block glass dark:glass-dark border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-400 hover:text-white dark:border-blue-300 dark:text-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-900 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}