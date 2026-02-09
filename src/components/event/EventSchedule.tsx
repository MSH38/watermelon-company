import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { EventScheduleItem } from "@/data/events";

const EventSchedule = ({ schedule }: { schedule: EventScheduleItem[] }) => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto">
      <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Timeline</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Event Schedule</h2>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
        {schedule.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative flex gap-6 mb-8 last:mb-0"
          >
            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-secondary border border-border shrink-0">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <div className="pt-2">
              <span className="text-primary font-body text-sm font-semibold">{item.time}</span>
              <h4 className="font-display text-lg font-semibold mt-1">{item.title}</h4>
              {item.speaker && (
                <p className="text-muted-foreground font-body text-sm mt-1">Speaker: {item.speaker}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EventSchedule;
