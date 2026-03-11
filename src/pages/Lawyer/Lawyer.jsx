import React from "react";
import { Link } from "react-router";
const Lawyer = ({ singleLawyer }) => {
  const { id, name, speciality, experience, licenseNo, image } = singleLawyer;

  const handleViewDetails = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex w-full rounded-2xl border border-gray-100 bg-white p-3 shadow-sm gap-5">
      <div className="h-40 w-40  overflow-hidden rounded-xl bg-gray-300">
        <img src={image} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col items-start gap-1">
        <div className="flex flex-row items-center gap-1 mb-1">
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-[9px] sm:text-[11px] font-medium text-green-500 whitespace-nowrap">
            Available
          </span>
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[9px] sm:text-[11px] font-medium text-blue-500 whitespace-nowrap">
            {experience}+ Years Experience
          </span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 leading-none">{name}</h2>
        <p className="text-sm font-medium text-gray-400">{speciality}</p>

        <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
          <div className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-400 text-[9px] font-bold">
            R
          </div>
          <span>License No: {licenseNo}</span>
        </div>
        <div className="mt-4 flex w-full justify-center rounded-full border border-blue-400 py-2 text-sm font-semibold text-blue-500 transition-all hover:bg-blue-50">
          <Link to={`/lawyerDetails/${id}`}>
            <button onClick={handleViewDetails}>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
