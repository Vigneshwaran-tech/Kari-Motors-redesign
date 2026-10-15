import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MotorsportSection from '../components/MotorsportSection';
import ExperiencesSection from '../components/ExperiencesSection';
import TrackSection from '../components/TrackSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-kms-darker text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <MotorsportSection />
        <ExperiencesSection />
        <TrackSection />
      </main>
    </div>
  );
}
