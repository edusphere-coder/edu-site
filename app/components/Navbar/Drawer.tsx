"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: ReactNode;
}

export default function Drawer({ isOpen, setIsOpen, children }: DrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
          />

          {/* FLOATING PANEL (compact, right aligned) */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="
  fixed top-20 right-4 z-[100]
  w-[320px]
  bg-white
  backdrop-blur-xl
  rounded-3xl shadow-[0_8px_34px_rgba(0,0,0,0.18)]
  border border-white/40
  p-6
"

          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-700 p-1 hover:bg-black/10 rounded-full"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
