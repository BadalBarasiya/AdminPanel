"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const monthlyData = [
  { name: "Nov '25", value: 32 },
  { name: "15 Nov", value: 30 },
  { name: "Dec '25", value: 34 },
  { name: "15 Dec", value: 31 },
  { name: "Jan '26", value: 35 },
  { name: "15 Jan", value: 32 },
  { name: "Feb '26", value: 34 },
  { name: "15 Feb", value: 33 },
  { name: "Mar '26", value: 36 },
  { name: "15 Mar", value: 38 },
];

export default function PortfolioChart() {
  const [active, setActive] = useState("Annually");

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Portfolio Performance
          </h2>
          <p className="text-sm text-gray-500">
            Here is your performance stats of each month
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-xl p-1">
          {["Monthly", "Quarterly", "Annually"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
                active === tab
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-83">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#4f46e5"
              strokeWidth={2}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
