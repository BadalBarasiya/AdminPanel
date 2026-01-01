"use client";
import { useState } from "react";

export default function ToggleTabs({ tabs, onChange }) {
  const [active, setActive] = useState(tabs[0]);

  function handleClick(tab) {
    setActive(tab);
    onChange && onChange(tab);
  }

  return (
    <div className="flex bg-gray-100 rounded-xl">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium transition
            ${active === tab ? "bg-white shadow text-gray-900" : "text-gray-500"}
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
