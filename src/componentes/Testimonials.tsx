import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Watermelon Company transformed our annual summit into an unforgettable experience. Their attention to detail and creative vision exceeded all expectations.",
    author: "Sarah Al-Rashid",
    title: "VP of Events, TechCorp Middle East",
  },
  {
    quote:
      "The level of professionalism and execution was world-class. They managed every aspect of our 10,000-person conference flawlessly.",
    author: "James Mitchell",
    title: "Director, Global Energy Forum",
  },
  {
    quote:
      "From the initial brief to post-event analysis, Watermelon delivered excellence at every stage. They are our go-to partner for all major events.",
    author: "Fatima Hassan",
    title: "Head of Communications, Ministry of Culture",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            What Clients Say
          </h2>
          <div className="line-separator" />
        </motion.div>

        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Quote className="w-10 h-10 text-primary/30 mx-auto mb-8" />
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8 italic">
              "{testimonials[current].quote}"
            </blockquote>
            <div>
              <p className="font-body font-semibold text-foreground">
                {testimonials[current].author}
              </p>
              <p className="font-body text-muted-foreground text-sm mt-1">
                {testimonials[current].title}
              </p>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
