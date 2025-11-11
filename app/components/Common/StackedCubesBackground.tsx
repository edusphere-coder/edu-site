"use client";
import React from "react";

interface StackedCubesTemplateProps {
  opacity?: number;
  overlay?: boolean;
  positionOffset?: string;
  className?: string;
}

const StackedCubesTemplate: React.FC<StackedCubesTemplateProps> = ({
  opacity = 0.08,
  overlay = false,
  positionOffset = "top-0",
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 ${positionOffset} z-0 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1200 700"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="stackedCubesPattern"
            width="86.6"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <g stroke={`rgba(99,102,241,${opacity})`} strokeWidth="1" fill="none">
              <polygon points="43.3,0 86.6,25 43.3,50 0,25" />
              <polygon points="0,25 43.3,50 43.3,100 0,75" />
              <polygon points="43.3,50 86.6,25 86.6,75 43.3,100" />
            </g>
          </pattern>
        </defs>
        <rect width="1200" height="700" fill="url(#stackedCubesPattern)" />
      </svg>

      {overlay && (
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
      )}
    </div>
  );
};

export default StackedCubesTemplate;
