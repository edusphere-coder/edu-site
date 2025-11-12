// interface CourseOverviewProps {
//   overview: string;
// }

// const CourseOverview = ({ overview }: CourseOverviewProps) => {
//   return (
//     <section className="py-8">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-900">About This Course</h2>
//       <p className="text-gray-700 leading-relaxed">{overview}</p>
//     </section>
//   );
// };

// export default CourseOverview;


// components/Courses/CourseOverview.tsx
interface Props {
  overview: string;
  highlights?: string[];
}

const CourseOverview = ({ overview, highlights }: Props) => {
  return (
    <section className="space-y-4">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold mb-3">About This Course</h2>
        <p className="text-gray-700 leading-relaxed">{overview}</p>
      </div>

      {highlights && (
        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-gray-800 font-medium">{h}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CourseOverview;
