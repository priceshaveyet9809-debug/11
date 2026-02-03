
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { siteContent } from '../content/siteContent';

interface VideoItem {
    thumb: string;
    videoId?: string;
}

const VideoModal = ({ videoId, isOpen, onClose }: { videoId: string | undefined, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen || !videoId) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
      >
        <X size={40} />
      </button>
      <div className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const VideoMarquee = ({ items, type, onVideoClick }: { items: VideoItem[], type: 'long' | 'short', onVideoClick: (id: string) => void }) => {
  const doubledItems = [...items, ...items, ...items];
  return (
    <div className="marquee-container overflow-hidden py-4 relative">
      <div className={type === 'long' ? "animate-marquee" : "animate-marquee-fast"}>
        {doubledItems.map((item, idx) => (
          <div key={idx} className={`flex-shrink-0 px-3 transition-transform hover:scale-105 cursor-pointer group`}>
            <div 
              onClick={() => item.videoId && onVideoClick(item.videoId)}
              className={`block relative overflow-hidden rounded-2xl shadow-xl ${type === 'long' ? 'w-80 md:w-[480px] aspect-video' : 'w-48 md:w-64 aspect-[9/16]'}`}
            >
              <img src={item.thumb} className="w-full h-full object-cover" alt="Property Video" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-white shadow-lg">
                  <Play fill="currentColor" size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Showcase: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>(undefined);
  const { showcase } = siteContent;

  return (
    <section id={showcase.id} className="py-32 bg-slate-950 text-white overflow-hidden">
      <VideoModal 
        videoId={selectedVideo} 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(undefined)} 
      />

      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl text-left">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">{showcase.header}</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">{showcase.title}</h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">{showcase.description}</p>
          </div>
          <button className="bg-white text-slate-950 px-10 py-4 rounded-2xl font-black hover:bg-brand-gradient hover:text-white transition-all">
            {showcase.cta}
          </button>
        </div>
      </div>
      <div className="space-y-16">
        <div>
          <div className="px-6 mb-8 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-brand-gradient"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{showcase.longFormTitle}</span>
          </div>
          <VideoMarquee items={showcase.longVideos} type="long" onVideoClick={setSelectedVideo} />
        </div>
        <div>
          <div className="px-6 mb-8 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-brand-gradient"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{showcase.shortFormTitle}</span>
          </div>
          <VideoMarquee items={showcase.shortVideos} type="short" onVideoClick={setSelectedVideo} />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
