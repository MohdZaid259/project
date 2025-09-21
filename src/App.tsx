import React from 'react';
import HeroSection from './components/HeroSection';
import PopularToursSection from './components/PopularToursSection';
import ServicesSection from './components/ServicesSection';
import CallToActionSection from './components/CallToActionSection';
import PartnersSection from './components/PartnersSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <PopularToursSection />
      <ServicesSection />
      <CallToActionSection />
      <PartnersSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;