// "use client";

// import { useState } from "react";
// import {
//   FiChevronLeft,
//   FiChevronRight,
//   FiPlus,
//   FiTrash,
//   FiX,
// } from "react-icons/fi";

// const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// export default function Calendar() {

//   const [events, setEvents] = useState({});
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [title, setTitle] = useState("");
//   const [eventColor, setEventColor] = useState("primary");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [view, setView] = useState("month"); // month | week | day

//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();

//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const prevMonthDays = new Date(year, month, 0).getDate();

//   const changeMonth = (dir) => {
//     setCurrentDate(new Date(year, month + (dir === "next" ? 1 : -1), 1));
//   };

//   const addEvent = () => {
//     if (!title || !selectedDate) return;

//     setEvents((prev) => ({
//       ...prev,
//       [selectedDate]: [
//         ...(prev[selectedDate] || []),
//         { title, color: eventColor },
//       ],
//     }));

//     setTitle("");
//     setEventColor("primary");
//     setStartDate("");
//     setEndDate("");
//     setShowModal(false);
//   };

//   const deleteEvent = (date, index) => {
//     setEvents((prev) => {
//       const updated = [...prev[date]];
//       updated.splice(index, 1);
//       return { ...prev, [date]: updated };
//     });
//   };

//   const colorMap = {
//     danger: "bg-red-100 text-red-600",
//     success: "bg-green-100 text-green-600",
//     primary: "bg-blue-100 text-blue-600",
//     warning: "bg-yellow-100 text-yellow-600",
//   };

//   return (
//     <div className="bg-white rounded-2xl border border-gray-400 m-4 ml-77">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-400">
//         <div className="flex items-center gap-2">
//           <button onClick={() => changeMonth("prev")} className="p-2 border rounded-lg border-gray-400">
//             <FiChevronLeft />
//           </button>
//           <button onClick={() => changeMonth("next")} className="p-2 border rounded-lg border-gray-400">
//             <FiChevronRight />
//           </button>

//           <button
//             onClick={() => setShowModal(true)}
//             className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 "
//           >
//             <FiPlus /> Add Event
//           </button>
//         </div>

//         <h2 className="text-lg font-semibold">
//           {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
//         </h2>

//         <div className="flex bg-gray-100 rounded-lg p-1">
//           <button className="bg-white px-4 py-1 rounded-md text-sm font-medium">
//             month
//           </button>
//           <button className="px-4 py-1 text-sm text-gray-500">week</button>
//           <button className="px-4 py-1 text-sm text-gray-500">day</button>
//         </div>
//       </div>

//       {/* Days */}
//       <div className="grid grid-cols-7 border-b border-gray-400">
//         {DAYS.map((day) => (
//           <div key={day} className="text-center text-sm text-gray-400 py-3">
//             {day}
//           </div>
//         ))}
//       </div>

//       {/* Calendar Grid */}
//       <div className="grid grid-cols-7 h-[500px]">
//         {[...Array(firstDay)].map((_, i) => (
//           <div key={i} className="border-r border-b p-2 text-gray-300 border-gray-400">
//             {prevMonthDays - firstDay + i + 1}
//           </div>
//         ))}

//         {[...Array(daysInMonth)].map((_, i) => {
//           const dateKey = `${year}-${month + 1}-${i + 1}`;
//           return (
//             <div
//               key={i}
//               onClick={() => {
//                 setSelectedDate(dateKey);
//                 setShowModal(true);
//               }}
//               className="border-r border-b p-2 cursor-pointer hover:bg-gray-400 border-gray-400 "
//             >
//               <div className="font-semibold text-gray-600">{i + 1}</div>

//               <div className="mt-1 space-y-1">
//                 {(events[dateKey] || []).map((ev, idx) => (
//                   <div
//                     key={idx}
//                     className={`flex items-center justify-between text-xs px-2 py-1 rounded ${colorMap[ev.color]}`}
//                   >
//                     <span className="truncate">{ev.title}</span>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         deleteEvent(dateKey, idx);
//                       }}
//                     >
//                       <FiTrash size={12} />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* ADD EVENT MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-6 w-[600px] relative">
//             {/* Close */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-4 right-4 bg-gray-100 rounded-full p-2"
//             >
//               <FiX />
//             </button>

