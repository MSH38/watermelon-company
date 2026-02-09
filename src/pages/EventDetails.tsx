import { useParams, Navigate } from "react-router-dom";
import { events } from "@/data/events";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventHero from "@/components/event/EventHero";
import EventGallery from "@/components/event/EventGallery";
import EventSpeakers from "@/components/event/EventSpeakers";
import EventSchedule from "@/components/event/EventSchedule";
import EventRegistration from "@/components/event/EventRegistration";
import EventLiveAndBrochure from "@/components/event/EventLiveAndBrochure";

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === id);

  if (!event) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <EventHero event={event} />
        <EventGallery gallery={event.gallery} videoUrl={event.videoUrl} />
        <EventSpeakers speakers={event.speakers} chairpersons={event.chairpersons} />
        <EventSchedule schedule={event.schedule} />
        <EventLiveAndBrochure event={event} />
        <EventRegistration eventTitle={event.title} isOpen={event.registrationOpen} />
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;
