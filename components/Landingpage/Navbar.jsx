"use client";

import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false)



useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);


    const whiteBgPaths = ["/about", "/contact", "/products", "/blogs"];

  // Check condition
  const isWhiteBg =
    isDesktop && whiteBgPaths.some((path) => pathname.startsWith(path));

  return (
    <header className={`absolute  top-0 left-0 w-full z-50 ${isWhiteBg ? "bg-[#FFFCE7]" : "bg-transparent"}`}>
      <div className="w-full mx-auto flex items-center justify-between px-4 py-3 md:py-4 
        ">
        
        {/* Left Section: Logo + GST */}
        <div className="flex items-center gap-8">
          <Link href="/">
          <Image
            src="/home/logo.webp"
            alt="SBS Machinery Logo"
            width={110}
            height={60}
            className="object-contain"
          />
          </Link>
          <div className="leading-tight text-center">
            <p className="text-[#0075C9] font-bold text-sm md:text-base">GST No</p>
            <p className="text-black font-semibold text-sm md:text-lg">
              07DXBPS1169H1ZA
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 font-semibold text-black text-xl drop-shadow">
          <Link href="/" className=" ">Home</Link>
          <Link href="/about" className=" ">About Us</Link>
          <div className="relative group">
            <button className="flex items-center gap-1">
              Our Products <ChevronDown size={16} />
            </button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white text-black shadow-md rounded-md mt-1 p-2 w-56 z-50">
              <Link href="/products/paper-cup" className="block px-4 py-2 hover:bg-gray-100">Paper Cup Making Machine</Link>
              <Link href="/products/die-cutting" className="block px-4 py-2 hover:bg-gray-100">Paper Die Cutting Machine</Link>
              <Link href="/products/printing" className="block px-4 py-2 hover:bg-gray-100">Offset Printing Machine</Link>
              <Link href="/products/bag-making" className="block px-4 py-2 hover:bg-gray-100">Bio-degradable Bag Making Machine</Link>
            </div>
          </div>
          <Link href="/blogs" className="">Our Blogs</Link>
          <Link href="/contact" className="">Contact Us</Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/918123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-md hover:scale-105 transition"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="#enquiry"
            className="bg-[#0075C9] text-white px-5 py-3 rounded-md font-semibold shadow hover:bg-[#005f9e] transition"
          >
            Enquiry Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 space-y-4 text-[#0075C9] font-semibold">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About Us</Link>
          <details>
            <summary className="cursor-pointer">Our Products</summary>
            <div className="ml-4 mt-2 space-y-2 text-sm">
              <Link href="/products/paper-cup" className="block">Paper Cup Making Machine</Link>
              <Link href="/products/die-cutting" className="block">Paper Die Cutting Machine</Link>
              <Link href="/products/printing" className="block">Offset Printing Machine</Link>
              <Link href="/products/bag-making" className="block">Bio-degradable Bag Making Machine</Link>
            </div>
          </details>
          <Link href="/blogs" className="block">Our Blogs</Link>
          <Link href="/contact" className="block">Contact Us</Link>

          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://wa.me/918123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-md"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="#enquiry"
              className="bg-[#0075C9] text-white px-5 py-3 rounded-md font-semibold shadow hover:bg-[#005f9e] transition"
            >
              Enquiry Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
