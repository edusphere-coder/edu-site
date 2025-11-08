"use client";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Link from "next/link";
import React from "react";
import Registerdialog from "./Registerdialog";
import Signdialog from "./Signdialog";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Courses", href: "#courses-section", current: false },
  { name: "About Us", href: "#About-Us-section", current: false },
  { name: "Presentations", href: "#testimonial-section", current: false },
  { name: "Recordings", href: "#join-section", current: false },
  { name: "Contact Us", href: "#contact-section", current: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > window.innerHeight - 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* ---------- LOGO ---------- */}
          {/* <Link href="/" className="flex items-center space-x-2 select-none">
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
              {/* <text
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
              </text> */}

              {/* --- SPHERE --- */}
              {/* <text
                x="112"
                y="55"
                fontFamily="'Playfair Display', serif"
                fontWeight="700"
                fontSize="44"
                fill="url(#sphereBlue)"
              >
                Sphere
              </text> */}

              {/* underline and tagline */}
              {/* <line
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
          </Link> */} 

          {/* ---------- LOGO ---------- */}
<Link href="/" className="flex items-center space-x-2 select-none">
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 160"
    className="h-20 w-auto"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Blue Circle */}
    <circle cx="120" cy="80" r="70" fill="#0d47a1" />

    {/* --- EDU (centered in circle, white) --- */}
    <text
      x="120"
      y="95"
      textAnchor="middle"
      fontFamily="'Playfair Display', serif"
      fontWeight="700"
      fontSize="60"
      fill="#ffffff"
    >
      Edu
    </text>

    {/* --- SPHERE (blue text, right next to circle) --- */}
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

    {/* --- underline (only under Sphere) --- */}
    <line
      x1="200"
      y1="105"
      x2="415"
      y2="105"
      stroke="#0d47a1"
      strokeWidth="2"
    />

    {/* --- tagline (centered under Sphere) --- */}
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


          {/* ---------- NAV LINKS ---------- */}
          <div className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href={item.href}
                  className={`relative text-[15px] font-medium transition-all duration-500 ease-in-out group 
                    ${scrolled ? "text-gray-800 hover:text-black" : "text-white hover:text-gray-200"}`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 w-0 h-[2px] rounded-full transition-all duration-500 group-hover:w-full 
                    ${scrolled ? "bg-black" : "bg-white"}`}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* ---------- SIGNIN / REGISTER ---------- */}
          <div className="hidden md:flex items-center space-x-4">
            <Signdialog />
            <Registerdialog />
          </div>

          {/* ---------- MOBILE MENU ---------- */}
          <div className="block md:hidden">
            <Bars3Icon
              className={`block h-6 w-6 cursor-pointer ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              onClick={() => setIsOpen(true)}
            />
          </div>

          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawerdata />
          </Drawer>
        </div>
      </div>
    </Disclosure>
  );
}
