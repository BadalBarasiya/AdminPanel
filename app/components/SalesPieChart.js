"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Affiliate Program", value: 2040, percent: 48, color: "#1E3AFA" },
  { name: "Direct Buy", value: 1402, percent: 33, color: "#6687FF" },
  { name: "Adsense", value:510, percent: 19, color: "#DCE6FF" },
];

export default function SalesCategoryChart() {
  const total = 3500;

  return (
    <div className="bg-white rounded-2xl border p-6  border-gray-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold">Sales Category</h2>
        <button className="text-gray-400 text-xl">⋮</button>
      </div>

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

        {/* Donut Chart */}
        <div className="relative w-48 h-48 sm:w-60 sm:h-60">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius="60%"
                outerRadius="90%"
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((item, i) => (
                  <Cell key={i} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-lg sm:text-xl font-semibold">Total 3.5K</p>
            <p className="text-gray-500 text-xs sm:text-sm">{total}</p>
          </div>
        </div>

        {/* Right Legend */}
        <div className="flex flex-col gap-6 text-sm w-full lg:w-auto border-gray-300">
          {data.map((item, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 font-semibold">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.name}
              </div>

              <p className="text-gray-500 ml-5 text-xs sm:text-sm">
                {item.percent}% • {item.value.toLocaleString()} Products
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
