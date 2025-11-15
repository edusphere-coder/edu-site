"use client";
import Link from "next/link";

export default function Register() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
      <div className="hidden md:block">
        <Link
          href="/register"
          className="
            bg-gradient-to-r from-[#5C6EF8] to-[#8A5CF6]
            w-full
            hover:shadow-[0_0_12px_rgba(92,110,248,0.35)]
            hover:scale-105 active:scale-95
            transition-all duration-300
            text-white font-medium my-2 py-2 px-4 rounded
          "
        >
          Register
        </Link>
      </div>
    </div>
  );
}
