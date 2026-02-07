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

  useEffect(() => {
    // Check if user just registered
    if (searchParams.get("registered") === "true") {
      setSuccess("Registration successful! Please login.");
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        <p className="opacity-90 mb-8">Sign in to your account</p>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-white text-sm">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-white text-sm">
            {error}
          </div>
        )}

        {/* Google Button */}
        <button
          className="w-full py-3 rounded-xl bg-white text-black font-medium 
          hover:bg-white/90 transition shadow-md mb-6 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Sign In with Google
        </button>

        <div className="flex items-center gap-4 mb-6">
          <span className="h-px flex-1 bg-white/40"></span>
          <span className="text-white/80 text-sm">Or, Sign In with email</span>
          <span className="h-px flex-1 bg-white/40"></span>
        </div>

        {/* Form */}
        <form className="space-y-8" onSubmit={handleSubmit}>

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
