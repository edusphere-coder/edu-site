"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "../lib/auth";

export default function TestPage() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/signin");
    } else {
      window.location.href =
        "https://candidatea.speedexam.net/openquiz.aspx?quiz=11BD91FC38B04D638E4CABE4D7D308D2";
    }
  }, []);

  return <p className="text-white text-center mt-10">Checking access...</p>;
}
