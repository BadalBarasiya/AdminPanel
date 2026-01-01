// "use client";

// import Image from "next/image";
// import { FiMoreVertical, FiArrowUp, FiArrowDown } from "react-icons/fi";

// export default function Watchlist({ data }) {
//     const watchlist = [
//     {
//       id: 1,
//       symbol: "AAPL",
//       company: "Apple, Inc",
//       price: "4,008.65",
//       change: "11.01%",
//       isUp: true,
//       logo: apple,
//       bg: "#1f2937",
//     },
//     {
//       id: 2,
//       symbol: "SPOT",
//       company: "Spotify.com",
//       price: "11,689.00",
//       change: "9.48%",
//       isUp: true,
//       logo: spotify,
//       bg: "#22c55e",
//     },
//     {
//       id: 3,
//       symbol: "ABNB",
//       company: "Airbnb, Inc",
//       price: "32,227.00",
//       change: "0.29%",
//       isUp: false,
//       logo: airbnb,
//       bg: "#f87171",
//     },
//     {
//       id: 4,
//       symbol: "ENVT",
//       company: "Envato, Inc",
//       price: "13,895.00",
//       change: "3.79%",
//       isUp: true,
//       logo: envato,
//       bg: "#84cc16",
//     },
//     {
//       id: 5,
//       symbol: "QIWI",
//       company: "qiwi.com, Inc",
//       price: "4,008.65",
//       change: "4.52%",
//       isUp: false,
//       logo: qiwi,
//       bg: "#f97316",
//     },
//   ];
//   return (
//     <div className="w-[360px] bg-white rounded-2xl border border-gray-200 p-4">
      
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold text-gray-900">
//           My Watchlist
//         </h2>
//         <FiMoreVertical className="text-gray-500" />
//       </div>

//       {/* List */}
//       <div className="max-h-[420px] overflow-y-auto divide-y divide-gray-200 pr-2">
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between py-4"
//           >
//             {/* Left */}
//             <div className="flex items-center gap-3">
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center`}
//                 style={{ backgroundColor: item.bg }}
//               >
//                 <Image
//                   src={item.logo}
//                   alt={item.symbol}
//                   width={22}
//                   height={22}
//                   className="object-contain"
//                 />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-gray-900">
//                   {item.symbol}
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                   {item.company}
//                 </p>
//               </div>
//             </div>

//             {/* Right */}
//             <div className="text-right">
//               <h4 className="font-semibold text-gray-900">
//                 ${item.price}
//               </h4>
//               <div
//                 className={`flex items-center justify-end gap-1 text-sm font-medium ${
//                   item.isUp ? "text-green-600" : "text-red-500"
//                 }`}
//               >
//                 {item.isUp ? <FiArrowUp /> : <FiArrowDown />}
//                 {item.change}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { FiMoreVertical, FiArrowUp, FiArrowDown } from "react-icons/fi";

// local images
import paypal from "@/app/assets/paypal.svg";


export default function Watchlist() {
  const watchlist = [
    {
      id: 1,
      symbol: "AAPL",
      company: "Apple, Inc",
      price: "4,008.65",
      change: "11.01%",
      isUp: true,
      logo: paypal,
      bg: "#1f2937",
    },
    {
      id: 2,
      symbol: "SPOT",
      company: "Spotify.com",
      price: "11,689.00",
      change: "9.48%",
      isUp: true,
      logo: paypal,
      bg: "#22c55e",
    },
    {
      id: 3,
      symbol: "ABNB",
      company: "Airbnb, Inc",
      price: "32,227.00",
      change: "0.29%",
      isUp: false,
      logo: paypal,
      bg: "#f87171",
    },
    {
      id: 4,
      symbol: "ENVT",
      company: "Envato, Inc",
      price: "13,895.00",
      change: "3.79%",
      isUp: true,
      logo: paypal,
      bg: "#84cc16",
    },
    {
      id: 5,
      symbol: "QIWI",
      company: "qiwi.com, Inc",
      price: "4,008.65",
      change: "4.52%",
      isUp: false,
      logo: paypal,
      bg: "#f97316",
    },
     {
      id: 6,
      symbol: "QIWI",
      company: "qiwi.com, Inc",
      price: "4,008.65",
      change: "4.52%",
      isUp: false,
      logo: paypal,
      bg: "#f97316",
    },
     {
      id: 4,
      symbol: "ENVT",
      company: "Envato, Inc",
      price: "13,895.00",
      change: "3.79%",
      isUp: true,
      logo: paypal,
      bg: "#84cc16",
    }

  ];

  return (
    <div className="w-[360px] bg-white rounded-2xl border border-gray-200 p-4 custom-scroll">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          My Watchlist
        </h2>
        <FiMoreVertical className="text-gray-500 hover:cursor-pointer" />
      </div>

      {/* List */}
      <div className="max-h-[380px] overflow-y-auto divide-y divide-gray-200 pr-2 custom-scroll">
        {watchlist.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-4"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: item.bg }}
              >
                <Image
                  src={item.logo}
                  alt={item.symbol}
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  {item.symbol}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.company}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="text-right">
              <h4 className="font-semibold text-gray-900">
                ${item.price}
              </h4>
              <div
                className={`flex items-center justify-end gap-1 text-sm font-medium ${
                  item.isUp ? "text-green-600" : "text-red-500"
                }`}
              >
                {item.isUp ? <FiArrowUp /> : <FiArrowDown />}
                {item.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
