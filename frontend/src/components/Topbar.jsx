export default function Topbar({ title }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
      <h1 className="text-lg font-semibold">{title}</h1>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
        className="bg-red-500 text-white px-4 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
}
