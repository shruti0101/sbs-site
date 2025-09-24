import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <section>
        <div className="max-w-7xl mx-auto px-10 py-5 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
              src="/home/about.webp"
              alt="About Us Image"
              width={550}
              height={400}
              className="rounded-lg shadow-lg"
            />

            <div className=" ">
              <h1 className="text-3xl md:text-5xl text-black font-semibold mb-7">
                SBS Machinery Pvt. Ltd
              </h1>
              <p className="text-black text-lg leading-relaxed">
                SBS Machinery Pvt Ltd, based in Delhi, is a well-established
                manufacturer, importer, and exporter of a wide range of the best
                paper cup-making machines manufacturer in Delhi NCR, paper
                plate-making machines in India, paper die-cutting machines
                manufacturer in Delhi, biodegradable bag-making machines in
                Delhi, India, and flexo printing machines supplier in India.
                Recognized as a top manufacturer in Delhi NCR and a trusted
                supplier across India, we are committed to delivering
                exceptional machines that meet international quality standards.
                Our extensive quality control measures, combined with the use of
                high-grade raw materials and advanced tooling machines, ensure
                that every product meets flawless standards for performance and
                durability.
              </p>
              <div className="space-y-3 mt-4 ">
                {/* Phone Info Box */}
                <div className="flex items-center gap-4 py-1 px-4  border border-gray-100 hover:shadow-lg transition">
                  {/* Phone Icon Circle */}
                  <div className="w-17 h-17  hover:bg-[#10C098] flex items-center justify-center rounded-full bg-[#176BB0] border-2 border-[#F7C600] shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-white animate-bounce"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.2 3.6a1 1 0 01-.27 1.06l-2.1 2.1a16 16 0 007.07 7.07l2.1-2.1a1 1 0 011.06-.27l3.6 1.2a1 1 0 01.684.95V20a2 2 0 01-2 2h-1C8.82 22 2 15.18 2 7V5z"
                      />
                    </svg>
                  </div>

                  {/* Text + Number */}
                  <div>
                    <p className="text-sm text-black">Call 24 hrs / 7 Days</p>
                    <p className="text-lg font-bold text-[#00537B] hover:text-[#003d58] transition">
                      <a
                        href="tel:+918810570771"
                        className="block underline"
                      >
                        +91 8810570771
                      </a>
                      <a
                        href="tel:+917042039777"
                        className="block underline"
                      >
                        +91 7042039777
                      </a>
                    </p>
                  </div>
                </div>

                <Link href="/about">
                  <button className="w-full bg-[#0075C9] text-white px-4 py-3 cursor-pointer rounded-md font-semibold text-lg shadow hover:bg-[#005f9e] transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
