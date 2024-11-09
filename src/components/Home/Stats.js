/** @format */

import React from "react";
import Graphic from "./Graphic";
import Active from "../SVG/Active";
export default function Stats({ graphicData, data }) {
  return (
    <div className="justify-center w-full grid">
      <Graphic data={graphicData} />

      <div className="flex w-full items-center bg-blue-600 shadow-md rounded-lg px-3 py-2 text-slate-700 font-semibold">
        <Active custom={"size-8 mr-2 bg-slate-200 rounded-full"} />
        <p className="bg-slate-200 px-2 rounded-md py-1">{data[0].title} </p>
        <span className="bg-slate-200 px-2 ml-2 rounded-md py-1">
          {data[0].value}
        </span>
      </div>
    </div>
  );
}
