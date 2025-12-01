import Link from 'next/link';

export default function Careers() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/careers-bg.jpg')] bg-cover bg-center opacity-15" />
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Careers at LXXI</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Join a team shaping the future of alternative investments.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
          >
            Our Culture
          </h2>
          <p
            className="text-lg mb-12 max-w-3xl mx-auto"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At LXXI, we foster innovation, collaboration, and excellence in a dynamic environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Push boundaries with creative solutions.',
              },
              {
                title: 'Collaboration',
                description: 'Thrive in a team-oriented culture.',
              },
              {
                title: 'Impact',
                description: 'Make a difference in global markets.',
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="glass dark:glass-dark p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 100}`}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--foreground)' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-200 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-4 text-center"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
          >
            Open Positions
          </h2>
          <p
            className="text-lg mb-12 text-center max-w-3xl mx-auto"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore opportunities to grow with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Investment Analyst',
                location: 'New York, NY',
                description: 'Analyze opportunities in private equity and real estate.',
              },
              {
                title: 'Data Scientist',
                location: 'London, UK',
                description: 'Leverage data to drive investment decisions.',
              },
            ].map((job, index) => (
              <div
                key={job.title}
                className="glass dark:glass-dark p-6 rounded-lg hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 100}`}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {job.title}
                </h3>
                <p className="text-blue-400 mb-2">{job.location}</p>
                <p className="mb-4" style={{ color: 'var(--foreground)' }}>
                  {job.description}
                </p>
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-semibold"
                >
                  Apply Now
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
            Build Your Future with Us
          </h2>
          <p
            className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Contact us to learn more about joining the LXXI team.
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