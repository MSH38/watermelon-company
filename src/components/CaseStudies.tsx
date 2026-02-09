import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const caseStudies = [
  {
    image: caseStudy1,
    title: "Global Tech Summit 2024",
    result: "5,000+ attendees, 98% satisfaction rate",
    category: "Technology",
  },
  {
    image: caseStudy2,
    title: "International Trade Expo",
    result: "200+ exhibitors, $2M+ deals closed",
    category: "Exhibition",
  },
  {
    image: caseStudy3,
    title: "National Day Celebration",
    result: "50,000+ guests, live broadcast to 10M+",
    category: "Government",
  },
];

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

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary font-body text-xs tracking-widest uppercase">
                  {study.category}
                </span>
                <h3 className="font-display text-xl font-semibold mt-2 mb-2">
                  {study.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {study.result}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
