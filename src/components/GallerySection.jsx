import React, { useState, useEffect } from 'react';
import { Maximize2, X } from 'lucide-react';

/**
 * Easily replaceable gallery data array.
 * To replace an image with an authentic KMS photograph, update `src`, `title`, `category`, and `alt`.
 */
const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'THE CIRCUIT',
    category: 'VENUE & TRACK',
    alt: 'Panoramic view of Kari Motor Speedway circuit curve and pit facilities at sunset',
    src: '/assets/kms_about_circuit.jpg',
    spanClass: 'lg:col-span-8 lg:row-span-2 h-[340px] sm:h-[420px] lg:h-[480px]',
  },
  {
    id: 2,
    title: 'CIRCUIT COMPLEX',
    category: 'AERIAL VIEW',
    alt: 'High-angle aerial view of the motorsport circuit layout and paddock complex',
    src: '/assets/kms_gallery_aerial.jpg',
    spanClass: 'lg:col-span-4 lg:row-span-1 h-[180px] sm:h-[210px] lg:h-[228px]',
  },
  {
    id: 3,
    title: 'WHEEL-TO-WHEEL',
    category: 'MOTORSPORT',
    alt: 'Touring race cars competing wheel-to-wheel through a wet race track curve',
    src: '/assets/kms_event_raceweekend.jpg',
    spanClass: 'lg:col-span-4 lg:row-span-1 h-[180px] sm:h-[210px] lg:h-[228px]',
  },
  {
    id: 4,
    title: 'FORMULA SPEED',
    category: 'SINGLE SEATER',
    alt: 'Formula single-seater race car accelerating through the circuit curbs at dusk',
    src: '/assets/kms-f4.jpg',
    spanClass: 'lg:col-span-4 h-[220px] sm:h-[250px] lg:h-[260px]',
  },
  {
    id: 5,
    title: 'RACE PITS',
    category: 'ATMOSPHERE',
    alt: 'Atmospheric evening view of the racing pit lane garages and mechanics',
    src: '/assets/kms_exp_events.jpg',
    spanClass: 'lg:col-span-4 h-[220px] sm:h-[250px] lg:h-[260px]',
  },
  {
    id: 6,
    title: 'KARTING ACTION',
    category: 'DRIVER FOCUS',
    alt: 'Close-up of a racing kart driver cornering on the asphalt track',
    src: '/assets/kms_exp_karting.jpg',
    spanClass: 'lg:col-span-4 h-[220px] sm:h-[250px] lg:h-[260px]',
  },
];

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(null);

  // Accessible lightbox closing with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };
    if (activeImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage]);

  return (
    <section id="gallery" className="relative w-full bg-[#060708] text-white py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5 scroll-mt-20">
      
      {/* Background Editorial Watermark '06' */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-6 sm:top-14 sm:right-12 -z-0 select-none pointer-events-none text-white/[0.035] font-display font-bold text-[14rem] sm:text-[20rem] lg:text-[26rem] leading-none tracking-tighter"
      >
        06
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Compact Editorial Section Heading (keeps focus on the gallery) */}
        <div className="mb-10 sm:mb-12 lg:mb-14 space-y-3.5 max-w-xl text-left">
          
          {/* Small Racing-Red Editorial Tag */}
          <div className="inline-flex items-center space-x-2 text-kms-red font-display text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-kms-red animate-pulse" />
            <span>06 / IN PICTURES</span>
          </div>

          {/* Bold Condensed Headline */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-[0.94]">
            SPEED. <br />
            <span className="text-gray-400">WITHOUT A FILTER.</span>
          </h2>

          {/* Muted Supporting Text */}
          <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed">
            A closer look at the circuit, the machines, and the atmosphere of motorsport.
          </p>

        </div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveImage(item)}
              aria-label={`View photo: ${item.title}`}
              className={`group relative overflow-hidden bg-[#0c0d10] border border-white/10 hover:border-kms-red/60 border-l-2 border-l-transparent hover:border-l-kms-red transition-all duration-500 cursor-pointer shadow-xl ${item.spanClass}`}
            >
              {/* Background Image with Explicit Meaningful Alt */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 contrast-105"
              />

              {/* Gradient & Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />

              {/* Top Right Expand Icon Indicator */}
              <div className="absolute top-3.5 right-3.5 p-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-none text-white/70 group-hover:text-kms-red group-hover:border-kms-red/40 transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between z-10">
                <div className="space-y-1 transform group-hover:-translate-y-0.5 transition-transform duration-300">
                  <span className="block text-[10px] sm:text-[11px] font-display font-semibold tracking-widest text-kms-red uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-white tracking-wider uppercase leading-none">
                    {item.title}
                  </h3>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#0c0d10] border border-white/20 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close image modal"
              className="absolute top-4 right-4 z-20 p-2.5 bg-black/70 hover:bg-kms-red text-white border border-white/20 rounded-none transition-colors focus:outline-none focus:ring-1 focus:ring-kms-red"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Caption Bar */}
            <div className="p-4 sm:p-6 bg-[#0c0d10] border-t border-white/10 flex items-center justify-between text-xs font-display tracking-widest uppercase">
              <div className="space-y-0.5">
                <span className="text-kms-red text-[11px] font-semibold">{activeImage.category}</span>
                <h4 className="text-base sm:text-lg font-bold text-white">{activeImage.title}</h4>
              </div>
              <span className="text-kms-muted text-[11px]">KARI MOTOR SPEEDWAY</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
