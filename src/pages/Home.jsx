import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MotorsportSection from '../components/MotorsportSection';
import ExperiencesSection from '../components/ExperiencesSection';
import TrackSection from '../components/TrackSection';
import EventsSection from '../components/EventsSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-kms-darker text-white antialiased flex flex-col justify-between">
      <Navbar />
      <main>
        <Hero />
        <MotorsportSection />
        <ExperiencesSection />
        <TrackSection />
        <EventsSection />
        <AboutSection />
        <GallerySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
