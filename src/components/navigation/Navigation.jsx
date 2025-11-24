import React from "react";
import { Link } from "react-router";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-blue-200 shadow-md py-4 px-8 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-700">MyApp</div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-700 transition">Home</Link>
          </li>
          <li>
            <Link to="/register" className="text-gray-700 hover:text-blue-700 transition">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
