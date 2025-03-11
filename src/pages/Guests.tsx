import React from 'react';
import { motion } from 'framer-motion';

export function Guests() {
  const guests = [
    {
      name: "",
      title: "",
      image: "",
      topic: "",
    },
    {
      name: "",
      title: "",
      image: "",
      topic: "",
    },
    {
      name: "",
      title: "",
      image: "",
      topic: "",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600"
        >
          Featured Guests
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <h2 className="text-2xl font-semibold mb-2 text-blue-400">{guest.name}</h2>
                <p className="text-purple-400 mb-2">{guest.title}</p>
                <p className="text-gray-300">Speaking on: {guest.topic}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}