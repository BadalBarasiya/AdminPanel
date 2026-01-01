"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", top: 180, bottom: 40 },
  { month: "Feb", top: 190, bottom: 30 },
  { month: "Mar", top: 165, bottom: 50 },
  { month: "Apr", top: 170, bottom: 45 },
  { month: "May", top: 160, bottom: 55 },
  { month: "Jun", top: 165, bottom: 42 },
  { month: "Jul", top: 180, bottom: 100 },
  { month: "Aug", top: 210, bottom: 110 },
  { month: "Sep", top: 220, bottom: 120 },
  { month: "Oct", top: 240, bottom: 140 },
  { month: "Nov", top: 235, bottom: 150 },
  { month: "Dec", top: 230, bottom: 135 },
];

export default function MarketChart() {
  return (
    <div className="bg-white p-6 rounded-2xl  border border-gray-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Impression & Data Traffic
          </h2>
          <p className="text-gray-500 text-xs font semibold ">
            Jun 1, 2024 – Dec 1, 2025
          </p>
        </div>

        <div className="text-right">
          <div className="flex gap-1">
            <h4 className="text-2xl font-bold text-gray-900">$9,758.00</h4>
            <div>
              <span className="text-green-600 w-0.5 h-0.5  text-xs  font-semibold bg-green-100 py-2 px-2 rounded-full">
                +7.96%
              </span>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2">
            <p className="text-gray-400 text-xs">Total Revenue</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} className="text-xs" p-2>
            <defs>
              <linearGradient id="topColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
              </linearGradient>

              <linearGradient id="bottomColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#93c5fd" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />
            <XAxis
              dataKey="month"
              stroke="#9ca3af"
              axisLine={{ stroke: "white" }}
            />
            <YAxis stroke="#9ca3af" axisLine={{ stroke: "white" }} />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="top"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#topColor)"
            />

            <Area
              type="monotone"
              dataKey="bottom"
              stroke="#93c5fd"
              strokeWidth={2}
              fill="url(#bottomColor)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
