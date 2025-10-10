"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section
      id="About-Us-section"
      // ↓ Reduced top padding and kept nice bottom padding
      className="bg-primary/[.03] pt-10 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionTitle
            title="What is EduSphere?"
            paragraph="EduSphere is a classroom and online-based training platform
              for Engineers and IT enthusiasts."
            center
          />
        </div>

        {/* Feature Cards */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-10 
            justify-items-center
          "
        >
          {featuresData.map((feature) => (
            <div key={feature.id} className="w-full max-w-[320px]">
              <SingleFeature feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
