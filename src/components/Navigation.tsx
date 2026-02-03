
import React, { useState, useEffect } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { siteContent } from '../content/siteContent';

interface NavigationProps {
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigation, meta } = siteContent;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
      setIsMenuOpen(false);
      // Remove hash to get page name if needed, or just pass href
      if (href === '#about') {
          onNavigate('about');
      } else {
          onNavigate('home');
          // Smooth scroll fallback
          if (href !== '#home' && href !== '#about') {
             setTimeout(() => {
                 const el = document.querySelector(href);
                 el?.scrollIntoView({ behavior: 'smooth' });
             }, 100);
          }
      }
  };

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group">
             <img src={meta.logo} alt={meta.logoText} className="h-10 w-auto object-contain" />
          </button>
          
          <div className="hidden md:flex gap-10 items-center font-bold text-sm">
            {navigation.links.map((link, idx) => (
                <button 
                    key={idx} 
                    onClick={() => handleLinkClick(link.href)}
                    className="text-slate-600 hover:text-rose-600 transition-colors"
                >
                    {link.label}
                </button>
            ))}
            <button className="bg-slate-900 text-white px-7 py-3 rounded-xl hover:bg-brand-gradient hover:shadow-lg transition-all">
                {navigation.cta}
            </button>
          </div>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-900"><Menu /></button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[90] pt-32 px-6 md:hidden">
          <div className="flex flex-col gap-8 text-2xl font-black text-slate-900">
             {navigation.links.map((link, idx) => (
                <button key={idx} onClick={() => handleLinkClick(link.href)} className="text-left">
                    {link.label}
                </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
