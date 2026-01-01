"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", direct: 40, referral: 20, organic: 15, social: 10 },
  { name: "Feb", direct: 55, referral: 25, organic: 18, social: 10 },
  { name: "Mar", direct: 40, referral: 30, organic: 20, social: 10 },
  { name: "Apr", direct: 50, referral: 22, organic: 18, social: 12 },
  { name: "May", direct: 25, referral: 18, organic: 15, social: 12 },
  { name: "Jun", direct: 45, referral: 25, organic: 18, social: 10 },
  { name: "Jul", direct: 55, referral: 28, organic: 20, social: 12 },
  { name: "Aug", direct: 40, referral: 22, organic: 20, social: 18 },
];

export default function AcquisitionChart() {
  return (
    <div className="bg-white rounded-2xl p-6  border-gray-200 border">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-6">Acquisition Channels</h2>

      {/* Legend */}
      <div className="flex items-center gap-6 text-sm mb-4">
        <span className="flex items-center gap-2 fontSize: 14px text-gray-600 fontWeight:400 font-semibold">
          <span className="w-3 h-3 rounded-full bg-blue-700  "></span> Direct
        </span>
        <span className="flex items-center gap-2 font-semibold text-gray-600">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span> Referral
        </span>
        <span className="flex items-center gap-2 text-gray-600 font-semibold">
          <span className="w-3 h-3 rounded-full bg-blue-300"></span> Organic Search
        </span>
        <span className="flex items-center gap-2 text-gray-600 font-semibold">
          <span className="w-3 h-3 rounded-full bg-blue-200"></span> Social
        </span>
      </div>

      {/* Chart */}
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={20} className="">
            <XAxis dataKey="name" tick={{ fill: "#94A3B8" }} axisLine={{stroke:'white'}} />
            <YAxis tick={{ fill: "#94A3B8" }} axisLine={{stroke:'white'}}/>
            <Tooltip />

            {/* STACKED BARS */}
            <Bar dataKey="direct" stackId="a" fill="#1E40AF" radius={[0, 0, 10, 10,]} />
            <Bar dataKey="referral" stackId="a" fill="#3B82F6" />
            <Bar dataKey="organic" stackId="a" fill="#93C5FD" />
            <Bar dataKey="social" stackId="a" fill="#BFDBFE"  radius={[10,10,0,0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
