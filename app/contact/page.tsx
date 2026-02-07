"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { contactAPI } from "../lib/api";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit started');
    setError("");
    setSuccess("");

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      console.log('Validation failed: missing fields');
      setError("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);

    try {
      const response = await contactAPI.submit(formData);

      if (response.success) {
        setSuccess(response.message);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to send message. Please try again or contact us directly at recruitment@eduspherecourses.com");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setError("");
    setSuccess("");
  };

  return (
    <section className="relative w-full pt-32 pb-20 px-6 lg:px-24 
      grid grid-cols-1 lg:grid-cols-2 gap-16 bg-page-light">

      {/* Left Card – Contact Form */}
      <div className="relative z-10 bg-card-purple backdrop-blur-xl 
        border border-white/30 shadow-xl rounded-3xl p-10 text-white">

        <h2 className="text-4xl font-bold mb-2">
          Contact Us
        </h2>

        <p className="mb-2 opacity-90">
          Get in touch! We&apos;d love to hear from you.
        </p>
        <p className="mb-10 opacity-90">
          Fill up the form below to send us a message.
        </p>

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

        <form className="space-y-8" onSubmit={handleSubmit}>

          {/* Names */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm opacity-90">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
                  rounded-xl placeholder-white/60 outline-none focus:border-white transition"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm opacity-90">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
                  rounded-xl placeholder-white/60 outline-none focus:border-white transition"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
                rounded-xl placeholder-white/60 outline-none focus:border-white transition"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your 10-digit Phone Number"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
                rounded-xl placeholder-white/60 outline-none focus:border-white transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
                rounded-xl placeholder-white/60 outline-none focus:border-white transition"
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="submit"
              disabled={loading}
              className="py-2 px-6 rounded-lg border border-white/50 text-white hover:bg-white/20 transition disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? (
                <span className="flex items-center justify-center gap-1">
                  Sending
                  <span className="flex gap-1">
                    <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
                  </span>
                </span>
              ) : (
                "Send"
              )}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="py-2 px-6 rounded-lg border border-white/50 text-white hover:bg-white/20 transition"
            >
              Reset
            </button>
          </div>

        </form>
      </div>

      {/* Right Card – Contact Info */}
      <div className="relative z-10 flex items-center">
        <div className="bg-card-purple backdrop-blur-xl border border-white/30 shadow-xl 
          rounded-3xl p-10 w-full text-white">

          <h3 className="text-2xl font-semibold mb-6">
            Contact Details
          </h3>

          <div className="space-y-6">
            <div>
              <p className="text-sm opacity-80">Address</p>
              <p className="text-lg mt-1">kk plaza, 1st floor, K.N Road, Tadepalligudem, W.G District, Andrapradesh</p>
            </div>

            <div>
              <p className="text-sm opacity-80">Queries</p>

              <div className="mt-2 flex items-center gap-3">
                <span className="">📞</span>
                <p>+91 7331177116</p>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <span>📧</span>

                <a
                  href="mailto:recruitment@eduspherecourses.com"
                  className="hover:underline cursor-pointer"
                >
                  recruitment@eduspherecourses.com
                </a>
              </div>


            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
