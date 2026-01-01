"use client";
import { Trash2, SlidersHorizontal } from "lucide-react";

const orders = [
  {
    id: "DE124321",
    name: "John Doe",
    email: "johndoe@gmail.com",
    initials: "JD",
    color: "bg-red-100 text-red-600",
    product: "Software License",
    value: "$18,50.34",
    date: "2024-06-15",
    status: "Complete",
    statusColor: "bg-green-100 text-green-600",
  },
  {
    id: "DE124322",
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    initials: "JS",
    color: "bg-orange-100 text-orange-600",
    product: "Cloud Hosting",
    value: "$12,99.00",
    date: "2024-06-18",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "DE124323",
    name: "Michael Brown",
    email: "michaelbrown@gmail.com",
    initials: "MB",
    color: "bg-yellow-200 text-yellow-700",
    product: "Web Domain",
    value: "$9,50.00",
    date: "2024-06-20",
    status: "Cancel",
    statusColor: "bg-red-100 text-red-600",
  },
  {
    id: "DE124324",
    name: "Alice Johnson",
    email: "alicejohnson@gmail.com",
    initials: "AJ",
    color: "bg-purple-100 text-purple-600",
    product: "SSL Certificate",
    value: "$2,30.45",
    date: "2024-06-25",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "DE124325",
    name: "Robert Lee",
    email: "robertlee@gmail.com",
    initials: "RL",
    color: "bg-green-100 text-green-600",
    product: "Premium Support",
    value: "$15,20.00",
    date: "2024-06-30",
    status: "Complete",
    statusColor: "bg-green-100 text-green-600",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white border rounded-2xl p-6 mt-5 border-gray-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">Recent Orders</h2>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 border px-4 py-2 rounded-xl text-gray-700">
            <SlidersHorizontal size={18} /> Filter
          </button>

          <button className="border px-4 py-2 rounded-xl text-gray-700">
            See all
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="py-3 px-4 text-left"></th>
              <th className="py-3 px-4 text-left">Deal ID</th>
              <th className="py-3 px-4 text-left">Customer</th>
              <th className="py-3 px-4 text-left">Product/Service</th>
              <th className="py-3 px-4 text-left">Deal Value</th>
              <th className="py-3 px-4 text-left">Close Date</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, idx) => (
              <tr
                key={idx}
                className="border-t hover:bg-gray-50 transition-all"
              >
                <td className="py-4 px-4">
                  <input type="checkbox" className="w-4 h-4" />
                </td>

                <td className="py-4 px-4 font-medium text-gray-700">
                  {order.id}
                </td>

                {/* Avatar + Name */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${order.color}`}
                    >
                      {order.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {order.name}
                      </p>
                      <p className="text-sm text-gray-500">{order.email}</p>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-4 text-gray-700">{order.product}</td>

                <td className="py-4 px-4 font-medium text-gray-800">
                  {order.value}
                </td>

                <td className="py-4 px-4 text-gray-700">{order.date}</td>

                {/* Status Badge */}
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${order.statusColor}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="py-4 px-4 text-center">
                  <button>
                    <Trash2 size={18} className="text-gray-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
