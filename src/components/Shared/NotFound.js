/** @format */
"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/"); // Redirect to the homepage
  };

  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 h-screen flex items-center justify-center">
      <div className="py-12 px-6 mx-auto max-w-screen-lg text-center">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          It seems we can't find the page you're looking for. Don't worry, you
          can head back to the homepage and start fresh.
        </p>
        <button
          onClick={handleBackToHome}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg px-6 py-3 shadow-lg hover:scale-105 hover:shadow-xl transition-transform focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
        >
          Back to Homepage
        </button>
      </div>
    </section>
  );
}
