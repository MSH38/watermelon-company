import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Crafting Extraordinary
              <br />
              <span className="text-gradient-gold">Experiences</span>
            </h2>
            <div className="line-separator !mx-0 mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Watermelon Company is a premier event management agency specializing in
              creating world-class corporate, government, and mega events across the
              Middle East. With over 18 years of experience, we bring unmatched
              creativity and precision to every project.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our team of seasoned professionals combines strategic thinking with
              creative excellence to deliver events that leave lasting impressions
              and measurable impact.
            </p>
          </motion.div>

          {/* Right - Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Team Members", value: "150+" },
              { label: "Countries", value: "12" },
              { label: "Awards Won", value: "45+" },
              { label: "Repeat Clients", value: "92%" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="bg-card border border-border/50 rounded-lg p-6 text-center hover-lift"
              >
                <span className="font-display text-3xl font-bold text-gradient-gold block mb-2">
                  {stat.value}
                </span>
                <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
