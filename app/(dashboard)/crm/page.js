import Card from "@/app/components/Card";
import StatsChart from "@/app/components/StatsChart";
import React from "react";
import EstimatedRevenueCard from "@/app/components/Estimated";
import SalesCategoryChart from "@/app/components/SalesPieChart";
import RecentOrders from "@/app/components/Recent";

function CRM() {
  const chartData = [
    { name: "Affiliate Program", value: 2040 },
    { name: "Direct Buy", value: 1402 },
    { name: "Adsense", value: 510 },
  ];
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
  return (
    <div className="ml-75 min-h-screen">
      <div className="grid grid-cols-3 gap-6 m-5 flex-wrap">
        <Card
          variant="stats"
          value="$120,369"
          title="Active Deal"
          percent="+20%"
          subtitle="last month"
        />
        <Card
          variant="stats"
          value="$234,210"
          title="Revenue Total"
          percent="+20%"
          subtitle="last month"
        />
        <Card
          variant="stats"
          value="874"
          title="Closed Deals "
          percent="+20%"
          subtitle="last month"
        />
      </div>

      <div className="flex m-5 gap-5 ">
        <div className="w-[790px]  ">
          <StatsChart data={data} />
        </div>

        <div className="w-[370px] bg-white rounded-2xl ">
          <EstimatedRevenueCard />
        </div>
      </div>

      <div className="flex  m-5 gap-7 ">
        <div className="flex-1 rounded-2xl">
          <SalesCategoryChart />
        </div>

        <div className="flex-1  bg-white p-5 rounded-2xl border border-gray-200">
          <h3 className="text-lg font-medium text-cust-yellow">
            Upcoming Schedule
          </h3>

          <div className="mt-5 space-y-8 ">
            {/*  1 */}
            <div className="flex gap-6">
              <div className="min-w-20">
                <p className="text-xs text-gray-500  font-semibold ">
                  Wed, 11 Jan
                </p>
                <p className="text-sm text-gray-800 font-medium mt-1">
                  09:20 AM
                </p>
              </div>

              <div className="flex-1">
                <p className="text-lg text-gray-800 font-semibold">
                  Business Analytics Press
                </p>
                <p className="text-xs font-semibold text-gray-600 mt-1">
                  Exploring the Future of Data-Driven +6 more
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex gap-6 mt-5 ">
              <div className="min-w-20">
                <p className="text-xs text-gray-500 font-semibold">
                  Wed, 11 Jan
                </p>
                <p className="text-sm text-gray-800 font-medium mt-1">
                  09:20 AM
                </p>
              </div>

              <div className="flex-1">
                <p className="text-lg text-gray-800 font-semibold">
                  Business Sprint
                </p>
                <p className="text-xs font-semibold text-gray-600 mt-1">
                  Techniques from Business Sprint +2 more
                </p>
              </div>
            </div>

            {/*  3 */}
            <div className="flex gap-6 mt-5">
              <div className="min-w-20">
                <p className="text-xs text-gray-500 font-semibold">
                  Wed, 11 Jan
                </p>
                <p className="text-sm text-gray-800 font-medium mt-1">
                  09:20 AM
                </p>
              </div>

              <div className="flex-1">
                <p className="text-lg text-gray-800 font-semibold">
                  Customer Review Meeting
                </p>
                <p className="text-xs font-semibold text-gray-600 mt-1">
                  Insights from the Customer Review Meeting +8 more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5">
        <RecentOrders />
      </div>
    </div>
  );
}

export default CRM;
