import Image from "next/image";

export default function RemoteControlMaintenance() {
  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-snug">
            SBS Machinery Pvt Ltd
          </h2>
          <h3 className="text-[#0057A0]  text-3xl md:text-5xl font-semibold mt-2">
            Remote Control <br /> Maintenance System
          </h3>

          {/* Paragraph */}
          <p className="text-black text-base md:text-lg leading-relaxed mt-4">
            In our Control Maintenance System, we can customize the IOT
            reports/data according to customer requirement. We can also do
            integration with customer ERP i.e. SAP, ORACLE, TCS ion and any
            other ERP.
          </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  <ul className="space-y-3 text-black">
    <li className="flex items-start gap-2">
      <svg
        aria-hidden="true"
        className="w-4 h-4 mt-1 text-black"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 
        248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 
        56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
      </svg>
      Monitor Production Reports
    </li>

    <li className="flex items-start gap-2">
      <svg className="w-4 h-4 mt-1 text-black" viewBox="0 0 512 512">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 
        248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 
        56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
      </svg>
      Production Target Analysis
    </li>

    <li className="flex items-start gap-2">
      <svg className="w-4 h-4 mt-1 text-black" viewBox="0 0 512 512">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 
        248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 
        56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
      </svg>
      Production Setup Data
    </li>

    <li className="flex items-start gap-2">
      <svg className="w-4 h-4 mt-1 text-black" viewBox="0 0 512 512">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 
        248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 
        56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
      </svg>
      Machine Alarm Monitoring
    </li>
  </ul>

  {/* Second Column */}
  <ul className="space-y-3 text-black">
    <li className="flex items-start gap-2">
      <svg className="w-4 h-4 mt-1 text-black" viewBox="0 0 512 512">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 
        248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 
        56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
      </svg>
      Monitor Machine Efficiency
    </li>

    <li className="flex items-start gap-2">
      <svg className="w-4 h-4 mt-1 text-black" viewBox="0 0 512 512">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 
        248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 
        56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
      </svg>
      Machine Problem Analysis
    </li>

    <li className="flex items-start gap-2">
      <svg className="w-4 h-4 mt-1 text-black" viewBox="0 0 512 512">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 
        248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 
        56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
      </svg>
      Machine Element Monitoring
    </li>

    <li className="flex items-start gap-2">
      <svg className="w-4 h-4 mt-1 text-black" viewBox="0 0 512 512">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 
        248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 
        56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
      </svg>
      Machine Performance Overview
    </li>
  </ul>
</div>

        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/home/sbs.webp" 
            alt="Remote Control Maintenance System"
            width={600}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
