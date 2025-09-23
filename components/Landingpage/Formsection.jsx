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
            src="/about/Paper-Die-Cutting-Machine.webp" // replace with your actual image
            alt="Enquiry illustration"
            width={700}
            height={500}
            className=" object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="relative w-full max-w-lg border border-white/30 p-8 rounded-md shadow-lg">
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-blue-900/90 rounded-md"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-serif text-white text-center mb-8">
              Quick Enquiry
            </h2>

            <form
              className="space-y-5"
              action="https://formsubmit.co/machinerysbs@gmail.com"
              method="POST"
            >
              {/* Hidden configs */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Product Enquiry"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_nosponsor" value="false" />
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <select
                  className="p-3 rounded-sm w-full bg-white text-gray-700 outline-none border border-gray-300"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Machine
                  </option>

                  <option value="Select Machine">Select Machine</option>
                  <option value="Paper Cup Making Machine">
                    Paper Cup Making Machine
                  </option>
                  <option value="Paper Die Cutting Machine">
                    Paper Die Cutting Machine
                  </option>
                  <option value="Paper Plate Making Machine">
                    Paper Plate Making Machine
                  </option>
                  <option value="Bio-degradable Bag Making Machine">
                    Bio-degradable Bag Making Machine
                  </option>
                  <option value="Flexoprinting Machine">
                    Flexoprinting Machine
                  </option>
                  <option value="Non Woven Bag Making Machines">
                    Non Woven Bag Making Machines
                  </option>
                  <option value="Offset Bag Printing Machine">
                    Offset Bag Printing Machine
                  </option>
                  <option value="   Momo Making Machine">
                    Momo Making Machine
                  </option>
                  <option value="Noodle Making Machine">
                    Noodle Making Machine
                  </option>
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
