/** @format */
"use client";
import React from "react";
import Logo from "../SVG/Logo";

export default function Navbar() {
  return (
    <>
      <div className="bg-slate-900 h-16 p-6 group mb-10 text-white flex relative z-10">
        <div className="size-20" onClick={() => window.location.reload()}>
          <Logo
            custom={
              "size-full rotate-45 group-hover:rotate-0 transition transform cursor-pointer drop-shadow-md"
            }
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-widest mt-[-0.5rem] sm:mt-0 mx-auto sm:mx-0 pr-12 md:ml-5">
            TSNO
          </h1>
        </div>
      </div>
      <div className="bg-blue-600 mt-[-2.5rem] w-full h-1 relative overflow-hidden z-0">
        <div className="ray-animation"></div>
      </div>
    </>
  );
}
