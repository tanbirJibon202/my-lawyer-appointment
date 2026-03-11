import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router";
import errorImg from "../../assets/error.jpg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-0">
        <Navbar />

        <div className=" flex flex-col items-center justify-center py-10 text-center">
          <div className="w-40 h-40 md:w-48 md:h-48 mb-6 mx-auto">
            <img
              src={errorImg}
              alt="Error"
              className="w-full h-full object-contain opacity-90 transition-transform duration-300 hover:scale-105"
            />
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
            No Lawyer Found!!
          </h1>

          <p className="text-gray-500 text-base mb-8  mx-auto leading-relaxed px-4">
            The link you followed may be broken, or the page may have been
            removed.
          </p>

          <Link to="/">
            <button className="bg-[#14A800] hover:bg-[#118F00] text-white  rounded-lg transition-all active:scale-95 shadow-md btn  px-8 py-3 font-semibold">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
