import { useEffect, useState } from "react";

import Topbar from "../components/Topbar";
import EventForm from "../components/EventForm";
import API from "../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Sidebar from "../components/Sidebar";


export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events").then((res) => setEvents(res.data));
  }, []);

  const handleEventCreated = (event) => {
    setEvents([...events, event]);
  };

  // Fake analytics: event registrations count
  const analyticsData = events.map((e) => ({
    name: e.title,
    registrations: e.registrations?.length || Math.floor(Math.random() * 50), // fallback
  }));

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar title="Dashboard" />
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event Form */}
          <EventForm onEventCreated={handleEventCreated} />

          {/* Analytics */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Event Analytics</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={analyticsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="registrations" fill="#2563eb" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Events List */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Your Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((e) => (
              <div key={e.id} className="p-4 border rounded-xl bg-white shadow">
                <h4 className="font-semibold">{e.title}</h4>
                <p className="text-sm text-gray-600">{e.description}</p>
                <p className="text-xs text-gray-500">
                  {new Date(e.startDate).toLocaleDateString()} -{" "}
                  {new Date(e.endDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
