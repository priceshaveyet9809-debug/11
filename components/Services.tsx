import React from 'react';
import { Play, CheckCircle } from 'lucide-react';
import { siteContent } from '../siteContent';

const Services: React.FC = () => {
  const { services } = siteContent;

  return (
    <section id={services.id} className="py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-rose-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">{services.header}</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">{services.title}</h2>
        <p className="mt-6 text-slate-500 max-w-2xl mx-auto font-medium">{services.description}</p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {services.packages.map((pkg, i) => (
          <div key={i} className={`relative p-8 rounded-[3rem] border transition-all hover:-translate-y-3 ${pkg.popular ? 'bg-slate-900 text-white border-slate-800 shadow-2xl' : 'bg-white border-slate-100'}`}>
            {pkg.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gradient text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">{pkg.popularBadge}</span>}
            <div className="rounded-[2rem] overflow-hidden mb-8 aspect-video relative group cursor-pointer">
              <img src={pkg.video} className="w-full h-full object-cover" alt={pkg.name} />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="text-white" size={40} fill="white" />
              </div>
            </div>
            <h3 className="text-3xl font-black mb-4">{pkg.name}</h3>
            <p className={`text-sm mb-8 leading-relaxed ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.desc}</p>
            <div className="h-[1px] w-full bg-slate-200/20 mb-8"></div>
            <ul className="space-y-5 mb-12">
              {pkg.features.map((f, j) => (
                <li key={j} className="flex items-center gap-4 text-sm font-bold">
                  <CheckCircle size={20} className="text-rose-500 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-5 rounded-2xl font-black transition-all transform active:scale-95 ${pkg.popular ? 'bg-brand-gradient text-white shadow-xl shadow-rose-500/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
              {pkg.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;