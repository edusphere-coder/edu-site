"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

interface Destination {
  id: number;
  title: string;
  image: string;
  description: string;
  highlights: string[];
  universities: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    title: "USA",
    image: "/assets/university/usa.png",
    description: "Home to world-renowned institutions with centuries of academic excellence, offering globally recognized degrees and a rich cultural experience.",
    highlights: ["2 Years Post-Study Work", "1-Year Master's Programs", "Global Recognition"],
    universities: "Oxford, Cambridge, UCL, Imperial",
  },
  {
    id: 2,
    title: "Australia",
    image: "/assets/university/australia.png",
    description: "Home to Ivy Leagues and top-tier research universities, offering excellent STEM extensions and post-study opportunities.",
    highlights: ["OPT up to 3 years", "World's Best Universities", "Diverse Course Offerings"],
    universities: "MIT, Stanford, Harvard, Columbia",
  },
  {
    id: 3,
    title: "New Zealand",
    image: "/assets/university/nz.png",
    description: "Popular destination for high-quality research, outdoor lifestyle and generous post-study work rights in world-class cities.",
    highlights: ["Extended Work Rights", "Top Quality of Life", "World-Class Cities"],
    universities: "Melbourne, Sydney, ANU, Monash",
  },
  {
    id: 4,
    title: "Canada",
    image: "/assets/university/canada.png",
    description: "Known for tuition-free public universities, world-class engineering and high post-graduate employment rates across multiple countries.",
    highlights: ["Tuition-Free Education", "Engineering Hub", "18-Month Job Search Visa"],
    universities: "ETH Zurich, TU Munich, Sorbonne",
  },
  {
    id: 5,
    title: "UK",
    image: "/assets/university/uk.png",
    description: "Renowned for its high standard of living, welcoming immigration policies and competitive tuition rates for international students.",
    highlights: ["PGWPP up to 3 years", "Easy Permanent Residency", "Vibrant Student Cities"],
    universities: "Toronto, UBC, McGill, Waterloo",
  },
  {
    id: 6,
    title: "Europe",
    image: "/assets/university/europe.png",
    description: "Renowned for its high standard of living, welcoming immigration policies and competitive tuition rates for international students.",
    highlights: ["PGWPP up to 3 years", "Easy Permanent Residency", "Vibrant Student Cities"],
    universities: "Toronto, UBC, McGill, Waterloo",
  },
  {
    id: 7,
    title: "Germany",
    image: "/assets/university/germany.png",
    description: "Renowned for its high standard of living, welcoming immigration policies and competitive tuition rates for international students.",
    highlights: ["PGWPP up to 3 years", "Easy Permanent Residency", "Vibrant Student Cities"],
    universities: "Toronto, UBC, McGill, Waterloo",
  },
  {
    id: 8,
    title: "Finland",
    image: "/assets/university/finland.png",
    description: "Renowned for its high standard of living, welcoming immigration policies and competitive tuition rates for international students.",
    highlights: ["PGWPP up to 3 years", "Easy Permanent Residency", "Vibrant Student Cities"],
    universities: "Toronto, UBC, McGill, Waterloo",
  },
];

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "University Selection",
    description: "Expert guidance to choose the right university matching your academic goals and budget.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Application Support",
    description: "End-to-end assistance with university applications, SOPs and documentation.",
    icon: (
      <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Visa Assistance",
    description: "Comprehensive visa guidance including documentation, interview prep and filing.",
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Scholarship Guidance",
    description: "Identifying and applying for scholarships and financial aid opportunities.",
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Pre-Departure Support",
    description: "Accommodation, travel planning and orientation to prepare you for life abroad.",
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Career Counseling",
    description: "Personalized career path mapping aligned with global job market trends.",
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const stats = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Students Placed",
    icon: (
      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    id: 2,
    value: 50,
    suffix: "+",
    label: "Partner Universities",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 3,
    value: 98,
    suffix: "%",
    label: "Visa Success Rate",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    value: 15,
    suffix: "+",
    label: "Destination Countries",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V10a2 2 0 012-2h.745M16 3.935A9 9 0 118 3.935z" />
      </svg>
    ),
  },
];

const whyChoosePoints = [
  { text: "500+ students successfully placed worldwide" },
  { text: "Strong network across UK, USA, Europe & Australia" },
  { text: "Personalized counseling for every student" },
  { text: "98% visa approval success rate" },
  { text: "Partnerships with top-ranked global universities" },
  { text: "End-to-end support from application to arrival" },
];

