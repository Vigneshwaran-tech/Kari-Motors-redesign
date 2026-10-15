import React from 'react';
import ExperienceCard from './ExperienceCard';

export default function ExperiencesSection() {
  const experiences = [
    {
      id: 'open-track',
      title: 'OPEN TRACK',
      description: 'Bring your own car and experience the circuit.',
      image: '/assets/kms_exp_opentrack.jpg',
      href: '#open-track',
      heightClass: 'h-[460px] lg:h-[560px]',
    },
    {
      id: 'karting',
      title: 'KARTING',
      description: 'Get behind the wheel and experience the thrill of racing.',
      image: '/assets/kms_exp_karting.jpg',
      href: '#karting',
      heightClass: 'h-[460px] lg:h-[500px] lg:mt-10',
    },
    {
      id: 'events',
      title: 'EVENTS',
      description: 'Create a memorable motorsport experience for your group or organisation.',
      image: '/assets/kms_exp_events.jpg',
      href: '#events',
      heightClass: 'h-[460px] lg:h-[580px]',
    },
  ];

  return (
    <section id="experiences" className="relative w-full bg-[#060708] text-white py-28 sm:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
      
      {/* Background Editorial Watermark '02' */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 right-6 sm:top-16 sm:right-12 -z-0 select-none pointer-events-none text-white/[0.035] font-display font-bold text-[14rem] sm:text-[22rem] lg:text-[28rem] leading-none tracking-tighter"
      >
        02
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading - Matched to Motorsport Section Typography */}
        <div className="mb-16 sm:mb-20 lg:mb-24 space-y-4 max-w-xl text-left">
          
          {/* Small Racing-Red Editorial Tag */}
          <div className="inline-flex items-center space-x-2 text-kms-red font-display text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-kms-red animate-pulse" />
            <span>02 / EXPERIENCES</span>
          </div>

          {/* Bold Condensed Headline */}
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.94]">
            FIND YOUR <br />
            <span className="text-gray-400">SPEED.</span>
          </h2>

          {/* Muted Supporting Text */}
          <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed">
            Choose your way onto the track.
          </p>

        </div>

        {/* Editorial Three-Column Experience Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-start">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={exp.id}
              index={idx + 1}
              title={exp.title}
              description={exp.description}
              image={exp.image}
              href={exp.href}
              heightClass={exp.heightClass}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
