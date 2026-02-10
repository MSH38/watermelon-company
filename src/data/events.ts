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

export interface EventDay {
  label: string;
  items: EventScheduleItem[];
}

export interface Sponsor {
  name: string;
  image: string;
  url: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
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
  schedule: EventDay[];
  sponsors: Sponsor[];
  registrationOpen: boolean;
  links: { label: string; url: string }[];
}

export const teamMembers: TeamMember[] = [
  { name: "Ahmed Al-Mansoori", position: "CEO & Founder", image: speaker1 },
  { name: "Layla Hassan", position: "Creative Director", image: speaker2 },
  { name: "Omar Khalid", position: "Head of Operations", image: speaker3 },
  { name: "Nadia Faris", position: "Event Strategist", image: speaker1 },
  { name: "Tariq Bashir", position: "Technical Director", image: speaker2 },
  { name: "Hana Youssef", position: "Client Relations Manager", image: speaker3 },
  { name: "Khalid Raza", position: "Production Manager", image: speaker1 },
];

const defaultSponsors: Sponsor[] = [
  { name: "TechVision Corp", image: caseStudy1, url: "https://example.com" },
  { name: "Global Systems", image: caseStudy2, url: "https://example.com" },
  { name: "CloudScale Inc", image: caseStudy3, url: "https://example.com" },
  { name: "Digital Nexus", image: eventGallery1, url: "https://example.com" },
  { name: "Innovation Labs", image: eventGallery2, url: "https://example.com" },
];

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
      { name: "James Anderson", role: "Keynote Speaker", bio: "CEO of TechVision Inc. with 20+ years in AI and machine learning.", image: speaker1, linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
      { name: "Sarah Mitchell", role: "Panel Speaker", bio: "VP of Innovation at Global Systems. Expert in digital transformation.", image: speaker2, linkedin: "https://linkedin.com" },
      { name: "David Chen", role: "Workshop Lead", bio: "CTO at CloudScale. Pioneer in cloud-native architecture.", image: speaker3, linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
    ],
    chairpersons: [
      { name: "Sarah Mitchell", role: "Conference Chair", bio: "VP of Innovation at Global Systems. Leading the conference program.", image: speaker2, linkedin: "https://linkedin.com" },
    ],
    schedule: [
      {
        label: "Day 1",
        items: [
          { time: "09:00", title: "Registration & Welcome Coffee" },
          { time: "10:00", title: "Opening Keynote: The Future of AI", speaker: "James Anderson" },
          { time: "11:30", title: "Panel: Digital Transformation Strategies", speaker: "Sarah Mitchell" },
          { time: "13:00", title: "Networking Lunch" },
        ],
      },
      {
        label: "Day 2",
        items: [
          { time: "09:30", title: "Workshop: Cloud-Native Architecture", speaker: "David Chen" },
          { time: "11:00", title: "Fireside Chat: Innovation in MENA" },
          { time: "14:00", title: "Hackathon Kickoff" },
        ],
      },
      {
        label: "Day 3",
        items: [
          { time: "10:00", title: "Hackathon Presentations" },
          { time: "14:00", title: "Closing Keynote & Awards" },
          { time: "16:00", title: "Closing Remarks" },
        ],
      },
      {
        label: "Gala Dinner",
        items: [
          { time: "19:00", title: "Welcome Reception & Red Carpet" },
          { time: "20:00", title: "Gala Dinner & Awards Ceremony" },
          { time: "22:00", title: "Entertainment & Networking" },
        ],
      },
    ],
    sponsors: defaultSponsors,
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
      { name: "Sarah Mitchell", role: "Opening Speaker", bio: "VP of Innovation at Global Systems. Expert in international trade.", image: speaker2, linkedin: "https://linkedin.com" },
      { name: "David Chen", role: "Tech Pavilion Lead", bio: "CTO at CloudScale. Showcasing next-gen trade technologies.", image: speaker3, linkedin: "https://linkedin.com" },
    ],
    chairpersons: [
      { name: "James Anderson", role: "Expo Director", bio: "CEO of TechVision Inc. Overseeing exhibition operations.", image: speaker1, linkedin: "https://linkedin.com" },
    ],
    schedule: [
      {
        label: "Day 1",
        items: [
          { time: "08:30", title: "Doors Open" },
          { time: "09:30", title: "Opening Ceremony", speaker: "Sarah Mitchell" },
          { time: "11:00", title: "B2B Matchmaking Sessions" },
        ],
      },
      {
        label: "Day 2",
        items: [
          { time: "09:00", title: "Exhibitor Showcase" },
          { time: "14:00", title: "Tech Pavilion Tour", speaker: "David Chen" },
          { time: "16:00", title: "Networking Reception" },
        ],
      },
    ],
    sponsors: defaultSponsors,
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
      { name: "James Anderson", role: "Master of Ceremonies", bio: "Leading the national celebration program.", image: speaker1 },
    ],
    chairpersons: [],
    schedule: [
      {
        label: "Day 1",
        items: [
          { time: "16:00", title: "Gates Open & Cultural Exhibition" },
          { time: "18:00", title: "Official Opening Ceremony" },
          { time: "19:30", title: "Live Performances" },
          { time: "21:00", title: "Grand Fireworks Show" },
        ],
      },
    ],
    sponsors: defaultSponsors,
    registrationOpen: false,
    links: [
      { label: "Official Event Page", url: "#" },
      { label: "Live Broadcast", url: "#" },
    ],
  },
  {
    id: "healthcare-innovation-forum",
    title: "Healthcare Innovation Forum",
    category: "Healthcare",
    date: "September 10-12, 2024",
    location: "Riyadh Convention Centre, KSA",
    description: "A leading forum connecting healthcare professionals with next-gen medical technologies and research breakthroughs.",
    heroImage: eventGallery1,
    gallery: [eventGallery1, eventGallery2, caseStudy1],
    isLive: false,
    brochureUrl: "#",
    result: "3,000+ healthcare professionals attended",
    speakers: [
      { name: "Dr. Amina Al-Farsi", role: "Keynote Speaker", bio: "Chief Medical Officer at MedTech Global.", image: speaker2, linkedin: "https://linkedin.com" },
    ],
    chairpersons: [],
    schedule: [
      { label: "Day 1", items: [{ time: "09:00", title: "Opening & Registration" }, { time: "10:30", title: "Keynote: Future of Telemedicine", speaker: "Dr. Amina Al-Farsi" }] },
      { label: "Day 2", items: [{ time: "09:00", title: "Workshops & Panel Discussions" }, { time: "14:00", title: "Closing Ceremony" }] },
    ],
    sponsors: defaultSponsors,
    registrationOpen: true,
    links: [{ label: "Event Website", url: "#" }],
  },
  {
    id: "fintech-leaders-summit",
    title: "FinTech Leaders Summit",
    category: "Finance",
    date: "November 20-21, 2024",
    location: "DIFC, Dubai, UAE",
    description: "Bringing together CFOs, banking executives, and fintech startups to explore the future of digital finance in the Middle East.",
    heroImage: eventGallery2,
    gallery: [eventGallery2, caseStudy2, caseStudy3],
    isLive: false,
    brochureUrl: "#",
    result: "1,500+ finance leaders, 50+ startups showcased",
    speakers: [
      { name: "David Chen", role: "Panel Moderator", bio: "CTO at CloudScale. Fintech innovation expert.", image: speaker3, linkedin: "https://linkedin.com" },
    ],
    chairpersons: [
      { name: "James Anderson", role: "Summit Chair", bio: "CEO of TechVision Inc.", image: speaker1, linkedin: "https://linkedin.com" },
    ],
    schedule: [
      { label: "Day 1", items: [{ time: "09:00", title: "Opening Keynote" }, { time: "11:00", title: "Panel: Digital Banking in MENA" }] },
      { label: "Day 2", items: [{ time: "09:30", title: "Startup Pitch Competition" }, { time: "15:00", title: "Closing & Awards" }] },
    ],
    sponsors: defaultSponsors,
    registrationOpen: true,
    links: [{ label: "Summit Website", url: "#" }],
  },
];
