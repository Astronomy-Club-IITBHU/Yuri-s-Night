import React from "react";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";

export function Team() {
  const team = [
    {
      name: "Ayush Shrivastava",
      role: "CONVENOR",
      image: "/images/IIT_BHU_image.jpg",
    },
    {
      name: "Jatin Kumar",
      role: "CO - CONVENOR",
      image: "/images/IIT_BHU_image.jpg",
    },
    {
      name: "Rajneesh Mishra",
      role: "CO - CONVENOR",
      image: "/images/IIT_BHU_image.jpg",
    },
    {
      name: "Shlok Saxena",
      role: "SECRETARY",
      image: "/images/IIT_BHU_image.jpg",
    },
    {
      name: "Raj Singh",
      role: "JT. SECRETARY",
      image: "/images/IIT_BHU_image.jpg",
    },
    {
      name: "Ankesh Ansh",
      role: "JT. SECRETARY",
      image: "/images/IIT_BHU_image.jpg",
    },
    {
      name: "Aditya Tiwari",
      role: "SENIOR CORE TEAM",
      image: "/images/IIT_BHU_image.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600"
        >
          Meet Our Team
        </motion.h1>

        {/* Team Grid (With Centered Last Row) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Image with border and shadow */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg transition-transform transform hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h2 className="text-lg md:text-xl font-semibold mt-4 text-blue-400">
                {member.name}
              </h2>
              <p className="text-sm md:text-base text-purple-400">
                {member.role}
              </p>
            </motion.div>
          ))}

          {/* Center the last row when only 1 element is left */}
          {team.length % 4 === 3 && <div className="hidden lg:block"></div>}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
