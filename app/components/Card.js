// "use client";

// export default function Card({ title, value, percent, subtitle }) {
//   return (
//     <div className="bg-white border-gray-200  rounded-xl  border p-4  flex flex-col gap-3">
//       <h3 className="text-gray-600 font-medium text-sm">{title}</h3>

//       <div className="flex items-end justify-between">
//         <div className=" font-bold text-gray-900">
//           <h4 className="text-2xl">{value}</h4>
//         </div>

//         <div className="flex items-end justify-end gap-2">
//           <span className="bg-green-100 text-green-600 px-2 text-xs rounded-full font-semibold">
//             {percent}
//           </span>
//           <span className="text-gray-500 text-sm">{subtitle}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// export default function Card({
//   title,
//   value,
//   percent,
//   subtitle,
//   icon,
//   children,
//   className = "",
// }) {
//   return (
//     <div className={`bg-white border border-gray-200 rounded-xl p-5 ${className}`}>
//       {/* If icon is there */}
//       {icon && (
//         <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
//           {icon}
//         </div>
//       )}

//       {children ? (
//         <div>{children}</div>
//       ) : (
//         <>
//           {/* old card */}
//           <h3 className="text-gray-600 font-medium text-sm">{title}</h3>

//           <div className="flex items-end justify-between mt-2">
//             <h4 className="text-2xl font-bold text-gray-900">{value}</h4>

//             <div className="flex items-center gap-2">
//               <span className="bg-green-100 text-green-600 px-2 text-xs rounded-full font-semibold">
//                 {percent}
//               </span>
//               <span className="text-gray-500 text-sm">{subtitle}</span>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

"use client";

import  Image  from "next/image";
import { FiArrowUp } from "react-icons/fi";

export default function Card({
  title,
  value,
  percent,
  subtitle,
  icon,
  children,
  variant = "default",
  className = "",
  company,
  price,
  logo,
  companySub,
}) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm ${className}`}
    >
      {/* ICON (works in all variants if passed) */}
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
          {icon}
        </div>
      )}

      {/* 1️ Custom content using children */}
      {children && <div>{children}</div>}

      {/* 2️ Default old card */}
      {variant === "default" && !children && (
        <>
          <h3 className="text-gray-600 font-medium text-sm">{title}</h3>

          <div className="flex items-end justify-between mt-2">
            <h4 className="text-2xl font-bold text-gray-900">{value}</h4>

            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-600 px-2 text-xs rounded-full font-semibold">
                {percent}
              </span>
              <span className="text-gray-500 text-sm">{subtitle}</span>
            </div>
          </div>
        </>
      )}

      {/* 3️ NEW Variation → (Big value + subtitle under + percent on right) */}
      {variant === "stats" && (
        <>
          {/* BIG VALUE */}
          <h4 className="text-4xl font-bold text-gray-900 leading-tight">
            {value}
          </h4>

          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-600 text-base font-medium">{title}</span>

            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-600 px-3 py-0.5 text-xs rounded-full font-semibold">
                {percent}
              </span>
              <span className="text-gray-500 text-sm">{subtitle}</span>
            </div>
          </div>
        </>
      )}

      {variant === "stock" && (
        <>
        <div className="">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center">
              <Image src={logo} alt={company} width={50} height={50} />
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">{company}</h3>
              <p className="text-sm text-gray-500">{companySub}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-6">
            <h2 className="text-xl font-bold text-gray-900">{price}</h2>

            <span className="flex items-center gap-1 bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full">
              <FiArrowUp/> {percent}
            </span>
          </div>
          </div>
        </>
      )}
    </div>
  );
}
