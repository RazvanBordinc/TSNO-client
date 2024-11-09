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
    <div className="px-5">
      <h1>content</h1>

      <Stats graphicData={data[1].value} data={data} />
      <Action />
    </div>
  );
}
