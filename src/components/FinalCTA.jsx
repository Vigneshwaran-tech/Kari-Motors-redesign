import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="book" className="relative w-full bg-[#090a0c] text-white py-28 sm:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5 scroll-mt-20">
      
      {/* Background Editorial Watermark '07' */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 left-6 sm:top-16 sm:left-12 -z-0 select-none pointer-events-none text-white/[0.035] font-display font-bold text-[14rem] sm:text-[22rem] lg:text-[28rem] leading-none tracking-tighter"
      >
        07
      </div>

      {/* Subtle Background Circuit Grid & Film Grain */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-25" />

      {/* Center Subtle Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-kms-red/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center space-y-6 sm:space-y-8">
        
        {/* Small Racing-Red Editorial Tag */}
        <div className="inline-flex items-center space-x-2 text-kms-red font-display text-xs sm:text-sm font-semibold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-kms-red animate-pulse" />
          <span>07 / YOUR NEXT MOVE</span>
        </div>

        {/* Large Condensed Headline */}
        <h2 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.92]">
          READY FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-gray-400">
            YOUR FIRST LAP?
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-lg">
          Your next motorsport experience starts here.
        </p>

        {/* Primary Booking CTA */}
        <div className="pt-4 sm:pt-6">
          <a
            href="#book-experience"
            className="group inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-display font-bold tracking-wider uppercase text-white bg-kms-red hover:bg-kms-red-hover rounded-sm transition-all duration-300 red-glow hover:red-glow-lg hover:-translate-y-1 active:translate-y-0 text-center"
          >
            <span>BOOK YOUR EXPERIENCE</span>
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>

        {/* Editorial Location Stamp */}
        <div className="pt-6 flex items-center space-x-3 text-xs font-display tracking-widest text-kms-muted uppercase">
          <span>KARI MOTOR SPEEDWAY</span>
          <span className="w-1 h-1 rounded-full bg-kms-red" />
          <span>CHETTIPALAYAM · COIMBATORE</span>
        </div>

      </div>
    </section>
  );
}
