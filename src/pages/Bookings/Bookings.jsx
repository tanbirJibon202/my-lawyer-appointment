import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";
import { Link } from "react-router";
import { removeLawyerAppointment } from "../../utils/bookings";
import { toast } from "react-toastify";
const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#14A800",
  "#F06292",
  "#7986CB",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;
  return (
    <path
      d={getPath(x, y, width, height)}
      stroke="none"
      fill={colors[index % colors.length]}
    />
  );
};

const Bookings = () => {
  const [bookedLawyers, setBookedLawyers] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("lawyer_bookings");
    if (storedData) {
      setBookedLawyers(JSON.parse(storedData));
    }
  }, []);

  const handleCancel = (id) => {
    const updatedData = removeLawyerAppointment(id);
    setBookedLawyers(updatedData);
    toast.error("Appointment Cancelled!", {
      theme: "colored",
      autoClose: 1000,
    });
  };

  if (bookedLawyers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-4xl font-bold text-center">
          You Have not Booked any appointment yet
        </h2>
        <p className="mt-6 text-gray-400 text-center">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
        <Link
          to="/"
          className="btn mt-4 bg-[#0000D1] text-white px-8 py-5 font-semibold"
        >
          Book an Appointment
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-10 h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={bookedLawyers}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={{ fillOpacity: 0.2 }} />
            <Bar
              dataKey="fee"
              shape={<TriangleBar />}
              label={{ position: "top", fill: "#666", fontSize: 12 }}
            >
              {bookedLawyers.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">My Today Appointments</h2>
        <p className="text-[#0F0F0F]">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
      </div>
      <div className="grid gap-6">
        {bookedLawyers.map((lawyer) => (
          <div
            key={lawyer.id}
            className="p-8 border border-gray-100 rounded-lg bg-white shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {lawyer.name}
                </h3>
                <p className="text-gray-500 text-sm">{lawyer.speciality}</p>
              </div>
              <div className="mt-2">
                <p className="text-[#141414] text-sm">
                  Appointment Fee :{" "}
                  <span className="text-[#141414]">{lawyer.fee} Taka</span>
                </p>
              </div>
            </div>

            <div className="border-t border-dashed border-gray-200 mb-4"></div>

            <button
              onClick={() => handleCancel(lawyer.id)}
              className="w-full py-3 border border-red-500 text-red-500 rounded-full font-medium hover:bg-red-50 transition-all duration-200"
            >
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
