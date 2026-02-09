import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import type { Speaker } from "@/data/events";

const SpeakerCard = ({ speaker, index }: { speaker: Speaker; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group text-center"
  >
    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-300">
      <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
    </div>
    <h4 className="font-display text-lg font-semibold">{speaker.name}</h4>
    <p className="text-primary font-body text-xs uppercase tracking-widest mt-1">{speaker.role}</p>
    <p className="text-muted-foreground font-body text-sm mt-2 max-w-xs mx-auto">{speaker.bio}</p>
    <div className="flex justify-center gap-3 mt-3">
      {speaker.linkedin && (
        <a href={speaker.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
      )}
      {speaker.twitter && (
        <a href={speaker.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Twitter className="w-4 h-4" />
        </a>
      )}
    </div>
  </motion.div>
);

const EventSpeakers = ({ speakers, chairpersons }: { speakers: Speaker[]; chairpersons: Speaker[] }) => (
  <section className="section-padding bg-card/50">
    <div className="max-w-6xl mx-auto">
      {chairpersons.length > 0 && (
        <div className="mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Leadership</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Chairpersons</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {chairpersons.map((c, i) => (
              <SpeakerCard key={c.name} speaker={c} index={i} />
            ))}
          </div>
        </div>
      )}

      <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Featured</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {speakers.map((s, i) => (
          <SpeakerCard key={s.name} speaker={s} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default EventSpeakers;
