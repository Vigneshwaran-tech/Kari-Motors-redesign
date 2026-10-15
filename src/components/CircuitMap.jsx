import React from 'react';
import { ArrowRight, Flag } from 'lucide-react';

export default function CircuitMap() {
  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] bg-[#0c0d10] border border-white/10 p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl select-none group">
      
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />

      {/* Top Editorial Map Headers */}
      <div className="relative z-10 flex items-center justify-between font-display text-xs tracking-widest text-kms-muted uppercase">
        <div className="flex items-center space-x-2">
          <Flag className="w-4 h-4 text-kms-red" />
          <span className="text-white font-bold tracking-wider">START / FINISH</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <span>LAP DIRECTION</span>
          <ArrowRight className="w-4 h-4 text-kms-red animate-pulse" />
        </div>
      </div>

      {/* Center SVG Circuit Visualization */}
      <div className="relative z-10 w-full h-full flex items-center justify-center my-auto p-4">
        <svg
          viewBox="0 0 800 500"
          className="w-full h-full max-h-[380px] drop-shadow-[0_0_20px_rgba(229,46,46,0.15)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Red Glow Filter */}
            <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Off-White / Charcoal Outer Circuit Track Outline */}
          <path
            d="M 120 380 
               L 520 380 
               C 620 380, 720 340, 720 250 
               C 720 160, 640 120, 540 120 
               L 420 120 
               C 380 120, 360 160, 320 160 
               L 260 160 
               C 220 160, 200 110, 150 110 
               C 90 110, 80 180, 80 250 
               C 80 320, 90 380, 120 380 Z"
            stroke="#262930"
            strokeWidth="28"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Asphalt Track Surface Line */}
          <path
            d="M 120 380 
               L 520 380 
               C 620 380, 720 340, 720 250 
               C 720 160, 640 120, 540 120 
               L 420 120 
               C 380 120, 360 160, 320 160 
               L 260 160 
               C 220 160, 200 110, 150 110 
               C 90 110, 80 180, 80 250 
               C 80 320, 90 380, 120 380 Z"
            stroke="#121418"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Subtle Off-White Track Curb Lines */}
          <path
            d="M 120 380 
               L 520 380 
               C 620 380, 720 340, 720 250 
               C 720 160, 640 120, 540 120 
               L 420 120 
               C 380 120, 360 160, 320 160 
               L 260 160 
               C 220 160, 200 110, 150 110 
               C 90 110, 80 180, 80 250 
               C 80 320, 90 380, 120 380 Z"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="3"
            strokeDasharray="12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Glowing Racing Red Ideal Racing Line Path */}
          <path
            d="M 120 380 
               L 520 380 
               C 620 380, 720 340, 720 250 
               C 720 160, 640 120, 540 120 
               L 420 120 
               C 380 120, 360 160, 320 160 
               L 260 160 
               C 220 160, 200 110, 150 110 
               C 90 110, 80 180, 80 250 
               C 80 320, 90 380, 120 380 Z"
            stroke="#e52e2e"
            strokeWidth="3.5"
            filter="url(#redGlow)"
            strokeDasharray="2000"
            strokeDashoffset="0"
            className="transition-all duration-1000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Start / Finish Line Marker (Checkered Pattern Bar) */}
          <line
            x1="220"
            y1="365"
            x2="220"
            y2="395"
            stroke="#ffffff"
            strokeWidth="5"
            strokeDasharray="3 3"
          />
          
          {/* Start Line Red Accent Pulse Dot */}
          <circle cx="220" cy="380" r="5" fill="#e52e2e" className="animate-ping" />
          <circle cx="220" cy="380" r="4" fill="#ffffff" />
          
          {/* Directional Lap Arrow Indicator */}
          <path
            d="M 270 380 L 290 373 L 290 387 Z"
            fill="#e52e2e"
          />
        </svg>
      </div>

      {/* Bottom Editorial Watermark & Disclaimer Stamp */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-display tracking-widest text-kms-muted uppercase border-t border-white/5 pt-3 gap-2">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-kms-red" />
          <span className="text-white font-bold tracking-wider">CIRCUIT VISUALISATION</span>
        </div>
        <span className="text-[10px] tracking-widest text-gray-500 uppercase">
          CONCEPT ART · VERIFIED MAP INCOMING
        </span>
      </div>

    </div>
  );
}
