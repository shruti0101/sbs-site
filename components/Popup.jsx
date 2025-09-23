"use client";
import React, { useState, useEffect } from "react";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Track submission

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show thank-you message
    setSubmitted(true);
    // Optional: reset after few seconds
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false); // Close form if needed
    }, 4000);

    // Submit the form data using FormSubmit via fetch
    const form = e.target;
    const data = new FormData(form);

    fetch("https://formsubmit.co/machinerysbs@gmail.com", {
      method: "POST",
      body: data,
    }).catch((error) => console.error(error));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div
        className="relative rounded-3xl shadow-2xl p-10 max-w-sm md:max-w-2xl text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/formbg.webp)" }}
      >
        {/* Close button */}
        <button
          className="absolute cursor-pointer top-4 right-4 text-black hover:text-red-500 text-xl"
          onClick={handleClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-center text-black text-xl md:text-3xl font-semibold tracking-wide">
          Get In Touch With Us
        </h2>
        <div className="w-28 h-[4px] bg-blue-600 mx-auto mt-3 mb-8 rounded-full"></div>

        {/* Thank You Message */}
        {submitted && (
          <div className="bg-green-500 text-white p-4 rounded mb-4 text-center font-semibold">
            Thank you! Your message has been sent.
          </div>
        )}

        {/* Form */}
        {!submitted && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Product Enquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_nosponsor" value="false" />
            <input type="hidden" name="product" value="Enquiry From Website" />

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="w-1/2 p-3 rounded-md text-black text-sm border border-black border-2 bg-blue-50 focus:outline-none"
                required
              />

              <select
                name="machine"
                className="w-1/2 p-3 rounded-md text-black text-sm border border-black border-2 focus:outline-none bg-blue-50"
              >
                <option value="">Select Machine</option>
                <option value="Paper Cup Making Machine">
                  Paper Cup Making Machine
                </option>
                <option value="Paper Die Cutting Machine">
                  Paper Die Cutting Machine
                </option>
                <option value="Paper Plate Making Machine">
                  Paper Plate Making Machine
                </option>
                <option value="Bio-degradable Bag Making Machine">
                  Bio-degradable Bag Making Machine
                </option>
                <option value="Flexoprinting Machine">
                  Flexoprinting Machine
                </option>
                <option value="Non Woven Bag Making Machines">
                  Non Woven Bag Making Machines
                </option>
                <option value="Offset Bag Printing Machine">
                  Offset Bag Printing Machine
                </option>
                <option value="Momo Making Machine">Momo Making Machine</option>
                <option value="Noodle Making Machine">Noodle Making Machine</option>
              </select>
            </div>

            <div className="flex items-center bg-white rounded-md border border-black border-2 overflow-hidden">
              <img
                src="/flag.webp"
                alt="flag"
                className="w-6 h-4 ml-2 object-cover"
              />
              <span className="text-lg">🇮🇳</span>
              <input
                type="tel"
                name="phone"
                maxLength={10}
                placeholder="081234 56789"
                className="w-full bg-blue-50 p-3 text-black text-sm focus:outline-none border-0"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded-md text-black text-sm border-black border-2 focus:outline-none bg-blue-50"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              className="w-full bg-blue-50 p-3 rounded-md text-black text-sm border-black border-2 focus:outline-none h-28 resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#0077e6] to-[#005bb5] hover:opacity-90 transition rounded-md font-semibold text-white text-sm shadow-md"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
