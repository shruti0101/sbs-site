"use client";
import React from "react";
import Image from "next/image";

const EnquiryForm = () => {
  return (
    <section className="relative w-full py-12 px-4 bg-[#E5F3FE]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/formsection.webp" // replace with your actual image
            alt="Enquiry illustration"
            width={500}
            height={500}
            className="rounded-md shadow-lg object-contain"
          />
        </div>

        {/* Right Form */}
        <div
          className="relative w-full max-w-lg border border-white/30 p-8 rounded-md shadow-lg"
          style={{
            backgroundImage: "url('/your-bg-image.jpg')", // your blue bg image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-blue-900/90 rounded-md"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-serif text-white text-center mb-8">
              Quick Enquiry
            </h2>

            <form className="space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <select
                  className="p-3 rounded-sm w-full bg-white text-gray-700 outline-none border border-gray-300"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Machine
                  </option>
                  <option value="machine1">Machine 1</option>
                  <option value="machine2">Machine 2</option>
                </select>
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 rounded-sm w-full bg-white text-gray-700 outline-none border border-gray-300"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center border border-gray-300 rounded-sm bg-white">
                  <span className="px-2">🇮🇳</span>
                  <input
                    type="tel"
                    placeholder="081234 56789"
                    className="p-3 flex-1 rounded-sm outline-none bg-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-sm w-full bg-white text-gray-700 outline-none border border-gray-300"
                />
              </div>

              {/* Place */}
              <input
                type="text"
                placeholder="Place"
                className="p-3 rounded-sm w-full bg-white text-gray-700 outline-none border border-gray-300"
              />

              {/* Message */}
              <textarea
                placeholder="Message"
                rows="4"
                className="p-3 rounded-sm w-full bg-white text-gray-700 outline-none border border-gray-300"
              ></textarea>

            

              {/* Send Button */}
              <button
                type="submit"
                className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-sm font-medium transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
