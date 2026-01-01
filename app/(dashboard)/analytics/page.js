// "use client";
// import AcquisitionChart from "@/app/components/AcquisitionChannel";
// import ActiveUsersCard from "@/app/components/ActiveUserCard";
// import Card from "@/app/components/Card";
// import AnalyticsChart from "@/app/components/Chart";
// import Map from "@/app/components/Map";
// import ReportButton from "@/app/components/ReportButton";
// import SessionsChart from "@/app/components/Session";
// import Table from "@/app/components/Table";
// import ToggleTabs from "@/app/components/ToogleButton";
// import React from "react";
// import { BsThreeDotsVertical } from "react-icons/bs";

// function Analytics() {
//   return (
//     <div className="ml-75 min-h-screen">
//       <div className="grid grid-cols-4 gap-6 m-5">
//         <Card
//           title="Unique Visitors"
//           value="24.7K"
//           percent="+20%"
//           subtitle="Vs last month"
//         />

//         <Card
//           title="Total Pageviews"
//           value="55.7K"
//           percent="+18%"
//           subtitle="Vs last month"
//         />
//         <Card
//           title="Bounce Rate"
//           value="54%"
//           percent="+25%"
//           subtitle="Vs last month"
//         />
//         <Card
//           title="Visit Duration"
//           value="2m56s"
//           percent="+15.5%"
//           subtitle="Vs last month"
//         />
//       </div>

//       <div className=" bg-white border-gray-200 m-5  border-2 rounded-2xl ">
//         <div className="flex justify-between p-2 m-3">
//           <div>
//             <h3 className="mb-1 text-gray-800 text-lg font-semibold">
//               Analytics
//             </h3>
//             <span className="block text-gray-500">
//               Visitor analytics of last 30 days
//             </span>
//           </div>

//           <div className="flex flex-wrap bg-gray-100 text-gray-400 font-semibold h-10   rounded-lg justify-evenly gap-0.5 p-0.5  ">
//             <div className="flex flex-wrap bg-gray-100 text-gray-400 font-semibold h-10   rounded-lg justify-evenly gap-0.5 p-0.5  ">
//             <ToggleTabs
//               tabs={["Monthly", "Quarterly", "Annually"]}
//               onChange={(value) => console.log("Selected:", value)}
//             />
//           </div>
//           </div>
//         </div>
//         <div>
//           <AnalyticsChart/>
//         </div>
//       </div>

//       <div className="flex m-2 ">
//         {/* 1 */}
//         <div className="w-[300px] h-[400px] border-2 border-gray-200 bg-white  p-5 rounded-2xl m-2 ">
//           <div className="flex justify-between">
//             <h2 className="text-lg font-semibold mb-4">Top Channels</h2>
//             <BsThreeDotsVertical className="text-gray-400" />
//           </div>
//           <div className="divide-y divide-default">
//             <div className="flex justify-between py-3 text-sm border-gray-200 ">
//               <span className="text-gray-400 text-sm pb-3">Source</span>
//               <span className=" text-gray-400 text-sm">visitors</span>
//             </div>

//             <div className="flex justify-between py-3 border-gray-200">
//               <span className="text-gray-500 text-sm font-semibold">
//               Google
//               </span>
//               <span className="text-gray-500 text-sm">4.7K</span>
//             </div>

//             <div className="flex justify-between py-3 border-gray-200">
//               <span className="text-gray-500 text-sm font-semibold">
//                 Threads
//               </span>
//               <span className="text-gray-500 text-sm">2.9K</span>
//             </div>

//             <div className="flex justify-between py-3 border-gray-200">
//               <span className="text-gray-500 text-sm font-semibold">
//                 Google
//               </span>
//               <span className="text-gray-500 text-sm">1.5K</span>
//             </div>

//             <div className="flex justify-between py-3 border-gray-200">
//               <span className="text-gray-500 text-sm font-semibold">
//                 Facebook
//               </span>
//               <span className="text-gray-500 text-sm">3.4K</span>
//             </div>

//             <div className="py-3">
//               <ReportButton />
//             </div>
//           </div>
//         </div>

//         {/* 2 */}
//         <div className="w-[300px] h-[400px] border-2 border-gray-200 bg-white  p-5 rounded-2xl m-2 ">
//           <div className="flex justify-between">
//             <h2 className="text-lg font-semibold mb-4">Top Pages</h2>
//             <BsThreeDotsVertical className="text-gray-400 " />
//           </div>

//           <div className="divide-y divide-default">
//             <div className="flex justify-between py-3 text-sm border-gray-200 ">
//               <span className="text-gray-400 text-sm pb-3">Source</span>
//               <span className=" text-gray-400 text-sm">visitors</span>
//             </div>

//             <div className="flex justify-between py-3 border-gray-200">
//               <span className="text-gray-500 text-sm font-semibold">
//                 tailadmin.com
//               </span>
//               <span className="text-gray-500 text-sm">4.7K</span>
//             </div>

