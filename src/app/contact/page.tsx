'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center opacity-15" />
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Connect with LXXI to explore opportunities or get answers.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-4 text-center"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
          >
            Get in Touch
          </h2>
          <p
            className="text-lg mb-12 text-center max-w-3xl mx-auto"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Fill out the form below, and our team will respond promptly.
          </p>
          <form
            onSubmit={handleSubmit}
            className="glass dark:glass-dark p-8 rounded-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
                style={{ color: 'var(--foreground)' }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-md bg-transparent border border-gray-300 dark:border-gray-600"
                style={{ color: 'var(--foreground)' }}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
                style={{ color: 'var(--foreground)' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-md bg-transparent border border-gray-300 dark:border-gray-600"
                style={{ color: 'var(--foreground)' }}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
                style={{ color: 'var(--foreground)' }}
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 rounded-md bg-transparent border border-gray-300 dark:border-gray-600"
                style={{ color: 'var(--foreground)' }}
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full glass dark:glass-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-200 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-4 text-center"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
          >
            Our Offices
          </h2>
          <p
            className="text-lg mb-12 text-center max-w-3xl mx-auto"
            style={{ color: 'var(--foreground)' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Visit us at one of our global locations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                city: 'New York',
                address: '123 Wall St, New York, NY 10005',
                phone: '+1 (212) 555-1234',
              },
              {
                city: 'London',
                address: '456 Canary Wharf, London E14 5AB, UK',
                phone: '+44 20 1234 5678',
              },
            ].map((office, index) => (
              <div
                key={office.city}
                className="glass dark:glass-dark p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 100}`}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {office.city}
                </h3>
                <p style={{ color: 'var(--foreground)' }}>{office.address}</p>
                <p className="text-blue-400">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}