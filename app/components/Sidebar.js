// "use client";
// import { useState } from "react";
// import { FiVoicemail } from "react-icons/fi";
// import { GrRobot } from "react-icons/gr";
// import logo from "@/app/assets/logo.svg";
// import {
//   SiElement,
//   SiGoogleauthenticator,
//   SiGoogleforms,
// } from "react-icons/si";
// import Image from "next/image";
// import {
//   BiCalendar,
//   BiChat,
//   BiFirstPage,
//   BiShoppingBag,
//   BiSolidChart,
//   BiSupport,
//   BiTable,
//   BiTask,
// } from "react-icons/bi";
// import { CgProfile } from "react-icons/cg";
// import { FiChevronDown } from "react-icons/fi";
// import Link from "next/link";
// import { RxDashboard } from "react-icons/rx";

// export default function Sidebar() {
//   const [expanded, setExpanded] = useState(false);
//   const [openDashboard, setOpenDashboard] = useState(false);
//   const [openAssistant, setOpenAssistant] = useState(false);
//   const [openEcommerce, setOpenEcommerce] = useState(false);
//   const [openTask, setOpenTask] = useState(false);
//   const [openForms, setOpenForms] = useState(false);
//   const [openTable, setOpenTable] = useState(false);
//   const [openPage, setOpenPage] = useState(false);
//   const [openSupport, setOpenSupport] = useState(false);
//   const [openEmail, setOpenEmail] = useState(false);
//   const [openChart, setOpenChart] = useState(false);
//   const [openElement, setOpenElement] = useState(false);
//   const [openAuthentication, setOpenAuthentication] = useState(false);
//   const [active, setActive] = useState("");

//   const handleActive = (id) => setActive(id);

//   const activeClass = (id) =>
//     active === id ? "text-blue-600 font-semibold" : "text-gray-600";

//   const activeSubClass = (id) =>
//     active === id
//       ? "text-blue-600 font-semibold bg-blue-50 rounded-md px-2 py-1"
//       : "text-gray-600";

//   return (
//     <aside className="w-[290px]  bg-white border-r h-full fixed  pl-5 pr-5  overflow-y-auto border-gray-200  transition-all duration-300 ease-in-out ">
//       <div className=" fixed py-4 flex justify-start z-20 bg-amber-50 w-[250px] ">
//         <Image src={logo} alt="photo" className=" " />
//       </div>

