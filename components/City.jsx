import { serviceLocations } from "@/Data";
import Link from "next/link";
import React from "react";

const CityPage = () => {
  return (
    <div className="flex gap-2 px-2 flex-wrap overflow-hidden py-10 bg-blue-200 md:px-20">
      {serviceLocations.map(({ href, label }, idx) => (
        <Link
          href={href}
          key={idx}
          className="hover:underline hover:scale-105 hover:duration-300 "
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default CityPage;
