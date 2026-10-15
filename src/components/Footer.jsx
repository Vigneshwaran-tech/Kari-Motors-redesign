import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'THE TRACK', href: '#track' },
    { name: 'EXPERIENCES', href: '#experiences' },
    { name: 'EVENTS', href: '#events' },
    { name: 'ABOUT', href: '#about' },
  ];

  return (
    <footer className="w-full bg-[#060708] text-white border-t border-white/10 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          {/* Brand & Location */}
          <div className="flex items-center space-x-3">
            <div className="w-[3px] h-9 bg-kms-red rounded-full" />
            <div className="flex flex-col justify-center">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white uppercase leading-none">
                KARI MOTOR SPEEDWAY
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest text-kms-muted uppercase font-medium mt-1">
                CHETTIPALAYAM · COIMBATORE
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 sm:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-display text-xs sm:text-sm font-semibold tracking-wider text-gray-400 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-kms-red hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

        </div>

        {/* Bottom Restrained Copyright & Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-display tracking-widest text-gray-500 uppercase">
          <p>
            © {currentYear} KARI MOTOR SPEEDWAY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-2 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-kms-red" />
            <span>MOTORSPORT · COIMBATORE · INDIA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
