import React from 'react';
import { motion } from 'framer-motion';

export function Events() {
  const events = [
    {
      title: "Cosmic Canva",
      date: "TBD",
      time: "TBD",
      description: "Art Competition",
    },
    {
      title: "Article Writing Competition",
      date: "TBD",
      time: " TBD",
      description: "Write an article on space exploration.",
    },
    {
      title: "Astro Talk",
      date: "TBD",
      time: "TBD",
      description: "Debate Competition",
    },
    {
      title: "Astro Quiz",
      date: "TBD",
      time: "TBD",
      description: "Quiz Competition",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600"
        >
          Event Schedule
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-2 text-blue-400">{event.title}</h2>
              <p className="text-purple-400 mb-4">{event.date} | {event.time}</p>
              <p className="text-gray-300">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}