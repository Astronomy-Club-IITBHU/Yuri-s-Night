import React from "react";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";

const row1 = [
  "https://rilstaticasset.akamaized.net/sites/default/files/2024-01/ril-press_0.jpg?itok=P7TV4ri2",
  "https://www.aries.res.in/sites/default/files/inline-images/logo1.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/1059px-Indian_Space_Research_Organisation_Logo.svg.png",
  "https://media.licdn.com/dms/image/D4D22AQFKj4KBfwxtGQ/feedshare-shrink_2048_1536/0/1697281863584?e=2147483647&v=beta&t=gPdLV_Zn7VDIunAvrRZrJZDBZBZoX5myEAW5nrbC_Pw",
  "https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_stacked_KzUurne.png",
];

const row2 = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/2560px-Government_of_India_logo.svg.png",
  "https://ml4sci.org/images/ml4sci_logo_angled.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/eb/GeeksForGeeks_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/2560px-NASA_Worm_logo.svg.png",
  "https://openastronomy.org/img/logo/logoOA_svg.png",
];

// Animation Variants
const loopVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      duration: 55, // Smooth scrolling speed
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function Sponsors() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-black">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold my-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600 pb-3"
      >
        Our Sponsors
      </motion.h1>

      {/* Scrolling Row 1 */}
      <div className="overflow-hidden w-full mb-24">
        {" "}
        {/* Increased space below */}
        <motion.div
          variants={loopVariants}
          animate="animate"
          className="flex gap-48 w-max" // Increased gap for spacing
        >
          {[...row1, ...row1].map((sponsor, index) => (
            <motion.img
              key={index}
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              className="h-32 object-contain mx-12"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Scrolling Row 2 */}
      <div className="overflow-hidden w-full mt-24 mb-24">
        {" "}
        {/* More spacing between rows */}
        <motion.div
          variants={{
            animate: {
              x: ["-100%", "0%"],
              transition: { duration: 55, repeat: Infinity, ease: "linear" },
            },
          }}
          animate="animate"
          className="flex gap-48 w-max"
        >
          {[...row2, ...row2].map((sponsor, index) => (
            <motion.img
              key={index}
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              className="h-32 object-contain mx-12"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Sponsorship Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative text-center bg-white/10 rounded-2xl p-10 mx-auto mt-16 backdrop-blur-lg w-[85%] max-w-2xl shadow-lg border border-gray-700"
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-400 to-purple-600 opacity-30"></div>

        <h2 className="text-3xl font-semibold mb-4 text-white">
          Become a <span className="text-blue-400">Collaborator</span>
        </h2>

        <p className="text-gray-300 mb-6 text-justify leading-relaxed">
          Join us in celebrating space exploration and innovation. Your support
          can help shape the future of discovery!
        </p>

        <button className="relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-blue-500/50">
          Get Info
        </button>
      </motion.div>

      <Footer />
    </div>
  );
}
