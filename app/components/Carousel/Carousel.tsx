"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const courses = [
  {
    image: "/assets/carousel/01.jpg",
    title: "Artificial Intelligence and Machine Learning",
    description: "Dive into AI & ML concepts, learn algorithms, neural networks, and practical applications in real-world projects."
  },
  {
    image: "/assets/carousel/02.png",
    title: "SAP",
    description: "Master SAP modules and enterprise resource planning to streamline business processes efficiently."
  },
  {
    image: "/assets/carousel/03.png",
    title: "Cyber Security",
    description: "Learn how to protect systems, networks, and data from cyber threats, attacks, and vulnerabilities."
  },
  {
    image: "/assets/carousel/04.png",
    title: "Python Full Stack",
    description: "Become a full stack developer using Python, Django, Flask, and front-end frameworks like React."
  },
  {
    image: "/assets/carousel/05.png",
    title: "MEAN and MERN",
    description: "Gain expertise in MongoDB, Express, Angular/React, and Node.js for building modern web applications."
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % courses.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % courses.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + courses.length) % courses.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="overflow-hidden rounded-2xl shadow-lg w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={courses[current].image}
            alt={courses[current].title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </div>

      {/* Smooth Arrow Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 p-2 rounded-full bg-white/20 hover:bg-white/40 text-gray-800 shadow-md transition duration-300"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 text-gray-800 shadow-md transition duration-300"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {courses.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-colors duration-300 ${
              idx === current ? "bg-indigo-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      {/* Course Title and Description */}
      <div className="text-center mt-6 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{courses[current].title}</h2>
        <p className="mt-2 text-gray-600 sm:text-lg">{courses[current].description}</p>
      </div>
    </div>
  );
};

export default Carousel;
