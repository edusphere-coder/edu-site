"use client";
import Carousel from "../Carousel/Carousel";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-[#eef2ff] via-[#f9fbff] to-[#ffffff] pt-32 pb-16 flex items-center justify-center">
      {/* ---------- SVG STACKED CUBE BACKGROUND ---------- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 700"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="stackedCubes"
              width="86.6"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <g stroke="rgba(99,102,241,0.15)" strokeWidth="1" fill="none">
                <polygon points="43.3,0 86.6,25 43.3,50 0,25" />
                <polygon points="0,25 43.3,50 43.3,100 0,75" />
                <polygon points="43.3,50 86.6,25 86.6,75 43.3,100" />
              </g>
            </pattern>
          </defs>
          <rect width="1200" height="700" fill="url(#stackedCubes)" />
        </svg>
      </div>

      {/* Light overlay for contrast */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] -z-[1]" />

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="relative px-6 lg:px-8 flex flex-col items-center justify-center gap-10 text-center w-full max-w-6xl">
        {/* Header / Title Section */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg"
        >
          Explore Our Future-Ready Courses
        </motion.h1>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="w-full flex items-center justify-center"
        >
          <Carousel />
        </motion.div>
      </div>
    </main>
  );
};

export default Banner;
