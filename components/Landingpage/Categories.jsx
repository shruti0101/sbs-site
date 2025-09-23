'use client'

import React, { useState } from "react";
import Image from "next/image";

const categories = [
  { img: "/home/image-1-1024x512.webp" },
  // { img: "/home/nail-arts-machine-1024x512.webp" },
  { img: "/home/Green-and-Yellow-Simple-Clean-Shoes-Sale-Banner-6-1024x512.webp" },
  { img: "/home/Green-and-Yellow-Simple-Clean-Shoes-Sale-Banner-3-1024x512.webp" },
  { img: "/home/Green-and-Yellow-Simple-Clean-Shoes-Sale-Banner-1-1-1024x512.webp" },
  { img: "/home/printing-machine-2048x1024.webp" },
  { img: "/home/bsb-1024x512.webp" },
  { img: "/home/nonoven.webp" },
   { img: "/home/momo.webp" },
    { img: "/home/noodle.webp" },
];

const Categories = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, rect) => {
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * -10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full mt-10 md:mt-0 py-14 overflow-hidden bg-[#94E6C5]">
      {/* Background Waves */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-[140px]"
        >
          <path
            fill="#A7F3D0"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7c0,0-62.1,26.1-94.9,29.3
            c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          />
          <path
            fill="#6EE7B7"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1
            s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          />
          <path
            fill="#10B981"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6
            C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          />
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-5xl md:text-7xl font-bold font-roboto text-center mt-15 mb-15">
        <span className="text-black">Our </span>
        <span className="text-[#1B69AC]">Categories</span>
      </h2>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 relative z-10">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="relative border-4 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-150 ease-out"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget.getBoundingClientRect())}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={cat.img}
              alt={`Category ${i + 1}`}
              width={500}
              height={250}
              className="object-contain mx-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
