/** @format */
import React from "react";
import Action from "./Action";
import Stats from "./Stats";

export default function Content() {
  const data = [
    { title: "Total Messages Transferred", value: 10000 },
    { title: "Active Messages Transferred", value: 4011 },
  ];

  return (
    <div className="px-5 mt-8 text-center">
      <h2 className="font-semibold text-3xl">Transfer Short Notes Online</h2>

      <Action />
      <Stats graphicData={data[1].value} data={data} />
    </div>
  );
}
