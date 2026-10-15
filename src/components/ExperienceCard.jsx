import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ExperienceCard({ title, description, image, href = '#explore', index, heightClass = 'h-[440px] sm:h-[500px]' }) {
  const formattedIndex = String(index).padStart(2, '0');

  return (
    <div className={`group relative w-full ${heightClass} bg-kms-darker overflow-hidden border-l-2 border-white/10 hover:border-kms-red transition-all duration-500 flex flex-col justify-end p-6 sm:p-8 cursor-pointer select-none`}>
      {/* Background Cinematic Image */}
      <img
        src={image}
        alt={`${title} at Kari Motor Speedway`}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out brightness-90 contrast-105"
      />

      {/* Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-[#090a0c]/60 to-transparent group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-25" />

      {/* Top Editorial Index Stamp */}
      <div className="absolute top-5 left-6 right-6 flex items-center justify-between text-xs font-display tracking-widest text-kms-muted uppercase">
        <span className="text-white font-bold tracking-wider">{formattedIndex}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-kms-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content Container */}
      <div className="relative z-10 space-y-3 transform group-hover:-translate-y-1 transition-transform duration-300">
        
        {/* Experience Title */}
        <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight uppercase leading-none group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed max-w-xs">
          {description}
        </p>

        {/* CTA Link */}
        <div className="pt-2">
          <a
            href={href}
            className="inline-flex items-center space-x-2 font-display text-xs sm:text-sm font-bold tracking-widest text-white group-hover:text-kms-red transition-colors"
          >
            <span>EXPLORE</span>
            <ArrowRight className="w-4 h-4 text-kms-red group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </div>
  );
}
