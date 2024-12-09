/** @format */
"use client";
import React, { useState } from "react";
import AddModal from "@/components/Modals/AddModal";

export default function ViewNote({ note, error }) {
  const [isModalOpen, setIsModalOpen] = useState(!!note);
  const [copyNotification, setCopyNotification] = useState(false);

  const handleCopy = () => {
    if (note && note.notes) {
      navigator.clipboard.writeText(note.notes);
      setCopyNotification(true);
      setTimeout(() => {
        setCopyNotification(false);
      }, 1000);
    }
  };

  return (
    <div>
      {error && !note && (
        <div className="text-center mt-32 w-full mb-24 text-red-600 font-semibold text-4xl flex items-center space-x-2">
          <span className="flex w-1/4 h-1 bg-red-400"></span>
          <span className="flex w-1/2 justify-center">{error}</span>
          <span className="block w-1/4 h-1 bg-red-400"></span>
        </div>
      )}

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
              onClick={() => {
                setIsModalOpen(false);
              }}
              className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-md"
            >
              Close
            </button>
          </div>
        ) : (
          <p className="text-gray-500">No note found for the given code.</p>
        )}
      </AddModal>

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
    </div>
  );
}
