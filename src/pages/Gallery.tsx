import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from '../components/Footer';  // ✅ Import Footer

const images = Array.from({ length: 18 }, (_, index) => ({
  url: `images/Image${index + 1}.jpg`,
}));

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbIndex, setThumbIndex] = useState(0);
  const visibleThumbnails = 6; // Show 6 thumbnails at a time
  const scrollAmount = 3; // Move 3 images at a time

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    if ((currentIndex + 1) % images.length === 0) {
      setThumbIndex(0); // Reset thumbnails to loop
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    if (currentIndex === 0) {
      setThumbIndex(images.length - visibleThumbnails); // Jump to last thumbnails
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setThumbIndex(Math.floor(index / scrollAmount) * scrollAmount);
  };

  // Thumbnails Scrolling Logic with Looping
  const nextThumbs = () => {
    setThumbIndex((prev) => (prev + scrollAmount) % images.length);
  };

  const prevThumbs = () => {
    setThumbIndex((prev) =>
      prev - scrollAmount < 0
        ? images.length - visibleThumbnails
        : prev - scrollAmount
    );
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center bg-black text-white py-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-600 pb-3"
        >
          Gallery
        </motion.h1>

        {/* Slideshow Container */}
        <div className="relative w-full max-w-4xl h-[400px] md:h-[450px] overflow-hidden rounded-2xl shadow-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentIndex].url}
              src={images[currentIndex].url}
              alt={`Slide ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover rounded-2xl"
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black/50 p-4 rounded-full text-white hover:bg-black/70 transition"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black/50 p-4 rounded-full text-white hover:bg-black/70 transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>

        {/* Thumbnails Navigation - Loops Around */}
        <div className="flex items-center mt-8 w-full max-w-[90%]">
          {/* Left Arrow */}
          <button
            onClick={prevThumbs}
            className="bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Thumbnails Container - Moves Multiple Images at a Time */}
          <div className="flex justify-center gap-2 mx-4 w-full">
            {images
              .concat(images) // Duplicate array for looping effect
              .slice(thumbIndex, thumbIndex + visibleThumbnails)
              .map((image, index) => (
                <motion.img
                  key={thumbIndex + index}
                  src={image.url}
                  alt={`Thumbnail ${thumbIndex + index + 1}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-4 ${(thumbIndex + index) % images.length === currentIndex
                      ? "border-blue-500 scale-110"
                      : "border-transparent"
                    } transition-transform hover:scale-110`}
                  onClick={() =>
                    goToSlide((thumbIndex + index) % images.length)
                  }
                />
              ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextThumbs}
            className="bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
