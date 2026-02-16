import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";
import eventGallery1 from "@/assets/event-gallery-1.jpg";
import eventGallery2 from "@/assets/event-gallery-2.jpg";

// Team member photos
import team1 from "@/assets/team-4.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";
import team7 from "@/assets/team-7.jpg";

// Speaker / chairperson photos
import speakerChair1 from "@/assets/speaker-chair-1.jpg";
import speakerChair2 from "@/assets/speaker-chair-2.jpg";
import speakerChair3 from "@/assets/speaker-chair-3.jpg";

// Sponsor logos
import sponsor1 from "@/assets/sponsor-1.jpg";
import sponsor2 from "@/assets/sponsor-2.jpg";
import sponsor3 from "@/assets/sponsor-3.jpg";
import sponsor4 from "@/assets/sponsor-4.jpg";
import sponsor5 from "@/assets/sponsor-5.jpg";

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
  { name: "Ahmed Al-Mansoori", position: "CEO & Founder", image: team1 },
  { name: "Layla Hassan", position: "Creative Director", image: team2 },
  { name: "Omar Khalid", position: "Head of Operations", image: team3 },
  { name: "Nadia Faris", position: "Event Strategist", image: team4 },
  { name: "Tariq Bashir", position: "Technical Director", image: team5 },
  { name: "Hana Youssef", position: "Client Relations Manager", image: team6 },
  { name: "Khalid Raza", position: "Production Manager", image: team7 },
];

