import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "participant" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/signup", form);
    navigate("/login");
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4 w-96">
        <h2 className="text-xl font-bold">Sign Up</h2>
        <input className="w-full p-2 border rounded" placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="w-full p-2 border rounded" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" className="w-full p-2 border rounded" placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <select className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="participant">Participant</option>
          <option value="organizer">Organizer</option>
        </select>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
      
  );
}
