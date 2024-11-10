/** @format */
"use client";
import React, { useState } from "react";
import SearchSvg from "../SVG/Search";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and limit to 4 digits
    if (/^\d{0,4}$/.test(value)) {
      setSearchTerm(value);
    }
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="flex items-center px-3 py-2 rounded-lg cursor-pointer mb-2">
      <div className="flex justify-between items-center w-full rounded-md border-b-2 border-slate-700 py-1.5 px-3">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="ex: 1234"
          className="flex-grow text-slate-900 font-semibold px-2 rounded-lg bg-transparent outline-none"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="text-slate-500 hover:text-slate-700 font-semibold mr-2"
          >
            Clear
          </button>
        )}
        <SearchSvg custom={"size-5 mx-2 text-slate-500"} />
      </div>
    </div>
  );
}
