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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex"
        >
          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            className="
              bg-white 
              w-[82%] 
              max-w-[350px] 
              h-full 
              shadow-xl 
              rounded-l-3xl 
              px-6 
              py-5 
              overflow-y-auto
              ml-auto
            "
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-700 p-1 rounded-full hover:bg-gray-100"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="mt-3">{children}</div>
          </motion.div>

          {/* Close on backdrop click */}
          <div className="flex-1" onClick={() => setIsOpen(false)}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
