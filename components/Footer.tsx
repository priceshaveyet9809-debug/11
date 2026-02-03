
import React from 'react';
import { siteContent } from '../siteContent';

const Footer: React.FC = () => {
  const { footer, meta } = siteContent;

  return (
    <footer className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black tracking-tight uppercase">PREES</span>
            </div>
            <div className="flex gap-10 text-slate-500 font-bold text-sm uppercase tracking-widest">
              {footer.links.map((link, idx) => (
                  <a key={idx} href="#" className="hover:text-white transition-colors">{link}</a>
              ))}
            </div>
         </div>
         <div className="h-[1px] w-full bg-white/5 mb-12"></div>
         <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-xs font-bold uppercase tracking-widest">
           <div className="flex items-center gap-4">
             <p>{footer.copyright}</p>
           </div>
           <div className="flex gap-8">
              {footer.socials.map((Icon, i) => (
                <a key={i} href="#" className="hover:text-white transition-all transform hover:-translate-y-1"><Icon size={20} /></a>
              ))}
           </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
