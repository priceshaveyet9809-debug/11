
import { Camera, Map, Layers, Film, Award, Star } from 'lucide-react';
import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Cinematic Post-Production',
    description: 'Transforming raw property footage into cinematic, high-impact narratives in stunning 4K HDR.',
    icon: 'Film'
  },
  {
    id: '2',
    title: '3D Visual Overlay',
    description: 'Seamless architectural data tracking and 3D labels integrated directly into your video tours.',
    icon: 'Layers'
  },
  {
    id: '3',
    title: 'Bespoke Sound Design',
    description: 'Custom-tailored audio landscapes designed to match the unique aesthetic of luxury living spaces.',
    icon: 'Star'
  },
  {
    id: '4',
    title: 'Media Distribution',
    description: 'Strategic video optimization for YouTube, TikTok, and Instagram to reach elite global buyers.',
    icon: 'Map'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Robert Harrison',
    role: 'Managing Director, Elite Homes NY',
    content: 'Since partnering with PREES, our property engagement has skyrocketed. Their cinematic touch is unrivaled in the luxury market.',
    avatar: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 2,
    name: 'Sophia Williams',
    role: 'Top Producing Agent, LA Estates',
    content: 'The level of professionalism and the speed of delivery is incredible. PREES truly understands the language of luxury.',
    avatar: 'https://picsum.photos/100/100?random=12'
  }
];
