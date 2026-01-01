"use client";
import Image from "next/image";
import { useRef } from "react";
import brand from "@/app/assets/brand.svg";
import paypal from "@/app/assets/paypal.svg";
import amazon from "@/app/assets/amazon.svg";
import tesla from "@/app/assets/tesla.svg";

import { FiArrowLeft, FiArrowRight, FiArrowUp } from "react-icons/fi";

export default function Carousel() {
  const carouselRef = useRef(null);

  const scroll = (dir) => {
    const el = carouselRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "next" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      <h2 className="text-xl font-semibold  p-2  ">Trending Stocks</h2>
      {/* Prev */}
      <button
        onClick={() => scroll("prev")}
        className="absolute left-1/2 top-2 translate-y-0  z-10 bg-red-400 shadow-md rounded-full w-10 h-10 flex items-center justify-center"
      >
        <FiArrowLeft />
      </button>

      {/* Next */}
      <button
        onClick={() => scroll("next")}
        className="absolute right-1/3 top-3 -translate-y-1 z-10 bg-red-400 shadow-md rounded-full w-10 h-10 flex items-center justify-center"
      >
        <FiArrowRight />
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-14 py-4 scrollbar-hide"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="min-w-[310px] h-45 rounded-xl text-black p-2 text-lg font-semibold bg-gray-100 divide-y divide-gray-400 space-y-3"
          >
            <div className="flex justify-between gap-3">
              <div className="flex  items-center">
                <div className="w-10 h-10 rounded-full  flex items-center justify-center">
                  <Image src={item.image} alt="" />
                </div>

                <div className="p-2">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.subtitle}</p>
                </div>
              </div>

              <div className=" items-center gap- m-2 ">
                <h3 className="font-semibold text-gray-800 text-xl">$192.53</h3>
                <span className="flex  text-green-600 rounded-full font-semibold text-xs">
                  <FiArrowUp />
                  12.3%
                </span>
              </div>
            </div>
            <div className="flex  justify-around mt-5 h-14">
              <button className=" border border-gray-400  rounded-xl text-sm p-2 bg-white text-black">
                Short Stock
              </button>
              <button className="border  bg-blue-600 p-2 rounded-xl text-sm border-gray-600 ">
                Buy Stock
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  { id: 1, title: "TESLA", subtitle: "Tesla inc", image: tesla },
  { id: 2, title: "APPLE", subtitle: "Apple inc", image: brand },
  { id: 3, title: "SPOT", subtitle: "Spot inc", image: paypal },
  { id: 4, title: "PYPL", subtitle: "Pypl inc", image: tesla },
  { id: 5, title: "AMZN", subtitle: "Amazone inc", image: amazon },
];
