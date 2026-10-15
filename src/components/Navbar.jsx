import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'THE TRACK', href: '#track' },
    { name: 'EXPERIENCES', href: '#experiences' },
    { name: 'EVENTS', href: '#events' },
    { name: 'ABOUT', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-white/10 backdrop-blur-md">
      <nav 
        aria-label="Main Navigation" 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
      >
        {/* Brand & Location with Thin Red Vertical Bar Accent */}
        <a href="/" className="group flex items-center space-x-3 focus:outline-none focus:ring-1 focus:ring-kms-red rounded py-0.5 px-1">
          {/* Thin Racing Red Vertical Accent Bar */}
          <div className="w-[3px] h-8 sm:h-9 bg-kms-red rounded-full group-hover:scale-y-110 transition-transform duration-300" />
          
          <div className="flex flex-col justify-center">
            <span className="font-display font-bold text-lg sm:text-xl lg:text-2xl tracking-wider text-white group-hover:text-kms-red transition-colors uppercase leading-none">
              KARI MOTOR SPEEDWAY
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest text-kms-muted uppercase font-medium mt-1">
              CHETTIPALAYAM · COIMBATORE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display text-xs lg:text-sm font-semibold tracking-widest text-gray-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-kms-red hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <a
            href="#book"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 font-display text-xs sm:text-sm font-bold tracking-wider text-white bg-kms-red hover:bg-kms-red-hover rounded-sm transition-all duration-300 shadow-md shadow-kms-red/20 hover:shadow-kms-red/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>BOOK NOW</span>
            <ArrowUpRight className="ml-1.5 w-4 h-4" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-sm focus:outline-none focus:ring-1 focus:ring-kms-red"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl px-6 py-5 space-y-4 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-display text-base font-semibold tracking-wider text-gray-200 hover:text-kms-red py-2 border-b border-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
