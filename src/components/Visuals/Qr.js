/** @format */
"use client";
import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function Qr({ text }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && text) {
      QRCode.toCanvas(canvasRef.current, text, { width: 256 }, (error) => {
        if (error) console.error("QR code generation error:", error);
      });
    }
  }, [text]);

  return (
    <div className="flex flex-col items-center p-4">
      <canvas ref={canvasRef} />
      <p className="mt-4 text-center">{text}</p>
    </div>
  );
}
