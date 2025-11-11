"use client";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Course {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    image: "/assets/courses/ai.png",
    description:
      "Build intelligent systems using ML and NLP. Train models using TensorFlow and Python for real-world applications.",
  },
  {
    id: 2,
    title: "Data Analysis",
     slug: "data-analysis",
    image: "/assets/courses/d_Analysis.jpg",
    description:
      "Explore analytics using Python, Power BI, and Excel. Visualize data and make insight-driven decisions.",
  },
  {
    id: 3,
    title: "SAP",
    slug: "cyber-security",
    image: "/assets/courses/sap.jpg",
    description:
      "Become an SAP professional. Understand enterprise modules like FICO, MM, and HANA with guided practical training.",
  },
  {
    id: 4,
    title: "Cyber Security",
    slug: "cyber-security",
    image: "/assets/courses/cyber.jpg",
    description:
      "Defend systems from modern threats. Learn ethical hacking, network defense, and cybersecurity protocols.",
  },
  {
    id: 5,
    title: "Full Stack Python",
     slug: "full-stack-python",
    image: "/assets/courses/py.jpeg",
    description:
      "Develop full-featured Python apps using Django and React. Learn deployment and back-end integration hands-on.",
  },
  {
     id: 6,
    title: "Full Stack Java",
      slug: "full-stack-java",
    image: "/assets/courses/java.jpg",
    description:
      "Master Java development from front-end to back-end. Learn Spring Boot, APIs, and scalable systems with real-world projects.",
  },
];

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <motion.div
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
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden border-b border-[#e8edf3] rounded-t-3xl">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-5 flex-1">
        <div>
          <h2 className="mb-2 text-lg sm:text-xl font-bold !leading-tight text-black dark:text-white">
            {course.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 !leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Divider */}
        <div className="mt-5 mb-3 h-[2px] w-full bg-gradient-to-r from-[#c5d8ff] to-[#e7ecf0] rounded-full" />

        {/* Buttons */}
        <div className="flex justify-between items-center">
          {/* <Link
            href="/contact"
            className="px-6 py-2.5 bg-gradient-to-r from-[#7b2ff7] to-[#00eaff] rounded-full font-medium text-white text-xs sm:text-sm shadow-[0_0_12px_rgba(123,47,247,0.15)] hover:scale-[1.05] transition-transform duration-300"
          >
            Enroll
          </Link> */}
<Link
  href="/contact"
  className="px-6 py-2.5 rounded-full font-semibold text-white 
             bg-gradient-to-r from-[#5C6EF8] to-[#8A5CF6]
             shadow-sm hover:shadow-[0_0_12px_rgba(92,110,248,0.35)]
             hover:scale-105 active:scale-95 
             transition-all duration-300 text-xs sm:text-sm"
>
  Enroll
</Link>


          <Link
            href={`/courses/${course.slug}`}
            className="text-xs sm:text-sm font-semibold text-[#1f2937] hover:text-[#3b82f6] transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  return (
    <main id="courses-section" className="relative min-h-screen px-6 py-24 overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 700"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="stackedCubesFeatures"
              width="86.6"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <g stroke="rgba(99,102,241,0.1)" strokeWidth="1" fill="none">
                <polygon points="43.3,0 86.6,25 43.3,50 0,25" />
                <polygon points="0,25 43.3,50 43.3,100 0,75" />
                <polygon points="43.3,50 86.6,25 86.6,75 43.3,100" />
              </g>
            </pattern>
          </defs>
          <rect width="1200" height="700" fill="url(#stackedCubesFeatures)" />
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10 container mx-auto max-w-7xl">
        <h1 className="mb-14 text-center text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
          Explore Our Courses
        </h1>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={35}
          slidesPerView={3}
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="pb-20 overflow-visible"
          breakpoints={{
            0: { slidesPerView: 1.05, spaceBetween: 15 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 35 },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id} style={{ overflow: "visible" }}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Dots */}
      <style jsx global>{`
        .swiper {
          overflow: visible !important;
        }
        .swiper-pagination {
          position: relative !important;
          margin-top: 25px !important;
        }
        .swiper-pagination-bullet {
          background-color: #dbeafe !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #7b2ff7 !important;
          width: 28px !important;
          border-radius: 9999px !important;
          box-shadow: 0 0 10px rgba(123, 47, 247, 0.4);
        }
      `}</style>
    </main>
  );
};

export default Courses;
