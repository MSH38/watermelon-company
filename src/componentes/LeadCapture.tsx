import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const eventTypes = [
  "Corporate Conference",
  "Government Event",
  "Exhibition",
  "Brand Activation",
  "Festival",
  "Gala Dinner",
  "Product Launch",
  "Other",
];

const budgets = [
  "Under $50,000",
  "$50,000 - $150,000",
  "$150,000 - $500,000",
  "$500,000+",
  "To Be Discussed",
];

const LeadCapture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    budget: "",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Proposal Request Sent",
      description: "Our team will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", eventType: "", budget: "", country: "" });
  };

  const inputClasses =
    "w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300";

  const selectClasses =
    "w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3.5 font-body text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 appearance-none";

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Get Started
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Request a Proposal
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Tell us about your event and our team will craft a tailored proposal
            within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border/50 rounded-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Smith"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={inputClasses}
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={inputClasses}
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Event Type
              </label>
              <select
                required
                value={formData.eventType}
                onChange={(e) =>
                  setFormData({ ...formData, eventType: e.target.value })
                }
                className={selectClasses}
              >
                <option value="" disabled>
                  Select event type
                </option>
                {eventTypes.map((type) => (
                  <option key={type} value={type} className="bg-card text-foreground">
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Budget Range
              </label>
              <select
                required
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className={selectClasses}
              >
                <option value="" disabled>
                  Select budget range
                </option>
                {budgets.map((budget) => (
                  <option key={budget} value={budget} className="bg-card text-foreground">
                    {budget}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Country
              </label>
              <input
                type="text"
                placeholder="United Arab Emirates"
                required
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className={inputClasses}
              />
            </div>
          </div>

          <Button variant="hero" size="xl" type="submit" className="w-full md:w-auto">
            <Send className="w-4 h-4" />
            Request Proposal
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadCapture;
