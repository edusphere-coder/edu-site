"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { authAPI } from "../lib/api";

export default function LoginSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Check if user just registered
    if (searchParams.get("registered") === "true") {
      setSuccess("Registration successful! Please login.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await authAPI.login({
        email: formData.email,
        password: formData.password,
      });

      if (response.success) {
        setSuccess("User logged in successfully!");
        // Wait a moment to show success message, then redirect
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } catch (err: any) {
      // Check if it's an inactive account error (403)
      if (err.response?.status === 403) {
        setError("Your account is pending activation. Please contact the admin team for access.");
      } else if (err.response?.status === 401) {
        setError("Invalid email or password. If you're a new user, please wait for admin approval.");
      } else {
        setError(err.response?.data?.message || "Login failed. Please try again or contact the admin team.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full pt-32 pb-20 px-6 lg:px-24 flex justify-center bg-page-light">

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-lg 
        bg-gradient-to-r from-[#5C6EF8] to-[#8A5CF6] 
        backdrop-blur-xl border border-white/30 shadow-xl 
        rounded-3xl p-10 text-white">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-2">Welcome back!</h2>
        <p className="opacity-90 mb-4">Sign in to your account</p>

        {/* Feedback Message */}
        {success || error ? (
          <div className="mb-4">
            {success ? (
              <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-white text-sm">
                {success}
              </div>
            ) : (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-white text-sm">
                {error}
              </div>
            )}
          </div>
        ) : null}

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
              rounded-xl placeholder-white/60 outline-none focus:border-white transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
              rounded-xl placeholder-white/60 outline-none focus:border-white transition"
              required
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
            disabled={loading}
            className="w-full py-3 rounded-xl bg-white/20 border border-white/40 
            text-white font-medium hover:bg-white/30 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-1">
                Logging in
                <span className="flex gap-1">
                  <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                  <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
                  <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
                </span>
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center mt-8 text-white/80 text-sm">
          Don&apos;t have an account?{" "}
          <a href="/register" className="hover:underline text-white">
            Register
          </a>
        </p>

      </div>

    </section>
  );
}
