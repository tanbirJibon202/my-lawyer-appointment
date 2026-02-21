// import React, { Suspense, useEffect, useState } from "react";
import React, { Suspense } from "react";
// import { data } from "react-router";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = ({ data }) => {
  // const [allLawyers, setAllLawyers] = useState([]);
  // useEffect(() => {
  //   fetch("lawyersData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setAllLawyers(data);
  //     });
  // }, []);

  // const lawyerPromise = fetch("./lawyersData.json")
  // .then((res) => res.json());

  return (
    <div className="w-full">
      <div>
        <h1>Our Best Lawyers</h1>
        <p>
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <Suspense fallback={<span>loading......</span>}>
        {/* {<Lawyer lawyerPromise={lawyerPromise}></Lawyer>} */}
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((singleLawyer) => (
            <Lawyer key={singleLawyer.id} singleLawyer={singleLawyer}></Lawyer>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Lawyers;
