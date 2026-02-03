import { 
    Instagram, Youtube, Linkedin, Facebook, 
    MonitorPlay, Users, Target, Globe, Award 
} from 'lucide-react';

export const siteContent = {
    meta: {
        title: "PREES - Luxury Real Estate Media Agency",
        logoText: "PREES"
    },
    navigation: {
        links: [
            { label: "Home", href: "#home" },
            { label: "Showcase", href: "#showcase" },
            { label: "Pricing", href: "#services" },
            { label: "Digital Presence", href: "#media" },
            { label: "About Us", href: "#about" }
        ],
        cta: "Get Started"
    },
    hero: {
        badge: "#1 Rated Luxury Real Estate Post-Production",
        titleLine1: "Elevate Your",
        titleLine2: "Listings.",
        description: "PREES transforms raw property footage into cinematic masterpieces. We help elite brokers sell faster and for higher premiums across the US market.",
        ctaPrimary: "Book a Consultation",
        ctaSecondary: "View Demo Reel",
        trustText: "Trusted by 500+ Top US Brokers",
        heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
        users: [1, 2, 3, 4].map(i => `https://picsum.photos/100/100?random=${i + 50}`)
    },
    services: {
        id: "services",
        header: "Pricing & Plans",
        title: "Tailored Cinema Solutions",
        description: "From luxury condos to legendary estates, we have the perfect editing suite for your needs.",
        packages: [
            {
                name: "Essential",
                desc: "Perfect for high-end condos and modern townhomes.",
                video: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
                features: ["4K Cinematic Edit", "Standard Color Grading", "Licensed Music", "48-Hour Turnaround"],
                price: "Custom",
                cta: "Select Essential",
                popular: false
            },
            {
                name: "Premium Estate",
                desc: "The ultimate solution for luxury villas and vacation retreats.",
                video: "https://images.unsplash.com/photo-1613977252468-9b7d6a662b24?auto=format&fit=crop&w=600&q=80",
                features: ["2D Motion Graphics", "Bespoke Sound Design", "Optimized Reels/TikTok Cuts", "24-Hour Priority Delivery"],
                price: "Premium",
                cta: "Select Premium",
                popular: true,
                popularBadge: "Most Requested"
            },
            {
                name: "Masterpiece",
                desc: "Elite storytelling for multi-million dollar mansions.",
                video: "https://images.unsplash.com/photo-1512915922686-57c11ed9bd6b?auto=format&fit=crop&w=600&q=80",
                features: ["Cinematic HDR Grading", "3D Architectural Tracking", "Unlimited Revisions", "Full Media Campaign Strategy"],
                price: "Elite",
                cta: "Select Masterpiece",
                popular: false
            }
        ]
    },
    showcase: {
        id: "showcase",
        header: "Portfolio",
        title: "Recent Acquisitions",
        description: "View our latest cinematic productions for luxury real estate across New York, Los Angeles, and Miami.",
        cta: "View All Cases",
        longFormTitle: "Long-Form Cinematic Tours",
        shortFormTitle: "Vertical Social Content",
        longVideos: [
            { thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", videoId: "cu17V4nZK-c" },
            { thumb: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80", videoId: "cu17V4nZK-c" },
            { thumb: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=800&q=80", videoId: "cu17V4nZK-c" },
            { thumb: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80", videoId: "cu17V4nZK-c" }
        ],
        shortVideos: [
            { thumb: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&h=711&q=80", videoId: "cu17V4nZK-c" },
            { thumb: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&h=711&q=80", videoId: "cu17V4nZK-c" },
            { thumb: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=400&h=711&q=80", videoId: "cu17V4nZK-c" },
            { thumb: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&h=711&q=80", videoId: "cu17V4nZK-c" }
        ]
    },
    digitalPresence: {
        id: "media",
        title: "Our Digital Footprint",
        description: "Join our global community for luxury real estate insights.",
        channels: [
            {
                name: "PREES Global",
                description: "Our official channel for high-end property walkthroughs, market trends, and editing masterclasses.",
                icon: Youtube,
                bgClass: "bg-white",
                textClass: "text-slate-900",
                iconBg: "bg-rose-50 text-rose-500",
                stats: [
                    { value: "50K+", label: "Subscribers" },
                    { value: "2M+", label: "Total Views" }
                ],
                cta: "Subscribe Now",
                decorIcon: MonitorPlay
            },
            {
                name: "PREES Living",
                description: "Daily doses of luxury lifestyle, vertical property reveals, and viral social media editing trends.",
                icon: Instagram,
                bgClass: "bg-slate-900",
                textClass: "text-white",
                iconBg: "bg-white/5 text-orange-400 border border-white/10",
                stats: [
                    { value: "120K+", label: "Followers" },
                    { value: "10M+", label: "Monthly Reach" }
                ],
                cta: "Follow @PREES",
                decorIcon: Users
            }
        ]
    },
    about: {
        id: "about",
        badge: "Who We Are",
        titleStart: "We are",
        titleEnd: "PREES",
        description: "A collective of filmmakers, data strategists, and technologists redefining how the world experiences and purchases luxury real estate.",
        features: [
            {
                title: "Precision",
                desc: "We don't just edit video; we engineer attention. Every frame is optimized for retention and conversion.",
                icon: Target,
                color: "rose"
            },
            {
                title: "Global Reach",
                desc: "Our content is designed to transcend borders, appealing to international investors in Asia, Europe, and the Middle East.",
                icon: Globe,
                color: "orange"
            },
            {
                title: "Excellence",
                desc: "Trusted by the top 1% of brokers. We set the industry standard for what luxury real estate media should look like.",
                icon: Award,
                color: "yellow"
            }
        ],
        storyTitle: "The PREES Story",
        storyP1: "Founded in 2024, PREES emerged from a simple observation: Luxury real estate moves fast, but the media representing it was stuck in the past.",
        storyP2: "We combined Hollywood-grade cinematography with Silicon Valley data analytics to create a media agency that doesn't just show homes—it sells a lifestyle.",
        cta: "Meet the Team",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        hiring: {
            title: "Ready to join the movement?",
            cta: "View Open Positions"
        }
    },
    contact: {
        id: "contact",
        titleLine1: "Let's Create",
        titleLine2: "a Masterpiece.",
        description: "Our team is ready to transform your luxury listings into record-breaking sales tools. Are you ready to lead the market?",
        ctaPrimary: "Get a Quote",
        ctaSecondary: "Schedule Demo"
    },
    footer: {
        links: ["Home", "About", "Privacy", "Terms"],
        copyright: "© 2024 PREES LUXURY MEDIA GROUP. NY | LA | MIA.",
        socials: [Facebook, Youtube, Instagram, Linkedin]
    },
    chatWidget: {
        initialMessage: "Welcome to PREES. I am your Luxury Media Assistant. How can I help you elevate your next listing?",
        typing: "Assistant is typing...",
        placeholder: "Ask about cinematic editing...",
        title: "PREES AI Assistant"
    }
};