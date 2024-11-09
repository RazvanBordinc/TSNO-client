/** @format */

import React from "react";
import Github from "../SVG/Github";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-white shadow-t-md">
      <Link
        href={"https://github.com/RazvanBordinc"}
        className="transition-all rounded-full hover:bg-gray-300 size-12 justify-center items-center mx-auto flex"
      >
        <Github custom={"size-10"} />
      </Link>
      <p className="text-base font-normal text-center text-gray-600 mt-7 font-pj">
        Made with &#x2661; by Bordînc Valentin-Răzvan
      </p>
    </footer>
  );
}
