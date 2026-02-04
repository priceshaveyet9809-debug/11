
import React from 'react';
import { VideoItem } from '../types';

interface VideoCarouselProps {
  title: string;
  videos: VideoItem[];
  type: 'long' | 'short';
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ title, videos, type }) => {
  // Triple the videos array to ensure smooth infinite loop
  const displayVideos = [...videos, ...videos, ...videos];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          {title} <span className="text-gradient">Showcase</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mt-4"></div>
      </div>

      <div className="relative group">
        <div className="infinite-scroll flex gap-6 px-6">
          {displayVideos.map((video, idx) => (
            <div 
              key={`${video.id}-${idx}`}
              className={`flex-shrink-0 relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg group/item transition-transform duration-500 hover:scale-[1.02] ${
                type === 'long' ? 'w-[400px] aspect-video' : 'w-[250px] aspect-[9/16]'
              }`}
            >
              <iframe
                className="w-full h-full pointer-events-none"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&mute=1&controls=0&loop=1&playlist=${video.youtubeId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <p className="text-white font-bold text-lg">{video.title}</p>
                <a 
                  href={`https://youtube.com/watch?v=${video.youtubeId}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 text-[#FF6633] text-sm font-semibold flex items-center gap-2"
                >
                  Watch Full Video <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