function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current += Math.ceil(end / 50);

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
}

export default function OverseaEducation() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── 1. HERO ── */}
      <section className="pt-0 lg:pt-10 pb-10 relative overflow-hidden bg-[#0b0133] text-white">

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
            {[...Array(18)].map((_, i) => (
            <motion.span
                key={i}
                className="absolute w-1 h-1 bg-[#3a7bff] rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                }}
                transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                }}
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            />
            ))}
        </div>

        {/* Main grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[320px]">

            {/* LEFT */}
            <div className="flex flex-col justify-center px-8 lg:px-14 pt-28 pb-10 lg:py-14">
            <p className="text-[9px] tracking-[0.18em] uppercase !text-white/40 mb-3">
                Your Global Education Partner
            </p>

            <h1
                className="font-black leading-[0.88] mb-2 tracking-wide !text-[#ffffff]"
                style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: "clamp(46px, 5.5vw, 66px)" }}
            >
                GLOBAL<br />
                <span className="!text-[#ffffff]">EDUCATION</span><br />
                <span className="!text-[#00eaff]">ABROAD.</span>
            </h1>

            <p className="text-[9px] tracking-[0.18em] uppercase !text-white/35 mb-4">
                Infinite Possibilities Await You
            </p>

            <p className="text-base !text-white leading-relaxed max-w-base mb-6">
                Gateway to world-class universities in USA, UK, Canada, Australia & Europe —
                full support from admissions to visa.
            </p>

            <div className="flex flex-wrap items-center gap-3">
                <Link
                href="/contact"
                className="px-5 py-2.5 bg-gradient-to-r from-[#5c27f7] to-[#00b7ff] rounded-full text-xs font-semibold text-white hover:scale-105 transition-all shadow-[0_0_16px_rgba(60,143,255,0.35)]"
                >
                Book Free Consultation
                </Link>
            </div>
            </div>

            {/* RIGHT — decorative */}
            <div className="relative hidden lg:flex items-end justify-center overflow-hidden">
            {/* Glow + rings */}
            <div className="absolute w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(0,234,255,0.13)_0%,rgba(92,39,247,0.17)_60%,transparent_100%)] bottom-[-30px] right-[50px]" />
            <div className="absolute w-[256px] h-[256px] rounded-full border border-[rgba(0,234,255,0.16)] bottom-[-35px] right-[42px]" />
            <div className="absolute w-[196px] h-[196px] rounded-full border border-[rgba(92,39,247,0.22)] bottom-[-20px] right-[72px]" />

            {/* Animated chart line */}
            <motion.svg
                viewBox="0 0 600 400"
                className="absolute bottom-[-10px] right-0 w-[72%] opacity-45 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4 }}
            >
                <defs>
                <linearGradient id="arrowLine" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00eaff" />
                    <stop offset="100%" stopColor="#3c6fff" />
                </linearGradient>
                </defs>
                <motion.path
                d="M40,300 L160,220 L260,260 L360,170 L460,210 L580,120"
                stroke="url(#arrowLine)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                />
                <motion.polygon
                points="580,102 612,120 580,138"
                fill="#00eaff"
                animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                />
            </motion.svg>

            {/* Person image — swap src with your own */}
            <div className="absolute left-[160px] top-[170px] z-20">
                <div className="w-20 h-20 rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                        src="/assets/hero-person.png"
                        alt="Student"
                        fill
                        className="object-cover"
                    />
                    </div>
                </div>
            </div>

            {/* Floating badges */}
            <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-8 right-6 bg-white/[0.07] backdrop-blur-xl border border-white/10 rounded-xl px-3 py-2.5 flex items-center gap-2.5 z-20"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00eaff] flex-shrink-0" />
                <div>
                <p className="!text-white text-[12px] font-semibold leading-tight">98% Visa Success</p>
                <p className="!text-white/40 text-[11px] mt-0.5">Approval rate</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-24 left-4 bg-white/[0.07] backdrop-blur-xl border border-white/10 rounded-xl px-3 py-2.5 flex items-center gap-2.5 z-20"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5c518] flex-shrink-0" />
                <div>
                <p className="!text-white text-[12px] font-semibold leading-tight">500+ Students</p>
                <p className="!text-white/40 text-[11px] mt-0.5">Placed worldwide</p>
                </div>
            </motion.div>

            {/* Decorative + marks */}
            <span className="absolute top-6 left-6 text-white/20 text-lg font-light">+</span>
            <span className="absolute top-14 right-48 text-white/20 text-lg font-light">+</span>
            <span className="absolute bottom-24 left-8 text-white/20 text-lg font-light">+</span>
            </div>
        </div>

        {/* Stats bar */}
        {/* <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 border-t border-white/[0.06]">
            {[
            { num: "500+", label: "Students Placed",       color: "#00eaff" },
            { num: "50+",  label: "Partner Universities",  color: "#f5c518" },
            { num: "98%",  label: "Visa Success Rate",     color: "#8a5cf6" },
            { num: "15+",  label: "Destination Countries", color: "#00eaff" },
            ].map((s, i) => (
            <div
                key={i}
                className="flex items-center gap-2.5 px-6 py-3 border-r border-white/[0.06] last:border-r-0"
            >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                <div>
                <p
                    className="!text-white font-black text-xl leading-none"
                    style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.03em" }}
                >
                    {s.num}
                </p>
                <p className="!text-white text-[9px] mt-0.5">{s.label}</p>
                </div>
            </div>
            ))}
        </div> */}
      </section>

      {/* ── 2. SERVICES ── */}
      <section className="relative overflow-hidden pt-10 pb-10 md:py-20 lg:py-20 bg-white">
        {/* cube pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stackedCubes" width="86.6" height="100" patternUnits="userSpaceOnUse">
                <g stroke="rgba(99,102,241,0.1)" strokeWidth="1" fill="none">
                  <polygon points="43.3,0 86.6,25 43.3,50 0,25" />
                  <polygon points="0,25 43.3,50 43.3,100 0,75" />
                  <polygon points="43.3,50 86.6,25 86.6,75 43.3,100" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stackedCubes)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[45px]">
              Our Services
            </h2>
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              We provide complete handholding at every step of your study abroad process. From selecting the right course to settling in your host country, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="w-full bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(99,102,241,0.25)] transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 flex flex-col items-center text-center cursor-default"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-black">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DESTINATIONS ── */}
      <section id="destinations-section" className="relative min-h-screen px-6 py-2 md:py-5 bg-white overflow-hidden">
        {/* cube pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stackedCubes" width="86.6" height="100" patternUnits="userSpaceOnUse">
                <g stroke="rgba(99,102,241,0.1)" strokeWidth="1" fill="none">
                  <polygon points="43.3,0 86.6,25 43.3,50 0,25" />
                  <polygon points="0,25 43.3,50 43.3,100 0,75" />
                  <polygon points="43.3,50 86.6,25 86.6,75 43.3,100" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stackedCubes)" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[45px]">
              Study Destinations
            </h2>
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              Explore your study options across top education systems globally. Find the right mix of academic environment, culture and career scope.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-2">
            {destinations.map((dest) => (
              <motion.div
                key={dest.id}
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  boxShadow:
                    "0 8px 30px rgba(123,47,247,0.15), inset 0 0 10px rgba(200,215,255,0.4)",
                  borderColor: "#c5d8ff",
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 16,
                }}
                className="group relative bg-white rounded-3xl transition-all duration-500 border-2 border-[#e7ecf0] shadow-[inset_0_0_8px_rgba(255,255,255,0.9),0_3px_10px_rgba(220,230,240,0.4)] hover:shadow-[0_10px_35px_rgba(123,47,247,0.1)] flex flex-col overflow-hidden"
              >
                {/* image */}
                <div className="relative h-44 w-full overflow-hidden border-b border-[#e8edf3] rounded-t-3xl">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* content */}
                <div className="flex flex-col justify-between p-5 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="mb-2 text-lg sm:text-xl font-bold !leading-tight text-black dark:text-white">
                      {dest.title}
                    </h2>
                    <Link
                      href="/contact"
                      className="text-xs sm:text-sm font-semibold text-[#1f2937] hover:text-[#3b82f6] transition-colors"
                    >
                      Free Guide →
                    </Link>
                    {/* universities badge */}
                    {/* <div className="mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs text-indigo-500 font-semibold">{dest.universities}</span>
                    </div> */}
                    {/* <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                      {dest.description}
                    </p> */}
                    {/* <div className="flex flex-wrap gap-2 mb-4">
                      {dest.highlights.map((h, i) => (
                        <span key={i} className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-medium">
                          {h}
                        </span>
                      ))}
                    </div> */}
                  </div>

                  {/* <div className="mt-5 mb-3 h-[2px] w-full bg-gradient-to-r from-[#c5d8ff] to-[#e7ecf0] rounded-full" /> */}

                  {/* <div className="flex justify-end items-center"> */}
                    {/* <Link
                      href="/contact"
                      className="px-6 py-2.5 rounded-full font-semibold text-white
                      bg-gradient-to-r from-[#5C6EF8] to-[#8A5CF6]
                      shadow-sm hover:shadow-[0_0_12px_rgba(92,110,248,0.35)]
                      hover:scale-105 active:scale-95
                      transition-all duration-300 text-xs sm:text-sm"
                    >
                      Enquire Now
                    </Link> */}
                    {/* <Link
                      href="/contact"
                      className="text-xs sm:text-sm font-semibold text-[#1f2937] hover:text-[#3b82f6] transition-colors"
                    >
                      Free Guide →
                    </Link> */}
                  {/* </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* partner note */}
          <p className="text-center text-sm text-gray-400 italic mt-10">
            And many more partner universities across the globe
          </p>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE EDUSPHERE ── */}
      <section className="relative overflow-hidden pt-10 pb-16 md:py-10 bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stackedCubes" width="86.6" height="100" patternUnits="userSpaceOnUse">
                <g stroke="rgba(99,102,241,0.1)" strokeWidth="1" fill="none">
                  <polygon points="43.3,0 86.6,25 43.3,50 0,25" />
                  <polygon points="0,25 43.3,50 43.3,100 0,75" />
                  <polygon points="43.3,50 86.6,25 86.6,75 43.3,100" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stackedCubes)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* left: text content */}
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[45px]">
                Why Choose EduSphere?
              </h2>
              <div className="space-y-4">
                {whyChoosePoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white/70 backdrop-blur-xl rounded-2xl p-4 border border-gray-200/50 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-transform duration-300 hover:translate-x-1.5"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#5C6EF8] to-[#8A5CF6] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* right: visual highlight card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#5C6EF8] to-[#8A5CF6] rounded-3xl p-10 text-white shadow-[0_20px_60px_rgba(92,110,248,0.3)] relative overflow-hidden">
                {/* decorative blobs */}
                <div className="absolute top-[-40px] right-[-40px] w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-[-40px] left-[-40px] w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-6">
                    <span className="text-6xl font-extrabold">98%</span>
                    <p className="text-white/80 text-lg mt-1">Visa Approval Success Rate</p>
                  </div>

                  <div className="h-[1px] w-full bg-white/20 mb-6" />

                  <p className="text-white/90 text-base leading-relaxed italic mb-6">
                    &ldquo;EduSphere made my dream of studying abroad a reality. Their guidance was invaluable at every step of the journey.&rdquo;
                  </p>
                  <p className="text-[#00eaff] font-semibold text-sm">— International Student, University of Melbourne</p>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-3 bg-white text-[#5C6EF8] font-bold rounded-full text-sm
                      hover:scale-105 transition-all shadow-md"
                    >
                      Book Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. IMPACT IN NUMBERS ── */}
      <section className="relative overflow-hidden py-16 sm:py-10 bg-gradient-to-br from-[#0c0032] to-[#12005c] text-white px-6">
        <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 !text-white">
              Our Impact in Numbers
            </h2>
            <p className="!text-gray-300 text-lg">
              Trusted by hundreds of students worldwide to navigate their global education journey.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.04,
                  y: -6,
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
                }}
                className="bg-[#1a0050]/60 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col items-center text-center transition-all duration-300"
              >
                <div className="mb-2 sm:mb-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#5C6EF8] to-[#00eaff] flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className="text-3xl sm:text-5xl font-extrabold !text-white mb-2">
                    <Counter end={stat.value} />
                    {stat.suffix}
                </span>
                <p className="!text-[#00eaff] text-xs sm:text-sm font-medium leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* testimonial */}
          <div className="mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto text-center">
            <p className="!text-gray-200 text-base sm:text-lg italic leading-relaxed mb-4">
              &ldquo;EduSphere made my dream of studying abroad a reality. Their guidance was invaluable at every step of the journey.&rdquo;
            </p>
            <p className="!text-[#00eaff] font-semibold text-sm">— International Student, University of Melbourne</p>
          </div>
        </div>
      </section>

    </main>
  );
}