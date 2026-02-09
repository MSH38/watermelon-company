import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EventRegistration = ({ eventTitle, isOpen }: { eventTitle: string; isOpen: boolean }) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Registration Submitted!", description: `You've registered for ${eventTitle}.` });
    setForm({ name: "", email: "", company: "", phone: "" });
  };

  if (!isOpen) {
    return (
      <section className="section-padding bg-card/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Registration Closed</h2>
          <p className="text-muted-foreground font-body">Registration for this event is currently closed.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-card/50">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 text-center">Join Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">Register Now</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-body text-sm">Full Name</Label>
                <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-secondary border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-body text-sm">Email</Label>
                <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-secondary border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="font-body text-sm">Company</Label>
                <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="bg-secondary border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-body text-sm">Phone</Label>
                <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-secondary border-border" />
              </div>
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full">
              Register for Event
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default EventRegistration;
