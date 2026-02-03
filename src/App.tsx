
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import DigitalPresence from './components/DigitalPresence';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  const navigateTo = (page: string) => {
    if (page === 'home' || page === 'about') {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-rose-100 selection:text-rose-600 bg-white">
      <Navigation onNavigate={navigateTo} />
      
      {currentPage === 'about' ? (
        <About />
      ) : (
        <>
          <Hero />
          <Services />
          <Showcase />
          <DigitalPresence />
          <Contact />
        </>
      )}

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
