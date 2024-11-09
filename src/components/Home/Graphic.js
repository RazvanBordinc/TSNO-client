/** @format */

import React from "react";

export default function Graphic({ data = 1 }) {
  const percentage = Math.round((data / 9999) * 20); //impartitorul e numarul maxim de mesaje active permise, iar inmultitorul este numarul maxim de spike-uri in grafic

  const totalLines = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className="pl-5 mt-10">
      <p className="text-2xl text-center font-semibold mb-1 ">Active notes</p>
      <div className="flex items-center gap-2.5 py-1 rounded-full">
        {totalLines.map((e) => (
          <div
            key={e}
            className={`w-1.5 h-9 rounded-full rotate-45 ${
              e < percentage ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
