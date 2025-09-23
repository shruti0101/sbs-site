import React from "react";
import Link from "next/link";
const Cta = () => {
  return (
    <section
      style={{ backgroundImage: "url('/ctabg.webp')" }}
      className="bg-cover bg-center py-18"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <p className="text-black font-roboto font-bold text-2xl md:text-3xl">
            For More Details
          </p>
          <h2 className="text-black font-extrabold text-4xl md:text-6xl mt-2">
            +91-7042039777
          </h2>

       
        </div>

        {/* Right Button */}
        <div>

          <Link href="/contact">
          
          <button className="bg-[#1D4E89] cursor-pointer text-white font-semibold px-6 py-3 rounded hover:bg-[#163a66] transition">
            Get Connect
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
