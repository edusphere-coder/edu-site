"use client";
import Image from "next/image";
import { BadgeCheck, Download, Headphones } from "lucide-react";

interface Props {
  image: string;
  price?: number; // made optional
  currency?: string;
  seatsLeft?: number;
  enrollCta?: string;
  highlights?: string[];
  rating?: number;
  title: string
}

const formatCurrency = (n?: number, currency = "INR") => {
  if (n === undefined || n === null || isNaN(n)) return "Price not available";
  if (currency === "INR") return `₹${n.toLocaleString("en-IN")}`;
  return `${currency} ${n.toLocaleString()}`;
};

const CourseSidebar = ({
  image,
  price,
  currency = "INR",
  seatsLeft,
  enrollCta = "Enroll Now",
  highlights,
  rating,
}: Props) => {
  return (
    <aside className="sticky top-24">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <Image
          src={image}
          alt="course"
          width={420}
          height={240}
          className="rounded-lg object-cover mb-4"
        />

        <div className="mb-4">
          <div className="font-semibold text-2xl text-gray-900">
            
          </div>
          {seatsLeft !== undefined && (
            <div className="mt-1 text-xs text-gray-500">
              {seatsLeft} seats left
            </div>
          )}
        </div>

        <button className="w-full py-3 rounded-full bg-[#5C6EF8] text-white font-semibold mb-4 hover:scale-[1.03] transition-transform">
          {enrollCta}
        </button>

        {/* Course perks */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <BadgeCheck className="text-[#5C6EF8]" />
            <div>
              <div className="text-sm font-semibold">Certificate</div>
              <div className="text-xs text-gray-500">
                Verified certificate upon completion
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Headphones className="text-[#5C6EF8]" />
            <div>
              <div className="text-sm font-semibold">Mentor Support</div>
              <div className="text-xs text-gray-500">
                24/7 mentor & doubt support
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Download className="text-[#5C6EF8]" />
            <div>
              <div className="text-sm font-semibold">Resources</div>
              <div className="text-xs text-gray-500">
                Downloadable notes & materials
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-xs text-gray-500">
          Rating:{" "}
          <strong className="text-gray-900">{rating ? rating : "N/A"}</strong>
        </div>
      </div>

      {highlights && highlights.length > 0 && (
        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h4 className="font-semibold mb-2">Course Highlights</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            {highlights.map((h, i) => (
              <li key={i}>• {h}</li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default CourseSidebar;
