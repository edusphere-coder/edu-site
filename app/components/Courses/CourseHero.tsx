import Image from "next/image";
import { Star } from "lucide-react";

interface CourseHeroProps {
  title: string;
  subtitle: string;
  rating: number;
  students?: number;
  image: string;
}

const CourseHero = ({ title, subtitle, rating, students, image }: CourseHeroProps) => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-10 py-10 border-b border-gray-200">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-3 text-gray-900">{title}</h1>
        <p className="text-gray-700 text-lg mb-5 leading-relaxed">{subtitle}</p>

        <div className="flex items-center gap-3 mb-6">
          <Star className="text-yellow-400 fill-yellow-400" />
          <span className="text-gray-700 font-medium">
            {rating} / 5.0 {students && `• ${students.toLocaleString()} learners`}
          </span>
        </div>

        <div className="flex gap-5">
          <button className="px-6 py-3 bg-[#5C6EF8] text-white font-semibold rounded-full hover:scale-105 transition-transform">
            Enroll Now
          </button>
          <button className="px-6 py-3 border border-[#5C6EF8] text-[#5C6EF8] font-semibold rounded-full hover:bg-[#5C6EF8]/10 transition-colors">
            Download Syllabus
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-1">
        <Image
          src={image}
          alt={title}
          width={420}
          height={300}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default CourseHero;
