"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
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
          Get in touch! We&apos; love to hear from you.
        </p>
        <p className="mb-10 opacity-90">
          Fill up the form below to send us a message.
        </p>

        <form className="space-y-8">

          {/* Names */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm opacity-90">First Name:</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
                  rounded-xl placeholder-white/60 outline-none focus:border-white transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm opacity-90">Last Name:</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
                  rounded-xl placeholder-white/60 outline-none focus:border-white transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Email:</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
                rounded-xl placeholder-white/60 outline-none focus:border-white transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Phone:</label>
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
                rounded-xl placeholder-white/60 outline-none focus:border-white transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm opacity-90">Message:</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 
                rounded-xl placeholder-white/60 outline-none focus:border-white transition"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="submit"
             className="py-2 px-6 rounded-lg border border-white/50 text-white hover:bg-white/20 transition">
              Send
            </button>

            <button
              type="reset"
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
              <p className="text-lg mt-1">Tadepalligudem, Ganesh Colony</p>
            </div>

            <div>
              <p className="text-sm opacity-80">Queries</p>

              <div className="mt-2 flex items-center gap-3">
                <span className="">📞</span>
                <p>+91 7331177116</p>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <span className="">📧</span>
                <p>recruitment@eduspherecourses.com</p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
