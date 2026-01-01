// "use client";
// import React from "react";
// import { BsMoon} from "react-icons/bs";
// import { FiBell, FiChevronDown, FiSearch } from "react-icons/fi";
// import { AiOutlineAlignLeft } from "react-icons/ai";
// import Image from "next/image";
// import logo from "@/app/assets/owner.webp";
// import { BiCommand } from "react-icons/bi";

// export default  function Header() {
//   return (
//     <div className="ml-10">
//       <header className="fixed top-0  left-72 right-0 h-20 bg-white border-gray-200 border-b border-l border-r px-6 flex items-center justify-between z-40">
//         {/* LEFT SECTION */}
//         <div className="flex items-center gap-4">
//           <button  className="p-3 border rounded-xl hover:bg-gray-100 border-gray-200">
//             <AiOutlineAlignLeft size={20} className="text-gray-600" />
//           </button>

//           <div className="flex items-center border rounded-xl px-4 py-2  border-gray-200 w-96 bg-white ">
//             <FiSearch className="text-gray-400 mr-3" size={18} />
//             <input
//               type="text"
//               placeholder="Search or type command..."
//               className="w-full h-8 text-sm bg-white border-gray-200"
//             />
//             <span className="px-2 py-1 border rounded-md text-xs text-gray-500">
//               <BiCommand />
//             </span>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="flex items-center gap-6">
//           <button className="p-3 border rounded-full hover:bg-gray-200 border-gray-200">
//             <BsMoon className="text-gray-600" size={18} />
//           </button>

//           <div className="relative">
//             <button className="p-3 border rounded-full hover:bg-gray-200 border-gray-200">
//               <FiBell className="text-gray-600" size={18} />
//             </button>
//             <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
//           </div>

//           <div className="flex items-center gap-3 cursor-pointer">
//             <Image src={logo} className="w-10 h-10 rounded-full" alt="user" />
//             <span className="font-medium text-gray-700">Musharof</span>
//             <FiChevronDown size={18} className="text-gray-600" />
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }



"use client";
import React from "react";
import { BsMoon } from "react-icons/bs";
import { FiBell, FiChevronDown, FiSearch } from "react-icons/fi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import Image from "next/image";
import logo from "@/app/assets/owner.webp";
import { BiCommand } from "react-icons/bi";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 md:left-72 right-0 h-20 bg-white border-gray-200 border-b border-l border-r px-6 flex items-center justify-between z-40">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        <button className="p-3 border rounded-xl hover:bg-gray-100 border-gray-200 transition-colors">
          <AiOutlineAlignLeft size={20} className="text-gray-600" />
        </button>

        <div className="hidden md:flex items-center border rounded-xl px-4 py-2 border-gray-200 w-96 bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
          <FiSearch className="text-gray-400 mr-3" size={18} />
          <input
            type="text"
            placeholder="Search or type command..."
            className="w-full h-8 text-sm bg-transparent outline-none border-none focus:outline-none"
          />
          <span className="px-2 py-1 border rounded-md text-xs text-gray-500 flex items-center">
            <BiCommand />
          </span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3 md:gap-6">
        <button className="p-3 border rounded-full hover:bg-gray-100 border-gray-200 transition-colors">
          <BsMoon className="text-gray-600" size={18} />
        </button>

        <div className="relative">
          <button className="p-3 border rounded-full hover:bg-gray-100 border-gray-200 transition-colors">
            <FiBell className="text-gray-600" size={18} />
          </button>
          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <Image 
            src={logo} 
            className="w-10 h-10 rounded-full object-cover" 
            alt="user" 
            width={40}
            height={40}
          />
          <span className="hidden md:block font-medium text-gray-700">Musharof</span>
          <FiChevronDown size={18} className="text-gray-600" />
        </div>
      </div>
    </header>
  );
}




// "use client";
// import React from "react";
// import { BsMoon } from "react-icons/bs";
// import { FiBell, FiChevronDown, FiSearch } from "react-icons/fi";
// import { AiOutlineAlignLeft } from "react-icons/ai";
// import { HiMenuAlt2 } from "react-icons/hi";
// import Image from "next/image";
// import logo from "@/app/assets/owner.webp";
// import { BiCommand } from "react-icons/bi";

// export default function Header({ sidebarOpen, setSidebarOpen }) {
//   return (
//     <header className={`fixed top-0 right-0 h-20 bg-white border-gray-200 border-b border-l border-r px-6 flex items-center justify-between z-40 transition-all duration-300 ${
//       sidebarOpen ? "left-72" : "left-0"
//     }`}>
//       {/* LEFT SECTION */}
//       <div className="flex items-center gap-4">
//         {/* SIDEBAR TOGGLE BUTTON */}
//         <button 
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="p-3 border rounded-xl hover:bg-gray-100 border-gray-200 transition-colors"
//           aria-label="Toggle Sidebar"
//         >
//           {sidebarOpen ? (
//             <AiOutlineAlignLeft size={20} className="text-gray-600" />
//           ) : (
//             <HiMenuAlt2 size={20} className="text-gray-600" />
//           )}
//         </button>

//         <div className="hidden md:flex items-center border rounded-xl px-4 py-2 border-gray-200 w-96 bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
//           <FiSearch className="text-gray-400 mr-3" size={18} />
//           <input
//             type="text"
//             placeholder="Search or type command..."
//             className="w-full h-8 text-sm bg-transparent outline-none border-none focus:outline-none"
//           />
//           <span className="px-2 py-1 border rounded-md text-xs text-gray-500 flex items-center">
//             <BiCommand />
//           </span>
//         </div>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="flex items-center gap-3 md:gap-6">
//         <button className="p-3 border rounded-full hover:bg-gray-100 border-gray-200 transition-colors">
//           <BsMoon className="text-gray-600" size={18} />
//         </button>

//         <div className="relative">
//           <button className="p-3 border rounded-full hover:bg-gray-100 border-gray-200 transition-colors">
//             <FiBell className="text-gray-600" size={18} />
//           </button>
//           <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
//         </div>

//         <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
//           <Image 
//             src={logo} 
//             className="w-10 h-10 rounded-full object-cover" 
//             alt="user" 
//             width={40}
//             height={40}
//           />
//           <span className="hidden md:block font-medium text-gray-700">Musharof</span>
//           <FiChevronDown size={18} className="text-gray-600" />
//         </div>
//       </div>
//     </header>
//   );
// }
