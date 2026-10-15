import React from 'react';
import { ArrowRight } from 'lucide-react';

// Easily customizable event items array
const EVENTS_DATA = [
  {
    id: 'race-weekend',
    category: 'MOTORSPORT',
    title: 'Race Weekend',
    description: 'Experience competitive racing at the circuit.',
    image: '/assets/kms_event_raceweekend.jpg',
    href: '#race-weekend',
  },
  {
    id: 'open-track-day',
    category: 'TRACK EXPERIENCE',
    title: 'Open Track Day',
    description: 'Explore opportunities to experience the circuit.',
    image: '/assets/kms_event_opentrack.jpg',
    href: '#open-track-day',
  },
  {
    id: 'private-corporate',
    category: 'GROUP EXPERIENCE',
    title: 'Private & Corporate Events',
    description: 'Discover motorsport experiences for groups and organisations.',
    image: '/assets/kms_event_corporate.jpg',
    href: '#private-corporate',
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="relative w-full bg-[#060708] text-white py-24 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
      
      {/* Background Editorial Watermark '04' */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 right-6 sm:top-16 sm:right-12 -z-0 select-none pointer-events-none text-white/[0.035] font-display font-bold text-[14rem] sm:text-[22rem] lg:text-[28rem] leading-none tracking-tighter"
      >
        04
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 lg:mb-20 space-y-4 max-w-xl text-left">
          
          {/* Small Racing-Red Editorial Tag */}
          <div className="inline-flex items-center space-x-2 text-kms-red font-display text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-kms-red animate-pulse" />
            <span>04 / WHAT'S ON</span>
          </div>

          {/* Bold Condensed Headline */}
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.94]">
            THE NEXT <br />
            <span className="text-gray-400">CHAPTER OF SPEED.</span>
          </h2>

          {/* Muted Supporting Text */}
          <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed">
            Discover motorsport action and events at Kari Motor Speedway.
          </p>

        </div>

        {/* Editorial Event Rows with Cohesive Grouped Spacing */}
        <div className="space-y-4 sm:space-y-5">
          {EVENTS_DATA.map((event, index) => (
            <a
              key={event.id}
              href={event.href}
              className="group block relative overflow-hidden bg-[#0c0d10] border border-white/10 hover:border-kms-red/60 border-l-2 border-l-transparent hover:border-l-kms-red transition-all duration-500 shadow-xl"
            >
              {/* Background Subtle Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
              <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-5 sm:gap-6 lg:gap-8 p-4 sm:p-5 lg:p-6">
                
                {/* Event Image Column (Desktop: Left ~38%, Mobile: Top) */}
                <div className="md:col-span-5 lg:col-span-4 overflow-hidden relative h-48 sm:h-52 md:h-48 lg:h-52 bg-black">
                  <img
                    src={event.image}
                    alt={`${event.title} at Kari Motor Speedway`}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle Number Stamp on Image */}
                  <span className="absolute bottom-3 left-3 text-[11px] font-display font-bold tracking-widest text-white/70 uppercase px-2 py-0.5 bg-black/60 backdrop-blur-sm border border-white/10">
                    0{index + 1}
                  </span>
                </div>

                {/* Event Content Details Column: Cohesive Vertical Group */}
                <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center space-y-2.5 sm:space-y-3">
                  
                  {/* Category Label */}
                  <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold tracking-widest text-kms-red uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-kms-red" />
                    <span>{event.category}</span>
                  </div>

                  {/* Event Title */}
                  <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-tight group-hover:text-white transition-colors">
                    {event.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
                    {event.description}
                  </p>

                  {/* Explore Link with Animated Arrow - Close and Cohesive */}
                  <div className="pt-1.5 flex items-center space-x-2 font-display text-xs sm:text-sm font-bold tracking-widest text-gray-400 group-hover:text-kms-red transition-colors">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-4 h-4 text-kms-red group-hover:translate-x-2 transition-transform duration-300" />
                  </div>

                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