//       <div className="mt-20">
//         <h2 className="flex ml-auto text-gray-400 text-xs uppercase">Menu</h2>
//         <ul className="mt-5 space-y-4 overflow-y-auto h-full ml-5 ">
//           {/* Dashboard dropdown */}
//           <li>
//             <button
//               onClick={() => {
//                 setOpenDashboard(!openDashboard);
//                 handleActive("dashboard");
//               }}
//               className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer"
//             >
//               <span
//                 className={`flex items-center gap-3 text-sm ${activeClass(
//                   "dashboard"
//                 )}`}
//               >
//                 <RxDashboard size={20} /> Dashboard
//               </span>
//               <FiChevronDown
//                 className={`transition-transform ${
//                   openDashboard ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Items */}
//             {openDashboard && (
//               <ul className="ml-8 mt-4  space-y-4 text-sm text-gray-500">
//                 <li className="text-gray-600 font-semibold hover:text-blue-600 cursor-pointer ">
//                   {/* Ecommerce */}
//                   <Link
//                     href="/ecommerce"
//                     className={activeSubClass("ecommerce")}
//                     onClick={() => handleActive("ecommerce")}
//                   >
//                     Ecommerce
//                   </Link>
//                 </li>
//                 <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold active:to-blue-800">
//                   {/* Analytics */}
//                   <Link
//                     href="/analytics"
//                     className={activeSubClass("analytics")}
//                     onClick={() => handleActive("analytics")}
//                   >
//                     Analytics
//                   </Link>
//                 </li>
//                 <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold">
//                   <Link
//                     href="/marketing"
//                     onClick={() => handleActive("marketing")}
//                     className={activeClass("maeketing")}
//                   >
//                     Marketing
//                   </Link>
//                 </li>
//                 <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold">
//                   <Link href="/crm" onClick={() => handleActive("crm")}>
//                     Crm
//                   </Link>
//                 </li>
//                 <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold">
//                   <Link href="/stocks">Stocks</Link>
//                 </li>
//                 <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold">
//                   <Link href="/saas">Saas</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           {/* Assistant */}
//           <li>
//             <button
//               onClick={() => {
//                 setOpenAssistant(!openAssistant);
//                 handleActive("assistant");
//               }}
//               className="flex items-center justify-between w-full text-gray-600 font-semibold  hover:text-blue-600 cursor-pointer"
//             >
//               <span className="flex items-center gap-2">
//                 <GrRobot size={20} /> Ai Assistant
//               </span>
//               <FiChevronDown
//                 className={`transition-transform ${
//                   openAssistant ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//             {/* Dropdown Items */}
//             {openAssistant && (
//               <ul className="ml-8 mt-3 space-y-4 text-sm text-gray-500">
//                 <li className="text-gray-600 hover:text-black-200 cursor-pointer font-semibold">
//                   Text Generator
//                 </li>
//                 <li className="text-gray-600 hover:text-black-200 cursor-pointer font-semibold ">
//                   Image Generator
//                 </li>
//                 <li className="text-gray-600 hover:text-black-200 cursor-pointer font-semibold">
//                   Code Generator
//                 </li>
//                 <li className="text-gray-600 hover:text-black-200 cursor-pointer font-semibold">
//                   Video Generator
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Ecoomerce */}
//           <li>
//             <button
//               onClick={() => {
//                 setOpenEcommerce(!openEcommerce);
//                 handleActive(ecommerce);
//               }}
//               className={`flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer${activeClass(
//                 "ecommerce"
//               )}`}
//             >
//               <span
//                 className={`flex items-center gap-3 ${activeClass(
//                   "ecommerce"
//                 )}`}
//               >
//                 <BiShoppingBag size={20} /> Ecommerce
//               </span>
//               <FiChevronDown
//                 className={`transition-transform ${
//                   openEcommerce ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Items */}
//             {openEcommerce && (
//               <ul className="ml-8 mt-3 space-y-4 text-sm text-gray-500">
//                 <li className=" text-gray-600  cursor-pointer font-semibold">
//                   Products
//                 </li>
//                 <li className=" text-gray-600 hover:text-black-200 cursor-pointer font-semibold">
//                   Add Products
//                 </li>
//                 <li className=" text-gray-600 hover:text-black-200 cursor-pointer font-semibold">
//                   Invoices
//                 </li>
//                 <li className="text-gray-600 hover:text-black-200 cursor-pointer font-semibold">
//                   Single Invoices
//                 </li>
//                 <li className="text-gray-600 hover:text-black-200 cursor-pointer font-semibold">
//                   Create Invoices
//                 </li>
//                 <li className="text-gray-600 hover:text-black-200 cursor-pointer font-semibold">
//                   Transactions
//                 </li>
//                 <li className="text-gray-600 hover:text-black-200 cursor-pointer font-semibold  ">
//                   Single Transactions
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li className="flex items-center gap-3 text-gray-600 font-semibold hover:text-blue-600 cursor-pointer">
//             <BiCalendar /> <Link href="/calendar">Calendar</Link>
//           </li>
//           <li className="flex items-center gap-3 text-gray-600 font-semibold hover:text-blue-600 cursor-pointer">
//             <CgProfile />
//             <Link href="/userprofile">User Profile</Link>
//           </li>

//           {/* Task */}
//           <li>
//             <button
//               onClick={() => {
//                 setOpenTask(!openTask);
//                 handleActive("task");
//               }}
//               className={`flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer ${activeClass(
//                 "task"
//               )}`}
//             >
//               <span className="flex items-center gap-3 font-semibold">
//                 <BiTask /> Task
//               </span>
//               <FiChevronDown
//                 className={`transition-transform ${
//                   openTask ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Items */}
//             {openTask && (
//               <ul className="ml-8 mt-3 space-y-4 text-sm text-gray-600 font-semibold">
//                 <li className=" text-gray-600 hover:text-black-200 cursor-pointer">
//                   List
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer">Kanban</li>
//               </ul>
//             )}
//           </li>

//           {/* Forms */}
//           <li>
//             <button
//               onClick={() => setOpenForms(!openForms)}
//               className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer"
//             >
//               <span className="flex items-center gap-3">
//                 <SiGoogleforms /> Forms
//               </span>
//               <FiChevronDown
//                 className={`transition-transform ${
//                   openForms ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Items */}
//             {openForms && (
//               <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-500">
//                 <li className=" text-gray-600 font-semibold hover:text-black-200 cursor-pointer">
//                   Forms Elements
//                 </li>
//                 <li className=" text-gray-600 font-semibold hover:text-black-200 cursor-pointer">
//                   Forms Layout
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Tables */}

