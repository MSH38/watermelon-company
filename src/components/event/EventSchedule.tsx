import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock } from "lucide-react";
import type { EventDay } from "@/data/events";

const EventSchedule = ({ schedule }: { schedule: EventDay[] }) => {
  const [openDay, setOpenDay] = useState<number | null>(0);

  const toggle = (i: number) => setOpenDay(openDay === i ? null : i);

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Timeline</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Event Schedule</h2>

        <div className="space-y-4">
          {schedule.map((day, dayIndex) => (
            <div key={day.label} className="border border-border/50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(dayIndex)}
                className="w-full flex items-center justify-between px-6 py-4 bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <span className="font-display text-lg font-semibold">{day.label}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    openDay === dayIndex ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openDay === dayIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 space-y-4">
                      {day.items.map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary border border-border shrink-0">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <div className="pt-1">
                            <span className="text-primary font-body text-sm font-semibold">{item.time}</span>
                            <h4 className="font-display text-base font-semibold mt-0.5">{item.title}</h4>
                            {item.speaker && (
                              <p className="text-muted-foreground font-body text-sm mt-0.5">Speaker: {item.speaker}</p>
                            )}
                          </div>
                        </div>
                      ))}
                      <p className="text-muted-foreground font-body text-xs italic mt-2">
                        For more details, check the brochure.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
