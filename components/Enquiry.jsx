"use client"
import React from "react"

export default function ContactForm({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      {/* Form Container with BG */}
      <div
        className="relative rounded-3xl shadow-2xl p-10 w-[350px] md:w-[570px] text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/home/eco3-1024x745.webp)" }}
      >
        {/* Close button */}
        <button
          className="absolute cursor-pointer top-4 right-4 text-white hover:text-red-500 text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        

        {/* Title */}
        <h2 className="text-center text-white text-xl md:text-3xl font-semibold tracking-wide">
          Get In Touch With Us
        </h2>
        <div className="w-28 h-[4px] bg-cyan-600 mx-auto mt-3 mb-8 rounded-full"></div>

        {/* Form */}
        <form
          className="space-y-4"
          action="https://formsubmit.co/machinerysbs@gmail.com"
          method="POST"
        >
          {/* Hidden configs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Product Enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="product" value="Enquiry From Website" />

          {/* Select + Name */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-1/2 p-3 rounded-md backdrop-blur-xs text-black text-sm border border-white border-2 bg-white-50 focus:outline-none"
            />

            <select className="w-1/2 p-3 rounded-md backdrop-blur-xs text-black text-sm border border-white border-2 focus:outline-none bg-white-50">
              <option value="Select Machine">Select Machine</option>
              <option value="Paper Cup Making Machine">Paper Cup Making Machine</option>
              <option value="Paper Die Cutting Machine">Paper Die Cutting Machine</option>
              <option value="Paper Plate Making Machine">Paper Plate Making Machine</option>
              <option value="Bio-degradable Bag Making Machine">Bio-degradable Bag Making Machine</option>
              <option value="Flexoprinting Machine">Flexoprinting Machine</option>
              <option value="Non Woven Bag Making Machines">Non Woven Bag Making Machines</option>
              <option value="Offset Bag Printing Machine">Offset Bag Printing Machine</option>
              <option value="Momo Making Machine">Momo Making Machine</option>
              <option value="Noodle Making Machine">Noodle Making Machine</option>
            </select>
          </div>

          {/* Phone with flag */}
          <div className="flex items-center bg-blue/30 rounded-md border border-white border-2 overflow-hidden">
            <img src="/flag.webp" alt="flag" className="w-6 h-4 ml-2 object-cover" />
            <span className="text-lg">🇮🇳</span>
            <input
              type="tel"
              maxLength={10}
              placeholder="081234 56789"
              className="w-full bg-blue/10 p-3 backdrop-blur-xs text-black text-sm focus:outline-none border-0"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md text-black text-sm border-white border-2 focus:outline-none bg-white-50 backdrop-blur-xs"
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            className="w-full bg-white-50 p-3 rounded-md text-black text-sm border-white border-2 focus:outline-none h-28 resize-none backdrop-blur-xs"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#0077e6] to-[#005bb5] hover:opacity-90 transition rounded-md font-semibold text-white text-sm shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
