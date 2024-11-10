/** @format */
"use client";
import React, { useState, useRef, useEffect } from "react";
import AppendSvg from "../SVG/Append";

export default function Append() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [errors, setErrors] = useState({});

  const modalRef = useRef();

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
      setErrors({});
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10000) {
      setNoteText(value);
      setErrors((prevErrors) => ({ ...prevErrors, noteText: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        noteText: "Note cannot exceed 10,000 characters.",
      }));
    }
  };

  const handleSendNote = () => {
    let newErrors = {};
    if (!noteText) newErrors.noteText = "Note text is required.";
    if (!selectedOption)
      newErrors.option = "Please select an expiration option.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the note
      console.log("Note sent:", { noteText, selectedOption });
      // Reset the form after sending
      setNoteText("");
      setSelectedOption(null);
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setNoteText("");
    setSelectedOption(null);
    setErrors({});
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  // Options array to map over
  const expirationOptions = [
    {
      id: "expireOnExpiration",
      title: "Delete on Expiration",
      description: "Automatically deletes after 5 mins",
    },
    {
      id: "expireOnOpen",
      title: "Delete on Open",
      description: "Deletes when viewed within 5 mins",
    },
  ];

  return (
    <div className="relative">
      <div
        className="p-1 bg-blue-600 rounded-lg shadow-lg hover:scale-105 transition-transform"
        onClick={handleToggleModal}
      >
        <button className="flex items-center p-2 bg-blue-600 text-white cursor-pointer rounded-lg min-w-32 shadow-md border-2 border-blue-400 hover:bg-blue-500">
          <AppendSvg custom={"size-7 text-white"} />
          <p className="px-3 font-semibold text-xl">Add Notes</p>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="w-full max-w-lg p-6 bg-white border border-gray-300 rounded-lg shadow-lg"
          >
            <p className="text-left mb-2 font-semibold tracking-wide text-lg">
              Write below your note
            </p>
            <div className="relative">
              <textarea
                value={noteText}
                onChange={handleInputChange}
                placeholder="Write your note here..."
                className="w-full p-3 h-32 border border-gray-300 rounded-lg focus:border-blue-500 resize-none shadow"
              />
              <span className="absolute right-3 bottom-3 text-sm text-gray-500">
                {noteText.length}/10000
              </span>
            </div>
            {errors.noteText && (
              <p className="text-red-500 text-sm mt-1">{errors.noteText}</p>
            )}

            <p className="mt-4 font-semibold text-gray-700 text-center">
              Expiration Options (5 mins):
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {expirationOptions.map((option) => (
                <button
                  key={option.id}
                  className={`flex flex-col items-center px-4 py-2 rounded-lg transition-colors group duration-200 shadow-md ${
                    selectedOption === option.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <span className="font-semibold">{option.title}</span>
                  <span
                    className={`text-xs ${
                      selectedOption === option.id
                        ? "text-white"
                        : "text-gray-600"
                    }`}
                  >
                    {option.description}
                  </span>
                </button>
              ))}
            </div>
            {errors.option && (
              <p className="text-red-500 text-sm mt-2">{errors.option}</p>
            )}

            <button
              onClick={handleSendNote}
              className="mt-6 w-full py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 shadow-md"
            >
              Send Note
            </button>

            <button
              onClick={handleCancel}
              className="mt-2 w-full py-2 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200 shadow-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
