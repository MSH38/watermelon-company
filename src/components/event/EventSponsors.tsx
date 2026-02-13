import { useState, useCallback, useEffect, useRef } from "react";
import type { Sponsor } from "@/data/events";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventSponsors = ({ sponsors }: { sponsors: Sponsor[] }) => {
  const [centralIndex, setCentralIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    watchFocus: false,
    duration: 40,
  });
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const updateCentral = useCallback(() => {
    if (!emblaApi) return;
    setCentralIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const start = () => {
      autoplayRef.current = setInterval(() => {
        if (!isHovered) emblaApi.scrollNext();
      }, 3000);
    };
    start();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, isHovered]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateCentral);
    updateCentral();
    return () => {
      emblaApi.off("select", updateCentral);
    };
  }, [emblaApi, updateCentral]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (!sponsors || sponsors.length === 0) return null;

  return (
    <section className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Partners</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Sponsors</h2>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-4">
              {sponsors.map((sponsor, i) => {
                const isCenter = i === centralIndex;
                return (
                  <div
                    key={sponsor.name + i}
                    className="min-w-0 shrink-0 grow-0 basis-1/3 md:basis-1/5 pl-4 transition-all duration-700"
                  >
                    <a href={sponsor.url} target="_blank" rel="noreferrer" className="block">
                      <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border/50 group">
                        <img
                          src={sponsor.image}
                          alt={sponsor.name}
                          className={`w-full h-full object-contain bg-white p-2 transition-all duration-700 ${
                            isCenter ? "" : "grayscale opacity-50"
                          }`}
                        />
                        <div
                          className={`absolute inset-0 transition-opacity duration-500 flex items-end justify-center pb-2 ${
                            isCenter
                              ? "bg-primary/10 opacity-100"
                              : "bg-background/60 opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          <span className="font-display text-xs font-semibold text-foreground drop-shadow-md bg-background/70 px-2 py-1 rounded">
                            {sponsor.name}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventSponsors;
