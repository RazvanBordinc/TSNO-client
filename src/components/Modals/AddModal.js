/** @format */
"use client";
import React, { useEffect, useRef, useCallback } from "react";

export default function AddModal({ isOpen, onClose, children }) {
  const modalRef = useRef();

  const handleClickOutside = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, handleClickOutside]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50 ">
      <div
        ref={modalRef}
        className="w-full max-w-lg p-2 bg-white  rounded-lg shadow-lg"
      >
        <div className="p-3 border-2 border-dashed border-blue-600 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
