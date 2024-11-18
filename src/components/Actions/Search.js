/** @format */
"use client";
import React, { useState } from "react";
import AddModal from "../Modals/AddModal";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [note, setNote] = useState(null);
  const [errors, setErrors] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copyNotification, setCopyNotification] = useState(false); // State for the notification

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (/^\d{0,4}$/.test(value)) {
      setSearchTerm(value);
      setErrors("");
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
        `http://localhost:5283/api/view-note?Code=${searchTerm}`,
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

  const handleCopy = () => {
    if (note && note.notes) {
      navigator.clipboard.writeText(note.notes);
      setCopyNotification(true); // Show the notification

      // Hide the notification after 1 second
      setTimeout(() => {
        setCopyNotification(false);
      }, 1000);
    }
  };

  return (
    <div className="relative">
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

      {errors && <p className="text-red-500 text-lg font-semibold">{errors}</p>}

      <AddModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {note ? (
          <div>
            <h2 className="text-center font-bold text-xl mb-4 text-blue-600">
              Note Found
            </h2>
            <div className="p-4 border-2 border-blue-600 border-dashed drop-shadow-md rounded-lg bg-blue-100">
              <textarea
                readOnly
                value={note.notes}
                className="w-full p-3 min-h-32 max-h-64 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 text-gray-800 font-medium border-2 border-dashed shadow"
              />
              <div className="flex justify-end mt-2">
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-md"
                >
                  Copy to Clipboard
                </button>
              </div>
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

      {/* Copy Notification */}
      {copyNotification && (
        <div className="fixed bottom-4 right-16 transform bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-out">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
              />
            </svg>
            <span>Copied to the clipboard!</span>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fade-out {
          animation: fadeOut 1s ease-out forwards;
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 0.5;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  );
}
