/** @format */

import React from "react";
import InstructionsSvg from "../SVG/Instructions";
export default function Instructions() {
  return (
    <div className="p-1 bg-slate-400/80 rounded-lg shadow hover:scale-[1.1] transition-transform">
      <div className="flex items-center p-2 border-2 border-dashed  cursor-pointer rounded-lg min-w-32 shadow-md border-slate-300">
        <InstructionsSvg custom={"size-7 drop-shadow"} />
        <p className="px-3 font-semibold text-xl">Instructions</p>
      </div>
    </div>
  );
}
