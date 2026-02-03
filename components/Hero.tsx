
import React from 'react';
import { Trophy, Calendar } from 'lucide-react';
import { siteContent } from '../siteContent';

const Hero: React.FC = () => {
  const { hero } = siteContent;

  return (
    <section id="home" className="relative pt-48 pb-24 px-6 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-4 bg-white shadow-sm border border-rose-100 text-rose-600 text-[10px] font-extrabold rounded-full mb-8 tracking-widest uppercase">
            <Trophy size={12} /> {hero.badge}
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[1.05] text-slate-900 mb-8 tracking-tighter">
            {hero.titleLine1} <br/><span className="text-gradient">{hero.titleLine2}</span>
          </h1>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium max-w-lg">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-gradient text-white px-10 py-5 rounded-2xl font-black hover:shadow-2xl transition-all flex items-center justify-center gap-3 group">
              {hero.ctaPrimary} <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
            </button>
            <button className="bg-white border-2 border-slate-200 px-10 py-5 rounded-2xl font-black hover:border-slate-900 transition-all">
                {hero.ctaSecondary}
            </button>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {hero.users.map((src, i) => (
                <img key={i} src={src} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="User" />
              ))}
            </div>
            <p className="text-sm text-slate-400 font-bold">{hero.trustText}</p>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="rounded-[4rem] overflow-hidden shadow-2xl rotate-2 scale-105 border-[16px] border-white relative group">
             <img src={hero.heroImage} alt="Luxury Home" className="w-full transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
