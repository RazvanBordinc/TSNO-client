/** @format */

import React from "react";
import Graphic from "./Graphic";
import Active from "../SVG/Active";
export default function Stats({ graphicData, data }) {
  const value = data[0]?.value;
  const title = data[0]?.title;
  return (
    <div className="justify-center w-full grid my-5 scale-[0.8]">
      <Graphic data={graphicData} />
      <div className="flex w-full items-center bg-blue-600 shadow-md rounded-lg px-3 py-2 text-slate-700 font-semibold">
        <Active custom={"size-8 mr-2 bg-slate-200 rounded-full"} />
        <p className="bg-slate-200 px-2 rounded-md py-1">{title} </p>
        <span className="bg-slate-200 px-2 ml-2 rounded-md py-1">{value}</span>
      </div>
    </div>
  );
}
