"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#001f3f] to-[#002d63] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold border-l-2 border-cyan-400 pl-2 mb-4">About Us</h3>
          <p className="text-md leading-relaxed">
            SBS Machinery Pvt Ltd Is A Delhi Based Reputed Firm Engaged In Manufacturing, Importing
            And Exporting A Comprehensive Range Of{" "}
            <span className="text-cyan-400">
              Paper Cup Making Machine, Bio-degradable Bag Making Machine, Die Cutting Machine,
              Flexo Printing Machine, Non Woven Bag Making Machine, Offset Bag Printing Machine, Paper
              Plate Making Machine
            </span>{" "}
            Etc.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold border-l-2 border-cyan-400 pl-2 mb-4">Contact us</h3>
          <p className="text-md flex items-start gap-2 mb-3">
            <FaMapMarkerAlt className="mt-1 text-cyan-400" />
            Plot Number 1A 31/19/1 Gali no- 4 Gemini Park Najafgarh Delhi Pin Code 110043 Near by:-
            Metro Station Nangli Sakrawati Exit Gate Number 1
          </p>
          <p className="text-sm flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-cyan-400" /> +91-7042039777
          </p>
          <p className="text-sm flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-cyan-400" /> +91-8810570771
          </p>
          <p className="text-sm flex items-center gap-2 mb-4">
            <FaEnvelope className="text-cyan-400" /> machinerysbs@gmail.com
          </p>
          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="p-2 bg-black rounded-full hover:bg-cyan-500 transition">
              <FaYoutube />
            </a>
            <a href="#" className="p-2 bg-black rounded-full hover:bg-cyan-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-black rounded-full hover:bg-cyan-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Main Links */}
        <div>
          <h3 className="text-xl font-semibold border-l-2 border-cyan-400 pl-2 mb-4">Main Menu</h3>
          <ul className="space-y-2 text-md">
            <li><a href="#" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#" className="hover:text-cyan-400">About us</a></li>
            <li><a href="#" className="hover:text-cyan-400">Our Products</a></li>
            <li><a href="#" className="hover:text-cyan-400">Our Blog</a></li>
            <li><a href="#" className="hover:text-cyan-400">Contact us</a></li>
            <li><a href="#" className="hover:text-cyan-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* More Info */}
        <div>
          <h3 className="text-xl font-semibold border-l-2 border-cyan-400 pl-2 mb-4">More Information</h3>
          <ul className="space-y-2 text-md cursor-pointer ">
            <li><a href="#" className="hover:text-cyan-400">Paper Cup Making Machine</a></li>
            <li><a href="#" className="hover:text-cyan-400">Paper Die Cutting Machine</a></li>
            <li><a href="#" className="hover:text-cyan-400">Paper Plate Making Machine</a></li>
            <li><a href="#" className="hover:text-cyan-400">Bio-degradable Bag Making Machine</a></li>
            <li><a href="#" className="hover:text-cyan-400">Flexo Printing Machine</a></li>
            <li><a href="#" className="hover:text-cyan-400">Non Woven Bag Making Machine</a></li>
            <li><a href="#" className="hover:text-cyan-400">Offset Bag Printing Machine</a></li>
          </ul>
        </div>
      </div>

      {/* Trust Elite Section */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6 items-center pb-8">
        <div>
          <h3 className="text-xl font-semibold border-l-2 border-cyan-400 pl-2 mb-4">
            Trust Elite Certificate
          </h3>
          <p className="text-sm leading-relaxed">
            We are proud to present the Trust Elite Certificate of Excellence to SBS Machinery Pvt
            Ltd, recognizing their commitment to exceptional customer service, outstanding business
            practices, and a dedication to building trust with their customers.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src="/TRUST-ELITE.webp" alt="Trust Elite" className="w-28 h-28 object-contain" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-gray-300 text-center text-sm py-3 px-4 flex flex-col md:flex-row justify-between items-center">
        <p>Copyrights © 2024-25 SBS Machinery Pvt Ltd. All Right Reserved.</p>
        <p> <a href="https://promozionebranding.com/" className="hover:text-cyan-400">Developed & Manage by Promozione Branding Pvt Ltd.</a>  </p>
      </div>
    </footer>
  );
};

export default Footer;
