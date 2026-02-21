import React from "react";
import { useLoaderData, useParams } from "react-router";

const LawyerDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const lawyerId = parseInt(id);
  const data = useLoaderData();
  // console.log(data);
  const singleLawyer = data.find((lawyer) => lawyer.id === lawyerId);
  // console.log(singleLawyer);
  const { name, speciality, experience, licenseNo, fee, image, availability } =
    singleLawyer;
  return (
    <div className="max-w-6xl mx-auto">
      <div className="my-8">
        {/* Banner Container */}
        <div className="bg-[#F3F3F3] rounded-2xl py-16 px-8 text-center border border-gray-100">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">
            Lawyer's Profile Details
          </h1>

          {/* Description Text */}
          <p className="text-gray-500 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
            amet ut. Suscipit sed est fermentum magna. Quis vitae tempus
            facilisis turpis imperdiet mattis donec dignissim volutpat.
          </p>
        </div>
      </div>

      <div className="card bg-white border border-gray-100 shadow-sm rounded-2xl p-8 flex flex-row gap-6">
        {/* Lawyer Image - Square with rounded corners */}
        <div className="w-48 h-48 bg-gray-300 rounded-2xl flex-shrink-0 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Experience Badge */}
          <div className="mb-2">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
              {experience}+ Years Experience
            </span>
          </div>

          {/* Name */}
          <h2 className="text-3xl font-bold text-gray-900 mb-1">{name}</h2>

          {/* Speciality & License Row */}
          <div className="flex items-center gap-4 mb-3">
            <p className="text-gray-500 text-sm">{speciality}</p>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span className="border border-gray-400 rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                R
              </span>
              <p>License No: {licenseNo}</p>
            </div>
          </div>

          {/* Availability Row */}
          <div className="flex items-center gap-2 mb-3">
            <p className="text-sm font-medium text-gray-600">Availability</p>
            <div className="flex gap-2">
              {availability?.map((day, index) => (
                <span
                  key={index}
                  className="bg-orange-50 text-orange-400 px-3 py-1 rounded-full text-xs border border-orange-100"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Fee Row */}
          <div className="flex items-center text-sm font-medium">
            <p className="text-gray-600">Consultation Fee:</p>
            <p className="ml-2 text-green-600 font-bold text-base">
              Taka {fee}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm my-8">
        {/* Section Title */}
        <h3 className="text-2xl font-bold text-center text-[#1A1A1A] mb-8">
          Book an Appointment
        </h3>

        {/* Availability Row with Dashed Divider */}
        <div className="border-t border-dashed border-gray-300 pt-6 mb-6">
          <div className="flex justify-between items-center">
            <p className="text-base font-bold text-gray-900">Availability</p>
            <span className="bg-[#E7F7ED] text-[#22C55E] text-[12px] px-4 py-1.5 rounded-full font-semibold border border-[#D1F2DE]">
              Lawyer Available Today
            </span>
          </div>
        </div>

        {/* Custom Alert Box */}
        <div className="bg-[#FFF4E5] border border-[#FFE0B2] rounded-2xl p-4 flex items-center gap-3 mb-10">
          {/* Info Icon (Orange Circle) */}
          <div className="w-5 h-5 border-2 border-orange-400 rounded-full flex items-center justify-center text-orange-500 font-bold text-xs">
            !
          </div>
          <p className="text-[#856404] text-[13px] font-medium leading-tight">
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
        </div>

        {/* Full Width Pill Button */}
        <button className="w-full bg-[#14A800] hover:bg-[#118F00] text-white text-base font-semibold py-3 rounded-full transition-all duration-200">
          Book Appointment Now
        </button>
      </div>
    </div>
  );
};

export default LawyerDetails;
