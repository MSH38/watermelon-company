import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { EventData } from "@/data/events";

const EventHero = ({ event }: { event: EventData }) => (
  <section className="relative min-h-[60vh] flex items-end">
    <div className="absolute inset-0">
      <img src={event.heroImage} alt={event.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
    </div>

    <div className="relative z-10 section-padding w-full pb-12">
      <Link
        to="/#case-studies"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Events
      </Link>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline" className="border-primary text-primary font-body uppercase tracking-widest text-xs">
            {event.category}
          </Badge>
          {event.isLive && (
            <Badge className="bg-destructive text-destructive-foreground animate-pulse font-body text-xs">
              🔴 Live Now
            </Badge>
          )}
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">{event.title}</h1>
        <div className="flex flex-wrap gap-6 text-muted-foreground font-body text-sm">
          <span className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-primary" /> {event.date}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" /> {event.location}
          </span>
        </div>
        <p className="max-w-2xl mt-6 text-muted-foreground font-body leading-relaxed">{event.description}</p>
      </motion.div>
    </div>
  </section>
);

export default EventHero;
