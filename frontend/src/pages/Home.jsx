import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Smart Event Management Platform
          </h1>
          <p className="text-lg mb-6">
            Organize hackathons, conferences, and competitions with ease — powered by AI and modern UI.
          </p>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
            >
              Get Started
            </Link>
            <Link
              to="/events"
              className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-900"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🚀 Easy Event Creation</h3>
              <p className="text-gray-600">
                Create and customize events with our drag-and-drop builder.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🤖 AI Recommendations</h3>
              <p className="text-gray-600">
                Smart participant matching and personalized event suggestions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">📊 Powerful Analytics</h3>
              <p className="text-gray-600">
                Real-time dashboards for engagement, feedback, and ROI insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center gap-2">
          <h2 className="text-2xl font-bold mb-4">
            Ready to host your next big event?
          </h2>
          <Link
            to="/signup"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 mx-2"
          >
            Create an Account
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 mx-2"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} Smart Event Management. All rights reserved.</p>
      </footer>
    </div>
  );
}
