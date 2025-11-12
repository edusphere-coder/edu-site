import { ChevronDown } from "lucide-react";
import { useState } from "react";

// interface Module {
//   title: string;
//   lessons: string[];
// }

// interface CourseModulesProps {
//   modules: Module[];
// }

// const CourseModules = ({ modules }: CourseModulesProps) => {
//   return (
//     <section className="py-8">
//       <h2 className="text-2xl font-semibold mb-6 text-gray-900">What You Will Learn</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {modules.map((module, idx) => (
//           <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
//             <h3 className="text-[#5C6EF8] font-bold mb-3">{module.title}</h3>
//             <ul className="space-y-2 list-disc list-inside text-gray-700">
//               {module.lessons.map((lesson, i) => (
//                 <li key={i}>{lesson}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CourseModules;


// components/Courses/CourseModules.tsx

interface Module {
  title: string;
  summary?: string;
  lessons: string[];
  duration?: string;
}

interface Props {
  modules: Module[];
}

const CourseModules = ({ modules }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900">What You Will Learn (Curriculum)</h2>

      {/* Scrollable area */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm max-h-[520px] overflow-y-auto hide-scrollbar space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          {modules.map((m, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article key={idx} className="border border-gray-100 rounded-xl p-4 bg-gray-50">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-3"
                >
                  <div className="text-left">
                    <h3 className="text-[#5C6EF8] font-bold">{m.title}</h3>
                    {m.duration && <p className="text-xs mt-1 text-gray-500">{m.duration} • {m.summary}</p>}
                  </div>
                  <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`mt-3 transition-all ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                    {m.lessons.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseModules;
