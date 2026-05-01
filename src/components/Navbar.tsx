"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/sectors" },
  { label: "Insights", href: "/insights" },
  { label: "Approach", href: "/approach" },
  { label: "Investors", href: "/investors" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 z-50">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-30 h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    font-medium transition-colors
                    ${
                      isActive
                        ? "bg-yellow-400 text-black rounded-full px-4 py-2"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Auth buttons - desktop */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <Link
              href="/register"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="px-6 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors shadow-sm"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - improved overlay and layout */}
      <div
        className={`
          lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40
          transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <div
          className={`
            flex flex-col h-full pt-15 pb-10
            transform transition-transform duration-300 ease-in-out
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <nav className="flex flex-col gap-2 text-lg sm:text-xl bg-black/80 w-full pl-6 pb-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    py-3 font-medium transition-colors
                    ${
                      isActive
                        ? "text-yellow-400 border-l-4 border-yellow-400 pl-4"
                        : "text-gray-300 hover:text-yellow-400"
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto flex flex-col gap-5 sm:gap-6">
            <Link
              href="/register"
              className="text-center py-4 text-gray-300 hover:text-white text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </Link>
            <Link
              href="/login"
              className="text-center py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl text-lg transition-colors shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