//             <h2 className="text-xl font-semibold mb-1">Add Event</h2>
//             <p className="text-sm text-gray-500 mb-6">
//               Plan your next big moment: schedule or edit an event to stay on track
//             </p>

//             {/* Title */}
//             <label className="text-sm font-medium">Event Title</label>
//             <input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full border rounded-xl px-4 py-3 mt-2 mb-5"
//             />

//             {/* Color */}
//             <label className="text-sm font-medium">Event Color</label>
//             <div className="flex gap-6 mt-3 mb-5">
//               {["danger", "success", "primary", "warning"].map((c) => (
//                 <label key={c} className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     checked={eventColor === c}
//                     onChange={() => setEventColor(c)}
//                   />
//                   <span className="capitalize">{c}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Dates */}
//             <div className="grid grid-cols-2 gap-4 mb-6">
//               <div>
//                 <label className="text-sm font-semibold">Enter Start Date</label>
//                 <input
//                   type="date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                   className="w-full border rounded-xl px-4 py-3 mt-2"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-medium">Enter End Date</label>
//                 <input
//                   type="date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                   className="w-full border border-gray-400 rounded-xl px-4 py-3 mt-2"
//                 />
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="border px-6 py-2 rounded-xl"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={addEvent}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-xl border-gray-400"
//               >
//                 Add Event
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiTrash, FiX } from "react-icons/fi";
const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const HOURS = Array.from({ length: 18 }, (_, i) => `${i + 6}am`);
export default function Calendar() {
  const [view, setView] = useState("month");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [eventColor, setEventColor] = useState("primary");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

  const formatKey = (d) =>
    `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

  /* ------------------ NAVIGATION ------------------ */
  const navigate = (dir) => {
    const delta = view === "month" ? 30 : view === "week" ? 7 : 1;
    setCurrentDate(
      new Date(currentDate.setDate(currentDate.getDate() + dir * delta))
    );
  };

  //   const addEvent = () => {
  //     const key = formatKey(currentDate);
  //     if (!title) return;

  //     setEvents((prev) => ({
  //       ...prev,
  //       [key]: [...(prev[key] || []), title],
  //     }));

  //     setTitle("");
  //     setShowModal(false);
  //   };
  const addEvent = () => {
    if (!title || !startDate || !endDate) return;

    let start = new Date(startDate);
    let end = new Date(endDate);

    let updatedEvents = { ...events };
    if (!startDate && !endDate && selectedDate) {
      updatedEvents[selectedDate] = [
        ...(updatedEvents[selectedDate] || []),
        { title, color: eventColor },
      ];
    }

    while (start <= end) {
      const key = start.toISOString().split("T")[0];

      updatedEvents[key] = [
        ...(updatedEvents[key] || []),
        { title, color: eventColor },
      ];

      start.setDate(start.getDate() + 1);
    }

    setEvents(updatedEvents);
    setShowModal(false);
  };

  const deleteEvent = (dateKey, idx) => {
    setEvents((prev) => {
      const copy = [...prev[dateKey]];
      copy.splice(idx, 1);
      return { ...prev, [dateKey]: copy };
    });
  };

  /*  MONTH */
  const renderMonth = () => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return (
      <div className="grid grid-cols-7 h-[520px]">
        {[...Array(firstDay)].map((_, i) => (
          <div key={i} className="border" />
        ))}

        {[...Array(daysInMonth)].map((_, i) => {
          const d = new Date(year, month, i + 1);
          const key = formatKey(d);
          return (
            <div
              key={i}
              //border
              className="border p-2 cursor-pointer hover:bg-gray-100 border-gray-300"
              onClick={() => {
                setSelectedDate(key), setShowModal(true);
              }}
            >
              <div className="text-sm font-medium text-gray-600">{i + 1}</div>

              {(events[key] || []).map((ev, idx) => (
                <div
                  key={idx}
                  className="mt-1 bg-gray-200 text-xs px-2 py-1 rounded flex justify-between"
                >
                  {ev.title}
                  <FiTrash
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteEvent(key, idx);
                    }}
                    size={12}
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  };

  /* WEEK */
  const renderWeek = () => {
    const days = [...Array(7)].map((_, i) => {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);
      return d;
    });

    return (
      <div className="h-[520px] overflow-y-auto custom-scroll ">
        <div className="grid grid-cols-8 border-b border-gray-400">
          <div />
          {days.map((d, i) => (
            <div
              key={i}
              className="text-center py-2 text-sm text-gray-500 border-gray-400"
            >
              {DAYS[d.getDay()]} {d.getDate()}
            </div>
          ))}
        </div>

        {/* all day */}
        <div className="grid grid-cols-8 border-b  ">
          <div className="p-2 text-sm text-gray-500">all-day</div>
          {days.map((d, i) => {
            const key = formatKey(d);
            return (
              <div key={i} className="border-l p-2 border-gray-400">
                {(events[key] || []).map((ev, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-200 text-xs px-2 py-1 rounded mb-1 border-gray-400"
                  >
                    {ev.title}
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* hours */}
        {HOURS.map((h, i) => (
          <div
            key={i}
            className="grid grid-cols-8 border-b h-12 border-gray-400"
          >
            <div className="text-xs text-gray-500 p-2">{h}</div>
            {days.map((_, j) => (
              <div key={j} className="border-l" />
            ))}
          </div>
        ))}
      </div>
    );
  };

  /* ------------------ DAY VIEW ------------------ */
  const renderDay = () => {
    const key = formatKey(currentDate);

    return (
      <div className="overflow-auto h-[520px] border-gray-400 ">
        <div className="border-b p-3 text-gray-600 font-medium">
          {currentDate.toDateString()}
        </div>

        {(events[key] || []).map((ev, idx) => (
          <div
            key={idx}
            className="m-3 bg-gray-200 px-3 py-2 rounded flex justify-between"
          >
            {ev.title}
            <FiTrash onClick={() => deleteEvent(key, idx)} />
          </div>
        ))}

        {HOURS.map((h, i) => (
          <div key={i} className="border-b h-12 px-3 text-xs text-gray-500">
            {h}
          </div>
        ))}
      </div>
    );
  };

  /*return */
  return (
    <div className="bg-white rounded-2xl border m-4 ml-77">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-400">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="p-2 border rounded border-gray-400"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => navigate(1)}
            className="p-2 border rounded border-gray-400"
          >
            <FiChevronRight />
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="ml-3 bg-blue-700 text-white px-4 py-2 rounded"
          >
            Add Event
          </button>
        </div>

        <h2 className="font-semibold">
          {currentDate.toLocaleDateString(undefined, {
            month: "long",
            year: "numeric",
          })}
        </h2>

        <div className="flex bg-gray-200 rounded p-1 border-gray-400">
          {["month", "week", "day"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-4 py-1 rounded text-sm ${
                view === v ? "bg-white font-medium" : "text-gray-500"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      {view === "month" && renderMonth()}
      {view === "week" && renderWeek()}
      {view === "day" && renderDay()}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[600px] relative">
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 bg-gray-100 rounded-full p-2"
            >
              <FiX />
            </button>

            <h2 className="text-xl font-semibold mb-1">Add Event</h2>
            <p className="text-sm text-gray-500 mb-6">
              Plan your next big moment: schedule or edit an event to stay on
              track
            </p>

            {/* Title */}
            <label className="text-sm font-medium">Event Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 mt-2 mb-5"
            />

            {/* Color */}
            <label className="text-sm font-medium">Event Color</label>
            <div className="flex gap-6 mt-3 mb-5">
              {["danger", "success", "primary", "warning"].map((c) => (
                <label
                  key={c}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    checked={eventColor === c}
                    onChange={() => setEventColor(c)}
                  />
                  <span className="capitalize">{c}</span>
                </label>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm font-semibold">
                  Enter Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border rounded-xl px-4 py-3 mt-2"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Enter End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full border border-gray-400 rounded-xl px-4 py-3 mt-2"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="border px-6 py-2 rounded-xl"
              >
                Close
              </button>
              <button
                onClick={addEvent}
                className="bg-blue-600 text-white px-6 py-2 rounded-xl border-gray-400"
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
