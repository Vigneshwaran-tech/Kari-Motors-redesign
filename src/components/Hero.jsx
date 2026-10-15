import React from 'react';
import { ArrowRight, ChevronDown, Compass } from 'lucide-react';

// Clean configuration for background video & fallback poster image
const HERO_VIDEO_URL = "/videos/kms-hero.mp4";
const HERO_POSTER_URL = "/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-kms-darker select-none pt-28 pb-8 sm:pb-12">
      {/* Background Video Layer with Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Fallback Image / Poster for loading or when video cannot play */}
        <img
          src={HERO_POSTER_URL}
          alt="Kari Motor Speedway Motorsport Experience"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-95 contrast-105"
        />

        {/* HTML5 Fullscreen Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_POSTER_URL}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-95 contrast-105 motion-reduce:hidden"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        {/* Dark Cinematic Vignette & Gradient Overlays - Balanced for Video Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c]/85 via-[#090a0c]/35 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a0c]/75 via-[#090a0c]/30 to-transparent" />
        
        {/* Subtle Film Grain Texture Overlay */}
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          
          {/* Subtle Red Badge Accent */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-kms-red/10 border border-kms-red/30 backdrop-blur-md rounded-full text-kms-red text-xs sm:text-sm font-display font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-kms-red animate-pulse" />
            <span className="uppercase tracking-widest">Kari Motor Speedway</span>
          </div>

          {/* Main Headline - Scaled down ~10-15% for optimal breathing room */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight uppercase leading-[0.94] drop-shadow-2xl">
            YOUR NEXT LAP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-gray-300">
              STARTS HERE.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
            Experience the thrill of motorsport, from your first lap to the race weekend.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            {/* Primary CTA */}
            <a
              href="#book"
              className="group inline-flex items-center justify-center px-7 py-4 text-sm sm:text-base font-display font-bold tracking-wider uppercase text-white bg-kms-red hover:bg-kms-red-hover rounded-sm transition-all duration-300 red-glow hover:red-glow-lg hover:-translate-y-1 active:translate-y-0 text-center"
            >
              <span>BOOK YOUR EXPERIENCE</span>
              <ArrowRight className="ml-2.5 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#track"
              className="group inline-flex items-center justify-center px-7 py-4 text-sm sm:text-base font-display font-bold tracking-wider uppercase text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 backdrop-blur-md rounded-sm transition-all duration-300 hover:-translate-y-1 active:translate-y-0 text-center"
            >
              <span>EXPLORE THE TRACK</span>
              <ArrowRight className="ml-2.5 w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>

        </div>
      </div>

      {/* Hero Bottom Details Bar */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-6 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs lg:text-sm font-display tracking-widest text-kms-muted uppercase">
          
          {/* Left Metadata */}
          <div className="flex items-center space-x-3">
            <div className="w-1.5 h-6 bg-kms-red" />
            <div>
              <span className="block text-white font-bold tracking-wider">MOTORSPORT</span>
              <span className="text-gray-400 text-[11px] sm:text-xs">BUILT FOR SPEED</span>
            </div>
          </div>

          {/* Center Location */}
          <div className="hidden sm:flex items-center space-x-2 text-gray-300">
            <Compass className="w-4 h-4 text-kms-red" />
            <span className="font-semibold tracking-widest">COIMBATORE · INDIA</span>
          </div>

          {/* Right Scroll Indicator */}
          <a
            href="#explore"
            className="flex items-center space-x-2 text-gray-300 hover:text-kms-red transition-colors group cursor-pointer"
          >
            <span className="font-semibold text-[11px] sm:text-xs tracking-widest">SCROLL TO EXPLORE</span>
            <ChevronDown className="w-4 h-4 text-kms-red group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
          </a>

        </div>
      </div>
    </section>
  );
}
