"use client";
import { motion } from "framer-motion";

export default function RegisterSection() {
  return (
    <section className="relative w-full pt-32 pb-20 px-6 lg:px-24 flex justify-center bg-page-light">
      {/* Register Card */}
      <div
        className="relative z-10 w-full max-w-lg
        bg-gradient-to-r from-[#5C6EF8] to-[#8A5CF6]
        backdrop-blur-xl border border-white/30 shadow-xl
        rounded-3xl p-10 text-white"
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-2">Create your account</h2>
        <p className="opacity-90 mb-8">Sign Up with your details</p>

        {/* Google Button */}
        <button
          className="w-full py-3 rounded-xl bg-white text-black font-medium
          hover:bg-white/90 transition shadow-md mb-6"
        >
          Sign In with Google
        </button>

        <div className="flex items-center gap-4 mb-6">
          <span className="h-px flex-1 bg-white/40"></span>
          <span className="text-white/80 text-sm">Or, Sign Up with email</span>
          <span className="h-px flex-1 bg-white/40"></span>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {/* First Name */}
          <div>
            <label className="block mb-2 text-sm opacity-90">First Name *</label>
            <input
              type="text"
              placeholder="Enter your first Name"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30
              rounded-xl placeholder-white/60 outline-none focus:border-white transition"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Last Name *</label>
            <input
              type="text"
              placeholder="Enter your last Name"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30
              rounded-xl placeholder-white/60 outline-none focus:border-white transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Phone Number *</label>
            <div className="flex gap-3">
              <input
                type="text"
                value="IN +91"
                readOnly
                className="w-24 px-3 py-3 bg-white/20 text-white border border-white/30 rounded-xl"
              />
              <input
                type="text"
                placeholder="Enter your phone number"
                className="flex-1 px-4 py-3 bg-white/20 text-white border border-white/30
                rounded-xl placeholder-white/60 outline-none focus:border-white transition"
              />
            </div>
          </div>

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

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Confirm Password *</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30
              rounded-xl placeholder-white/60 outline-none focus:border-white transition"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30
              rounded-xl placeholder-white/60 outline-none focus:border-white transition"
            />
          </div>

          {/* Policy Checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm text-white/90">I accept the Privacy Policy.</p>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white/20 border border-white/40
            text-white font-medium hover:bg-white/30 transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-8 text-white/80 text-sm">
          Already have an account? {" "}
          <a href="/signin" className="hover:underline text-white">
            Login
          </a>
        </p>
      </div>
    </section>
  );
}