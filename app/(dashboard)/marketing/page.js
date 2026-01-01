"use client";

import FeaturedCampaigns from "@/app/components/Campaign";
import Card from "@/app/components/Card";
import MarketChart from "@/app/components/MarketingChart";
import MiniLineChart from "@/app/components/MiniChart";
import ToggleTabs from "@/app/components/ToogleButton";
import React from "react";
import { BiRupee } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import Image from "next/image";
import united from "@/app/assets/united.jpeg";

function Marketing() {
  const trafficSources = [
    { name: "Google", percent: 79 },
    { name: "Youtube", percent: 55 },
    { name: "Facebook", percent: 48 },
    { name: "Instagram", percent: 48 },
  ];
  return (
    <div className=" ml-77 min-h-screen m-2 scroll-smooth">
      <div className=" grid grid-cols-3 gap-2 justify-around">
        <Card
          icon={<FiStar className="text-gray-600 text-xl" />}
          className="w-[380px] h-[190px] mb-6"
        >
          <p className="text-gray-500 text-sm mb-2">Avg Client Rating</p>
          <div className="flex justify-between mt-3  ">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">7.8/10</h2>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <span className="bg-green-100 text-green-600 px-2 text-xs rounded-full font-semibold">
                +20%
              </span>
              <span className="text-gray-500 text-xs">Vs last month</span>
            </div>
          </div>
        </Card>

        <Card
          icon={<BsFillPeopleFill className="text-gray-600 text-xl" />}
          className="w-[380px] h-[190px] p-5"
        >
          <p className="text-gray-500 text-sm mb-2">Instagram Followers</p>
          <div className="flex justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">5934</h2>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span className="bg-green-100 text-green-600 px-2 text-xs rounded-full font-semibold">
                +20%
              </span>
              <span className="text-gray-500 text-xs">vs last month</span>
            </div>
          </div>
        </Card>

        <Card
          icon={<BiRupee className="text-gray-600 text-xl" />}
          className="w-[380px] h-[190px]"
        >
          <p className="text-gray-500 text-sm mb-2">Total Revenue</p>
          <div className="flex  justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">$9758</h2>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span className="bg-green-100 text-green-600 px-2 text-xs rounded-full font-semibold">
                +20%
              </span>
              <span className="text-gray-500 text-xs">vs last month</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-6">
        <div className=" w-[790px] rounded-2xl h-80">
          <MarketChart />
        </div>

        <div className="bg-white w-96 h-[450px] border-gray-500 rounded-2xl p-3">
          <h1 className="text-lg font-semibold ">Traffic Stats</h1>
          <div className="flex flex-wrap bg-gray-100 text-gray-400 font-semibold h-10 rounded-xl  justify-center-safe gap-1 p-0.5 items-center mt-2.5   ">
            <ToggleTabs
              tabs={["Monthly", "Quarterly", "Annually"]}
              onChange={(value) => console.log("Selected:", value)}
            />
          </div>

          <div className="mt-5  divide-y">
            <div className="p-3 flex justify-between">
              <div>
                <p className="mb-1 text-gray-500 text-sm font-semibold ">
                  New Subscribers
                </p>
                <h2 className="mb-1 text-gray-500 text-sm">567k</h2>
                <span className="flex gap-1">
                  <span className="text-green-800 font-semibold">+3.85%</span>
                  <span className="text-xs text-gray-500 font-semibold">
                    then last week
                  </span>
                </span>
              </div>

              <div>
                <MiniLineChart />
              </div>
            </div>

            <div className="p-3 flex justify-between">
              <div>
                <p className="mb-1 text-gray-500 text-sm font-semibold ">
                  Conversion Rate
                </p>
                <h2 className="mb-1 text-sm text-green-900 font-semibold">
                  285k
                </h2>
                <span className="flex">
                  <span className="text-red-800 text font-semibold">
                    -5.39%
                  </span>
                  <span className="text-xs">then last week</span>
                </span>
              </div>
              <div>
                <MiniLineChart />
              </div>
            </div>

            <div className="p-3 flex justify-between">
              <div>
                <p className="mb-1 text-gray-500 text-sm font-semibold ">
                  Page Bounce Rate
                </p>
                <h2 className="mb-1 text-green-500 text-sm font-semibold">
                  567k
                </h2>
                <span className="flex">
                  <span>+12.85%</span>
                  <span className="text-xs">then last week</span>
                </span>
              </div>

              <div>
                <MiniLineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex border-gray-400">
        <div className=" h-[400px] rounded-2xl w-[790px] border-gray-400">
          <FeaturedCampaigns />
        </div>

        <div className="m-5 divide-y w-[390px] ">
          <div className="bg-white p-6 rounded-2xl border-gray-400 shadow-sm  ">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg text-gray-800">
                Top Traffic Source
              </h2>

              {/* <button className="text-gray-500 hover:text-gray-700 text-xl px-2 py-1 rounded-lg hover:bg-gray-300">
                
              </button> */}
            </div>
            {trafficSources.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-5"
              >
                {/* Left */}
                <div className="flex items-center gap-3">
                  <Image
                    src={united}
                    alt={item.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-800 font-medium">{item.name}</span>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 w-40">
                  <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full rounded-full bg-blue-600"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  <span className="font-semibold text-gray-700 text-sm">
                    {item.percent}%
                  </span>
                </div>
              </div>
            ))}
           
            {/* View All */}
            <button className="w-full mt-6 py-3 bg-white border rounded-xl text-gray-700 font-semibold hover:bg-gray-100 transition">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
 {/* Google */}
            {/* <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <Image src={united} className="w-8 h-8 rounded-full" alt="h" />
                <span className="text-gray-800 font-medium">Google</span>
              </div>

              <div className="flex items-center gap-3 w-40">
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-blue-600"
                    style={{ width: "79%" }}
                  ></div>
                </div>
                <span className="font-semibold text-gray-700 text-sm">79%</span>
              </div>
            </div> */}

            {/* YouTube */}
            {/* <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <Image src={united} alt="h" className="w-8 h-8 rounded-full" />
                <span className="text-gray-800 font-medium">Youtube</span>
              </div>

              <div className="flex items-center gap-3 w-40">
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-blue-600"
                    style={{ width: "55%" }}
                  ></div>
                </div>
                <span className="font-semibold text-gray-700 text-sm">55%</span>
              </div>
            </div> */}

            {/* Facebook */}
            {/* <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <Image src={united} className="w-8 h-8" alt="h" />
                <span className="text-gray-800 font-medium">Facebook</span>
              </div>

              <div className="flex items-center gap-3 w-40">
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-blue-600"
                    style={{ width: "48%" }}
                  ></div>
                </div>
                <span className="font-semibold text-gray-700 text-sm">48%</span>
              </div>
            </div> */}

            {/* Instagram */}
            {/* <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src={united} className="w-8 h-8" alt="h" />
                <span className="text-gray-800 font-medium">Instagram</span>
              </div>

              <div className="flex items-center gap-3 w-40">
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-blue-600"
                    style={{ width: "48%" }}
                  ></div>
                </div>
                <span className="font-semibold text-gray-700 text-sm">48%</span>
              </div>
            </div> */}
