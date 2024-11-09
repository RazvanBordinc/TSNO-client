/** @format */
"use client";
import React from "react";
import Logo from "../SVG/Logo";

export default function Navbar() {
  return (
    <div className="bg-teal-600 h-16 p-6 group mb-10 text-white flex">
      <div className="size-20" onClick={() => window.location.reload()}>
        <Logo
          custom={
            "size-full rotate-45 group-hover:rotate-0 transition transform cursor-pointer "
          }
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-widest mt-[-0.5rem] sm:mt-0 mx-auto sm:mx-0 pr-12">
          TSNO
        </h1>
      </div>
    </div>
  );
}
