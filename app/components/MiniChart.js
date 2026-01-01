"use client";
import React from "react";
import Chart from "react-apexcharts";

export default function MiniLineChart() {
  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: true,        
      },
      sparkline: {
        enabled: true,   
             
      },
      dropShadow: {
    enabled: true,
    top: 5,
    left: 0,
    blur: 4,
    opacity: 0.9,
  },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    tooltip: {
      enabled: true,
    },
  };

  const series = [
    {
      name: "",
      data: [10, 15, 14, 20, 18, 22, 19],
    },
  ];

  return (
    <div className="h-[60px] w-[100px] p-2">
      <Chart options={options} series={series} type="line"   />
    </div>
  );
}
