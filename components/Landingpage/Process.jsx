"use client";
import React from "react";

const Process = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[600px] overflow-hidden bg-[#DDD4D0]">
      {/* Video Wrapper */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Make iframe extra wide to cover wide screens */}
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1026395622?h=38eb24ff69&autoplay=1&loop=1&muted=1&background=1"
          className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h4 className="text-white text-lg md:text-2xl font-light mb-4">
          Work in motion
        </h4>
        <h2 className="text-3xl md:text-7xl font-extrabold text-white bg-blue-800/90 px-4 py-2 rounded">
          Cup Manufacturing Process
        </h2>
      </div>
    </section>
  );
};

export default Process;
