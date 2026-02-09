import { motion } from "framer-motion";
import { Download, Radio, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { EventData } from "@/data/events";

const EventLiveAndBrochure = ({ event }: { event: EventData }) => {
  const hasLive = event.isLive && event.liveStreamUrl;
  const hasBrochure = !!event.brochureUrl;
  const hasLinks = event.links.length > 0;

  if (!hasLive && !hasBrochure && !hasLinks) return null;

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Live Stream */}
          {hasLive && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2 mb-4">
                <Radio className="w-5 h-5 text-destructive animate-pulse" />
                <p className="text-primary font-body text-sm tracking-[0.3em] uppercase">Live Stream</p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <iframe
                  src={event.liveStreamUrl}
                  title="Live Stream"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          )}

          {/* Brochure & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={!hasLive ? "lg:col-span-2 max-w-xl" : ""}
          >
            {hasBrochure && (
              <div className="mb-8">
                <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Resources</p>
                <h3 className="font-display text-2xl font-bold mb-4">Event Brochure</h3>
                <p className="text-muted-foreground font-body text-sm mb-4">
                  Download the complete event brochure with detailed agenda, speaker profiles, and venue information.
                </p>
                <Button variant="heroOutline" asChild>
                  <a href={event.brochureUrl} download>
                    <Download className="w-4 h-4 mr-2" /> Download Brochure
                  </a>
                </Button>
              </div>
            )}

            {hasLinks && (
              <div>
                <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Quick Links</p>
                <div className="flex flex-wrap gap-3">
                  {event.links.map((link) => (
                    <Button key={link.label} variant="outline" size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-3 h-3 mr-2" /> {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventLiveAndBrochure;
