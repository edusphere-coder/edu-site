"use client";
import CourseHero from "../../components/Courses/CourseHero";
import CourseModules from "../../components/Courses/CourseModules";
import CourseOverview from "../../components/Courses/CourseOverview";
import CourseSidebar from "../../components/Courses/CourseSidebar";
import FAQSection from "../../components/Courses/FAQSection";
import { useParams } from "next/navigation";
import { coursesData } from "../../components/Data/CourseData";

export async function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({ slug }));
}

export default function CoursePage() {
  const { slug } = useParams();
  const course = coursesData[slug as keyof typeof coursesData];

  if (!course)
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-600">
        Course not found
      </div>
    );

  return (
    <main className="w-full bg-gradient-to-b from-white to-slate-50 pt-24">

      {/* HERO SECTION */}
      <section className="border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-[90rem] mx-auto px-6 py-14">
          <CourseHero
            title={course.title}
            subtitle={course.subtitle}
            rating={course.rating}
            image={course.image}
          />
        </div>
      </section>

      {/* MAIN GRID SECTION */}
      <section className="max-w-[90rem] mx-auto grid lg:grid-cols-[2.1fr_0.9fr] gap-10 px-6 py-12">
        {/* LEFT SCROLLABLE CONTENT */}
        <div className="flex flex-col gap-12">
          <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all duration-300">
            <CourseOverview overview={course.overview} />
          </div>

          {/* MODULES SCROLL AREA */}
          <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Course Curriculum
            </h2>
            <div className="max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
              <CourseModules modules={course.modules} />
            </div>
          </div>

          {/* FAQ SCROLL AREA */}
          <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="max-h-[450px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
              <FAQSection faq={course.faq} />
            </div>
          </div>
        </div>

        {/* STICKY SIDEBAR */}
        <aside className="sticky top-24 self-start">
          <CourseSidebar
            image={course.image}
            title={course.title}
            rating={course.rating}
            price={course.price}
          />
        </aside>
      </section>
    </main>
  );
}
