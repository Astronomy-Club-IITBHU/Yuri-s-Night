import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="min-h-[calc(100vh-5rem)] py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          About Yuri's Night
        </h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300"
          >
             How long has it been since you last experienced the
             profound darkness of the night sky?
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300"
          > In our modern age of technology, the nights seem less dark
          than they once were. Yet, darkness holds the essence of
          Astronomy, igniting passion and drive within enthusiasts to
          explore  cosmos.
            
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-300"
          >  It serves as the catalyst for cosmic exploration, revealing the mysteries of the universe.
            
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-300"
          >  Yuri's Night stands as the flagship event of The Astronomy Club IIT (BHU) Varanasi. The
          event is from April 11th to April 13th remembering the historic day of April 12th, 1961 when
          Yuri Gagarin embarked on humanity's first journey into outer space.  
            
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-lg text-gray-300"
          >  Our mission at Yuri's Night is to guide young minds on a cosmic journey, satisfying their
          yearning to delve into the depths of darkness. We merge various fields of science and
          technology with astronomy, providing each enthusiast a unique opportunity to immerse
          themselves in the realm of the cosmos embracing "A Nocturnal Celebration of Darkness." 
            
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg text-gray-300"
          >  
            Let us unite in our quest to explore the boundless power and beauty that darkness unveils.
          </motion.p>
          {/* <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">What to Expect</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• Interactive workshops and competitions</li>
              <li>• Engaging guest lectures from space industry experts</li>
              <li>• Space-themed art exhibitions</li>
              <li>• Networking opportunities with fellow space enthusiasts</li>
              <li>• Live demonstrations and hands-on activities</li>
            </ul>
          </motion.div> */}
        </div>
      </motion.div>
    </div>
  );
}