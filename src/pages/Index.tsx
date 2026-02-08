import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import ServicesGrid from "@/components/ServicesGrid";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <ServicesGrid />
        <Industries />
        <CaseStudies />
        <ProcessTimeline />
        <Testimonials />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
