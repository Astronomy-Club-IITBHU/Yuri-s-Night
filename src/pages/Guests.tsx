import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';  // ✅ Import Footer

export function Guests() {
  const guests = [
    {
      name: "Dr. José Juan González Avilés",
      title: "Escuela Nacional de Estudios Superiores (ENES), Unidad Morelia, UNAM.",
      image: "/images/intguest.jpg",
      topic: "",
    },
    {
      name: "Dr. Liton Majumdar",
      title: "Principal Investigator and Group Lead | NISER | SEPS",
      image: "/images/image.jpg",
      topic: "",
    },
    {
      name: "Dr. Varun Sheel",
      title:
        "Senior Professor | Head | Planetary Science Division",
      image: "/images/varun_guest.jpg",
      topic: "",
    },
    {
      name: "Prof. Dibyendu Chakrabarty",
      title: "Professor | Physical Research Laboratory",
      image: "images/IIT_BHU_image.jpg",
      topic: "",
    },
    {
      name: "Dr. Shrinivas Kulkarni",
      title:
        "Director | Operational Astronomy | California Institute of Technology",
      image: "images/Shrinivas_Kulkarni_2016_portrait_crop.jpg",
      topic: "",
    },
    {
      name: "Dr. Balveer Singh",
      title: "Aryabhatta Research Institute of Observational Sciences",
      image: "images/Balveer.png",
      topic: "",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)]">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600"
        >
          Featured Guests
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {guests.map((guest, index) => (
            <motion.div
              key={guest.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm"
            >
              <img
                src={guest.image}
                alt={guest.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-blue-400">
                  {guest.name}
                </h2>
                <p className="text-purple-400 mb-2">{guest.title}</p>
                {/* <p className="text-gray-300">Speaking on: {guest.topic}</p> */}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
      <Footer />
    </div>
  );
}