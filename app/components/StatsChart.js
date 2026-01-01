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
import ToggleTabs from "./ToogleButton";

export default function StatsChart({ data }) {
  return (
    <div className="bg-white p-5  rounded-2xl border border-gray-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Statistics</h2>
          <p className="text-gray-500 text-sm">
            Target you’ve set for each month
          </p>
        </div>

        <div className="flex items-center bg-gray-100 rounded-xl text-sm">
          <ToggleTabs
            tabs={["Monthly", "Quarterly", "Annually"]}
            onChange={(value) => console.log("Selected:", value)}
          />
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex gap-10 mb-5">
        {/* Block 1 */}
        <div>
          <div className="flex items-center gap-1">
            <h3 className="text-xl font-bold text-gray-900">$212,142.12</h3>
            <span className="bg-green-100 text-green-600 px-1 py-1 rounded-full text-xs font-semibold">
              +23.2%
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            {/* <span className="bg-green-100 text-green-600 px-2 rounded-full text-xs font-semibold">
              +23.2%
            </span> */}
            <span className="text-gray-500 text-sm font-semibold">
              Avg. Yearly Profit
            </span>
          </div>
        </div>

        {/* Block 2 */}
        <div>
          <div className="flex items-center gap-1">
            <h3 className="text-xl font-bold text-gray-900">$30312.23</h3>
            <span className="bg-green-100 text-red-600 px-1 py-1 rounded-full text-xs font-semibold">
              -12.3%
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            {/* <span className="bg-red-100 text-red-600 px-2 rounded-full text-xs font-semibold">
              -12.3%
            </span> */}
            <span className="text-gray-500 text-xs font-semibold">
              Avg. Yearly Profit
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-72 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="topArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
              </linearGradient>

              <linearGradient id="bottomArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#93c5fd" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#e5e7eb" vertical={false} />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="top"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#topArea)"
              
            />

            <Area
              type="monotone"
              dataKey="bottom"
              stroke="#93c5fd"
              strokeWidth={2}
              fill="url(#bottomArea)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
