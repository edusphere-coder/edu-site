"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { authAPI } from "../lib/api";

export default function RegisterSection() {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    role: 'student' | 'instructor';
    acceptPolicy: boolean;
  }>({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    role: "student",
    acceptPolicy: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validation
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.password) {
      setError("Please fill in all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (!formData.acceptPolicy) {
      setError("Please accept the Privacy Policy");
      return;
    }

    setLoading(true);

    try {
      const response = await authAPI.register({
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        address: formData.address,
        role: formData.role,
      });

      if (response.success) {
        setSuccess(true);
        // Reset form
        setFormData({
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
          address: "",
          role: "student",
          acceptPolicy: false,
        });
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

        {/* Feedback Message (constant position) */}
        <div className="mb-6 min-h-[56px]">
          {success ? (
            <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-white text-sm">
              Registration successful! Please login.
            </div>
          ) : error ? (
            <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-white text-sm">
              {error}
            </div>
          ) : null}
        </div>

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
          <span className="text-white/80 text-sm">Or, Sign Up with email</span>
          <span className="h-px flex-1 bg-white/40"></span>
        </div>

        {/* Form */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label className="block mb-2 text-sm opacity-90">First Name *</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Enter your first Name"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30
              rounded-xl placeholder-white/60 outline-none focus:border-white transition"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Last Name *</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Enter your last Name"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30
              rounded-xl placeholder-white/60 outline-none focus:border-white transition"
              required
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30
              rounded-xl placeholder-white/60 outline-none focus:border-white transition"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30
              rounded-xl placeholder-white/60 outline-none focus:border-white transition"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block mb-2 text-sm opacity-90">I am a *</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30
              rounded-xl outline-none focus:border-white transition cursor-pointer"
            >
              <option value="student" className="bg-[#5C6EF8] text-white">Student</option>
              <option value="instructor" className="bg-[#5C6EF8] text-white">Instructor</option>
            </select>
          </div>

          {/* Policy Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="acceptPolicy"
              checked={formData.acceptPolicy}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <p className="text-sm text-white/90">I accept the Privacy Policy.</p>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-white/20 border border-white/40
            text-white font-medium hover:bg-white/30 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Registering..." : "Register"}
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