const defaultSponsors: Sponsor[] = [
  { name: "TechVision Corp", image: sponsor1, url: "https://example.com" },
  { name: "Global Systems", image: sponsor2, url: "https://example.com" },
  { name: "CloudScale Inc", image: sponsor3, url: "https://example.com" },
  { name: "Digital Nexus", image: sponsor4, url: "https://example.com" },
  { name: "Innovation Labs", image: sponsor5, url: "https://example.com" },
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
    videoUrl: "https://www.youtube.com/embed/Cjbt1qdso2M",
    isLive: true,
    liveStreamUrl: "https://www.youtube.com/embed/Cjbt1qdso2M",
    brochureUrl: "#",
    result: "5,000+ attendees, 98% satisfaction rate",
    speakers: [
      { name: "James Anderson", role: "Keynote Speaker", bio: "CEO of TechVision Inc. with 20+ years in AI and machine learning.", image: team1, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/", twitter: "https://twitter.com" },
      { name: "Sarah Mitchell", role: "Panel Speaker", bio: "VP of Innovation at Global Systems. Expert in digital transformation.", image: team2, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "David Chen", role: "Workshop Lead", bio: "CTO at CloudScale. Pioneer in cloud-native architecture.", image: team3, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/", twitter: "https://twitter.com" },
      { name: "Fatima Al-Rashid", role: "AI & Ethics Speaker", bio: "Director of AI Ethics at FutureMinds. Advocate for responsible AI.", image: team4, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Michael Torres", role: "DevOps Speaker", bio: "VP Engineering at ScaleOps. Expert in CI/CD and infrastructure.", image: team5, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/", twitter: "https://twitter.com" },
      { name: "Aisha Karim", role: "Data Science Lead", bio: "Head of Data Science at Analytix. Specializing in predictive models.", image: team6, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
    ],
    chairpersons: [
      { name: "Dr. Hassan Al-Farooq", role: "Conference Chair", bio: "Chairman of the UAE Technology Council. Leading the conference program.", image: speakerChair1, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Prof. Richard Müller", role: "Academic Chair", bio: "Dean of Computer Science at ETH Zurich. Renowned AI researcher.", image: speakerChair2, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Elena Voronova", role: "Industry Chair", bio: "CEO of NovaTech Group. 25+ years in enterprise technology.", image: speakerChair3, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
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
    videoUrl: "https://www.youtube.com/embed/Cjbt1qdso2M",
    isLive: false,
    brochureUrl: "#",
    result: "200+ exhibitors, $2M+ deals closed",
    speakers: [
      { name: "Sarah Mitchell", role: "Opening Speaker", bio: "VP of Innovation at Global Systems. Expert in international trade.", image: team2, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "David Chen", role: "Tech Pavilion Lead", bio: "CTO at CloudScale. Showcasing next-gen trade technologies.", image: team3, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Rania El-Sayed", role: "Trade Policy Expert", bio: "Senior Advisor at World Trade Organization.", image: team4, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Marcus Wright", role: "Logistics Speaker", bio: "COO of GlobalFreight. Supply chain optimization expert.", image: team5, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
    ],
    chairpersons: [
      { name: "Dr. Hassan Al-Farooq", role: "Expo Director", bio: "Chairman of the UAE Technology Council. Overseeing exhibition operations.", image: speakerChair1, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Prof. Richard Müller", role: "Trade Forum Chair", bio: "Dean of Economics at ETH Zurich.", image: speakerChair2, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Elena Voronova", role: "Innovation Chair", bio: "CEO of NovaTech Group.", image: speakerChair3, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
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
    videoUrl: "https://www.youtube.com/embed/Cjbt1qdso2M",
    isLive: false,
    brochureUrl: "#",
    result: "50,000+ guests, live broadcast to 10M+",
    speakers: [
      { name: "James Anderson", role: "Master of Ceremonies", bio: "Leading the national celebration program.", image: team1 },
      { name: "Layla Hassan", role: "Cultural Program Lead", bio: "Curating the cultural exhibition and performances.", image: team2 },
      { name: "Omar Khalid", role: "Operations Director", bio: "Managing event logistics and coordination.", image: team3 },
      { name: "Nadia Faris", role: "VIP Liaison", bio: "Managing VIP guest relations and protocol.", image: team4 },
    ],
    chairpersons: [
      { name: "Dr. Hassan Al-Farooq", role: "Celebration Director", bio: "Overseeing the national celebration.", image: speakerChair1 },
      { name: "Elena Voronova", role: "Production Chair", bio: "Leading the show production.", image: speakerChair3 },
      { name: "Prof. Richard Müller", role: "Broadcast Chair", bio: "Managing the global broadcast.", image: speakerChair2 },
    ],
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
    videoUrl: "https://www.youtube.com/embed/Cjbt1qdso2M",
    isLive: false,
    brochureUrl: "#",
    result: "3,000+ healthcare professionals attended",
    speakers: [
      { name: "Dr. Amina Al-Farsi", role: "Keynote Speaker", bio: "Chief Medical Officer at MedTech Global.", image: team4, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "James Anderson", role: "HealthTech Lead", bio: "CEO of TechVision Inc. Digital health solutions.", image: team1, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Sarah Mitchell", role: "Panel Moderator", bio: "VP of Innovation. Healthcare transformation expert.", image: team2, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "David Chen", role: "Tech Workshop Lead", bio: "CTO at CloudScale. Health data architecture.", image: team3, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
    ],
    chairpersons: [
      { name: "Dr. Hassan Al-Farooq", role: "Forum Chair", bio: "Leading the healthcare forum.", image: speakerChair1, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Elena Voronova", role: "Innovation Chair", bio: "CEO of NovaTech Group.", image: speakerChair3, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Prof. Richard Müller", role: "Research Chair", bio: "Dean of Medical Sciences.", image: speakerChair2, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
    ],
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
    videoUrl: "https://www.youtube.com/embed/Cjbt1qdso2M",
    isLive: false,
    brochureUrl: "#",
    result: "1,500+ finance leaders, 50+ startups showcased",
    speakers: [
      { name: "David Chen", role: "Panel Moderator", bio: "CTO at CloudScale. Fintech innovation expert.", image: team3, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Sarah Mitchell", role: "Keynote Speaker", bio: "VP of Innovation. Digital banking expert.", image: team2, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Michael Torres", role: "Blockchain Speaker", bio: "VP Engineering at ScaleOps. DeFi specialist.", image: team5, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Aisha Karim", role: "RegTech Lead", bio: "Head of Data Science. Compliance analytics.", image: team6, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Tariq Bashir", role: "PayTech Speaker", bio: "Technical Director. Payment systems expert.", image: team7, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
    ],
    chairpersons: [
      { name: "Dr. Hassan Al-Farooq", role: "Summit Chair", bio: "Chairman of the UAE Technology Council.", image: speakerChair1, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Prof. Richard Müller", role: "Academic Chair", bio: "Dean of Economics at ETH Zurich.", image: speakerChair2, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
      { name: "Elena Voronova", role: "Industry Chair", bio: "CEO of NovaTech Group.", image: speakerChair3, linkedin: "https://www.linkedin.com/in/mahmoud-heikal/" },
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
