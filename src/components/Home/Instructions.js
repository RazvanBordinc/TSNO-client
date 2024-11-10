/** @format */
"use client";
import React, { useState, useRef, useEffect } from "react";
import InstructionsSvg from "../SVG/Instructions";

export default function Instructions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  return (
    <div className="relative">
      <div
        className="p-1 bg-blue-600 rounded-lg shadow-lg hover:scale-105 transition-transform"
        onClick={handleToggleModal}
      >
        <button className="flex items-center p-2 bg-blue-600 text-white cursor-pointer rounded-lg min-w-32 shadow-md border-2 border-blue-400 hover:bg-blue-500">
          <InstructionsSvg custom={"size-7 text-white drop-shadow"} />
          <p className="px-3 font-semibold text-xl">Instructions</p>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="w-full max-w-lg p-6 bg-white border border-gray-300 rounded-lg shadow-lg"
          >
            <h2 className="text-center font-bold text-2xl text-gray-800 mb-4">
              How to Use TSNO
            </h2>
            <div className="text-left space-y-4">
              <div className="flex items-start space-x-3">
                <span className="font-semibold text-lg text-blue-600">1.</span>
                <p className="text-gray-700">
                  Go to <span className="font-semibold">TSNO.ro/n/0000</span>,
                  replacing <span className="font-semibold">0000</span> with the
                  4-digit code of your note.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-semibold text-lg text-blue-600">2.</span>
                <p className="text-gray-700">
                  Alternatively, type the code directly into the search bar on
                  the main page to retrieve your note.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-semibold text-lg text-blue-600">3.</span>
                <p className="text-gray-700">
                  You can also scan the QR code associated with your note to
                  quickly access it from another device.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-semibold text-lg text-blue-600">4.</span>
                <p className="text-gray-700">
                  Access your notes across devices{" "}
                  <span className="font-semibold">without an account</span> and{" "}
                  <span className="font-semibold">for free</span>.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 shadow-md"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
