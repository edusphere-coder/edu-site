"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Course {
  id: number;
  title: string;
  image: string;
}

const Courses = () => {
  const courses: Course[] = [
    { id: 1, title: "Artificial Intelligence", image: "/assets/courses/ai.png" },
    { id: 2, title: "Data Analysis", image: "/assets/courses/d_Analysis.jpg" },
    { id: 3, title: "Full Stack Python", image: "/assets/courses/py.jpeg" },
    { id: 4, title: "Full Stack Java", image: "/assets/courses/java.jpg" },
    { id: 5, title: "Cyber Security", image: "/assets/courses/cyber.jpg" },
    { id: 6, title: "SAP", image: "/assets/courses/sap.jpg" },
  ];

  return (
    <main
    id="courses-section"
     className="min-h-screen bg-gradient-to-br from-[#f9fbff] via-[#eef3ff] to-[#ffffff] px-6 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Courses
        </h1>

        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative w-full max-w-sm bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg rounded-3xl overflow-hidden flex flex-col transform transition-all duration-500"
            >
              {/* Floating glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/30 to-transparent opacity-0 hover:opacity-100 transition-all duration-700"></div>

              {/* Image */}
              <div className="p-6 pb-0 flex justify-center">
                <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Text & Button */}
              <div className="flex flex-col items-center text-center p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 relative group">
                  {course.title}
                  <motion.div
                    className="h-[2px] bg-indigo-500 mx-auto mt-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: "auto" }}
                    animate={{ width: `${course.title.length * 9}px` }} // dynamic underline
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </h2>

                <Link
                  href="/contact"
                  className="relative inline-block px-6 py-2.5 text-white font-semibold rounded-full shadow-md bg-[#0B63F6] hover:bg-[#084FD6] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg mt-4"
                >
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Courses;
