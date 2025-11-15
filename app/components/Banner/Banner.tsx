"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#05001a] text-white py-16 sm:py-24 lg:py-28 px-6 flex items-center justify-center">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#060021" />
              <stop offset="100%" stopColor="#0b0133" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGradient)" />
        </svg>
      </div>

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#3a7bff] rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
              x: [0, Math.random() * 80 - 40],
              y: [0, Math.random() * 80 - 40],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* UPWARD ARROW */}
      <motion.svg
        viewBox="0 0 600 400"
        className="absolute right-0 bottom-[-40px] w-[260px] sm:w-[360px] md:w-[460px] lg:w-[620px] opacity-[0.75] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <defs>
          <linearGradient id="arrowLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00eaff" />
            <stop offset="100%" stopColor="#3c6fff" />
          </linearGradient>
        </defs>

        <motion.path
          d="M40,300 L160,220 L260,260 L360,170 L460,210 L580,120"
          stroke="url(#arrowLine)"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />

        <motion.polygon
          points="580,100 615,120 580,140"
          fill="#00eaff"
          animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.svg>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl text-left">

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Build a Future-Proof IT Career with{" "}
          <span className="text-[#00eaff]">Guaranteed Success.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1 }}
          className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed mb-9"
        >
          Learn in-demand skills, train with industry experts, and get dedicated placement
          support. Your journey to a high-paying tech career starts here.
        </motion.p>

        {/* BUTTON */}
        <motion.div
  initial={{ opacity: 0, y: 5 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  <Link
    href="/register"
    className="px-8 sm:px-10 py-4 bg-gradient-to-r from-[#5c27f7] to-[#00b7ff] 
    rounded-full text-lg font-semibold text-white shadow-[0_0_20px_rgba(60,143,255,0.5)] 
    hover:scale-105 transition-all inline-block"
  >
    Explore Courses → Get Job Ready
  </Link>
</motion.div>
      </div>
    </section>
  );
};

export default Banner;
