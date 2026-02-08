import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "18+", label: "Years Experience" },
  { number: "1000+", label: "Events Delivered" },
  { number: "100+", label: "Global Clients" },
];

const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative border-y border-border/50">
      <div className="section-padding">
        <div
          ref={ref}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-border/30"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center px-8"
            >
              <span className="font-display text-5xl md:text-6xl font-bold text-gradient-gold">
                {stat.number}
              </span>
              <p className="font-body text-muted-foreground text-sm tracking-widest uppercase mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
