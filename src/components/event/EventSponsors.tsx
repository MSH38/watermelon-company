import { useState, useRef, useCallback, useEffect } from "react";
import type { Sponsor } from "@/data/events";

const EventSponsors = ({ sponsors }: { sponsors: Sponsor[] }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [middleIdx, setMiddleIdx] = useState(2);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  const speed = 0.5;

  const getMiddleIndex = useCallback(() => {
    if (!scrollRef.current || !sponsors.length) return 2;
    const singleSetWidth = scrollRef.current.scrollWidth / 4;
    const itemWidth = singleSetWidth / sponsors.length;
    const visibleCenter = positionRef.current + (typeof window !== "undefined" ? window.innerWidth / 2 : 600);
    return Math.floor((visibleCenter / itemWidth) % sponsors.length);
  }, [sponsors.length]);

  const animate = useCallback(() => {
    if (!scrollRef.current || isPaused) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    positionRef.current += speed;
    const singleSetWidth = scrollRef.current.scrollWidth / 4;
    if (positionRef.current >= singleSetWidth) {
      positionRef.current -= singleSetWidth;
    }

    scrollRef.current.style.transform = `translateX(-${positionRef.current}px)`;
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMiddleIdx(getMiddleIndex());
    }, 100);
    return () => clearInterval(interval);
  }, [getMiddleIndex]);

  if (!sponsors || sponsors.length === 0) return null;

  const duplicated = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Partners</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Sponsors</h2>

        <div
          className="overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIndex(null);
          }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-card/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-card/80 to-transparent pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex items-center gap-6 w-max will-change-transform"
          >
            {duplicated.map((sponsor, i) => {
              const originalIdx = i % sponsors.length;
              const isMiddle = originalIdx === middleIdx;
              const isHovered = hoveredIndex === i;
              const isColored = isMiddle || isHovered;

              return (
                <a
                  key={`${sponsor.name}-${i}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0"
                  style={{ width: "180px" }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border/50 bg-white/5 backdrop-blur-sm">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      // className={`w-full h-full object-contain p-3 transition-all duration-500 ${
                      //   isColored ? "grayscale-0 opacity-100" : "grayscale opacity-40"
                      // }`}
                      className="w-full h-full object-contain p-3 transition-all duration-500 grayscale-0 opacity-100"
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 flex items-end justify-center pb-2 transition-opacity duration-300 ${
                        isColored ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="font-display text-xs font-semibold text-foreground bg-background/70 px-2 py-1 rounded">
                        {sponsor.name}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSponsors;
