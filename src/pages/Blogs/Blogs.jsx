import React from "react";
import { useLoaderData } from "react-router";
import { LuCalendarMinus2 } from "react-icons/lu";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
      <div className="text-center mb-10 md:mb-14 lg:mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-5">
          Blogs
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Let's explore some basic concept that will make you a good developer
        </p>
      </div>

      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#f9fafb] border border-gray-200 rounded-2xl p-5 md:p-7"
          >
            <p className="text-[11px] md:text-xs text-[#f59e0b] mb-4">
              {blog.author}
            </p>

            <h2 className="text-2xl md:text-[34px] font-bold text-[#111827] leading-snug mb-5">
              {blog.question}
            </h2>

            <div className="border-t border-dashed border-gray-300 pt-4">
              <p className="text-lg md:text-xl font-medium text-[#2563eb] mb-2">
                Answer:
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-7">
                {blog.answer}
              </p>
            </div>

            <div className="border-t border-dashed border-gray-300 mt-5 pt-4 flex items-center gap-2 text-gray-500 text-sm">
              <LuCalendarMinus2 />
              <span>Added at {blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
