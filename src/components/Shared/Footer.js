/** @format */

import React from "react";
import Github from "../SVG/Github";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 shadow-t-md">
      <Link
        aria-label="github"
        href={"https://github.com/RazvanBordinc"}
        target="_blank"
        className="transition-all rounded-full hover:bg-gray-300 size-12 justify-center items-center mx-auto flex"
      >
        <Github custom={"size-10"} />
      </Link>
      <p className="text-base font-normal text-center text-gray-600 mt-7 font-pj">
        Made by Bordînc Valentin-Răzvan
      </p>
    </footer>
  );
}
