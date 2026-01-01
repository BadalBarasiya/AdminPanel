"use client";

import { FiArrowRight } from "react-icons/fi";

export default function ReportButton({ label = "Channels Report" }) {
  return (
    <a
      href="#"
      className="flex justify-center gap-2 rounded-lg border border-gray-300 bg-white p-2.5
                 text-theme-sm font-medium text-gray-700 shadow-theme-xs
                 hover:bg-gray-50
                 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/5"
    >
      <span>{label}</span>
      
      <FiArrowRight className="text-gray-600 text-base items-center" />

          </a>        
          
  );    
}
