import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { addLawyerAppointment } from "../../utils/bookings";
import { toast } from "react-toastify";

const LawyerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lawyerId = parseInt(id);
  const data = useLoaderData();

  const singleLawyer = data.find((lawyer) => lawyer.id === lawyerId);

  const { name, speciality, experience, licenseNo, fee, image, availability } =
    singleLawyer;

  const handleBookAppointment = () => {
    const result = addLawyerAppointment(singleLawyer);

    if (result.success) {
      window.scrollTo(0, 0);
      navigate("/bookings");
      toast.success("Appointment Booked Successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    } else {
      toast.error(result.message || "Already Booked!", {
        position: "top-right",
        theme: "colored",
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="my-3">
        {/* Banner Container */}
        <div className="bg-[#F3F3F3] rounded-2xl py-16 px-8 text-center border border-gray-100">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">
            Lawyer's Profile Details
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            Professional legal services tailored to your needs. Our verified
            experts are ready to assist you.
          </p>
        </div>
      </div>

      {/* <div className="card bg-white border border-gray-100 shadow-sm rounded-2xl p-8 flex flex-row gap-6 mt-8">
        <div className="w-48 h-48 bg-gray-300 rounded-2xl overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-2">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
              {experience}+ Years Experience
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">{name}</h2>
          <div className="flex items-center gap-4 mb-3">
            <p className="text-gray-500 text-sm">{speciality}</p>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span className="border border-gray-400 rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                R
              </span>
              <p>License No: {licenseNo}</p>
            </div>
          </div>

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

          <div className="flex items-center text-sm font-medium">
            <p className="text-gray-600">Consultation Fee:</p>
            <p className="ml-2 text-green-600 font-bold text-base">
              Taka {fee}
            </p>
          </div>
        </div>
      </div> */}

      <div className="card bg-white border border-gray-100 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 mt-8">
        <div className="w-full md:w-48 h-64 md:h-48 bg-gray-300 rounded-2xl overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-2">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
              {experience}+ Years Experience
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            {name}
          </h2>

          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3">
            <p className="text-gray-500 text-sm">{speciality}</p>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span className="border border-gray-400 rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                R
              </span>
              <p>License No: {licenseNo}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
            <p className="text-sm font-medium text-gray-600">Availability</p>
            <div className="flex flex-wrap gap-2">
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

          <div className="flex items-center text-sm font-medium">
            <p className="text-gray-600">Consultation Fee:</p>
            <p className="ml-2 text-green-600 font-bold text-base">
              Taka {fee}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm my-8">
        <h3 className="font-semibold text-center text-[#1A1A1A] mb-4">
          Book an Appointment
        </h3>

        <div className="border-t border-dashed border-gray-300 pt-4 mb-4">
          <div className="flex justify-between items-center">
            <p className="text-base font-bold text-gray-900">Availability</p>
            <span className="bg-[#E7F7ED] text-[#22C55E] text-[12px] px-4 py-1.5 rounded-full font-semibold border border-[#D1F2DE]">
              Lawyer Available Today
            </span>
          </div>
        </div>

        <div className="border-t border-gray-300 mb-4"></div>

        <div className="bg-[#FFF4E5] border border-[#FFE0B2] rounded-2xl p-4 flex items-center gap-3 mb-6">
          <div className="w-5 h-5 border-2 border-orange-400 rounded-full flex items-center justify-center text-orange-500 font-bold text-xs">
            !
          </div>
          <p className="text-[#856404] text-[13px] font-medium leading-tight">
            Due to high patient volume, we are currently accepting appointments
            for today only.
          </p>
        </div>

        <button
          onClick={handleBookAppointment}
          className="w-full bg-[#14A800] hover:bg-[#118F00] text-white text-base font-semibold py-3 rounded-full transition-all duration-200"
        >
          Book Appointment Now
        </button>
      </div>
    </div>
  );
};

export default LawyerDetails;
