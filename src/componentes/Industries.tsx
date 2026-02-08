import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const industries = [
  { name: "Government", icon: "🏛️" },
  { name: "Technology", icon: "💻" },
  { name: "Energy", icon: "⚡" },
  { name: "Finance", icon: "📊" },
  { name: "Entertainment", icon: "🎭" },
];

const filters = ["All", "Government", "Technology", "Energy", "Finance", "Entertainment"];

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? industries
      : industries.filter((i) => i.name === activeFilter);

  return (
    <section id="industries" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Sectors We Serve
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Industries
          </h2>
          <div className="line-separator" />
        </motion.div>

        {/* Filters */}
        <div ref={ref} className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-body text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className="group bg-card border border-border/50 rounded-lg p-8 text-center hover-lift cursor-pointer"
            >
              <span className="text-4xl mb-4 block transition-transform duration-300 group-hover:scale-125">
                {industry.icon}
              </span>
              <h3 className="font-display text-lg font-semibold">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
