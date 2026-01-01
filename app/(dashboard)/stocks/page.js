import Card from "@/app/components/Card";
import React from "react";
import brand from "@/app/assets/brand.svg";
import paypal from "@/app/assets/paypal.svg";
import tesla from "@/app/assets/tesla.svg";
import amazon from "@/app/assets/amazon.svg";
import Image from "next/image";
import LineGraph from "@/app/components/LineChart";
import StatsChart from "@/app/components/StatsChart";
import PortfolioChart from "@/app/components/PortfolioChart";
import AnalyticsChart from "@/app/components/Chart";
import Carousel from "@/app/components/Carousel";
import Watchlist from "@/app/components/Watchlist";
import { FiSearch } from "react-icons/fi";
export default function Stocks() {
  const transactions = [
    {
      id: 1,
      name: "Bought PYPL",
      date: "Nov 23, 01:00 PM",
      price: "$2,567.88",
      category: "Finance",
      status: "success",
      icon: paypal,
      bg: "bg-blue-600",
    },
    {
      id: 2,
      name: "Bought AAPL",
      date: "Nov 23, 01:00 PM",
      price: "$2,567.88",
      category: "Finance",
      status: "pending",
      icon: tesla,
      bg: "bg-gray-800",
    },
    {
      id: 3,
      name: "Sell KKST",
      date: "Nov 23, 01:00 PM",
      price: "$2,567.88",
      category: "Finance",
      status: "success",
      icon: paypal,
      bg: "bg-green-500",
    },
    {
      id: 4,
      name: "Bought FB",
      date: "Nov 23, 01:00 PM",
      price: "$2,567.88",
      category: "Finance",
      status: "success",
      icon: paypal,
      bg: "bg-blue-500",
    },
    {
      id: 5,
      name: "Sell AMZN",
      date: "Nov 23, 01:00 PM",
      price: "$2,567.88",
      category: "Finance",
      status: "failed",
      icon: paypal,
      bg: "bg-orange-500",
    },
  ];

  return (
    <div className="m-2">
      <div className="grid grid-cols-1 gap-5   rounded-2xl ">
        <Card
          variant="stock"
          company="Apple, Inc"
          companySub="Apple, Inc"
          price="$1,232.00"
          percent="11.01%"
          logo={brand}
        />
        <Card
          variant="stock"
          company="Paypal, Inc"
          companySub="Paypal, Inc"
          price="$1,232.00"
          percent="11.01%"
          logo={paypal}
        />
        <Card
          variant="stock"
          company="Tesla, Inc"
          companySub="Tesla, Inc"
          price="$1,232.00"
          percent="11.01%"
          logo={tesla}
        />
        <Card
          variant="stock"
          company="Amazon, Inc"
          companySub="Amazon, Inc"
          price="$1,232.00"
          percent="11.01%"
          logo={amazon}
        />
      </div>

      <div className=" mt-3 gap-4 gird grid-cols-12 grid flow dense ">
        <div className=" h-[450px] rounded-2xl col-span-8 row-span-2 ">
          <PortfolioChart />
        </div>

        <div className="col-span-4 row-span-2 bg-white  h-[350px] rounded-2xl ">
          <AnalyticsChart />
        </div>

        <div className="bg-white col-span-8 row-span-2 h-[300px] rounded-2xl">
          <Carousel />
        </div>

        <div className="col-span-4 row-span-4 rounded-2xl -mt-20 ">
          <Watchlist />
        </div>
      </div>

      <div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Latest Transactions History
            </h2>

            <div className="relative w-64">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Table */}
          <div className="grid grid-cols-5 text-sm text-gray-700 border-b font-semibold border-gray-200 pb-3">
            <div>Name</div>
            <div>Date</div>
            <div>Price</div>
            <div>Category</div>
            <div>Status</div>
          </div>

          <div className="divide-y divide-gray-100">
            {transactions.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-5 items-center py-4 text-sm"
              >
                {/* Name */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bg}`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium text-gray-900">{item.name}</span>
                </div>

                {/* Date */}
                <div className="text-gray-600 font-semibold">{item.date}</div>

                {/* Price */}
                <div className="font-medium text-gray-900">{item.price}</div>

                {/* Category */}
                <div className="text-gray-600 font-semibold">
                  {item.category}
                </div>

                {/* Status */}
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-gray-600 text-x font-semibold ${item.status}`}
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

