"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ComponentType } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

// ✅ Type assertion fix for React 19 compatibility
const Instagram = FaInstagram as ComponentType<{ className?: string }>;
const Facebook = FaFacebookF as ComponentType<{ className?: string }>;
const LinkedIn = FaLinkedinIn as ComponentType<{ className?: string }>;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0a0129] text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* ---------- LEFT SECTION: LOGO + SOCIAL ICONS ---------- */}
        <div className="flex flex-col space-y-6">
          {/* ---------- LOGO ---------- */}
          <Link href="/" className="flex items-center space-x-2 select-none">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 100"
              className="h-12 w-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <defs>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="sphereBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>

              {/* --- EDU --- */}
              <text
                x="30"
                y="55"
                fontFamily="'Playfair Display', serif"
                fontWeight="700"
                fontSize="44"
                fill="#ffffff"
                stroke="#1e40af"
                strokeWidth="1.2"
                filter="url(#softGlow)"
              >
                Edu
              </text>

              {/* --- SPHERE --- */}
              <text
                x="112"
                y="55"
                fontFamily="'Playfair Display', serif"
                fontWeight="700"
                fontSize="44"
                fill="url(#sphereBlue)"
              >
                Sphere
              </text>

              {/* underline and tagline */}
              <line
                x1="112"
                y1="62"
                x2="255"
                y2="62"
                stroke="#1e3a8a"
                strokeWidth="1.5"
                opacity="0.8"
              />
              <text
                x="112"
                y="82"
                fontFamily="'Playfair Display', serif"
                fontSize="13"
                fill="#c7d2fe"
                letterSpacing="0.5"
              >
                Learn. Apply. Succeed.
              </text>
            </motion.svg>
          </Link>

          {/* ---------- SOCIAL ICONS ---------- */}
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-indigo-600 transition-all duration-300"
            >
              <Instagram className="text-xl" />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-indigo-600 transition-all duration-300"
            >
              <Facebook className="text-xl" />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-indigo-600 transition-all duration-300"
            >
              <LinkedIn className="text-xl" />
            </Link>
          </div>
        </div>

        {/* ---------- RIGHT SECTION: LOCATION + COPYRIGHT ---------- */}
        <div className="mt-10 md:mt-0 text-right space-y-2">
          <p className="text-lg font-semibold text-indigo-300">Hyderabad, India</p>
          <p className="text-sm text-gray-300">
            © {currentYear} EduSphere. All rights reserved.
          </p>
        </div>
      </div>

      {/* Subtle top gradient glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-600 opacity-60"></div>
    </footer>
  );
};

export default Footer;
