import React from 'react';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Yuri's Night 2025
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          A Noctural Celebration of Humanity's Achievements in Space Exploration...
        </p>
        <div className="space-y-4">
          <p className="text-lg text-gray-400">April 11-13, 2025</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Register Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}