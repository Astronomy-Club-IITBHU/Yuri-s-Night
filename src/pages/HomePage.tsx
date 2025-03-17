import React from "react";
import { Footer } from "../components/Footer"; // Import Footer

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow text-center py-20">
        <h1 className="text-4xl text-white">Welcome to Yuri's Night</h1>
        <p className="text-gray-300 mt-4">
          A celebration of space and exploration.
        </p>
      </main>
      <Footer />
    </div>
  );
}
