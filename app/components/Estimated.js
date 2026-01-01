"use client";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function EstimatedRevenueCard() {
  const radialOptions = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
      
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: { size: "70%" },
        track: {
          background: "#e5e7eb",
          strokeWidth: "100%",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            offsetY: 30,
            color: "#6b7280",
            fontSize: "12px",

            formatter: () => "",
          },
          value: {
            offsetY: -10,
            fontSize: "28px",
            fontWeight: 700,
            color: "#111827",
          },
        },
      },
    },   

    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        gradientToColors: ["#6366F1"],
        stops: [0, 100],
      },
    },
    colors: ["#3B82F6"],
  };

  const radialSeries = [50];

  return (
    <div className="bg-white border h-[480px] border-gray-200 rounded-2xl p-6">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Estimated Revenue
          </h2>
          <p className="text-gray-500 text-sm">
            Target you’ve set for each month
          </p>
        </div>

        <button className="text-gray-400">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </div>

      {/* Radial Gauge */}
      <div className="w-full flex justify-center mt-4 mb-6">
        <div className="w-52">
          <Chart
            options={radialOptions}
            series={radialSeries}
            type="radialBar"
            height={240}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-3" />

      {/* STAT ROW 1 */}
      <div className="mb-4">
        <p className="text-gray-700 text-sm font-semibold">Marketing</p>

        <div className="flex justify-between items-center mt-1">
          <h3 className="text-lg font-bold text-gray-900">$30,569.00</h3>

          <span className="text-gray-600 text-sm font-semibold">85%</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div className="h-2 bg-blue-500 rounded-full font-semibold" style={{ width: "85%" }} />
        </div>
      </div>

      {/* STAT ROW 2 */}
      <div className="mb-1">
        <p className="text-gray-700 text-sm font-semibold">Sales</p>

        <div className="flex justify-between items-center mt-1">
          <h3 className="text-lg font-bold text-gray-900">$20,486.00</h3>

          <span className="text-gray-600 text-sm font-semibold">55%</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div className="h-2 bg-blue-500 rounded-full font-semibold" style={{ width: "55%" }} />
        </div>
      </div>
    </div>
  );
}
