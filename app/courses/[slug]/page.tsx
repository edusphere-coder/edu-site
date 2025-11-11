"use client";
import CourseHero from "../../components/Courses/CourseHero";
import CourseModules from "../../components/Courses/CourseModules";
import CourseOverview from "../../components/Courses/CourseOverview";
import CourseSidebar from "../../components/Courses/CourseSidebar";
import FAQSection from "../../components/Courses/FAQSection";
import { useParams } from "next/navigation";
import { coursesData } from "../../components/Data/CourseData";

// import Testimonials from "../../components/Courses/Testimonials";

// import CourseInstructor from "../../components/Courses/CourseInstructor";

export default function CoursePage() {
  const { slug } = useParams();
  const course = coursesData[slug as keyof typeof coursesData];

  if (!course)
    return <div className="text-center py-20 text-xl font-medium">Course not found</div>;

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Hero Section */}
      <CourseHero
        title={course.title}
        subtitle={course.subtitle}
        rating={course.rating}
        image={course.image}
      />

      <div className="grid lg:grid-cols-[2fr_1fr] gap-10 mt-10">
        {/* Left side content */}
        <div>
          <CourseOverview overview={course.overview} />
          <CourseModules modules={course.modules} />

          {/* {course.instructor && (
            <CourseInstructor {...course.instructor} />
          )}

          {course.testimonials && (
            <Testimonials testimonials={course.testimonials} />
          )} */}

          <FAQSection faq={course.faq} />
        </div>

        {/* Sidebar */}
        <CourseSidebar image={course.image} />
      </div>
    </main>
  );
}
