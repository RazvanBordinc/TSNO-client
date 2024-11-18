/** @format */
"use client";

import React, { useState, useEffect, useRef } from "react";
import AppendSvg from "../SVG/Append";
import AddModal from "./Modals/AddModal";
import Qr from "./Qr";

export default function Append() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseModalOpen, setResponseModalOpen] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [errors, setErrors] = useState({});
  const [noteResponse, setNoteResponse] = useState(null);
  const [countdown, setCountdown] = useState(300);

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

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

  const handleSendNote = async () => {
    let newErrors = {};
    if (!noteText) newErrors.noteText = "Note text is required.";
    if (!selectedOption)
      newErrors.option = "Please select an expiration option.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const payload = {
        notes: noteText,
        deleteWhenOpen: selectedOption === "expireOnOpen",
      };

      try {
        const response = await fetch("https://localhost:7279/api/add-note", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        setNoteResponse(data);
        setCountdown(300); // Reset timer to 5 minutes
        setResponseModalOpen(true);
        setIsModalOpen(false);
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setNoteText("");
    setSelectedOption(null);
    setErrors({});
  };

  useEffect(() => {
    let timer;
    if (responseModalOpen && countdown > 0) {
      timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [responseModalOpen, countdown]);

  // Format countdown as mm:ss
  const formatCountdown = () => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
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
      {/* Add Notes Button */}
      <div
        className="p-1 bg-blue-600 rounded-lg shadow-lg hover:scale-105 transition-transform"
        onClick={handleToggleModal}
      >
        <button className="flex items-center p-2 bg-blue-600 text-white cursor-pointer rounded-lg min-w-32 shadow-md border-2 border-blue-400 hover:bg-blue-500">
          <AppendSvg custom={"size-7 text-white"} />
          <p className="px-3 font-semibold text-xl">Add Notes</p>
        </button>
      </div>

      {/* Add Note Modal */}
      <AddModal isOpen={isModalOpen} onClose={handleCancel}>
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
                  selectedOption === option.id ? "text-white" : "text-gray-600"
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
          className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-800 border-b-4 border-l-4 border-blue-800 transition-colors duration-200 shadow-md"
        >
          Send Note
        </button>

        <button
          onClick={handleCancel}
          className="mt-2 w-full py-2 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200 shadow-md"
        >
          Cancel
        </button>
      </AddModal>

      {/* Response Modal */}
      <AddModal
        isOpen={responseModalOpen}
        onClose={() => setResponseModalOpen(false)}
      >
        {noteResponse && (
          <div>
            <h2 className="text-center font-bold text-xl mb-4 text-blue-600">
              Note Added Successfully!
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold w-full">
                  COPY THE CODE BELOW OR SCAN THE QR
                </span>
              </div>
              <div className="flex justify-between border-2 border-blue-600 p-1.5 rounded-md items-center bg-blue-200">
                <span className="font-semibold text-blue-700 font-semibold">
                  DELETE ON OPEN:
                </span>
                <span className="font-semibold bg-blue-600 text-white px-2 rounded">
                  {noteResponse.addNote.deleteWhenOpen ? "YES" : "NO"}
                </span>
              </div>
              <div className="flex justify-center w-full w-1/2 mx-auto py-1 rounded text-2xl space-x-2 text-white font-bold">
                <span className="p-1 bg-blue-300 flex rounded">
                  <span className="text-blue-700 bg-blue-300 border-2 border-blue-700 border-dashed p-2 rounded">
                    {formatCountdown()[0]}
                  </span>
                </span>
                <span className="p-1 bg-blue-300 flex rounded">
                  <span className="text-blue-700 bg-blue-300 border-2 border-blue-700 border-dashed p-2 rounded">
                    {formatCountdown()[1]}
                  </span>
                </span>
                <span className="text-blue-600 p-2">
                  {formatCountdown()[2]}
                </span>
                <span className="p-1 bg-blue-300 flex rounded">
                  <span className="text-blue-700 bg-blue-300 border-2 border-blue-700 border-dashed p-2 rounded">
                    {formatCountdown()[3]}
                  </span>
                </span>
                <span className="p-1 bg-blue-300 flex rounded">
                  <span className="text-blue-700 bg-blue-300 border-2 border-blue-700 border-dashed p-2 rounded">
                    {formatCountdown()[4]}
                  </span>
                </span>
              </div>
            </div>
            <div className="text-blue-600 font-bold text-3xl tracking-widest mt-3 border-y-2 border-blue-600 border-dashed">
              {noteResponse.addNote.code}
            </div>
            <div>
              <Qr
                text={`http://localhost:3000/n/${noteResponse.addNote.code}`}
              />
            </div>
            <button
              onClick={() => setResponseModalOpen(false)}
              className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-md"
            >
              Close
            </button>
          </div>
        )}
      </AddModal>
    </div>
  );
}
