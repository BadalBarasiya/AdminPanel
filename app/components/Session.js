"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Desktop", value: 45, color: "#1E40AF" },
  { name: "Mobile", value: 35, color: "#60A5FA" },
  { name: "Tablet", value: 20, color: "#DBEAFE" },
];

export default function SessionsChart() {
  return (
    <div className="bg-white rounded-2xl border-gray-200 p-6 shadow-sm border">
      <h2 className="text-xl font-semibold mb-6">Sessions By Device</h2>

      <div className="w-full h-72">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={0}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-8 mt-4 text-sm">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
