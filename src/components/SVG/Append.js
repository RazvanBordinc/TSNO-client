/** @format */

import React from "react";

export default function Append({ custom }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${custom}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 22a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.306 1.879a3 3 0 0 0-4.243 0L3.389 12.553a3 3 0 0 0-.807 1.47l-.533 2.398a2 2 0 0 0 2.386 2.386l2.398-.533a3 3 0 0 0 1.47-.807L18.977 6.793a3 3 0 0 0 0-4.243zm-2.829 1.414a1 1 0 0 1 1.414 0l.672.671a1 1 0 0 1 0 1.415L15.641 7.3l-2.085-2.086zm-3.336 3.336-7.338 7.338a1 1 0 0 0-.269.49l-.533 2.398 2.398-.533a1 1 0 0 0 .49-.27l7.338-7.338z"
        fill="currentColor"
      />
    </svg>
  );
}
