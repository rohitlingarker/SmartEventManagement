import { useEffect, useState } from "react";
import API from "../services/api";
import EventCard from "../components/EventCard";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events").then(res => setEvents(res.data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
