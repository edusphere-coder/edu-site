"use client";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0129] text-white flex items-center justify-center py-28 px-6">
   {/* ---------- BACKGROUND GRADIENT + NETWORK LINES + FANTASTIC NODES ---------- */}
<svg
  className="absolute inset-0 w-full h-full object-cover opacity-60"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid slice"
>
  <defs>
    {/* Background gradient */}
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#090024" />
      <stop offset="100%" stopColor="#1a0047" />
    </linearGradient>

    {/* Glow filter for nodes */}
    <filter id="glow">
      <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    {/* Gradient for fancy nodes */}
    <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#00eaff" stopOpacity="1" />
      <stop offset="100%" stopColor="#7b2ff7" stopOpacity="0.4" />
    </radialGradient>
  </defs>

  {/* background */}
  <rect width="100%" height="100%" fill="url(#grad)" />

  {/* glowing network lines */}
  <g stroke="#00eaff" strokeWidth="0.5" strokeOpacity="0.4">
    <line x1="10%" y1="80%" x2="25%" y2="60%" />
    <line x1="25%" y1="60%" x2="45%" y2="70%" />
    <line x1="45%" y1="70%" x2="70%" y2="40%" />
    <line x1="70%" y1="40%" x2="85%" y2="30%" />
  </g>

  {/* fantastic glowing nodes */}
  <g filter="url(#glow)">
    {[
      { cx: "10%", cy: "80%", r: 3 },
      { cx: "25%", cy: "60%", r: 4 },
      { cx: "45%", cy: "70%", r: 3.5 },
      { cx: "70%", cy: "40%", r: 5 },
      { cx: "85%", cy: "30%", r: 3.5 },
    ].map((node, i) => (
      <circle
        key={i}
        cx={node.cx}
        cy={node.cy}
        r={node.r}
        fill="url(#nodeGradient)"
      >
        {/* Subtle pulsing animation */}
        <animate
          attributeName="r"
          values={`${node.r};${node.r + 1.5};${node.r}`}
          dur="3s"
          repeatCount="indefinite"
          begin={`${i * 0.5}s`}
        />
        <animate
          attributeName="opacity"
          values="0.7;1;0.7"
          dur="3s"
          repeatCount="indefinite"
          begin={`${i * 0.5}s`}
        />
      </circle>
    ))}
  </g>
</svg>+


     {/* ---------- GLOWING ZIG-ZAG UPWARD ARROW (ALIGNED) ---------- */}
<motion.svg
  viewBox="0 0 600 400"
  className="absolute right-0 bottom-0 w-[700px] opacity-80"
>
  <defs>
    <linearGradient id="arrowGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#00eaff" />
      <stop offset="100%" stopColor="#7b2ff7" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  {/* Zig-zag arrow path (lifted upward slightly) */}
  <motion.path
    d="M50,300 L150,230 L250,260 L350,180 L450,210 L550,120"
    stroke="url(#arrowGradient)"
    strokeWidth="8"
    strokeLinecap="round"
    fill="none"
    filter="url(#glow)"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2.5, ease: 'easeInOut' }}
  />

  {/* Arrowhead perfectly at path end */}
  <motion.polygon
    points="550,105 580,120 550,135"
    fill="#00eaff"
    animate={{ y: [0, -2, 0], opacity: [0.9, 1, 0.9] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
  />
</motion.svg>


      {/* ---------- CONTENT ---------- */}
      <div className="relative z-10 max-w-3xl text-left">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          YOUR IT CAREER{" "}
          <span className="text-cyan-400">GUARANTEED.</span>
          <br />
          MASTER IN-DEMAND SKILLS.
          <br />
          SECURE YOUR DREAM JOB.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-300 mb-8 max-w-2xl"
        >
          Join the 1,000s who launched successful tech careers with our
          industry-led curriculum and 100% dedicated placement support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-[#7b2ff7] to-[#00eaff] rounded-full font-semibold text-white shadow-[0_0_15px_rgba(123,47,247,0.5)] hover:scale-105 transition-transform">
            EXPLORE COURSES & GET PLACEMENT READY
          </button>
          {/* <button className="px-8 py-4 border border-gray-500 text-white rounded-full hover:bg-white/10 transition">
            Download Syllabus
          </button> */}
        </motion.div>

        {/* <p className="text-sm text-gray-400 mt-4">
          Download Syllabus | Read Success Stories
        </p> */}
      </div>
    </section>
  );
};

export default Banner;
