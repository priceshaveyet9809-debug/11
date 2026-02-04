import { VideoItem, PackageItem, ChannelItem } from './types';

import { Camera, Map, Layers, Film, Award, Star } from 'lucide-react';
import { Service, Testimonial } from './types';


export const LOGO_GRADIENT = "from-[#FF3366] via-[#FF6633] to-[#FF9933]";

export const LONG_FORM_VIDEOS: VideoItem[] = [
  { id: 'l1', title: 'Modern Villa Tour', youtubeId: 'cu17V4nZK-c', type: 'long' },
  { id: 'l2', title: 'Luxury Penthouse Showcase', youtubeId: '9W9qQInmFmI', type: 'long' },
  { id: 'l3', title: 'Waterfront Estate Edit', youtubeId: 'm4L62Vn5fE4', type: 'long' },
  { id: 'l4', title: 'Mountain Retreat Cinematic', youtubeId: 'jVnB87O-k5Y', type: 'long' },
];

export const SHORT_FORM_VIDEOS: VideoItem[] = [
  { id: 's1', title: 'Kitchen Luxury', youtubeId: 'K7H_4IqU-XQ', type: 'short' },
  { id: 's2', title: 'Poolside Vibes', youtubeId: 'XoK7mX9eF_s', type: 'short' },
  { id: 's3', title: 'Master Suite Edit', youtubeId: 'L-R4M4q-6O0', type: 'short' },
  { id: 's4', title: 'Garden Walkthrough', youtubeId: 'Yv6k5Mh9Q0w', type: 'short' },
  { id: 's5', title: 'Entrance Impact', youtubeId: 'N9y9m-F7Q6k', type: 'short' },
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'p1',
    name: 'Standard',
    price: 'Contact Us',
    description: 'Perfect for quick listings and high-volume agents.',
    features: ['1-2 Minute Edit', 'Basic Color Grading', 'Royalty-Free Music', '48h Turnaround'],
    youtubeId: 'cu17V4nZK-c',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'p2',
    name: 'Advance',
    price: 'Popular',
    description: 'The ultimate showcase for premium property listings.',
    features: ['3-5 Minute Edit', 'Advanced Color Grading', 'Sound Design', 'Revisions Included', 'Social Media Cuts'],
    youtubeId: '9W9qQInmFmI',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'p3',
    name: 'High End',
    price: 'Custom',
    description: 'Bespoke cinematic storytelling for the world\'s most elite estates.',
    features: ['Unlimited Length', 'Premium Cinematic Grading', 'Sound Mastering', 'Drone Footage Integration', 'Custom Graphics'],
    youtubeId: 'm4L62Vn5fE4',
    gradient: 'from-purple-600 to-pink-600'
  }
];

export const CHANNELS: ChannelItem[] = [
  {
    id: 'c1',
    name: 'PREES Luxury Reel',
    description: 'Our main hub for premium long-form real estate walkthroughs.',
    link: 'https://youtube.com',
    icon: 'fa-youtube',
    stats: '50K+ Subscribers'
  },
  {
    id: 'c2',
    name: 'PREES Shorts',
    description: 'Focusing on vertical content and quick property highlights.',
    link: 'https://tiktok.com',
    icon: 'fa-tiktok',
    stats: '1M+ Monthly Views'
  }
];
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

