import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import sponsor1 from "@/assets/sponsor-1.jpg";
import sponsor2 from "@/assets/sponsor-2.jpg";
import sponsor3 from "@/assets/sponsor-3.jpg";
import sponsor4 from "@/assets/sponsor-4.jpg";
import sponsor5 from "@/assets/sponsor-5.jpg";

const sponsors = [
  { name: "TechVision Corp", image: sponsor1 },
  { name: "Global Systems", image: sponsor2 },
  { name: "CloudScale Inc", image: sponsor3 },
  { name: "Digital Nexus", image: sponsor4 },
  { name: "Innovation Labs", image: sponsor5 },
];

const partners = [
  { name: "Ministry of Economy", image: sponsor3 },
  { name: "Dubai Chamber", image: sponsor1 },
  { name: "Abu Dhabi Events", image: sponsor4 },
  { name: "DWTC", image: sponsor2 },
  { name: "Expo Authority", image: sponsor5 },
];

const InfiniteMarquee = ({
  items,
  direction = "left",
  speed = 30,
}: {
  items: { name: string; image: string }[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  const [isPaused, setIsPaused] = useState(false);
  // Duplicate items for seamless loop
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div
        className="flex items-center gap-12 w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicated.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 flex items-center justify-center group"
          >
            <img
              src={item.image}
              alt={item.name}
              className="max-w-full max-h-full object-contain grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const SponsorsPartners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="sponsors" className="section-padding border-t border-border/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Trusted By
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Sponsors & Partners
          </h2>
          <div className="line-separator" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-10"
        >
          <div>
            <p className="text-muted-foreground font-body text-xs tracking-[0.2em] uppercase mb-4 text-center">
              Our Sponsors
            </p>
            <InfiniteMarquee items={sponsors} direction="left" speed={35} />
          </div>

          <div>
            <p className="text-muted-foreground font-body text-xs tracking-[0.2em] uppercase mb-4 text-center">
              Our Partners
            </p>
            <InfiniteMarquee items={partners} direction="right" speed={40} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsPartners;
