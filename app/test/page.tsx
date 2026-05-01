"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "../lib/auth";

export default function TestPage() {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      setTimeout(() => {
        router.push("/signin");
      }, 100); // small delay
    } else {
      setTimeout(() => {
        window.location.href =
          "https://candidatea.speedexam.net/openquiz.aspx?quiz=11BD91FC38B04D638E4CABE4D7D308D2";
      }, 100);
    }
  }, []);

  return <p className="text-white text-center mt-10">Checking access...</p>;
}
