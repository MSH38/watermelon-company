import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardList,
  Lightbulb,
  Calendar,
  Rocket,
  BarChart3,
} from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Brief", description: "Understanding your vision and objectives" },
  { icon: Lightbulb, title: "Concept", description: "Crafting a creative strategy" },
  { icon: Calendar, title: "Planning", description: "Detailed logistics and coordination" },
  { icon: Rocket, title: "Execution", description: "Flawless delivery on the day" },
  { icon: BarChart3, title: "Evaluation", description: "Measuring success and impact" },
];

const ProcessTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            How We Work
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Our Process
          </h2>
          <div className="line-separator" />
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border/50" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center group"
              >
                {/* Step circle */}
                <div className="relative mx-auto w-24 h-24 rounded-full border border-border/50 bg-card flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors duration-500">
                  <step.icon className="w-8 h-8 text-primary" />
                  {/* Step number */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-body font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
