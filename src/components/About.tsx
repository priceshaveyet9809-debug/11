
import React from 'react';
import { Users, Sparkles, ArrowRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const About: React.FC = () => {
  const { about } = siteContent;

  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-700">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
         <div className="inline-flex items-center gap-2 py-1 px-4 bg-rose-50 border border-rose-100 text-rose-600 text-[10px] font-extrabold rounded-full mb-8 tracking-widest uppercase">
            <Users size={12} /> {about.badge}
         </div>
         <h1 className="text-6xl md:text-8xl font-black mb-8 text-slate-900 tracking-tighter leading-[0.9]">
           {about.titleStart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">{about.titleEnd}</span>.
         </h1>
         <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-medium">
           {about.description}
         </p>
      </div>
      
      {/* Stats/Grid */}
      <div className="bg-slate-900 text-white py-24 px-6 mb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
           {about.features.map((feature, idx) => (
             <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className={`w-12 h-12 bg-${feature.color}-500 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-black mb-2">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative">
            <div className="absolute -inset-4 bg-brand-gradient opacity-20 blur-2xl rounded-full"></div>
            <img 
                src={about.image}
                alt="Our Team" 
                className="relative rounded-[3rem] shadow-2xl border-[8px] border-white rotate-2 hover:rotate-0 transition-transform duration-500"
            />
        </div>
        <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6">{about.storyTitle}</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {about.storyP1}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {about.storyP2}
            </p>
            <button className="flex items-center gap-2 text-rose-600 font-black uppercase tracking-widest hover:gap-4 transition-all group">
                {about.cta} <ArrowRight size={16} />
            </button>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <Sparkles className="absolute top-10 left-10 text-rose-200" size={100} />
             <Sparkles className="absolute bottom-10 right-10 text-orange-200" size={80} />
             
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 relative z-10">{about.hiring.title}</h2>
             <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl relative z-10">
                {about.hiring.cta}
             </button>
          </div>
      </div>
    </div>
  );
};

export default About;
