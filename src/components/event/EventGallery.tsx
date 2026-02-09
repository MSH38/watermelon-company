import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const EventGallery = ({ gallery, videoUrl }: { gallery: string[]; videoUrl?: string }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Gallery</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Event Highlights</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-video overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt={`Event gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {videoUrl && (
          <div className="mt-10 aspect-video rounded-lg overflow-hidden border border-border">
            <iframe
              src={videoUrl}
              title="Event Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
            {selected && <img src={selected} alt="Gallery preview" className="w-full rounded-lg" />}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default EventGallery;
