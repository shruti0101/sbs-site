"use client";

import {
  cardDataLandingPage,
  InquiryWhyChooseUs,
  ourProductLandingPage,
} from "@/Data";
import { BadgeCheck, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const faqData = [
  {
    question: "What does SBS Machinery specialize in?",
    answer:
      "SBS Machinery is a leading paper cup making machine manufacturer in India, specializing in high-speed, fully automatic paper cup machines, biodegradable bag making machines, die cutting units, and printing systems.",
  },
  {
    question: "Where is SBS Machinery based?",
    answer:
      "Our manufacturing and support operations are based in Najafgarh, Delhi, with pan-India delivery and service coverage.",
  },
  {
    question: "What types of paper cup machines do you offer?",
    answer:
      "We offer a wide range of paper cup machines including single PE, double PE, and ultrasonic paper cup making machines, suited for different cup sizes from 30ml to 350ml and more.",
  },
  {
    question: "Are your machines automatic or semi-automatic?",
    answer:
      "SBS Machinery mainly provides fully automatic paper cup machines, designed to increase production efficiency, reduce manual labor, and ensure consistent cup quality.",
  },
  {
    question: "What is the production capacity of your paper cup making machines?",
    answer:
      "Our machines can produce anywhere from 45 to 120 paper cups per minute, depending on the model and cup size.",
  },
  {
    question: "Can I customize the cup size and shape?",
    answer:
      "Yes, we offer customizable dies and cup sizes based on your specific requirements. You can produce various shapes for tea cups, coffee cups, juice glasses, and ice cream bowls.",
  },
  {
    question: "What power source is required for your machines?",
    answer:
      "Most of our machines require a 220V to 380V 3-phase power supply, depending on the model. We’ll recommend the best power configuration during consultation.",
  },
  {
    question: "Do you provide installation and training?",
    answer:
      "Yes. As a complete paper cup machine manufacturer, we provide on-site installation, training for operators, and a maintenance guide after delivery.",
  },
];

const Location = () => {
  const params = useParams();
  const city =
    params.location.split("-")[params.location.split("-").length - 1];

  console.log(city);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <div className="mt-[20vh] ">
        <section
          style={{
            backgroundImage: "url('/sbsImage/PaperCupsBG.jpg')",
            backgroundSize: "cover",
            objectPosition: "center",
          }}
          className="py-20 relative z-10"
        >
          <div className="absolute inset-0 bg-gray-900/60" />

          <h1 className="text-center relative font-bold text-white text-2xl px-5 md:py-14 md:text-4xl">
            Paper Cup Making Machine Manufacturer in {city}
          </h1>
        </section>

        {/* second section  */}
        <section className="mb-10 py-10 px-2 md:px-20">
          <p className="text-2xl text-center py-4 font-bold">
            Elevate Your Production with SBS Machinery’s Paper Cup Making
            Machines
          </p>

          <p className="text-center">
            Choose <span className="font-bold">SBS Machinery</span> for
            industry-leading paper cup, bag making, and printing solutions. With
            a focus on quality, customization, and customer satisfaction, we
            deliver excellence at every step. Here’s why businesses across India
            trust us:
          </p>

          <p className="py-5">
            SBS Machinery has gained recognition as the top paper cup making
            machine manufacturer in India. Our efforts have been continuous in
            expanding our production to different sectors. The commitment to
            quality and innovation has been the one and only reason for setting
            a standard for the world.{" "}
          </p>
          <p className="py-5">
            We have been considered a reliable partner by the organizations from
            all over the world that are in the process of making their
            production operations easier. This is largely attributed to our
            high-quality equipment and a customer-centric approach. Our product
            range which is designed to fulfill the diverse needs of modern
            industry reflects our commitment to excellence.
          </p>
          <p className="py-5">
            Approximately 250 productive machines are currently in use around
            the India from SBS Machinery and they are famous for their high
            quality and long-lastingness among others. Whenever you are looking
            for a solution to increase your workforce output, just turn to us
            and we will be there with the latest technology to help you.
          </p>
        </section>

        {/* card section  */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 md:py-5 md:mx-auto md:px-8 lg:grid-cols-3 lg:px-14">
          {cardDataLandingPage.map(({ title, icon, desc }, idx) => (
            <div
              className={`${idx % 2 === 0 ? "bg-[#1CBC9A] text-white" : "bg-transparent text-[#1CBC9A]"} border px-3 py-5 flex flex-col items-center gap-3 hover:rounded-3xl shadow-xl hover:shadow-2xl hover:duration-300`}
            >
              <div className="">{icon}</div>
              <p className="text-2xl font-bold text-center">{title}</p>
              <p>{desc}</p>
            </div>
          ))}
        </section>

        {/* content paragraphs  */}
        <section className="py-10 px-5 text-center lg:px-32">
          <p className="text-2xl font-bold my-5 md:text-4xl">
            Paper Cup Making Machine Manufacturer in {city}{" "}
          </p>
          <p className="py-3">
            Are you considering to begin or expand your disposable paper product
            business? Do you have the problem of finding dependable machinery
            that offers the right balance between speed, quality, and
            compliance? No need to go anywhere else—SBS Machinery, one of the
            most reliable{" "}
            <span className="font-bold">
              Paper Cup Making Machine Manufacturers based in {city}
            </span>
            , is here to help you as it has been the case with various Indian
            businesses.
          </p>

          <p className="py-3">
            SBS Machinery’s eco-friendly packaging machines developed by the
            company with the mainstay of innovation, customization, and
            long-term performance are wide-ranging and can be utilized by a
            diverse audience in today's fast-growing food service and packaging
            industries. The following equipment is what we have to offer:
          </p>

          <ul className="md:text-left">
            <li>Paper Cup Making Machines (60 to 130 cups.min)</li>
            <li>Paper Plate and Die Cutting Machines</li>
            <li>Non-Woven Bag Making Machines</li>
            <li>Biodegradable Bag Making Units</li>
            <li>Flexo and Offset Printing Machines</li>
          </ul>

          <p className="py-3">
            Every single machine is made of top-quality raw materials, and it is
            done in a manner that follows the strictest of manufacturing
            standards, bearing in mind performance and durability that is
            unparalleled even under the challenges of high-demand production
            cycles.
          </p>
        </section>

        {/* our products  */}
        <section className="mb-10 px-3 py-10 flex flex-col gap-10 overflow-hidden">
          {ourProductLandingPage.map(
            ({ subTitle, title, desc, tabel, link, image }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center md:flex-row md:gap-10 md:px-10 lg:px-32 md:py-14 lg:items-center lg:gap-8"
              >
                <div className="md:w-1/2">
                  <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                    className="lg:h-[50vh] lg:w-auto"
                  />
                </div>

                <div className="md:w-1/2">
                  <div className="bg-[#008CA3] h-4 w-24 mb-3" />

                  <p className="text-[#20BD9B] font-medium">{subTitle}</p>
                  <p className="font-bold text-3xl my-2 md:text-xl lg:text-2xl">
                    {title}
                  </p>
                  <p className="my-2 text-sm text-gray-700 mt-2">{desc}</p>

                  <table className="w-full text-left border-collapse text-sm">
                    <thead className="bg-[#008CA3] text-white">
                      <tr>
                        <th className="border p-2 font-bold">Specification</th>
                        <th className="border p-2 font-bold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(tabel).map(([key, value]) => (
                        <tr key={key} className="border-b">
                          <td className="border p-2 font-semibold">{key}</td>
                          <td className="border p-2">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          )}
        </section>

        {/* connect us  */}
        <section
          className="flex flex-col items-center px-5 py-8 space-y-5"
          style={{
            backgroundImage: "url('/ctabg.webp')",
            backgroundSize: "cover",
            objectPosition: "center",
          }}
        >
          <p className="text-center text-2xl font-bold">
            #Largest Paper Cup Making Machines Manufacturer in India
          </p>
          <p className="text-center text-2xl font-bold">+91 7042039777</p>
          <button className="bg-blue-600 text-white py-2 px-5 rounded-lg">
            Get Connect
          </button>
        </section>

        {/* why choose us  */}

        <section className="mb-10 px-4 py-8 md:px-10 lg:py-14">
          <h3 className="text-3xl font-bold mb-3 lg:text-4xl lg:text-center">
            Why Choose Us
          </h3>

          <div className="flex flex-col md:flex-row md:items-center lg:px-10 lg:gap-10">
            <div>
              <p className="text-xl font-bold mb-3 md:text-2xl">
                100%{" "}
                <span className="text-[#008CA3]">
                  GUARANTEED MANUFACTURING PERFORMANCE
                </span>
              </p>

              <p className="text-sm mb-3 md:text-xl">
                ou might be thinking — “Every machine manufacturer makes big
                claims. Why should I trust SBS Machinery?”
              </p>

              <p className="text-sm font-bold mb-5 md:text-xl">
                Here’s what sets us apart — We don’t just promise performance…
                We deliver 100% Guaranteed Results.
              </p>

              <ul className="space-y-3 md:text-xl">
                <li className="flex gap-2  items-start text-sm">
                  <BadgeCheck />
                  High-Speed Paper Cup Machines – 100% Output Accuracy
                </li>
                <li className="flex gap-2  items-start text-sm">
                  <BadgeCheck />
                  Custom-Built Solutions – For Every Scale of Production
                </li>
                <li className="flex gap-2  items-start text-sm">
                  <BadgeCheck />
                  Dedicated Support Team – From Installation to Maintenance
                </li>
                <li className="flex gap-2  items-start text-sm">
                  <BadgeCheck />
                  Transparent Pricing – No Surprises, No Hidden Costs
                </li>
                <li className="flex gap-2  items-start text-sm">
                  <BadgeCheck />
                  Helping Startups & Factories Scale Without Operational Hassles
                </li>
              </ul>
            </div>

            {/* images  */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              {InquiryWhyChooseUs.map(({ image, num, desc, bg }, idx) => (
                <div
                  key={idx}
                  className={`${bg} flex flex-col items-center gap-3 border rounded-xl px-2 py-5`}
                >
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={desc}
                    className="h-20 w-auto"
                  />
                  <p className="text-green-700 text-2xl font-bold">{num}</p>
                  <p className="text-center text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* faq section  */}
        <section className="py-10 px-5 md:px-20 lg:px-32 bg-blue-100">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-4xl">
            Paper Cup Making Machine Manufacturer in India – FAQs
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left duration-300"
                >
                  <p className="font-bold text-lg">
                    {index + 1}. {faq.question}
                  </p>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="mt-2">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Location;
