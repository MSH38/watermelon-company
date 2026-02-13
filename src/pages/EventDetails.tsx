import { useParams, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { events } from "@/data/events";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventHero from "@/components/event/EventHero";
import EventGallery from "@/components/event/EventGallery";
import EventSpeakers from "@/components/event/EventSpeakers";
import EventSchedule from "@/components/event/EventSchedule";
import EventRegistration from "@/components/event/EventRegistration";
import EventLiveAndBrochure from "@/components/event/EventLiveAndBrochure";
import EventSponsors from "@/components/event/EventSponsors";

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();
  const event = events.find((e) => e.id === id);

  useEffect(() => {
    // Use setTimeout to ensure scroll happens after all components render
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!event) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <EventHero event={event} />
        <EventGallery gallery={event.gallery} videoUrl={event.videoUrl} />
        <EventSpeakers speakers={event.speakers} chairpersons={event.chairpersons} />
        <EventSchedule schedule={event.schedule} />
        <EventSponsors sponsors={event.sponsors} />
        <EventLiveAndBrochure event={event} />
        <EventRegistration eventTitle={event.title} isOpen={event.registrationOpen} />
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;
