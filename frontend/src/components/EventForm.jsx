import { useState } from "react";
import API from "../services/api";

export default function EventForm({ onEventCreated }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const payload = {
        ...form,
        organizerId: user?.id,
        startDate: new Date(form.startDate).toISOString(),
        endDate: new Date(form.endDate).toISOString(),
    };

    const res = await API.post("/events", payload);
    onEventCreated(res.data);
    setForm({ title: "", description: "", startDate: "", endDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-md space-y-3">
      <h3 className="text-lg font-semibold">Create Event</h3>
      <input
        className="w-full p-2 border rounded"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={form.startDate}
        onChange={(e) => setForm({ ...form, startDate: e.target.value })}
      />
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={form.endDate}
        onChange={(e) => setForm({ ...form, endDate: e.target.value })}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Create</button>
    </form>
  );
}
