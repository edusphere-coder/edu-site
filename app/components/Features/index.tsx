"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section
      id="About-Us-section"
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-28"
    >
      {/* ---------- SVG STACKED CUBE BACKGROUND ---------- */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 700"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="stackedCubesFeatures"
              width="86.6"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <g stroke="rgba(99,102,241,0.1)" strokeWidth="1" fill="none">
                <polygon points="43.3,0 86.6,25 43.3,50 0,25" />
                <polygon points="0,25 43.3,50 43.3,100 0,75" />
                <polygon points="43.3,50 86.6,25 86.6,75 43.3,100" />
              </g>
            </pattern>
          </defs>
          <rect width="1200" height="700" fill="url(#stackedCubesFeatures)" />
        </svg>
      </div>


      {/* Light overlay for better contrast */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] -z-[1]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ---------- SectionTitle with floating circles ---------- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12 relative z-20"
        >
          <div className="inline-block bg-white/30 backdrop-blur-lg rounded-3xl px-8 py-6 shadow-lg relative z-10 text-center overflow-hidden">
            
            {/* Section title and description */}
            <SectionTitle
              title="What is EduSphere?"
              paragraph="EduSphere is a classroom and online-based training platform for Engineers and IT enthusiasts."
              center
            />

            {/* Floating circles inside the text */}
            <motion.svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 50"
            >
              {/* Circle moving right → left */}
              <motion.circle
                r="5"
                fill="#3B82F6"
                animate={{
                  cx: [100, 50, 0],
                  cy: [50, 0, 50],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />

              {/* Circle moving left → right */}
              <motion.circle
                r="5"
                fill="#60A5FA"
                animate={{
                  cx: [0, 50, 100],
                  cy: [50, 0, 50],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 1.25,
                }}
              />
            </motion.svg>

          </div>
        </motion.div>

        {/* ---------- Feature Cards ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="
                w-full max-w-[320px]
                bg-white/30 backdrop-blur-xl
                rounded-3xl
                p-6
                border border-white/20
                shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                hover:shadow-[0_16px_40px_rgba(99,102,241,0.3)]
                transition-transform duration-500 ease-out
                hover:scale-105 hover:-translate-y-2
                flex flex-col items-center text-center
              "
            >
              <SingleFeature feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
