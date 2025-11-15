"use client";
import { motion } from "framer-motion";

export default function LoginSection() {
  return (
    <section className="relative w-full pt-32 pb-20 px-6 lg:px-24 flex justify-center bg-page-light">

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-lg 
        bg-gradient-to-r from-[#5C6EF8] to-[#8A5CF6] 
        backdrop-blur-xl border border-white/30 shadow-xl 
        rounded-3xl p-10 text-white">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-2">Welcome back!</h2>
        <p className="opacity-90 mb-8">Sign in to your account</p>

        {/* Google Button */}
        <button
          className="w-full py-3 rounded-xl bg-white text-black font-medium 
          hover:bg-white/90 transition shadow-md mb-6"
        >
          Sign In with Google
        </button>

        <div className="flex items-center gap-4 mb-6">
          <span className="h-px flex-1 bg-white/40"></span>
          <span className="text-white/80 text-sm">Or, Sign In with email</span>
          <span className="h-px flex-1 bg-white/40"></span>
        </div>

        {/* Form */}
        <form className="space-y-8">

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Email Address *</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
              rounded-xl placeholder-white/60 outline-none focus:border-white transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Password *</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
              rounded-xl placeholder-white/60 outline-none focus:border-white transition"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end -mt-4">
            <a href="#" className="text-white/80 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white/20 border border-white/40 
            text-white font-medium hover:bg-white/30 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center mt-8 text-white/80 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="hover:underline text-white">
            Register
          </a>
        </p>

      </div>

    </section>
  );
}
