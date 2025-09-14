import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Organizer</h2>
      <nav className="space-y-3">
        <Link to="/dashboard" className="block p-2 rounded hover:bg-gray-100">
          Dashboard
        </Link>
        <Link to="/events" className="block p-2 rounded hover:bg-gray-100">
          Events
        </Link>
        <Link to="/login" className="block p-2 rounded hover:bg-gray-100">
          Logout
        </Link>
      </nav>
    </div>
  );
}
