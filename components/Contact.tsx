import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteContent } from '../siteContent';

const Contact: React.FC = () => {
  const { contact } = siteContent;

  return (
    <section id={contact.id} className="py-40 px-6">
      <div className="max-w-6xl mx-auto rounded-[5rem] p-16 md:p-32 text-center bg-brand-gradient shadow-2xl shadow-rose-500/30 text-white relative overflow-hidden group">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-none">{contact.titleLine1} <br/> {contact.titleLine2}</h2>
          <p className="text-white/90 mb-16 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            {contact.description}
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            <button className="bg-white text-rose-600 px-14 py-6 rounded-[2rem] font-black text-xl hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
              <MessageCircle size={24} /> {contact.ctaPrimary}
            </button>
            <button className="bg-slate-900 text-white px-14 py-6 rounded-[2rem] font-black text-xl hover:bg-white hover:text-slate-900 transition-all shadow-xl">
              {contact.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;