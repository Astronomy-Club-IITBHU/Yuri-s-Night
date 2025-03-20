import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from '../components/Footer';

const images = Array.from({ length: 18 }, (_, index) => ({
  url: `images/Image${index + 1}.jpg`,
}));

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [visibleThumbnails, setVisibleThumbnails] = useState(6); // Default for desktop
  const scrollAmount = 3; // Move 3 images at a time

  // Responsive handler for thumbnail count
  const updateVisibleThumbnails = useCallback(() => {
    if (window.innerWidth < 640) {
      setVisibleThumbnails(3); // Mobile: 3 thumbnails
    } else if (window.innerWidth < 1024) {
      setVisibleThumbnails(4); // Tablet: 4 thumbnails
    } else {
      setVisibleThumbnails(6); // Desktop: 6 thumbnails
    }
  }, []);

  useEffect(() => {
    // Initial setup
    updateVisibleThumbnails();

    // Set up event listener for resize
    window.addEventListener('resize', updateVisibleThumbnails);

    // Auto-slide functionality
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateVisibleThumbnails);
    };
  }, [currentIndex, updateVisibleThumbnails]);

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
      setThumbIndex(Math.max(0, images.length - visibleThumbnails)); // Jump to last thumbnails
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);

    // Ensure the clicked thumbnail is visible in the scrollable area
    if (index < thumbIndex) {
      setThumbIndex(Math.max(0, index));
    } else if (index >= thumbIndex + visibleThumbnails) {
      setThumbIndex(Math.max(0, Math.min(images.length - visibleThumbnails, index)));
    }
  };

  // Thumbnails Scrolling Logic with Looping
  const nextThumbs = () => {
    setThumbIndex((prev) =>
      Math.min(images.length - visibleThumbnails, prev + scrollAmount)
    );
  };

  const prevThumbs = () => {
    setThumbIndex((prev) =>
      Math.max(0, prev - scrollAmount)
    );
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center bg-black text-white py-4 sm:py-6 md:py-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-600 pb-2 sm:pb-3"
        >
          Gallery
        </motion.h1>

        {/* Slideshow Container */}
        <div className="relative w-full max-w-4xl h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl sm:rounded-2xl shadow-xl px-2 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentIndex].url}
              src={images[currentIndex].url}
              alt={`Slide ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 sm:left-6 transform -translate-y-1/2 bg-black/50 p-2 sm:p-3 md:p-4 rounded-full text-white hover:bg-black/70 transition"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 sm:right-6 transform -translate-y-1/2 bg-black/50 p-2 sm:p-3 md:p-4 rounded-full text-white hover:bg-black/70 transition"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Thumbnails Navigation - Loops Around */}
        <div className="flex items-center mt-4 sm:mt-6 md:mt-8 w-full max-w-[95%] sm:max-w-[90%]">
          {/* Left Arrow */}
          <button
            onClick={prevThumbs}
            className="bg-black/50 p-2 sm:p-3 rounded-full text-white hover:bg-black/70 transition"
            aria-label="Previous thumbnails"
          >
            <ChevronLeft size={24} className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Thumbnails Container - Moves Multiple Images at a Time */}
          <div className="flex justify-center gap-1 sm:gap-2 mx-1 sm:mx-2 md:mx-4 w-full overflow-hidden">
            {images
              .slice(thumbIndex, thumbIndex + visibleThumbnails)
              .map((image, index) => (
                <motion.img
                  key={thumbIndex + index}
                  src={image.url}
                  alt={`Thumbnail ${thumbIndex + index + 1}`}
                  className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded-md sm:rounded-lg cursor-pointer border-2 sm:border-4 ${(thumbIndex + index) % images.length === currentIndex
                      ? "border-blue-500 scale-105 sm:scale-110"
                      : "border-transparent"
                    } transition-transform hover:scale-105 sm:hover:scale-110`}
                  onClick={() => goToSlide((thumbIndex + index) % images.length)}
                />
              ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextThumbs}
            className="bg-black/50 p-2 sm:p-3 rounded-full text-white hover:bg-black/70 transition"
            aria-label="Next thumbnails"
          >
            <ChevronRight size={24} className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Image Counter */}
        <div className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      <Footer />
    </div>
  );
}