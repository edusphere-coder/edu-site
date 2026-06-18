import { Feature } from "../types/feature";

// import { Feature } from "../types/feature";

// // import { Feature } from "@/types/feature";

// const SingleFeature = ({ feature }: { feature: Feature }) => {
//   const { icon, title, paragraph } = feature;
//   return (
//     <div className="w-full">
//       <div className="wow fadeInUp" data-wow-delay=".15s">
//         <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
//           {icon}
//         </div>
//         <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//           {title}
//         </h3>
//         <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
//           {paragraph}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SingleFeature;



// FIX: makes sure WOW.js never hides items on mobile
const visibilityFix = "visible opacity-100";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div className={`wow fadeInUp ${visibilityFix}`} data-wow-delay=".15s">

        {/* Icon */}
        <div className="mb-3 sm:mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>

        {/* FIX: removed dark:text-white — text will always be visible */}
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>

        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
