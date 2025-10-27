"use client";
import React from "react";
import { motion } from "framer-motion";

const Signin = () => {
  return (
<div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-purple-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-purple-700 font-medium hover:underline"
          >
            Register here
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Signin;
