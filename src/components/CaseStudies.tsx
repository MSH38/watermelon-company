import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "@/data/events";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Our Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Featured Case Studies
          </h2>
          <div className="line-separator" />
        </motion.div>

        <div ref={ref}>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {events.map((event, index) => (
                <CarouselItem key={event.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link to={`/events/${event.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-lg cursor-pointer"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={event.heroImage}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-primary font-body text-xs tracking-widest uppercase">
                          {event.category}
                        </span>
                        <h3 className="font-display text-xl font-semibold mt-2 mb-2">{event.title}</h3>
                        <p className="font-body text-muted-foreground text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {event.result}
                        </p>
                        <div className="flex items-center gap-2 text-primary text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          <span>View Event Details</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-5" />
            <CarouselNext className="hidden md:flex -right-5" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
