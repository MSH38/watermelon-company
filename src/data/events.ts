import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";
import eventGallery1 from "@/assets/event-gallery-1.jpg";
import eventGallery2 from "@/assets/event-gallery-2.jpg";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";

export interface Speaker {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface EventScheduleItem {
  time: string;
  title: string;
  speaker?: string;
}

export interface EventData {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  heroImage: string;
  gallery: string[];
  videoUrl?: string;
  isLive: boolean;
  liveStreamUrl?: string;
  brochureUrl?: string;
  result: string;
  speakers: Speaker[];
  chairpersons: Speaker[];
  schedule: EventScheduleItem[];
  registrationOpen: boolean;
  links: { label: string; url: string }[];
}

export const events: EventData[] = [
  {
    id: "global-tech-summit-2024",
    title: "Global Tech Summit 2024",
    category: "Technology",
    date: "March 15-17, 2024",
    location: "Dubai World Trade Centre, UAE",
    description:
      "The premier technology conference bringing together 5,000+ industry leaders, innovators, and visionaries. Featuring keynote sessions, hands-on workshops, and an exhibition floor showcasing cutting-edge solutions.",
    heroImage: caseStudy1,
    gallery: [eventGallery1, eventGallery2, caseStudy1],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isLive: true,
    liveStreamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    brochureUrl: "#",
    result: "5,000+ attendees, 98% satisfaction rate",
    speakers: [
      {
        name: "James Anderson",
        role: "Keynote Speaker",
        bio: "CEO of TechVision Inc. with 20+ years in AI and machine learning.",
        image: speaker1,
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
      {
        name: "Sarah Mitchell",
        role: "Panel Speaker",
        bio: "VP of Innovation at Global Systems. Expert in digital transformation.",
        image: speaker2,
        linkedin: "https://linkedin.com",
      },
      {
        name: "David Chen",
        role: "Workshop Lead",
        bio: "CTO at CloudScale. Pioneer in cloud-native architecture.",
        image: speaker3,
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    ],
    chairpersons: [
      {
        name: "Sarah Mitchell",
        role: "Conference Chair",
        bio: "VP of Innovation at Global Systems. Leading the conference program.",
        image: speaker2,
        linkedin: "https://linkedin.com",
      },
    ],
    schedule: [
      { time: "09:00", title: "Registration & Welcome Coffee" },
      { time: "10:00", title: "Opening Keynote: The Future of AI", speaker: "James Anderson" },
      { time: "11:30", title: "Panel: Digital Transformation Strategies", speaker: "Sarah Mitchell" },
      { time: "13:00", title: "Networking Lunch" },
      { time: "14:30", title: "Workshop: Cloud-Native Architecture", speaker: "David Chen" },
      { time: "16:00", title: "Closing Remarks & Awards" },
    ],
    registrationOpen: true,
    links: [
      { label: "Event Website", url: "#" },
      { label: "Sponsor Kit", url: "#" },
      { label: "Media Coverage", url: "#" },
    ],
  },
  {
    id: "international-trade-expo",
    title: "International Trade Expo",
    category: "Exhibition",
    date: "June 5-8, 2024",
    location: "Abu Dhabi National Exhibition Centre",
    description:
      "A world-class trade exhibition featuring 200+ exhibitors from 40+ countries. Connecting global businesses with regional markets through curated matchmaking sessions and live product showcases.",
    heroImage: caseStudy2,
    gallery: [eventGallery2, eventGallery1, caseStudy2],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isLive: false,
    brochureUrl: "#",
    result: "200+ exhibitors, $2M+ deals closed",
    speakers: [
      {
        name: "Sarah Mitchell",
        role: "Opening Speaker",
        bio: "VP of Innovation at Global Systems. Expert in international trade.",
        image: speaker2,
        linkedin: "https://linkedin.com",
      },
      {
        name: "David Chen",
        role: "Tech Pavilion Lead",
        bio: "CTO at CloudScale. Showcasing next-gen trade technologies.",
        image: speaker3,
        linkedin: "https://linkedin.com",
      },
    ],
    chairpersons: [
      {
        name: "James Anderson",
        role: "Expo Director",
        bio: "CEO of TechVision Inc. Overseeing exhibition operations.",
        image: speaker1,
        linkedin: "https://linkedin.com",
      },
    ],
    schedule: [
      { time: "08:30", title: "Doors Open" },
      { time: "09:30", title: "Opening Ceremony", speaker: "Sarah Mitchell" },
      { time: "11:00", title: "B2B Matchmaking Sessions" },
      { time: "14:00", title: "Tech Pavilion Tour", speaker: "David Chen" },
      { time: "16:00", title: "Networking Reception" },
    ],
    registrationOpen: true,
    links: [
      { label: "Exhibitor Portal", url: "#" },
      { label: "Floor Plan", url: "#" },
    ],
  },
  {
    id: "national-day-celebration",
    title: "National Day Celebration",
    category: "Government",
    date: "December 2, 2024",
    location: "Corniche, Abu Dhabi",
    description:
      "A spectacular national celebration featuring live performances, fireworks, cultural exhibitions, and a live broadcast reaching 10M+ viewers worldwide.",
    heroImage: caseStudy3,
    gallery: [eventGallery1, caseStudy3, eventGallery2],
    isLive: false,
    brochureUrl: "#",
    result: "50,000+ guests, live broadcast to 10M+",
    speakers: [
      {
        name: "James Anderson",
        role: "Master of Ceremonies",
        bio: "Leading the national celebration program.",
        image: speaker1,
      },
    ],
    chairpersons: [],
    schedule: [
      { time: "16:00", title: "Gates Open & Cultural Exhibition" },
      { time: "18:00", title: "Official Opening Ceremony" },
      { time: "19:30", title: "Live Performances" },
      { time: "21:00", title: "Grand Fireworks Show" },
    ],
    registrationOpen: false,
    links: [
      { label: "Official Event Page", url: "#" },
      { label: "Live Broadcast", url: "#" },
    ],
  },
];
