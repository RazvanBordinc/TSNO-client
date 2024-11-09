/** @format */

import React from "react";

export default function Active({ custom }) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={`${custom}`}
    >
      <path
        d="M144 221.59h52.79v108.79H144zm85.6-39.96h52.79v148.75H229.6zM315.21 256H368v74.38h-52.79z"
        style={{
          fill: "none",
          stroke: "#083b43",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 20,
        }}
      />
    </svg>
  );
}
