import React from 'react';
import trackLayout from '../assets/Gemini_Generated_Image_cpxmppcpxmppcpxm.png';

export default function TrackSection() {
  return (
    <section id="track" className="relative w-full bg-[#090a0c] text-white py-28 sm:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5 scroll-mt-20">
      
      {/* Background Editorial Watermark '03' */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 left-6 sm:top-16 sm:left-12 -z-0 select-none pointer-events-none text-white/[0.035] font-display font-bold text-[14rem] sm:text-[22rem] lg:text-[28rem] leading-none tracking-tighter"
      >
        03
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Text (~35-40%) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Small Racing-Red Editorial Tag */}
            <div className="inline-flex items-center space-x-2 text-kms-red font-display text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-kms-red animate-pulse" />
              <span>03 / THE TRACK</span>
            </div>

            {/* Bold Condensed Headline */}
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.94] mb-4">
              BUILT FOR <br />
              <span className="text-gray-400">THE PERFECT LAP.</span>
            </h2>

            {/* Muted Supporting Text */}
            <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-lg mb-6">
              Every corner tells a story. Explore the circuit and discover what makes the lap.
            </p>

            {/* Subtle Visual Red Accent Divider */}
            <div className="w-12 h-[2px] bg-kms-red/80 my-2" />

            {/* Track Info Block */}
            <div className="pt-4 space-y-0.5">
              <p className="font-display font-bold text-xs sm:text-sm tracking-widest text-white uppercase">
                CIRCUIT
              </p>
              <p className="text-xs tracking-widest text-kms-muted uppercase font-medium">
                KARI MOTOR SPEEDWAY
              </p>
              <p className="text-[11px] tracking-widest text-gray-500 uppercase font-medium">
                COIMBATORE
              </p>
            </div>

          </div>

          {/* Right Column: Actual Kari Motor Speedway Circuit Layout Visual (~60-65%) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative group overflow-hidden bg-[#0c0d10] border border-white/10 hover:border-kms-red/40 border-l-2 border-l-kms-red p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-500">
              
              {/* Background Subtle Grid Lines & Film Grain */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
              <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />

              {/* Editorial Header Over the Track Frame */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/5 text-xs font-display tracking-widest uppercase">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kms-red" />
                  <span className="text-white font-bold tracking-wider">KARI MOTOR SPEEDWAY</span>
                </div>
                <span className="text-kms-muted text-[11px]">CIRCUIT LAYOUT</span>
              </div>

              {/* Actual Circuit Layout Image Container */}
              <div className="relative z-10 w-full py-8 sm:py-12 flex items-center justify-center">
                <div className="relative w-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                  <img
                    src={trackLayout}
                    alt="Kari Motor Speedway circuit layout"
                    className="w-full max-h-[340px] sm:max-h-[400px] object-contain select-none filter invert hue-rotate-180 brightness-95 contrast-125 mix-blend-screen drop-shadow-[0_0_25px_rgba(229,46,46,0.15)] group-hover:drop-shadow-[0_0_35px_rgba(229,46,46,0.25)] transition-all duration-500"
                  />
                </div>
              </div>

              {/* Editorial Bottom Metadata Stamp */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/5 text-[11px] font-display tracking-widest text-kms-muted uppercase">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-[2px] bg-kms-red" />
                  <span className="text-gray-300 font-semibold">START / FINISH STRAIGHT</span>
                </div>
                <span className="text-gray-500">CHETTIPALAYAM · COIMBATORE</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
