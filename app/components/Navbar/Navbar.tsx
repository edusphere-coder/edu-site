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
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", section: "#home" },
  { name: "Courses", href: "#courses-section" },
  { name: "About Us", href: "#About-Us-section" },
  { name: "Presentations", href: "/" },
  { name: "Recordings", href: "/" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.4);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const lightRoutes = ["/courses", "/signin", "/register", "/about","/contact","/signin", "/register"];
const isLightPage = lightRoutes.some(route => pathname.startsWith(route));

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || isLightPage
          ? "bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex h-20 items-center justify-between">
          {/* ---------- LOGO ---------- */}
          <Link href="/" className="flex items-center select-none">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 160"
              className="h-16 w-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <circle cx="120" cy="80" r="65" fill="#0d47a1" />
              <text
                x="120"
                y="95"
                textAnchor="middle"
                fontFamily="'Playfair Display', serif"
                fontWeight="700"
                fontSize="55"
                fill="#fff"
              >
                Edu
              </text>
              <text
                x="200"
                y="95"
                fontFamily="'Playfair Display', serif"
                fontWeight="700"
                fontSize="55"
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
                fontSize="18"
                fill="#0d47a1"
                letterSpacing="0.3"
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
                  className={`relative text-[15px] font-medium transition-all duration-300 group ${
                    scrolled || isLightPage
                      ? "text-gray-800 hover:text-black"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                      scrolled || isLightPage ? "bg-[#0d47a1]" : "bg-white"
                    }`}
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

         {/* ---------- MOBILE NAVBAR ---------- */}
<div className="block md:hidden">
  <Bars3Icon
    className={`h-7 w-7 cursor-pointer ${
      scrolled || isLightPage ? "text-gray-900" : "text-white"
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
