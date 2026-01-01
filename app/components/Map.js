"use client";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import WorldMap from "react-svg-worldmap";
import Image from "next/image";
import united from "@/app/assets/united.jpeg";

export default function Map() {
  const data = [
    { country: "us", value: 2379 },
    { country: "fr", value: 589 },
    { country: "in", value: 1200 },
    { country: "au", value: 900 },
    { country: "gr", value: 901 },
  ];

  return (
    <div className="bg-white rounded-3xl    p-6 border border-gray-200">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold">Customers Demographic</h2>
          <p className="text-gray-500 text-sm">
            Number of customers based on country
          </p>
        </div>

        <div className="text-gray-400 cursor-pointer "><BsThreeDotsVertical/>
        </div>
      </div>

      <div className=" relative my-5 border-gray-200 overflow-hidden h-55  border rounded-2xl p-2">
        <WorldMap
              style={{ width: "100%", height: "100%" }}

        className="w-full"
          color="#3b82f6"
          valueSaturation={1}
          size="responsive"
          data={data}
        />
      </div>

      {/* <div className="space-y-6">
        <div className="flex items-center gap-4">
          <GiDonkey size={20} />{" "}
          <div className="flex-1">
            <h4 className="font-semibold text-sm text-gray-700">USA</h4>
            <p className="text-gray-500 text-xs">2,379 Customers</p>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div
                className="bg-blue-600 h-2  rounded-full"
                style={{ width: "79%" }}
              ></div>
            </div>
          </div>
          <span className="text-gray-700 font-semibold">79%</span>
        </div>

        <div className="flex items-center gap-2">
          <GiPig />
          <div className="flex-1">
            <h4 className="font-semibold text-sm text-gray-700">France</h4>
            <p className="text-gray-500 text-xs">589 Customers</p>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "23%" }}
              ></div>
            </div>
          </div>
          <span className="text-gray-700 font-semibold">23%</span>
        </div>
      </div> */}




       <div className="flex items-center justify-between w-full py-">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <Image
        src={united} 
          alt="USA"
          
          className="rounded-full h-10 w-10 "
        />

        {/* Country + Customers */}
        <div>
          <p className="text-sm font-semibold text-gray-800">Usa</p>
          <p className="text-xs text-gray-500">2,379 Customers</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 w-40">
        {/* Progress Bar Background */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          {/* Actual Progress */}
          <div className="h-full bg-blue-500 rounded-full" style={{ width: "79%" }}></div>
        </div>

        {/* Percentage */}
        <span className="text-sm font-semibold text-gray-800">79%</span>
      </div>
    </div>

     <div className="flex items-center justify-between w-full py-3">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Flag */}
        <Image
        src={united}
          alt="USA"
         
          className="rounded-full w-10 h-10"
        />
        {/* Country + Customers */}
        <div>
          <p className="text-sm font-semibold text-gray-800">France</p>
          <p className="text-xs text-gray-500">2,379 Customers</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 w-40">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full" style={{ width: "32%" }}></div>
        </div>

        <span className="text-sm font-semibold text-gray-800">32%</span>
      </div>
    </div>
    </div>
  );
}
