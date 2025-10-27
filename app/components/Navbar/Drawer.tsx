import React, { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex"
        >
          {/* Drawer Panel */}
          <motion.section
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="relative bg-white w-[85%] max-w-sm h-full shadow-2xl rounded-r-2xl overflow-y-auto flex flex-col"
          >
            {/* Close Icon */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-blue-700">Menu</h2>
              <XMarkIcon
                className="h-6 w-6 text-gray-700 cursor-pointer hover:rotate-90 transition-transform duration-300"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Drawer content */}
            <div
              onClick={() => setIsOpen(false)}
              className="flex-1 px-6 py-5 space-y-6 text-gray-800"
            >
              {children}
            </div>
          </motion.section>

          {/* Overlay to close */}
          <div
            className="flex-1 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
