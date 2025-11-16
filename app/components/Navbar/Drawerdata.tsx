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

export default function Drawerdata({ closeMenu }: { closeMenu: () => void }) {
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
      <div className="space-y-2 mt-2">
        {mobileNavItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="
    block text-[17px] font-medium 
    text-gray-900 px-3 py-2 rounded-xl
    hover:bg-black/5 transition
  "
            >
              {item.label}
            </Link>

          </motion.div>
        ))}
      </div>


      {/* Auth Buttons */}
      <div className="border-t border-white/40 pt-5 space-y-3">

        <button
          onClick={() => { closeMenu(); window.location.href = '/signin'; }}
          className="
      w-full py-3 rounded-full 
      bg-white/40 backdrop-blur-xl
      border border-blue-600
      text-blue-700 font-medium
      active:scale-95 transition
    "
        >
          Sign In
        </button>

        <button
          onClick={() => { closeMenu(); window.location.href = '/register'; }}
          className="
      w-full py-3 rounded-full
      bg-blue-600 text-white font-medium
      shadow-md active:scale-95 transition
    "
        >
          Register
        </button>

      </div>

    </div>
  );
}
