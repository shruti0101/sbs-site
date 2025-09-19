"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const Whychoose = () => {
  const points = [
    "Biggest Manufacturers of Paper Plate And Paper Cup Machines",
    "Building Startups Across India",
    "Goodwill Of More Than 20 Years",
    "Latest Technology And Best Quality Machines",
    "More Than 30 Thousand Customers Across India",
    "Life-time Free Guidance And Business Support",
    "Life-time On Call Free Technical Support",
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side with background image */}
        <div
          className="text-white p-8 md:p-14 flex flex-col justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/home/whychoose.webp')", 
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#9fffd2]">
            Why Choose Us
          </h2>

          <ul className="space-y-5 text-lg leading-relaxed">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-red-500 w-6 h-6 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side with eco image */}
        <div className="relative w-full h-full">
          <Image
            src="/home/eco3-1024x745.webp"
            alt="Eco Friendly Packaging"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