//           <li>
//             <button
//               onClick={() => setOpenTable(!openTable)}
//               className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer"
//             >
//               <span className="flex items-center gap-3">
//                 <BiTable size={20} /> Tables
//               </span>
//               <FiChevronDown
//                 className={`transition-transform ${
//                   openTable ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Items */}
//             {openTable && (
//               <ul className="ml-8 mt-3 space-y-4 text-sm text-gray-500">
//                 <li className=" text-gray-600 font-semibold hover:text-black-200 cursor-pointer">
//                   Basic Table
//                 </li>
//                 <li className=" text-gray-600 font-semibold hover:text-black-200 cursor-pointer">
//                   Data Table
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Pages */}
//           <li>
//             <button
//               onClick={() => setOpenPage(!openPage)}
//               className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer"
//             >
//               <span className="flex items-center gap-3">
//                 <BiFirstPage size={20} /> Pages
//               </span>
//               <FiChevronDown
//                 className={`transition-transform ${
//                   openPage ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Items */}
//             {openPage && (
//               <ul className="ml-8 mt-3 space-y-4 text-sm text-gray-500">
//                 <li className=" text-gray-600 font-semibold hover:text-black-200 cursor-pointer">
//                   File Manager
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Pricing Tables
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer font-semibold text-gray-600">
//                   FAQ
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer  text-gray-600 font-semibold">
//                   API Keys
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer font-semibold text-gray-600">
//                   Integrations
//                 </li>
//                 <li className=" font-semibold text-gray-600 hover:text-black-200 cursor-pointer">
//                   Blank Page
//                 </li>
//                 <li className=" font-semibold text-gray-600 hover:text-black-200 cursor-pointer">
//                   404 Error
//                 </li>
//                 <li className=" font-semibold text-gray-600 hover:text-black-200 cursor-pointer">
//                   500 Error
//                 </li>
//                 <li className=" font-semibold text-gray-600 hover:text-black-200 cursor-pointer">
//                   Coming Soon
//                 </li>
//                 <li className=" font-semibold text-gray-600 hover:text-black-200 cursor-pointer">
//                   Maintenance
//                 </li>
//                 <li className=" font-semibold text-gray-600 hover:text-black-200 cursor-pointer">
//                   Success
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>

//       <div className="my-1">
//         <h2 className="flex ml-auto text-gray-400 text-xs uppercase p-1 justify-start">
//           Support
//         </h2>
//         <ul className=" space-y-4 ml-5">
//           <li className="flex items-center gap-3 text-gray-600 font-semibold hover:text-blue-600 cursor-pointer">
//             <BiChat size={20} /> Chat
//           </li>

//           {/* Support */}

//           <li>
//             <button
//               onClick={() => setOpenSupport(!openSupport)}
//               className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer"
//             >
//               <span className="flex items-center gap-3">
//                 <BiSupport /> Support
//               </span>
//               <FiChevronDown
//                 className={`transition-transform ${
//                   openSupport ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Items */}
//             {openSupport && (
//               <ul className="ml-8 mt-3 space-y-4 text-sm text-gray-500">
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Support List
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Support Reply
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Email */}

//           <li>
//             <button
//               onClick={() => setOpenEmail(!openEmail)}
//               className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer"
//             >
//               <span className="flex items-center gap-3 text-gray-600 font-semibold">
//                 <FiVoicemail size={20} /> Email
//               </span>
//               <FiChevronDown
//                 className={`transition-transform ${
//                   openEmail ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Items */}
//             {openEmail && (
//               <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-500">
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Inbox
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Details
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>

//       <div>
//         <h2 className="flex ml-auto text-xs uppercase p-1 justify-start text-gray-600 font-semibold">
//           Others
//         </h2>
//         <ul className=" space-y-4 ml-5">
//           <li>
//             <button
//               onClick={() => setOpenChart(!openChart)}
//               className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer"
//             >
//               <span className="flex items-center gap-3">
//                 <BiSolidChart size={20} /> Chart
//               </span>
//               <FiChevronDown
//                 className={`transition-transform ${
//                   openChart ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Items */}
//             {openChart && (
//               <ul className="ml-8 mt-3 space-y-4 text-sm text-gray-500">
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Line Chart
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Pie Chart
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Bar Chart
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Elements */}

