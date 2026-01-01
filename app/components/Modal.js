"use client";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl w-[420px] p-6 relative">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            <AiFillCloseCircle/>
          </button>
        </div>

        <div>
          {children}
        </div>

      </div>
    </div>
  );
}
