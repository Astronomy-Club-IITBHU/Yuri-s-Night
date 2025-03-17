import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "../components/Footer";

export function Home() {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside or pressing "Escape"
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div>
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
            A Nocturnal Celebration of Humanity's Achievements in Space
            Exploration...
          </p>
          <div className="relative inline-block" ref={dropdownRef}>
            {/* Register Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowOptions(!showOptions)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg"
            >
              Register Now
            </motion.button>

            {/* Floating Dropdown Menu */}
            <AnimatePresence>
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-2 space-y-2 z-50"
                >
                  {[
                    {
                      link: "https://forms.gle/N4zs33FTw84uupQc7",
                      text: "Student Registration",
                      color:
                        "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
                    },
                    {
                      link: "https://forms.gle/VcEsoVSdVmzE454o8",
                      text: "Teacher Registration",
                      color:
                        "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800",
                    },
                    {
                      link: "https://forms.gle/xPqF6h1GvNBiBdiN7",
                      text: "Bus Driver & Vehicle Registration",
                      color:
                        "from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800",
                    },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-white px-4 py-2 rounded-md bg-gradient-to-r ${item.color} transition text-center`}
                    >
                      {item.text}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
