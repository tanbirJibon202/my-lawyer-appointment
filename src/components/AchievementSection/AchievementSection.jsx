import CountUpPkg from "react-countup";
import lawyerImg from "../../assets/success-doctor.png";
import reviewImg from "../../assets/success-review.png";
import caseImg from "../../assets/success-patients.png";
import stuffImg from "../../assets/success-staffs.png";

const CountUp = CountUpPkg.default;

const AchievementSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          We Provide Best Law Services
        </h2>
        <p className="text-gray-500  mx-auto text-base">
          {" "}
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#F3F3F3] p-10 rounded-2xl text-center">
          <img src={lawyerImg} className="w-16 h-16 mx-auto mb-6" />
          <h4 className="text-4xl font-bold">
            <CountUp start={1} end={199} duration={10} />+
          </h4>
          <p className="text-[#0F0F0F]">Total Lawyer</p>
        </div>

        <div className="bg-[#F3F3F3] p-10 rounded-2xl text-center">
          <img src={reviewImg} className="w-16 h-16 mx-auto mb-6" />
          <h4 className="text-4xl font-bold">
            <CountUp start={1} end={467} duration={10} />+
          </h4>
          <p className="text-[#0F0F0F]">Total Reviews</p>
        </div>

        <div className="bg-[#F3F3F3] p-10 rounded-2xl text-center">
          <img src={caseImg} className="w-16 h-16 mx-auto mb-6" />
          <h4 className="text-4xl font-bold">
            <CountUp start={1} end={1900} duration={10} />+
          </h4>
          <p className="text-[#0F0F0F]">Cases Initiated</p>
        </div>

        <div className="bg-[#F3F3F3] p-10 rounded-2xl text-center">
          <img src={stuffImg} className="w-16 h-16 mx-auto mb-6" />
          <h4 className="text-4xl font-bold">
            <CountUp start={1} end={300} duration={10} />+
          </h4>
          <p className="text-[#0F0F0F]">Total Staffs</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