//           <li>
//             <button
//               onClick={() => setOpenElement(!openElement)}
//               className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer"
//             >
//               <span className="flex items-center gap-3">
//                 <SiElement size={20} /> Elements
//               </span>
//               <FiChevronDown
//                 className={`transition-transform ${
//                   openElement ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Items */}
//             {openElement && (
//               <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-500">
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Line Element
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Pie Element
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Bar Element
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Authentication */}

//           <li>
//             <button
//               onClick={() => setOpenAuthentication(!openAuthentication)}
//               className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer"
//             >
//               <span className="flex items-center gap-3">
//                 <SiGoogleauthenticator /> Authentication
//               </span>
//               <FiChevronDown
//                 className={`transition-transform ${
//                   openAuthentication ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Items */}
//             {openAuthentication && (
//               <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-500">
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Sign in
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Sign up
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer text-gray-600 font-semibold">
//                   Reset Password
//                 </li>
//                 <li className="hover:text-black-200 cursor-pointer ">
//                   Two Step Verification
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>
//       <div>
//         <div className=" mx-auto  rounded-2xl bg-gray-50 px-4 py-5 text-center">
//           <h3 className="mb-2 color:black  text-black">
//             #1 Tailwind CSS Dashboard
//           </h3>
//           <p className="mb-4 text-gray-500 text-theme-sm ">
//             Leading Tailwind CSS Admin Template with 400+ UI Component and
//             Pages.
//           </p>
//           <Link
//             href="https://tailadmin.com/pricing"
//             target="_blank"
//             rel="nofollow"
//             className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-blue-900"
//           >
//             Purchase Plan
//           </Link>
//         </div>
//       </div>
//     </aside>
//   );
// }



"use client";
import { useState } from "react";
import { FiVoicemail } from "react-icons/fi";
import { GrRobot } from "react-icons/gr";
import logo from "@/app/assets/logo.svg";
import {
  SiElement,
  SiGoogleauthenticator,
  SiGoogleforms,
} from "react-icons/si";
import Image from "next/image";
import {
  BiCalendar,
  BiChat,
  BiFirstPage,
  BiShoppingBag,
  BiSolidChart,
  BiSupport,
  BiTable,
  BiTask,
} from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";

