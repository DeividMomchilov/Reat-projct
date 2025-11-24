import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-5xl font-bold text-blue-800 mb-4">Welcome Home!</h1>
      <p className="text-lg text-gray-700">This is a simple home page.</p>
    </div>
  );
}