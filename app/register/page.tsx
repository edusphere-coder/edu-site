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

        {/* Feedback Message */}
        <div className={success || error ? "mb-6" : "mb-2"}>
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
