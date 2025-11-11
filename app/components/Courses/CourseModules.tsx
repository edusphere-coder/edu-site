interface Module {
  title: string;
  lessons: string[];
}

interface CourseModulesProps {
  modules: Module[];
}

const CourseModules = ({ modules }: CourseModulesProps) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">What You Will Learn</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((module, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-[#5C6EF8] font-bold mb-3">{module.title}</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {module.lessons.map((lesson, i) => (
                <li key={i}>{lesson}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseModules;
