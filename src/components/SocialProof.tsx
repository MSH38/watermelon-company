import { motion, useInView, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { number: 18, suffix: "+", label: "Years Experience" },
  { number: 1000, suffix: "+", label: "Events Delivered" },
  { number: 100, suffix: "+", label: "Global Clients" },
];

const AnimatedNumber = ({ value, isInView }: { value: number; isInView: boolean }) => {
  const spring = useSpring(0, { 
    mass: 1, 
    stiffness: 40, 
    damping: 20,
    restDelta: 0.5,
  });
  const display = useTransform(spring, (v: number) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v: number) => {
      if (ref.current) {
        ref.current.textContent = String(v);
      }
    });
    return unsubscribe;
  }, [display]);

  return <span ref={ref}>0</span>;
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
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="text-center px-8"
            >
              <span className="font-display text-5xl md:text-6xl font-bold text-gradient-gold">
                <AnimatedNumber value={stat.number} isInView={isInView} />
                {stat.suffix}
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
