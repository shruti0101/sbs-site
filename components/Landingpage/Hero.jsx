"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = ["/banner1.webp", "/banner2.webp"]; // ✅ removed empty string

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative  w-full  h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={images[currentIndex]}
            alt={`Banner image ${currentIndex + 1}`} // ✅ improved alt text
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
