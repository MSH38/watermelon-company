import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import watermelonLogo from "@/assets/watermelon-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  // { label: "Industries", href: "#industries" },
  { label: "Events", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (!isHome) return;
      const sections = document.querySelectorAll("section[id]");
      let current = "#home";
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 200;
        if (window.scrollY >= top) {
          current = `#${section.getAttribute("id")}`;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome) {
      e.preventDefault();
      navigate("/" + href);
    }
    setIsMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
        <a href={isHome ? "#home" : "/"} onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-3 group">
          <img src={watermelonLogo} alt="Watermelon Company Logo" className="w-10 h-10 object-contain transition-transform duration-300 group-hover:rotate-12 brightness-150" />
          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold tracking-wide text-foreground">WATERMELON</span>
            <span className="text-[10px] tracking-[0.3em] text-primary font-body uppercase">Company</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={isHome ? link.href : `/${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-body transition-colors duration-300 tracking-wide uppercase ${
                isHome && activeSection === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="hero" size="default" asChild>
            <a href={isHome ? "#contact" : "/#contact"} onClick={(e) => handleNavClick(e, "#contact")}>Get a Quote</a>
          </Button>
        </div>

        <button className="lg:hidden text-foreground p-2" onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label="Toggle menu">
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-body text-muted-foreground hover:text-primary transition-colors py-2 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-4" asChild>
                <a href={isHome ? "#contact" : "/#contact"} onClick={(e) => handleNavClick(e, "#contact")}>Get a Quote</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
