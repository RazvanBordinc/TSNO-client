/** @format */

import Navbar from "@/components/Shared/Navbar";
import "./globals.css";
import Footer from "@/components/Shared/Footer";

export const metadata = {
  title: "TSNO",
  description: "Transfer Short Notes Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-200">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
