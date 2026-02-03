
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const DigitalPresence: React.FC = () => {
  const { digitalPresence } = siteContent;

  return (
    <section id={digitalPresence.id} className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">{digitalPresence.title}</h2>
          <p className="mt-4 text-slate-500 font-medium">{digitalPresence.description}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
            {digitalPresence.channels.map((channel, idx) => (
                <div key={idx} className={`${channel.bgClass} ${channel.textClass} p-12 rounded-[3.5rem] group overflow-hidden relative border border-slate-100 hover:shadow-2xl transition-shadow`}>
                    <div className="relative z-10">
                        <div className={`w-20 h-20 ${channel.iconBg} rounded-[2rem] flex items-center justify-center mb-10 shadow-inner`}>
                            <channel.icon size={40} />
                        </div>
                        <h3 className="text-4xl font-black mb-4">{channel.name}</h3>
                        <p className="mb-10 text-lg font-medium leading-relaxed opacity-70">{channel.description}</p>
                        <div className="flex gap-16">
                            {channel.stats.map((stat, sIdx) => (
                                <div key={sIdx}>
                                    <div className="text-4xl font-black tracking-tighter">{stat.value}</div>
                                    <div className="text-[10px] font-black opacity-50 uppercase tracking-widest mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <button className={`mt-12 px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all ${channel.bgClass === 'bg-white' ? 'bg-slate-900 text-white hover:bg-rose-600' : 'bg-brand-gradient text-white hover:shadow-xl'}`}>
                            {channel.cta} <ArrowRight size={18} />
                        </button>
                    </div>
                    <channel.decorIcon size={300} className={`absolute -bottom-20 -right-20 -rotate-12 group-hover:rotate-0 transition-transform duration-1000 opacity-10`} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalPresence;
