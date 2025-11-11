import Image from "next/image";
import { BadgeCheck, Download, Headphones } from "lucide-react";

interface CourseSidebarProps {
  image: string;
}

const CourseSidebar = ({ image }: CourseSidebarProps) => (
  <aside className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 sticky top-24">
    <Image
      src={image}
      alt="Course image"
      width={380}
      height={250}
      className="rounded-xl mb-5 object-cover"
    />

    <h3 className="text-xl font-semibold mb-4 text-gray-900">Includes</h3>
    <ul className="space-y-3 text-gray-700">
      <li className="flex items-center gap-2">
        <BadgeCheck className="text-[#5C6EF8]" /> Certificate of Completion
      </li>
      <li className="flex items-center gap-2">
        <Headphones className="text-[#5C6EF8]" /> 24/7 Support
      </li>
      <li className="flex items-center gap-2">
        <Download className="text-[#5C6EF8]" /> Downloadable Resources
      </li>
    </ul>
  </aside>
);

export default CourseSidebar;
