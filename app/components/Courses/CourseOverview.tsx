interface CourseOverviewProps {
  overview: string;
}

const CourseOverview = ({ overview }: CourseOverviewProps) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">About This Course</h2>
      <p className="text-gray-700 leading-relaxed">{overview}</p>
    </section>
  );
};

export default CourseOverview;