export default function Sidebar() {
  const [openDashboard, setOpenDashboard] = useState(false);
  const [openAssistant, setOpenAssistant] = useState(false);
  const [openEcommerce, setOpenEcommerce] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const [openForms, setOpenForms] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [openPage, setOpenPage] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openChart, setOpenChart] = useState(false);
  const [openElement, setOpenElement] = useState(false);
  const [openAuthentication, setOpenAuthentication] = useState(false);
  const [active, setActive] = useState("");

  const handleActive = (id) => setActive(id);

  const activeClass = (id) =>
    active === id ? "text-blue-600 font-semibold" : "text-gray-600";

  const activeSubClass = (id) =>
    active === id
      ? "text-blue-600 font-semibold bg-blue-50 rounded-md px-2 py-1"
      : "text-gray-600";

  return (
    <aside className="w-72 bg-white border-r h-screen fixed left-0 top-0 overflow-y-auto border-gray-200 transition-all duration-300 ease-in-out">
      {/* Logo Section */}
      <div className="sticky top-0 z-20 bg-white py-4 px-5  border-gray-200">
        <Image src={logo} alt="logo" width={150} height={40} />
      </div>

      {/* Menu Section */}
      <div className="px-5 py-4">
        <h2 className="text-gray-400 text-xs uppercase mb-4">Menu</h2>
        <ul className="space-y-2">
          {/* Dashboard dropdown */}
          <li>
            <button
              onClick={() => {
                setOpenDashboard(!openDashboard);
                handleActive("dashboard");
              }}
              className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2"
            >
              <span
                className={`flex items-center gap-3 text-sm ${activeClass(
                  "dashboard"
                )}`}
              >
                <RxDashboard size={20} /> Dashboard
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openDashboard ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Items */}
            {openDashboard && (
              <ul className="ml-8 mt-2 space-y-2 text-sm">
                <li className="text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-1">
                  <Link
                    href="/ecommerce"
                    className={activeSubClass("ecommerce")}
                    onClick={() => handleActive("ecommerce")}
                  >
                    Ecommerce
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  <Link
                    href="/analytics"
                    className={activeSubClass("analytics")}
                    onClick={() => handleActive("analytics")}
                  >
                    Analytics
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  <Link
                    href="/marketing"
                    onClick={() => handleActive("marketing")}
                    className={activeSubClass("marketing")}
                  >
                    Marketing
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  <Link href="/crm" onClick={() => handleActive("crm")}>
                    CRM
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  <Link href="/stocks" onClick={() => handleActive("stocks")}>
                    Stocks
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  <Link href="/saas" onClick={() => handleActive("saas")}>
                    SaaS
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* AI Assistant */}
          <li>
            <button
              onClick={() => {
                setOpenAssistant(!openAssistant);
                handleActive("assistant");
              }}
              className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2"
            >
              <span className={`flex items-center gap-3 ${activeClass("assistant")}`}>
                <GrRobot size={20} /> AI Assistant
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openAssistant ? "rotate-180" : ""
                }`}
              />
            </button>

            {openAssistant && (
              <ul className="ml-8 mt-2 space-y-2 text-sm">
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  Text Generator
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  Image Generator
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  Code Generator
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  Video Generator
                </li>
              </ul>
            )}
          </li>

          {/* Ecommerce */}
          <li>
            <button
              onClick={() => {
                setOpenEcommerce(!openEcommerce);
                handleActive("ecommerce");
              }}
              className={`flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2 ${activeClass(
                "ecommerce"
              )}`}
            >
              <span
                className={`flex items-center gap-3 ${activeClass(
                  "ecommerce"
                )}`}
              >
                <BiShoppingBag size={20} /> Ecommerce
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openEcommerce ? "rotate-180" : ""
                }`}
              />
            </button>

            {openEcommerce && (
              <ul className="ml-8 mt-2 space-y-2 text-sm">
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  Products
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  Add Products
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  Invoices
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  Single Invoices
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  Create Invoices
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  Transactions
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer font-semibold py-1">
                  Single Transactions
                </li>
              </ul>
            )}
          </li>

          <li className="flex items-center gap-3 text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2">
            <BiCalendar size={20} />
            <Link href="/calendar">Calendar</Link>
          </li>

          <li className="flex items-center gap-3 text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2">
            <CgProfile size={20} />
            <Link href="/userprofile">User Profile</Link>
          </li>

          {/* Task */}
          <li>
            <button
              onClick={() => {
                setOpenTask(!openTask);
                handleActive("task");
              }}
              className={`flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2 ${activeClass(
                "task"
              )}`}
            >
              <span className="flex items-center gap-3 font-semibold">
                <BiTask size={20} /> Task
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openTask ? "rotate-180" : ""
                }`}
              />
            </button>

            {openTask && (
              <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-600 font-semibold">
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer py-1">
                  List
                </li>
                <li className="hover:text-blue-600 cursor-pointer py-1">
                  Kanban
                </li>
              </ul>
            )}
          </li>

          {/* Forms */}
          <li>
            <button
              onClick={() => setOpenForms(!openForms)}
              className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2"
            >
              <span className="flex items-center gap-3">
                <SiGoogleforms size={20} /> Forms
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openForms ? "rotate-180" : ""
                }`}
              />
            </button>

            {openForms && (
              <ul className="ml-8 mt-2 space-y-2 text-sm">
                <li className="text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-1">
                  Forms Elements
                </li>
                <li className="text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-1">
                  Forms Layout
                </li>
              </ul>
            )}
          </li>

          {/* Tables */}
          <li>
            <button
              onClick={() => setOpenTable(!openTable)}
              className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2"
            >
              <span className="flex items-center gap-3">
                <BiTable size={20} /> Tables
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openTable ? "rotate-180" : ""
                }`}
              />
            </button>

            {openTable && (
              <ul className="ml-8 mt-2 space-y-2 text-sm">
                <li className="text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-1">
                  Basic Table
                </li>
                <li className="text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-1">
                  Data Table
                </li>
              </ul>
            )}
          </li>

          {/* Pages */}
          <li>
            <button
              onClick={() => setOpenPage(!openPage)}
              className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2"
            >
              <span className="flex items-center gap-3">
                <BiFirstPage size={20} /> Pages
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openPage ? "rotate-180" : ""
                }`}
              />
            </button>

            {openPage && (
              <ul className="ml-8 mt-2 space-y-2 text-sm">
                <li className="text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-1">
                  File Manager
                </li>
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Pricing Tables
                </li>
                <li className="hover:text-blue-600 cursor-pointer font-semibold text-gray-600 py-1">
                  FAQ
                </li>
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  API Keys
                </li>
                <li className="hover:text-blue-600 cursor-pointer font-semibold text-gray-600 py-1">
                  Integrations
                </li>
                <li className="font-semibold text-gray-600 hover:text-blue-600 cursor-pointer py-1">
                  Blank Page
                </li>
                <li className="font-semibold text-gray-600 hover:text-blue-600 cursor-pointer py-1">
                  404 Error
                </li>
                <li className="font-semibold text-gray-600 hover:text-blue-600 cursor-pointer py-1">
                  500 Error
                </li>
                <li className="font-semibold text-gray-600 hover:text-blue-600 cursor-pointer py-1">
                  Coming Soon
                </li>
                <li className="font-semibold text-gray-600 hover:text-blue-600 cursor-pointer py-1">
                  Maintenance
                </li>
                <li className="font-semibold text-gray-600 hover:text-blue-600 cursor-pointer py-1">
                  Success
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Support Section */}
      <div className="px-5 py-4 border-t border-gray-200">
        <h2 className="text-gray-400 text-xs uppercase mb-4">Support</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2">
            <BiChat size={20} /> Chat
          </li>

          {/* Support */}
          <li>
            <button
              onClick={() => setOpenSupport(!openSupport)}
              className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2"
            >
              <span className="flex items-center gap-3">
                <BiSupport size={20} /> Support
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSupport ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSupport && (
              <ul className="ml-8 mt-2 space-y-2 text-sm">
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Support List
                </li>
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Support Reply
                </li>
              </ul>
            )}
          </li>

          {/* Email */}
          <li>
            <button
              onClick={() => setOpenEmail(!openEmail)}
              className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2"
            >
              <span className="flex items-center gap-3 text-gray-600 font-semibold">
                <FiVoicemail size={20} /> Email
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openEmail ? "rotate-180" : ""
                }`}
              />
            </button>

            {openEmail && (
              <ul className="ml-8 mt-2 space-y-2 text-sm">
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Inbox
                </li>
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Details
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Others Section */}
      <div className="px-5 py-4 border-t border-gray-200">
        <h2 className="text-gray-400 text-xs uppercase mb-4">Others</h2>
        <ul className="space-y-2">
          {/* Chart */}
          <li>
            <button
              onClick={() => setOpenChart(!openChart)}
              className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2"
            >
              <span className="flex items-center gap-3">
                <BiSolidChart size={20} /> Chart
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openChart ? "rotate-180" : ""
                }`}
              />
            </button>

            {openChart && (
              <ul className="ml-8 mt-2 space-y-2 text-sm">
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Line Chart
                </li>
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Pie Chart
                </li>
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Bar Chart
                </li>
              </ul>
            )}
          </li>

          {/* Elements */}
          <li>
            <button
              onClick={() => setOpenElement(!openElement)}
              className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2"
            >
              <span className="flex items-center gap-3">
                <SiElement size={20} /> Elements
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openElement ? "rotate-180" : ""
                }`}
              />
            </button>

            {openElement && (
              <ul className="ml-8 mt-2 space-y-2 text-sm">
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Line Element
                </li>
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Pie Element
                </li>
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Bar Element
                </li>
              </ul>
            )}
          </li>

          {/* Authentication */}
          <li>
            <button
              onClick={() => setOpenAuthentication(!openAuthentication)}
              className="flex items-center justify-between w-full text-gray-600 font-semibold hover:text-blue-600 cursor-pointer py-2"
            >
              <span className="flex items-center gap-3">
                <SiGoogleauthenticator size={20} /> Authentication
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openAuthentication ? "rotate-180" : ""
                }`}
              />
            </button>

            {openAuthentication && (
              <ul className="ml-8 mt-2 space-y-2 text-sm">
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Sign in
                </li>
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Sign up
                </li>
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Reset Password
                </li>
                <li className="hover:text-blue-600 cursor-pointer text-gray-600 font-semibold py-1">
                  Two Step Verification
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Purchase Card */}
      <div className="px-5 py-4">
        <div className="rounded-2xl bg-gray-50 px-4 py-5 text-center">
          <h3 className="mb-2 text-black font-semibold">
            #1 Tailwind CSS Dashboard
          </h3>
          <p className="mb-4 text-gray-500 text-sm">
            Leading Tailwind CSS Admin Template with 400+ UI Component and
            Pages.
          </p>
          <Link
            href="https://tailadmin.com/pricing"
            target="_blank"
            rel="nofollow"
            className="inline-block w-full p-3 font-medium text-white rounded-lg bg-blue-900 hover:bg-blue-800 transition-colors"
          >
            Purchase Plan
          </Link>
        </div>
      </div>
    </aside>
  );
}





























