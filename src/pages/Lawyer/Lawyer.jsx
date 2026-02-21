// import React from "react";
// import { use } from "react";
// const Lawyer = ({ lawyerPromise }) => {
//   const data = use(lawyerPromise);
//   console.log(data);
//   return (
//     <div>
//       <h1>Single Lawyer</h1>
//     </div>
//   );
// };

// import React from "react";
// const Lawyer = ({ singleLawyer }) => {
//   console.log(singleLawyer);
//   return (
//     <div>
//       <h1>Single Lawyer</h1>
//     </div>
//   );
// };

import React from "react";
import { Link } from "react-router";
const Lawyer = ({ singleLawyer }) => {
  const { id, name, speciality, experience, licenseNo, image } = singleLawyer;

  return (
    <div className="flex w-full rounded-2xl border border-gray-100 bg-white p-3 shadow-sm gap-5">
      <div className="h-40 w-40  overflow-hidden rounded-xl bg-gray-300">
        <img src={image} className="h-full w-full object-cover" />
      </div>

      {/* Right: Information Content */}
      <div className="flex flex-1 flex-col items-start gap-1">
        {/* Status & Experience Badges */}
        <div className="flex gap-2 mb-1">
          <span className="rounded-full bg-green-100 px-3 py-1 text-[11px] font-medium text-green-500">
            Available
          </span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-500">
            {experience}+ Years Experience
          </span>
        </div>

        {/* Professional Details */}
        <h2 className="text-xl font-bold text-gray-900 leading-none">{name}</h2>
        <p className="text-sm font-medium text-gray-400">{speciality}</p>

        {/* License Number with Icon */}
        <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
          <div className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-400 text-[9px] font-bold">
            R
          </div>
          <span>License No: {licenseNo}</span>
        </div>

        {/* Action Button - Styled as a Pill-shaped Outline */}
        <div className="mt-4 flex w-full justify-center rounded-full border border-blue-400 py-2 text-sm font-semibold text-blue-500 transition-all hover:bg-blue-50">
          <Link to={`/lawyerDetails/${id}`}>
            <button> View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
