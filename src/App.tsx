import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import DashboardF from './components/DashboardF';
import AuthPage from './components/AuthPage';
import HeroSection from './components/HeroSection';
import PopularToursSection from './components/PopularToursSection';
import ServicesSection from './components/ServicesSection';
import CallToActionSection from './components/CallToActionSection';
import PartnersSection from './components/PartnersSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardF />;
      case 'login':
        return <AuthPage onNavigate={handleNavigate} />;
      case 'home':
      default:
        return (
          <>
            <HeroSection />
            <PopularToursSection />
            <ServicesSection />
            <CallToActionSection />
            <PartnersSection />
            <TestimonialsSection />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;