import React from "react";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer"; // ✅ Import Footer

export function Events() {
  const events = [
    {
      title: "ASTRO TALK",
      date: "12 April 2025 | 13 April 2025",
      description:
        "Debate based event where participating teams discuss over various astronomy related topics and put forward new and innovative ideas.",
      image: "/images/astroTalk.jpg",
    },
    {
      title: "ASTRO QUIZ",
      date: "12 April 2025 | 13 April 2025",
      description:
        "A cosmic quiz to challenge young minds, testing their knowledge and igniting curiosity in astrophysics, astrobiology, and cosmology.",
      image: "/images/astroquiz.jpg",
    },
    {
      title: "COSMIC SCRIPT",
      date: "12 April 2025 | 13 April 2025",
      description:
        "An article writing competition where students explore elegant astronomy topics and showcase their creativity and analytical aptitude.",
      image: "/images/cosmicscript.jpg",
    },
    {
      title: "COSMIC CANVAS",
      date: "12 April 2025",
      description:
        "A drawing and digital art competition where participants exhibit their creative talents around astronomy related themes.",
      image: "/images/cosmiccanvas.jpg",
    },
    {
      title: "TELESCON",
      date: "TBD",
      description:
        "At Telescon, participants build their own telescopes under expert guidance, gaining hands-on experience and the thrill of observing celestial wonders up close.",
      image: "/images/telescon.jpg",
    },
    {
      title: "PITCH BEYOND EARTH",
      date: "TBD",
      description:
        "Students present innovative, business-driven solutions to entrepreneurial challenges in space, pushing boundaries beyond Earth.",
      image: "/images/pitchbeyondearth.jpeg",
    },
    {
      title: "ASTROPIXELS",
      date: "TBD",
      description:
        "AstroPixels hosts workshops and presentations on processing telescope images, enhancing astrophotography through advanced techniques",
      image: "/images/astropixel.jpg",
    },
    {
      title: "PLANET HUNT",
      date: "TBD",
      description:
        "A Machine Learning competition that involves finding patterns, analyzing complex astronomical datasets, and discovering new possibilities.",
      image: "/images/planethunt.jpg",
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
              className="relative bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm group"
              style={{
                backgroundImage: `url(${event.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition duration-300"></div>

              <div className="relative p-6">
                <h2 className="text-2xl font-semibold mb-2 text-blue-300">
                  {event.title}
                </h2>
                <p className="text-purple-300 mb-4">{event.date}</p>
                <p className="text-gray-200 text-justify leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
