import watermelonLogo from "@/assets/watermelon-logo.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mahmoud-heikal/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "Twitter", href: "https://x.com/", icon: Twitter },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50">
      <div className="section-padding pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src={watermelonLogo} alt="Watermelon Company" className="w-10 h-10 object-contain" />
                <div>
                  <span className="font-display text-lg font-semibold tracking-wide">WATERMELON</span>
                  <span className="block text-[10px] tracking-[0.3em] text-primary font-body uppercase">Company</span>
                </div>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Creating world-class events across the Middle East since 2006.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-body text-xs tracking-widest uppercase text-primary mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-body text-xs tracking-widest uppercase text-primary mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-muted-foreground">hello@watermeloncompany.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-muted-foreground">+20 1017011391</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-muted-foreground">Cairo, Egypt</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-body text-xs tracking-widest uppercase text-primary mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-muted-foreground">© 2026 Watermelon Company. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
