/** @format */
"use client";
import React, { useState } from "react";
import SearchSvg from "../SVG/Search";
import AddModal from "./Modals/AddModal";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [note, setNote] = useState(null);
  const [errors, setErrors] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and limit to 4 digits
    if (/^\d{0,4}$/.test(value)) {
      setSearchTerm(value);
      setErrors(""); // Clear errors on valid input
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    setErrors("");
    setNote(null);
  };

  const handleSearch = async () => {
    if (!searchTerm) {
      setErrors("Please enter a code to search.");
      return;
    }

    try {
      const response = await fetch(
        `https://localhost:7279/api/view-note?Code=${searchTerm}`,
        {
          method: "GET",
          headers: {
            Accept: "*/*",
          },
        }
      );

      const data = await response.json();
      setNote(data); // Set the note content
      setIsModalOpen(true); // Open modal to display the note
    } catch (error) {
      setErrors("This note doesn't exist!");
    }
  };

  return (
    <div className="relative">
      {/* Search Bar */}
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
          <button
            onClick={handleSearch}
            className="text-slate-500 hover:text-slate-700 font-semibold mr-2"
          >
            Search
          </button>
        </div>
      </div>

      {/* Error Message */}
      {errors && <p className="text-red-500 text-lg font-semibold">{errors}</p>}

      {/* Note Modal */}
      <AddModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {note ? (
          <div>
            <h2 className="text-center font-bold text-xl mb-4 text-blue-600">
              Note Found
            </h2>
            <div className="p-4 border border-blue-600 rounded-lg bg-blue-100">
              <p className="text-gray-800 font-medium">{note.notes}</p>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-md"
            >
              Close
            </button>
          </div>
        ) : (
          <p className="text-gray-500">No note found for the given code.</p>
        )}
      </AddModal>
    </div>
  );
}
