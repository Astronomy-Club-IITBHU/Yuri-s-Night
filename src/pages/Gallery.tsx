import React from 'react';
import { motion } from 'framer-motion';

export function Gallery() {
  const images = [
    {
      url: "",
      title: "",
    },
    {
      url: "",
      title: "",
    },
    {
      url: "",
      title: "",
    },
    {
      url: "",
      title: "",
    },
    
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-600"
        >
          Space Gallery
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <p className="text-xl font-semibold text-white">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}