//             <div className="flex justify-between py-3 border-gray-200">
//               <span className="text-gray-500 text-sm font-semibold">
//                 preview.tailadmin.com
//               </span>
//               <span className="text-gray-500 text-sm">2.9K</span>
//             </div>

//             <div className="flex justify-between py-3 border-gray-200">
//               <span className="text-gray-500 text-sm font-semibold">
//                 docs.tailadmin.com
//               </span>
//               <span className="text-gray-500 text-sm">1.5K</span>
//             </div>

//             <div className="flex justify-between py-3 border-gray-200">
//               <span className="text-gray-500 text-sm font-semibold">
//                 tailadmin.com/componetns
//               </span>
//               <span className="text-gray-500 text-sm">3.4K</span>
//             </div>

//             <div className="py-3">
//               <ReportButton />
//             </div>
//           </div>
//         </div>
//         {/* 3 */}
//         <div className="w-xl  bg-amber-50 rounded-2xl m-2">
//           <ActiveUsersCard />
//         </div>
//       </div>

//       <div className=" flex  gap-5 m-4 mb-3 ">
//         <div className=" w-[615px] rounded-2xl">
//           <AcquisitionChart />
//         </div>
//         <div className="w-[570px] h-80 rounded-2xl">
//           <SessionsChart />
//         </div>
//       </div>

//       <div className="flex m-4 mt-5 mb-3 gap-5 h-72">
// <div className=" h-72 w-[520px]  rounded-2xl"><Map/>
//   </div>
// <div className="bg-red-100 h-72 w-[668px] rounded-2xl divide-y divide-default border-gray-200 "><Table/></div>

//       </div>

//     </div>
//   );
// }

"use client";

import AcquisitionChart from "@/app/components/AcquisitionChannel";
import ActiveUsersCard from "@/app/components/ActiveUserCard";
import Card from "@/app/components/Card";
import AnalyticsChart from "@/app/components/Chart";
import Map from "@/app/components/Map";
import ReportButton from "@/app/components/ReportButton";
import SessionsChart from "@/app/components/Session";
import Table from "@/app/components/Table";
import ToggleTabs from "@/app/components/ToogleButton";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Analytics() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:pl-72 mx-5">
      
      {/* Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <Card title="Unique Visitors" value="24.7K" percent="+20%" subtitle="Vs last month" />
        <Card title="Total Pageviews" value="55.7K" percent="+18%" subtitle="Vs last month" />
        <Card title="Bounce Rate" value="54%" percent="+25%" subtitle="Vs last month" />
        <Card title="Visit Duration" value="2m56s" percent="+15.5%" subtitle="Vs last month" />
      </div>

      {/* 🔹 ANALYTICS  */}
      <div className="bg-white border border-gray-200 rounded-2xl mt-6 p-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Analytics</h3>
            <p className="text-gray-500 text-sm">Visitor analytics of last 30 days</p>
          </div>

          <ToggleTabs
            tabs={["Monthly", "Quarterly", "Annually"]}
            onChange={(value) => console.log(value)}
          />
        </div>

        <div className="mt-6">
          <AnalyticsChart />
        </div>
      </div>

      {/*  TOP CHANNELS / PAGES / ACTIVE USERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        
        {/* Top Channels */}
        <div className="bg-white border border-gray-200 p-5 rounded-2xl">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Top Channels</h2>
            <BsThreeDotsVertical className="text-gray-400" />
          </div>

          <div className="divide-y">
            <Row label="Google" value="4.7K" />
            <Row label="Threads" value="2.9K" />
            <Row label="Instagram" value="1.5K" />
            <Row label="Facebook" value="3.4K" />
          </div>

          <div className="mt-4">
            <ReportButton />
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white border border-gray-200 p-5 rounded-2xl">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Top Pages</h2>
            <BsThreeDotsVertical className="text-gray-400" />
          </div>

          <div className="divide-y">
            <Row label="tailadmin.com" value="4.7K" />
            <Row label="preview.tailadmin.com" value="2.9K" />
            <Row label="docs.tailadmin.com" value="1.5K" />
            <Row label="components" value="3.4K" />
          </div>

          <div className="mt-4">
            <ReportButton />
          </div>
        </div>

        {/* Active Users */}
        <div className="w-full">
          <ActiveUsersCard />
        </div>
      </div>

      {/*  CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <AcquisitionChart />
        <SessionsChart />
      </div>

      {/* MAP & TABLE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 mb-10">
        <Map />
        <Table />
      </div>

    </div>
  );
}

/* Small reusable row */
function Row({ label, value }) {
  return (
    <div className="flex justify-between py-3 text-sm">
      <span className="text-gray-600 font-medium truncate">{label}</span>
      <span className="text-gray-500">{value}</span>
    </div>
  );
}

