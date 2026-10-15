import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MotorsportSection() {
  return (
    <section id="motorsport" className="relative w-full bg-[#090a0c] text-white py-28 sm:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Text (~40%) */}
          <div className="relative lg:col-span-5 flex flex-col justify-center space-y-6 z-10">
            
            {/* Background Editorial Watermark Number '01' (~3.5% opacity) */}
            <div 
              aria-hidden="true" 
              className="absolute -top-16 -left-8 sm:-top-24 sm:-left-12 -z-10 select-none pointer-events-none text-white/[0.035] font-display font-bold text-[14rem] sm:text-[20rem] lg:text-[26rem] leading-none tracking-tighter"
            >
              01
            </div>

            {/* Small Editorial Label */}
            <div className="inline-flex items-center space-x-2 text-kms-red font-display text-xs sm:text-sm font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-kms-red animate-pulse" />
              <span>01 / MOTORSPORT</span>
            </div>

            {/* Large Condensed Headline */}
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.94]">
              WHERE THE NEXT <br />
              GENERATION <br />
              <span className="text-gray-400">TAKES THE GRID.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-lg">
              From grassroots racing to professional competition, Kari Motor Speedway is built around the pursuit of speed.
            </p>

            {/* Editorial Location Stamp */}
            <div className="border-l-2 border-kms-red/60 pl-4 py-1 space-y-0.5">
              <p className="font-display font-bold text-xs sm:text-sm tracking-widest text-white uppercase">
                KARI MOTOR SPEEDWAY
              </p>
              <p className="text-[11px] sm:text-xs tracking-widest text-kms-muted uppercase font-medium">
                COIMBATORE
              </p>
            </div>

            {/* CTA Text Button */}
            <div className="pt-2">
              <a
                href="#explore-motorsport"
                className="group inline-flex items-center space-x-3 font-display text-sm sm:text-base font-bold tracking-widest text-white hover:text-kms-red transition-colors py-2"
              >
                <span>EXPLORE MOTORSPORT</span>
                <ArrowRight className="w-5 h-5 text-kms-red group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>

          </div>

          {/* Right Column: Tall Cinematic F4 Race Car Image (~60%) */}
          <div className="lg:col-span-7 z-10">
            <div className="relative group overflow-hidden border-l-2 border-kms-red shadow-2xl">
              
              {/* High-Performance Formula 4 Motorsport Image */}
              <img
                src="/assets/kms-f4.jpg"
                alt="Formula 4 Single-Seater Motorsport Race Car at Kari Motor Speedway"
                className="w-full h-[480px] sm:h-[580px] lg:h-[660px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 contrast-105"
              />

              {/* Subtle Dark Gradient Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c]/80 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />

              {/* Vertical Editorial Accent Label */}
              <div className="absolute top-5 right-5 backdrop-blur-md bg-black/60 border border-white/10 px-3 py-1.5 text-[11px] font-display font-bold tracking-widest text-gray-200 uppercase rounded-none">
                F4 / SINGLE SEATER
              </div>

              {/* Bottom Editorial Number & Track Stamp */}
              <div className="absolute bottom-5 left-5 flex items-center space-x-3 font-display text-xs tracking-widest text-kms-muted uppercase">
                <span className="w-2 h-2 rounded-full bg-kms-red" />
                <span className="text-white font-bold tracking-wider">01 — MOTORSPORT</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
