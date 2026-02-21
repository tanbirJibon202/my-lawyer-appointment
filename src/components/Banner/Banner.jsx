import React from "react";
import bannerImg from "../../assets/banner-img-1.png";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <img src={bannerImg} className="w-full h-[420px] object-cover" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-snug max-w-3xl">
            It avoids subjective claims or exaggeration that might raise red
            flags legally
          </h1>

          <p className="text-gray-200 text-sm md:text-base mt-4 max-w-2xl">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
