"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses-section" },
  { label: "About Us", href: "#About-Us-section" },
  { label: "Presentations", href: "/" },
  { label: "Recordings", href: "/" },
  { label: "Contact Us", href: "/contact" },
];

export default function Drawerdata() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-5">
      {/* Logo
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-bold text-xl text-blue-700">EduSphere</h1>
        <p className="text-sm text-gray-500 -mt-1">Learn. Apply. Succeed.</p>
      </motion.div> */}

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

      {/* Nav Items */}
      <div className="space-y-1">
        {mobileNavItems.map((item) => {
          const isActive =
            item.href === pathname || pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-[17px] font-medium px-3 py-2 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Auth Buttons */}
      <div className="border-t border-gray-200 pt-4 space-y-3">
        <Link href="/signin">
          <button className="w-full py-2.5 rounded-lg border border-blue-600 text-blue-600 font-medium active:scale-95 transition">
            Sign In
          </button>
        </Link>

        <Link href="/register">
          <button className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium active:scale-95 transition">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
