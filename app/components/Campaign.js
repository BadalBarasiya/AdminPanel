"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import united from "@/app/assets/united.jpeg";

const campaigns = [
  {
    id: 1,
    name: "Wilson Gouse",
    icon: "/icons/slack.png",
    title: "Grow your brand by...",
    subtitle: "Ads campaign",
    status: "Success",
  },
  {
    id: 2,
    name: "Wilson Gouse",
    icon: "/icons/facebook.png",
    title: "Make Better Ideas...",
    subtitle: "Ads campaign",
    status: "Pending",
  },
  {
    id: 3,
    name: "Wilson Gouse",
    icon: "/icons/google-ads.png",
    title: "Increase your website tra...",
    subtitle: "Ads campaign",
    status: "Success",
  },
  {
    id: 4,
    name: "Wilson Gouse",
    icon: "/icons/slack.png",
    title: "Grow your brand by...",
    subtitle: "Ads campaign",
    status: "Success",
  },
  {
    id: 5,
    name: "Wilson Gouse   ",
    icon: "/icons/slack.png",
    title: "Grow your brand by...",
    subtitle: "Ads campaign",
    status: "Success",
  },
  {
    id: 6,
    name: "Wilson Gouse",
    icon: "/icons/slack.png",
    title: "Grow your brand by...",
    subtitle: "Ads campaign",
    status: "Success",
  },


];

export default function FeaturedCampaigns() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white p-6  rounded-2xl border-gray-300 border relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 relative">
        <h2 className="font-semibold text-lg text-gray-800">
          Featured Campaigns
        </h2>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-500 hover:text-gray-700 text-sm px-2 py-1 rounded-lg hover:bg-gray-100"
          >
            ⋮
          </button>

          {/* Dropdown */}
          {open && (
            <div
              className="absolute right-0 top-8 w-40 bg-white border shadow-lg rounded-xl py-2 animate-fade"
            >
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">
                View Details
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">
                Edit Campaign
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 text-xs font-medium text-gray-500 border-b  pb-1">
        <p>Products</p>
        <p>Campaign</p>
        <p className="text-right pr-6">Status</p>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-gray-400 ">
        {campaigns.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3  items-center hover:bg-gray-50 transition"
          >
            {/* Product */}
            <div className="flex items-center gap-2 py-3">
              <Image
                src={united}
                alt={item.name}
                
                className="rounded-full object-cover w-8 h-8"
              />
              <span className="font-medium text-gray-700 text-xs">{item.name}</span>
            </div>

            {/* Campaign */}
            <div className="flex items-center gap-2">
              <Image src={united} alt="" className="w-8 h-8 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800 text-xs">{item.title}</p>
                <p className="text-gray-400 text-xs">{item.subtitle}</p>
              </div>
            </div>

            {/* Status */}
            <div className="text-right pr-6">
              <span
                className={`px-3 py-1 text-xs rounded-full font-medium
                  ${
                    item.status === "Success"
                      ? "bg-green-100 text-green-600"
                      : item.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }
                `}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Animation CSS */}
      <style>
     
      </style>
    </div>
  );
}
