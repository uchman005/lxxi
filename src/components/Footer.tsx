import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, MapPin, Mail, Phone, X, Instagram } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Approach', href: '/approach' },
    { label: 'Leadership', href: '/about#leadership' },
    { label: 'Careers', href: '/careers' },
    { label: 'News', href: '/news' },
  ],
  Services: [
    { label: 'Private Equity', href: '/services' },
    { label: 'Venture Capital', href: '/services' },
    { label: 'Real Estate', href: '/services' },
    { label: 'Infrastructure', href: '/services' },
    { label: 'Private Credit', href: '/services' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Disclosures', href: '/disclosures' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0c0e] border-t border-[rgba(229,182,62,0.1)]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="LXXI"
                width={900}
                height={900}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-loose mb-6 max-w-xs">
              LXXI Limited is at the intersection of African ambition and global
              capital — creating transformative investment opportunities across
              the continent.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin size={14} className="text-[#E5B63E] mt-0.5 shrink-0" />
                <span>Abuja, Nigeria</span>
              </div>

              <Link
                className="flex items-center gap-2.5 text-gray-400 text-sm"
                href="mailto:business@lxxi.africa"
              >
                <Mail size={14} className="text-[#E5B63E] shrink-0" />
                <span>business@lxxi.africa</span>
              </Link>


              <Link
                href="tel:+2348025021402"
                className="flex items-center gap-2.5 text-gray-400 text-sm"
              >
                <Phone size={14} className="text-[#E5B63E] shrink-0" />
                <span>+234 80 2502 1402</span>
              </Link>

            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/lxxi/', color: "text-blue-600" },
                { Icon: X, label: 'Twitter', href: 'https://x.com/LXXILimited', color: "text-white" },
                { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/lxxibrokerage/', color: "text-purple-600" },
              ].map(({ Icon, label, href, color }) => (
                <Link
                  key={label}
                  href={href}
                  target='_blank'
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[rgba(229,182,62,0.08)] border border-[rgba(229,182,62,0.15)] flex items-center justify-center text-gray-400 hover:text-[#E5B63E] hover:border-[rgba(229,182,62,0.4)] hover:bg-[rgba(229,182,62,0.12)] transition-all duration-200"
                >
                  <Icon size={20} className={color} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-[#E5B63E] transition-colors duration-200 hover-gold-border"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(229,182,62,0.08)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} LXXI Limited. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs max-w-2xl">
            This material is for qualified investors only and does not constitute investment advice or a solicitation to invest. Capital at risk. Past performance is not indicative of future results. LXXI Capital Management is a registered investment manager.
          </p>
        </div>
      </div>
    </footer>
  );
}