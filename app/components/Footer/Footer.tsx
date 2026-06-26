"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ComponentType } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Instagram = FaInstagram as ComponentType<{ className?: string }>;
const Facebook = FaFacebookF as ComponentType<{ className?: string }>;
const LinkedIn = FaLinkedinIn as ComponentType<{ className?: string }>;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0a0129] text-white py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        {/* ---------- LEFT SECTION: LOGO + SOCIAL ICONS ---------- */}
        <div className="flex flex-col items-center lg:items-start">
          {/* LOGO */}
          <Link href="/" className="flex justify-center lg:justify-start items-center select-none">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 490 160"
              className="h-14 sm:h-16 lg:h-20 w-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <circle cx="120" cy="80" r="70" fill="#0d47a1" />
              <text
                x="120"
                y="95"
                textAnchor="middle"
                fontFamily="'Playfair Display', serif"
                fontWeight="700"
                fontSize="60"
                fill="#fff"
              >
                Edu
              </text>
              <text
                x="200"
                y="95"
                fontFamily="'Playfair Display', serif"
                fontWeight="700"
                fontSize="60"
                fill="#0d47a1"
              >
                Sphere
              </text>
              <line
                x1="200"
                y1="105"
                x2="415"
                y2="105"
                stroke="#0d47a1"
                strokeWidth="2"
              />
              <text
                x="310"
                y="132"
                textAnchor="middle"
                fontFamily="'Playfair Display', serif"
                fontSize="20"
                fill="#0d47a1"
                letterSpacing="0.4"
              >
                Learn. Apply. Succeed.
              </text>
            </motion.svg>
          </Link>

          {/* SOCIAL ICONS (Aligned exactly below logo) */}
          <div className="flex space-x-4 mt-5 justify-center lg:ml-12">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="p-2 rounded-full bg-white/10 hover:bg-indigo-600 transition-all duration-300"
            >
              <Instagram className="text-xl" />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="p-2 rounded-full bg-white/10 hover:bg-indigo-600 transition-all duration-300"
            >
              <Facebook className="text-xl" />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="p-2 rounded-full bg-white/10 hover:bg-indigo-600 transition-all duration-300"
            >
              <LinkedIn className="text-xl" />
            </Link>
          </div>
        </div>

        {/* ---------- RIGHT SECTION ---------- */}
        <div className="mt-10 md:mt-0 text-center lg:text-right">
          <p className="text-lg font-semibold text-indigo-300">Bangalore</p>
          <p className="text-sm text-gray-300">
            © {currentYear} EduSphere. All rights reserved.
          </p>
        </div>
      </div>

      {/* Subtle gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-600 opacity-60"></div>
    </footer>
  );
}
