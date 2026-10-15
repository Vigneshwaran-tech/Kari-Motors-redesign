import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#090a0c] text-white py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
      
      {/* Background Editorial Watermark '05' */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 left-6 sm:top-16 sm:left-12 -z-0 select-none pointer-events-none text-white/[0.035] font-display font-bold text-[14rem] sm:text-[22rem] lg:text-[28rem] leading-none tracking-tighter"
      >
        05
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Cinematic Image of KMS */}
          <div className="lg:col-span-7 order-1">
            <div className="relative group overflow-hidden bg-[#0c0d10] border border-white/10 hover:border-kms-red/40 border-l-2 border-l-kms-red shadow-2xl transition-all duration-500">
              
              {/* Cinematic Circuit Venue Image */}
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full">
                <img
                  src="/assets/kms_about_circuit.jpg"
                  alt="Kari Motor Speedway Circuit Venue in Coimbatore"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />
              </div>

              {/* Minimal Caption Stamp */}
              <div className="relative z-10 flex items-center justify-between px-5 py-3.5 bg-black/80 backdrop-blur-md border-t border-white/5 text-[11px] font-display tracking-widest text-kms-muted uppercase">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kms-red" />
                  <span className="text-white font-bold tracking-wider">KARI MOTOR SPEEDWAY</span>
                </div>
                <span className="text-gray-400">CHETTIPALAYAM · COIMBATORE</span>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left order-2 space-y-5 sm:space-y-6">
            
            {/* Small Racing-Red Editorial Tag */}
            <div className="inline-flex items-center space-x-2 text-kms-red font-display text-xs sm:text-sm font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-kms-red animate-pulse" />
              <span>05 / THE STORY</span>
            </div>

            {/* Bold Condensed Headline */}
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.94]">
              MORE THAN A TRACK. <br />
              <span className="text-gray-400">A PLACE BUILT AROUND SPEED.</span>
            </h2>

            {/* Short Supporting Paragraph */}
            <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-lg">
              Discover Kari Motor Speedway, located in Chettipalayam, Coimbatore.
            </p>

            {/* Subtle Visual Red Accent Line */}
            <div className="w-12 h-[2px] bg-kms-red/80 my-1" />

            {/* Subtle Text Link / CTA */}
            <div className="pt-2">
              <a
                href="#track"
                className="group inline-flex items-center space-x-2.5 font-display text-xs sm:text-sm font-bold tracking-widest text-white hover:text-kms-red transition-colors"
              >
                <span>EXPLORE THE CIRCUIT</span>
                <ArrowRight className="w-4 h-4 text-kms-red group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
