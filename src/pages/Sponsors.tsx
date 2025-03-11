import React from 'react';
import { motion } from 'framer-motion';

export function Sponsors() {
  const sponsors = [
    {
      name: "",
      tier: "",
      logo: "",
    },
    {
      name: "",
      tier: "",
      logo: "",
    },
    {
      name: "",
      tier: "",
      logo: "",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600"
        >
          Our Sponsors
        </motion.h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold mb-2 text-blue-400">{sponsor.name}</h2>
                  <p className="text-purple-400">{sponsor.tier} Sponsor</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center bg-white/5 rounded-lg p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Become a Sponsor</h2>
            <p className="text-gray-300 mb-6">
              Join us in celebrating space exploration and innovation. Contact us to learn about sponsorship opportunities.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Get Sponsorship Info
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}