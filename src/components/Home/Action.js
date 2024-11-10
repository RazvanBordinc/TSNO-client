/** @format */
import React from "react";
import Append from "./Append";
import Search from "./Search";
import Instructions from "./Instructions";

export default function Action() {
  return (
    <div className="flex justify-around flex-col space-y-5 items-center mt-12 w-1/2 mx-auto text-slate-800">
      <Search />
      <Append />
      <Instructions />
    </div>
  );
}
