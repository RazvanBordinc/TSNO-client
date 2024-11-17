/** @format */
"use client";
import React, { useEffect, useRef } from "react";

export default function AddModal({ isOpen, onClose, children }) {
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="w-full max-w-lg p-6 bg-white border border-gray-300 rounded-lg shadow-lg"
      >
        {children}
      </div>
    </div>
  );
}
