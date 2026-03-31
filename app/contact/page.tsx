"use client";
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
    setError("");
    setSuccess("");

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      setError("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

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
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
        "Failed to send message. Please try again later."
      );
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
    <section className="relative w-full pt-32 pb-20 px-6 lg:px-24 bg-page-light flex justify-center">

      {/* Centered Contact Form */}
      <div className="w-full max-w-3xl bg-card-purple backdrop-blur-xl 
        border border-white/30 shadow-xl rounded-3xl p-10 text-white">

        <h2 className="text-4xl font-bold mb-2">Contact Us</h2>

        <p className="mb-2 opacity-90">
          Get in touch! We'd love to hear from you.
        </p>
        <p className="mb-10 opacity-90">
          Fill up the form below to send us a message.
        </p>

        {success && (
          <div className="mb-6 p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-sm">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form className="space-y-8" onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm opacity-90">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 
                  rounded-xl placeholder-white/60 outline-none focus:border-white"
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
                className="w-full px-4 py-3 bg-white/20 border border-white/30 
                  rounded-xl placeholder-white/60 outline-none focus:border-white"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm opacity-90">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 
                rounded-xl placeholder-white/60 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm opacity-90">Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your 10-digit Phone Number"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 
                rounded-xl placeholder-white/60 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm opacity-90">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 bg-white/20 border border-white/30 
                rounded-xl placeholder-white/60 outline-none focus:border-white"
            />
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="submit"
              disabled={loading}
              className="py-2 px-6 rounded-lg border border-white/50 hover:bg-white/20 transition disabled:opacity-50">
              {loading ? "Sending..." : "Send"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="py-2 px-6 rounded-lg border border-white/50 hover:bg-white/20 transition">
              Reset
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
