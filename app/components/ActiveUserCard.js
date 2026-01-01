"use client";

import { BsThreeDotsVertical } from "react-icons/bs";
import LineGraph from "./LineChart";

const chartData = [
  { value: 30 },
  { value: 40 },    
  { value: 38 },
  { value: 45 },
  { value: 50 },
  { value: 48 },
  { value: 60 },
  { value: 70 },
  { value: 65 },
];

export default function ActiveUsersCard() {
  return (
    <div className="bg-white rounded-3xl p-6 h-[400px] shadow-sm border border-gray-200">
     
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Active Users</h2>
        <BsThreeDotsVertical className="text-gray-400" />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        <span className="text-3xl font-bold text-gray-900">364</span>
        <span className="text-gray-500 text-sm">Live visitors</span>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <LineGraph data={chartData} />
      </div>

      <div className="grid grid-cols-3 text-center text-gray-700 divide-x divide-gray-200">
        
        <div>
          <p className="text-lg text-black font-bold">224</p>
          <p className="text-xs text-gray-500">Avg, Daily</p>
        </div>
        
        <div>
          <p className="text-lg text-black font-semibold">1.4K</p>
          <p className="text-xs text-gray-500">Avg, Weekly</p>
        </div>
        
        <div>
          <p className="text-lg text-black font-semibold">22.1K</p>
          <p className="text-xs text-gray-500">Avg, Monthly</p>
        </div>

      </div>
    </div>
  );
}
