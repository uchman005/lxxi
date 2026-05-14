'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Insights', href: '/insights' },
  { label: 'Approach', href: '/approach' },
  { label: 'Investors', href: '/investors' },
  { label: 'News', href: '/news' },
  { label: 'Careers', href: '/careers' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#0a0c0e] border-b border-[rgba(229,182,62,0.1)] hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-end items-center h-9 gap-6">
          <Link
            href="/register"
            className="text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-[#E5B63E] transition-colors duration-200"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-[#E5B63E] transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0E1012]/95 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-[rgba(229,182,62,0.1)]'
          : 'bg-transparent'
          }`}
        style={{ top: scrolled ? 0 : '36px' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="LXXI Logo"
                width={900}
                height={400}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <button
              className="xl:hidden text-gray-300 hover:text-[#E5B63E] transition-colors p-1.5 z-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 hover-gold-border ${isActive
                      ? 'text-[#E5B63E]'
                      : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E5B63E]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-full bg-[#0E1012] border-l border-[rgba(229,182,62,0.15)] flex flex-col transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-[rgba(229,182,62,0.1)]">
            <Image src="/logo.png" alt="LXXI" width={80} height={36} className="h-9 w-auto" />
          </div>
          <nav className="flex flex-col p-6 gap-1 flex-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-4 text-sm font-medium tracking-wide rounded transition-all duration-200 ${isActive
                    ? 'text-[#E5B63E] bg-[rgba(229,182,62,0.08)] border-l-2 border-[#E5B63E] pl-3'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-6 border-t border-[rgba(229,182,62,0.1)] flex flex-col gap-3">
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="text-center py-3 text-sm text-gray-300 hover:text-white font-medium"
            >
              Register
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="btn-gold text-center py-3 text-sm rounded font-semibold block"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
