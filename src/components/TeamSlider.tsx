import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { teamMembers } from "@/data/events";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const TeamSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Our People
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Meet the Team
          </h2>
          <div className="line-separator" />
        </motion.div>

        <div ref={ref}>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={member.name} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-300">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-display text-base font-semibold">{member.name}</h4>
                    <p className="text-primary font-body text-xs uppercase tracking-widest mt-1">{member.position}</p>
                  </motion.div>
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

export default TeamSlider;
