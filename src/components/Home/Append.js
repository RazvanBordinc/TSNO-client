/** @format */

import React from "react";
import AppendSvg from "../SVG/Append";
export default function Append() {
  return (
    <div className="p-1 bg-slate-400/80 rounded-lg shadow hover:scale-[1.1] transition-transform">
      <div className="flex items-center p-2 bg-slate-400/80 cursor-pointer rounded-lg min-w-32 shadow-md border-2 border-dashed border-slate-300">
        <AppendSvg custom={"size-7"} />
        <p className="px-3 font-semibold text-xl">Add Notes</p>
      </div>
    </div>
  );
}
