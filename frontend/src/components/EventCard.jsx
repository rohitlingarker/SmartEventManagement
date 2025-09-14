export default function EventCard({ event }) {
  return (
    <div className="p-4 border rounded-xl bg-white shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-600">{event.description}</p>
      <p className="text-xs text-gray-500 mt-2">
        {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
      </p>
    </div>
  );
}
