/** @format */
import React from "react";

export default function Search({ custom }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
      className={`${custom}`}
    >
      <path
        d="M14.954 14.946 21 21m-4-11a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
