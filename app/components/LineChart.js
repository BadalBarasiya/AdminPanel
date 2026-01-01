"use client";

import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

export default function LineGraph({ data }) {
  return (
    <div className="w-full h-28">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Tooltip cursor={false} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
