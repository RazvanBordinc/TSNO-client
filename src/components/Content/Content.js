/** @format */
import React from "react";
import Action from "../Actions/Action";
import Stats from "../Visuals/Stats";

export default function Content({ data }) {
  return (
    <div className="px-5 mt-8 text-center">
      <h2 className="font-semibold text-3xl">Transfer Short Notes Online</h2>

      <Action />
      <Stats graphicData={data[1].value} data={data} />
    </div>
  );
}
