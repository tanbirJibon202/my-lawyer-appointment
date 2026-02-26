import React, { Suspense, useEffect, useState, useRef } from "react";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = ({ data = [] }) => {
  const [displayLawyers, setDisplayLawyers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // 1. Create a reference for the section you want to scroll to
  const sectionRef = useRef(null);

  useEffect(() => {
    if (showAll) {
      setDisplayLawyers(data);
    } else {
      setDisplayLawyers(data.slice(0, 6));
    }
  }, [data, showAll]);

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      // 2. Scroll to the specific section instead of window top
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      setShowAll(true);
    }
  };

  return (
    // 3. Attach the ref to the header or the top of the container
    <div ref={sectionRef} className=" mx-auto pb-10 scroll-mt-10">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center my-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
          Our Best Lawyers
        </h1>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      {/* Grid Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayLawyers.map((singleLawyer) => (
            <Lawyer key={singleLawyer.id} singleLawyer={singleLawyer} />
          ))}
        </div>
      </Suspense>

      {/* Button Section */}
      {data.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleToggle}
            className="btn bg-[#03C755] hover:bg-[#02a848] text-white border-none rounded-full px-8 py-3 transition-all active:scale-95"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Lawyers;
