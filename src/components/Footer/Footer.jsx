import React from "react";
import { Link, useLocation } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  const location = useLocation();

  const isErrorPage =
    location.pathname === "/404" || location.pathname === "/error";
  if (isErrorPage) return null;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0A0A0A] text-white py-6">
      {" "}
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="mb-4">
          <Link
            to="/"
            onClick={handleScrollToTop}
            className="flex flex-col items-center gap-2 font-bold text-xl"
          >
            <img
              src={logo}
              alt="LawBD Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="tracking-tight">LawBD</span>
          </Link>
        </div>

        <nav className="mb-5">
          <ul className="flex flex-wrap justify-center gap-6 text-gray-300 font-medium text-sm">
            <li>
              <Link
                to="/"
                onClick={handleScrollToTop}
                className="hover:text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/bookings"
                onClick={handleScrollToTop}
                className="hover:text-white transition"
              >
                My-Bookings
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                onClick={handleScrollToTop}
                className="hover:text-white transition"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleScrollToTop}
                className="hover:text-white transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* 3. Dashed Divider Line */}
        <div className="w-full max-w-4xl border-t border-gray-800 border-dashed mb-5"></div>

        {/* 4. Social Media Icons */}
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://www.facebook.com/tanvirahmed.jibon.9/"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2] hover:opacity-80 transition"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href=""
            className="w-8 h-8 flex items-center justify-center rounded-full bg-black border border-gray-700 hover:bg-gray-900 transition"
          >
            <FaXTwitter size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/tanbir-ahamed-3a5589338/"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077B5] hover:opacity-80 transition"
          >
            <FaLinkedinIn size={14} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF0000] hover:opacity-80 transition"
          >
            <FaYoutube size={14} />
          </a>
        </div>

        {/* 5. Copyright */}
        <p className="text-[11px] text-gray-500">
          © {new Date().getFullYear()} LawBD All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
