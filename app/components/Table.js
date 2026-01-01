import Image from "next/image";
import { FiBell, FiSettings } from "react-icons/fi";
export default function Table() {
  const orders = [
    {
      product: "TailGrids",
      category: "UI Kits",
      country:"" ,
      cr: "Dashboard",
      value: "$12,499",
    },
    {
      product: "GrayGrids",
      category: "Templates",
      country: "",
      cr: "Dashboard",
      value: "$5498",
    },
    {
      product: "Uideck",
      category: "Templates",
      country: "",
      cr: "Dashboard",
      value: "$4621",
    },
    {
      product: "FormBold",
      category: "SaaS",
      country: "assests/ax.png",
      cr: "Dashboard",
      value: "$13843",
    },
    {
      product: "NextAdmin",
      category: "Templates",
      country: "assests/ax.png",
      cr: "Dashboard",
      value: "$7523",
    },
    {
      product: "Form Builder",
      category: "Templates",
      country: "assests/ax.png",
      cr: "Dashboard",
      value: "$1,377",
    },
    {
      product: "AyroUI",
      category: "Templates",
      country: "ax",
      cr: "Dashboard",
      value: "$599,00",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Recent Orders</h2>

        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-xl flex items-center gap-2 hover:bg-gray-50">
            <span className="text-gray-700"><FiSettings/></span> Filter
          </button>

          <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-600">
            See all
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="text-left py-2  text-xs">Products</th>
            <th className="text-left border-gray-400 text-xs">Category</th>
            <th className="text-left text-xs">Country</th>
            <th className="text-left text-xs">CR</th>
            <th className="text-left text-xs">Value</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last:border-0 text-gray-700 hover:bg-gray-50"
            >
              <td className="py-3 font-semibold text-black text-sm">{o.product}</td>
              <td className="text-sm">{o.category}</td>
              <td>
                <FiBell/>
              </td>
              <td className="text-sm">{o.cr}</td>
              <td className="text-green-600 text-sm font-semibold">{o.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
