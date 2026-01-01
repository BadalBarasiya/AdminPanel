"use client";

import {BarChart, Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,Brush} from "recharts";

const data = [
  { name: "1", sales: 160 },
  { name: "2", sales: 380 },
  { name: "3", sales: 190 },
  { name: "4", sales: 290 },
  { name: "5", sales: 175 },
  { name: "6", sales: 180 },
  { name: "7", sales: 285 },
  { name: "8", sales: 105 },
  { name: "9", sales: 210 },
  { name: "10", sales: 380 },
  { name: "11", sales: 270 },
  { name: "12", sales: 100 },
  { name: "13", sales: 115 },
  { name: "14", sales: 200 },
  { name: "15", sales: 250 },
  { name: "16", sales: 180 },
  { name: "17", sales: 300 },
  { name: "18", sales: 110 },
  { name: "19", sales: 85 },
  { name: "20", sales: 370 },
  { name: "21", sales: 100 },
  { name: "22", sales: 215 },
  { name: "23", sales: 285 },
  { name: "24", sales: 160 },
  { name: "25", sales: 290 },
  { name: "26", sales: 100 },
  { name: "27", sales: 105 },
  { name: "28", sales: 285 },
  { name: "29", sales: 360 },
  { name: "30", sales: 305 },
];

export default function AnalyticsChart() {
  zommable:false
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis ticks={[0,100 ,200,300,400]} />
          <Tooltip />
          <Bar
            dataKey="sales"
            radius={[4, 4, 0, 0]}
            fill="#4F46E5" 
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
