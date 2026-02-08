import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Landmark,
  LayoutGrid,
  Sparkles,
  Music,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "From conferences to galas, we create polished corporate experiences that align with your brand vision.",
  },
  {
    icon: Landmark,
    title: "Government Events",
    description:
      "High-security, protocol-driven events for government entities and diplomatic gatherings.",
  },
  {
    icon: LayoutGrid,
    title: "Exhibitions & Summits",
    description:
      "Large-scale exhibitions and industry summits that drive engagement and meaningful connections.",
  },
  {
    icon: Sparkles,
    title: "Brand Activations",
    description:
      "Immersive brand experiences that create emotional connections and drive measurable results.",
  },
  {
    icon: Music,
    title: "Festivals & Entertainment",
    description:
      "Spectacular entertainment events and festivals that captivate audiences at scale.",
  },
];

const ServicesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card border border-border/50 rounded-lg p-8 hover-lift cursor-pointer overflow-hidden"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <service.icon className="w-10 h-10 text-primary mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
