/** @format */
"use client";
import React, { useEffect, useState } from "react";
export default function Graphic({ data = 1 }) {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const percentage = Math.round((data / 100) * 20);
  const totalLines = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className="pl-5 mt-10">
      <p className="text-2xl text-center font-semibold mb-1">Active notes</p>
      <div className="flex items-center gap-2.5 py-1 rounded-full">
        {totalLines.map((e) => (
          <div
            key={e}
            className={`w-1.5 h-9 rounded-full rotate-45 transition-colors duration-500 ${
              rendered && e < percentage ? "bg-blue-600" : "bg-gray-300"
            }`}
            style={{
              transitionDelay: `${e * 0.05}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
