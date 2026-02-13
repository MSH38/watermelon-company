import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import serviceEventMgmt from "@/assets/service-event-management.jpg";
import serviceMarketing from "@/assets/service-marketing-media.jpg";
import serviceTechSupport from "@/assets/service-technical-support.jpg";
import serviceFinance from "@/assets/service-finance-planning.jpg";
import serviceHospitality from "@/assets/service-hospitality.jpg";
import serviceAV from "@/assets/service-audio-visual.jpg";
import serviceSponsorship from "@/assets/service-sponsorship.jpg";
import serviceExhibition from "@/assets/service-exhibition.jpg";

const services = [
  {
    image: serviceEventMgmt,
    title: "Event Management",
    description: "End-to-end event planning, coordination, and execution for memorable corporate and public experiences.",
  },
  {
    image: serviceMarketing,
    title: "Marketing & Media",
    description: "Strategic marketing campaigns and media coverage that amplify your event's reach and impact.",
  },
  {
    image: serviceTechSupport,
    title: "Technical Support",
    description: "Comprehensive technical infrastructure including staging, lighting, and IT systems management.",
  },
  {
    image: serviceFinance,
    title: "Finance & Planning",
    description: "Budget management, financial planning, and ROI analysis to maximize your event investment.",
  },
  {
    image: serviceHospitality,
    title: "Hospitality Services",
    description: "Premium hospitality including catering, VIP services, and guest experience management.",
  },
  {
    image: serviceAV,
    title: "Audio Visual System",
    description: "State-of-the-art AV solutions including sound, projection, LED walls, and live streaming.",
  },
  {
    image: serviceSponsorship,
    title: "Sponsorship Management",
    description: "Strategic sponsor acquisition, relationship management, and activation planning.",
  },
  {
    image: serviceExhibition,
    title: "Exhibition Design",
    description: "Creative booth design, space planning, and immersive exhibition environments.",
  },
];

const ServicesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <div className="line-separator" />
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card border border-border/50 rounded-lg overflow-hidden hover-lift cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
