import axios from "axios";

const API = axios.create({
  baseURL: import.meta.VITE_BACKEND_URL || "http://localhost:3000/api", // 👈 replace with deployed backend
});

// Add token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
