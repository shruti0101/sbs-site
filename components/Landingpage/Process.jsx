"use client";
import React from "react";

const Process = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* ✅ Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/process.mhtml" // replace with your video file name in public folder
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
        <h4 className="text-white text-lg md:text-2xl font-light mb-4">
          Work in motion
        </h4>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white bg-blue-800/90 px-4 py-2 rounded">
          Cup Manufacturing Process
        </h2>
      </div>
    </section>
  );
};

export default Process;
