import React from 'react';
import { motion } from 'framer-motion';

export function Team() {
  const team = [
    {
      name: "",
      role: "",
      image: "",
    },
    {
      name: "",
      role: "",
      image: "",
    },
    {
      name: "",
      role: "",
      image: "",
    },
    {
      name: "",
      role: "",
      image: "",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600"
        >
          Our Team
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-blue-400">{member.name}</h2>
              <p className="text-purple-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}