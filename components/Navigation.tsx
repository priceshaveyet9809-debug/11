import React, { useState, useEffect } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { siteContent } from '../siteContent';

interface NavigationProps {
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigation } = siteContent;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
      setIsMenuOpen(false);
      if (href === '#about') {
          onNavigate('about');
      } else {
          onNavigate('home');
          if (href !== '#home' && href !== '#about') {
             setTimeout(() => {
                 const el = document.querySelector(href);
                 if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                 }
             }, 100);
          }
      }
  };

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group">
             {/* Custom Gradient Squircle Logo */}
             <div className="w-10 h-10 bg-gradient-to-br from-[#FF5F6D] to-[#FFC371] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                <div className="relative">
                  <Sparkles className="text-white" size={20} fill="white" />
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
             </div>
             <span className="text-2xl font-black tracking-tight text-[#1a202c]">PREES</span>
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
        <div className="fixed inset-0 bg-white z-[90] pt-32 px-6 md:hidden animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-8 text-2xl font-black text-slate-900">
             {navigation.links.map((link, idx) => (
                <button key={idx} onClick={() => handleLinkClick(link.href)} className="text-left hover:text-rose-500 transition-colors">
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