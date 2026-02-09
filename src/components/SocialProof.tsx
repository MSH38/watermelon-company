import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { number: 18, suffix: "+", label: "Years Experience" },
  { number: 1000, suffix: "+", label: "Events Delivered" },
  { number: 100, suffix: "+", label: "Global Clients" },
];

const CountUp = ({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <>{count}{suffix}</>;
};

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
                <CountUp target={stat.number} suffix={stat.suffix} isInView={isInView} />
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
