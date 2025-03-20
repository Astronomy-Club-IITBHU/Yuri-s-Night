import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "../components/Footer";

export function Home() {
  const [showOptions, setShowOptions] = useState(false);
  const [showSchoolOptions, setShowSchoolOptions] = useState(false);
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
        setShowSchoolOptions(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShowOptions(false);
        setShowSchoolOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Handler for school registration button
  const handleSchoolClick = () => {
    setShowSchoolOptions(true);
    setShowOptions(false);
  };

  // Handler for back button
  const handleBackClick = () => {
    setShowSchoolOptions(false);
    setShowOptions(true);
  };

  return (
    <div>
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-snug pb-4">
            Yuri's Night 2025
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            A Nocturnal Celebration of Humanity's Achievements in Space
            Exploration...
          </p>
          <div className="relative" ref={dropdownRef}>
            {/* Register Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowOptions(!showOptions)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg"
            >
              Register Now
            </motion.button>

            {/* Main Dropdown Menu */}
            <AnimatePresence>
              {showOptions && !showSchoolOptions && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 right-0 mt-3 mx-auto w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-2 space-y-2 z-40"
                  style={{ maxWidth: "100%" }}
                >
                  {/* School Registration Button */}
                  <button
                    onClick={handleSchoolClick}
                    className="w-full text-white px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition text-center"
                  >
                    School Registration
                  </button>

                  {/* College Registration Button */}
                  <a
                    href="https://forms.gle/xPqF6h1GvNBiBdiN7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition text-center"
                  >
                    College Registration
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* School Registration Submenu */}
            <AnimatePresence>
              {showSchoolOptions && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 right-0 mt-3 mx-auto w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-2 space-y-2 z-40"
                  style={{ maxWidth: "100%" }}
                >
                  {/* Back button */}
                  <button
                    onClick={handleBackClick}
                    className="w-full text-white px-4 py-2 rounded-md bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 transition text-center mb-2"
                  >
                    ← Back
                  </button>

                  <a
                    href="https://forms.gle/N4zs33FTw84uupQc7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition text-center"
                  >
                    Student Registration
                  </a>

                  <a
                    href="https://forms.gle/VcEsoVSdVmzE454o8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition text-center"
                  >
                    Teacher Registration
                  </a>
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