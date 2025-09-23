"use client";
import CountUp from "react-countup";

export default function CountUpSection() {
  const stats = [
    { value: 10, suffix: "+", label: "Years Goodwill" },
    { value: 60, suffix: "+", label: "Ready Stock Machine" },
    { value: 89, suffix: "+", label: "Dealers Across India" },
    { value: 60, suffix: "+", label: "Startups Built" },
  ];

  return (
    <>
      <section className="bg-[#0D2653] py-15">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-white divide-x divide-white/30">
          {stats.map((stat, index) => (
            <div key={index} className="px-6">
              <h2 className="text-4xl md:text-6xl font-extrabold">
                <CountUp end={stat.value} duration={20} />
                {stat.suffix}
              </h2>
              <p className="mt-2 text-lg md:text-xl font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section   style={{
          backgroundImage:
            "radial-gradient(at center center, #87AFE2 0%, #305788 100%)",
        }}>
        <div className="w-full  py-15">
            <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-6xl font-extrabold text-center text-white">
            Paper Cup-making Machine Manufacturers & Supplier in India
          </h2>

          <p className="mt-8 text-lg md:text-md  leading-relaxed text-center text-white">
            Greetings from SBS Machinery, a trusted name in the manufacturing industry. We specialize in offering high-quality Paper Cup Making Machines that are designed for both efficiency and durability. As leading Paper Cup Making Machine Manufacturers in India, New Delhi, our products are engineered to deliver outstanding performance in various industries. Our machines are crafted with precision, ensuring seamless operation and maximum output. Whether you run a small-scale operation or a large manufacturing unit, our Paper Cup Making Machines Manufacturer is tailored to meet your specific business needs.
          </p>
            </div>
        </div>
      </section>
    </>
  );
}
