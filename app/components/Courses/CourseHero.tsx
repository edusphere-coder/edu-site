import Image from "next/image";
import { Star } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  rating: number;
  students?: number;
  image: string;
  difficulty?: string;
  durationWeeks?: number;
}

const CourseHero = ({
  title,
  subtitle,
  rating,
  students,
  image,
  difficulty,
  durationWeeks,
}: Props) => {
  return (
    <section className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
      {/* Gradient background with dark overlay for contrast */}
      <div className="relative bg-gradient-to-r from-[#1E293B] via-[#312E81] to-[#6D28D9] p-8 lg:p-12 text-white">
        {/* Semi-transparent overlay to make text pop */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 z-10">
          {/* Text Section */}
          <div className="flex-1">
           

            <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-md">
              {title}
            </h1>

            <p className="mt-3 text-lg text-gray-100/90 max-w-2xl leading-relaxed">
              {subtitle}
            </p>

            {/* Rating + Tags */}
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-full text-sm backdrop-blur-sm">
                <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                {rating} / 5
                {students ? (
                  <span className="ml-2 text-xs text-gray-200 opacity-90">
                    • {students.toLocaleString()} learners
                  </span>
                ) : null}
              </span>

              {difficulty && (
                <span className="inline-flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-full text-sm text-gray-200 backdrop-blur-sm">
                  Difficulty: <strong className="text-white">{difficulty}</strong>
                </span>
              )}

              {durationWeeks && (
                <span className="inline-flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-full text-sm text-gray-200 backdrop-blur-sm">
                  Duration:{" "}
                  <strong className="text-white">{durationWeeks} weeks</strong>
                </span>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 rounded-full bg-teal-400 text-slate-900 font-semibold shadow hover:scale-[1.03] transition-transform hover:bg-teal-300">
                Enroll Now
              </button>
              <button className="px-6 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors">
                Download Syllabus
              </button>
            </div>
          </div>

          {/* Course Image */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <Image
              src={image}
              alt={title}
              width={420}
              height={280}
              className="rounded-xl object-cover shadow-2xl ring-2 ring-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
