"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const courses = [
  {
    image: "/assets/carousel/01.jpg",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Dive into AI & ML concepts with real-world projects, algorithms, and neural networks.",
  },
  {
    image: "/assets/carousel/02.png",
    title: "SAP",
    description:
      "Master SAP modules and ERP systems to streamline enterprise workflows.",
  },
  {
    image: "/assets/carousel/03.png",
    title: "Cyber Security",
    description:
      "Protect systems, networks, and data with advanced cybersecurity skills.",
  },
  {
    image: "/assets/carousel/04.png",
    title: "Python Full Stack",
    description:
      "Build dynamic web apps using Django, Flask, and front-end frameworks.",
  },
  {
    image: "/assets/carousel/05.png",
    title: "MEAN & MERN",
    description:
      "Develop modern full-stack apps using MongoDB, Express, Angular/React, and Node.js.",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % courses.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % courses.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + courses.length) % courses.length);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10 px-4 sm:px-0">
      {/* Carousel Container */}
      <motion.div
        className="relative overflow-hidden rounded-3xl shadow-2xl w-full flex items-center justify-center aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] bg-white/20 backdrop-blur-sm border border-indigo-100 hover:shadow-indigo-300/40 transition-all duration-500"
        whileHover={{ scale: 1.015 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={courses[current].image}
            alt={courses[current].title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Arrow Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-5 bg-white/40 hover:bg-white/60 text-gray-800 p-2 sm:p-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-5 bg-white/40 hover:bg-white/60 text-gray-800 p-2 sm:p-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
          aria-label="Next Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center mt-5 gap-2">
        {courses.map((_, idx) => (
          <motion.span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all duration-300 ${
              idx === current ? "bg-indigo-600 scale-125 shadow-md" : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      {/* Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center mt-8 px-3 sm:px-0"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 drop-shadow-sm">
          {courses[current].title}
        </h2>
        <p className="mt-3 text-gray-600 sm:text-lg max-w-3xl mx-auto">
          {courses[current].description}
        </p>
      </motion.div>
    </div>
  );
};

export default Carousel;
