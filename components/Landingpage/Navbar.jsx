"use client";

import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/Data";
import Enquiry from "@/components/Enquiry";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ Close navbar on route change (mobile + desktop)
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const whiteBgPaths = [
    "/about",
    "/contact",
    "/products",
    "/our-blogs",
    "/privacy-policy",
    "/termsandcondition",
  ];
  const isWhiteBg =
    isDesktop && whiteBgPaths.some((path) => pathname.startsWith(path));

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 ${
        isWhiteBg ? "bg-[#FFFCE7]" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto flex items-center justify-between px-4 py-3 md:py-3">
        {/* Left Section: Logo + GST */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="SBS Machinery Logo"
              width={110}
              height={60}
              className="object-contain"
            />
          </Link>
          <div className="leading-tight text-center">
            <p className="text-[#0075C9] font-bold text-sm md:text-lg">GST No</p>
            <p className="text-black font-semibold text-sm md:text-xl">
              07DXBPS1169H1ZA
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-black text-xl drop-shadow">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>

          <div className="relative group">
            <Link href="/products">
              <button className="flex cursor-pointer items-center gap-1 py-1">
                Our Products <ChevronDown size={16} />
              </button>
            </Link>

            {/* Mega Dropdown */}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex bg-white rounded-lg shadow-xl z-50 overflow-hidden"
              style={{ width: 980 }}
            >
              {/* Left: categories */}
              <div className="w-1/2 border-r border-gray-100 bg-white p-4">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.id}`}
                    onClick={() => setMobileOpen(false)} // ✅ close on click
                    onMouseEnter={() => setActiveCategory(cat.id)}
                    className={`block cursor-pointer text-lg font-semibold px-5 py-2 rounded-md transition-all ${
                      activeCategory === cat.id
                        ? "bg-[#719AD1] text-white shadow-sm"
                        : "text-[#111] hover:bg-gray-50"
                    }`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>

              {/* Right: product previews */}
              <div className="w-2/3 p-6 bg-white">
                <div className="grid grid-cols-3 gap-6">
                  {(
                    categories.find((c) => c.id === activeCategory)?.products ||
                    []
                  ).map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.id}`}
                      onClick={() => setMobileOpen(false)} // ✅ close on click
                      className="block border rounded-lg p-3 hover:shadow-md transition flex flex-col items-center text-center"
                    >
                      <div className="w-full h-36 flex items-center justify-center border rounded overflow-hidden bg-[#fafafa]">
                        <Image
                          src={p.image?.[0]?.src || "/placeholder.png"}
                          alt={p.image?.[0]?.alt || p.name}
                          width={220}
                          height={120}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="mt-3 text-sm font-semibold">{p.name}</h4>
                      <span className="mt-1 text-xs text-[#0075C9] underline">
                        Read More
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/our-blogs">Our Blogs</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/+917042039777"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-md hover:scale-105 transition"
          >
            <FaWhatsapp size={22} />
          </a>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-[#0075C9] text-white px-5 py-3 rounded-md font-semibold shadow hover:bg-[#005f9e] transition"
          >
            Enquiry Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0075C9]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md shadow-md px-6 py-4 space-y-4 text-[#0075C9] font-semibold">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)} // ✅ close
            className="block w-full py-2 border-b border-gray-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)} // ✅ close
            className="block w-full py-2 border-b border-gray-200"
          >
            About Us
          </Link>

          <details className="group border-b border-gray-200">
            <summary className="cursor-pointer flex justify-between items-center py-2">
              Our Products{" "}
              <ChevronDown
                size={16}
                className="group-open:rotate-180 transition-transform"
              />
            </summary>
            <div className="ml-4 mt-2 space-y-1">
              {categories.map((cat) => (
                <details key={cat.id} className="group">
                  <summary className="cursor-pointer py-1">{cat.name}</summary>
                  <div className="ml-4 mt-1 space-y-1">
                    {cat.products?.map((p) => (
                      <Link
                        key={p.id}
                        href={`/products/${p.id}`}
                        onClick={() => setMobileOpen(false)} // ✅ close
                        className="block py-1 px-2 text-[#0075C9] hover:bg-gray-100 rounded-md w-full"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </details>

          <Link
            href="/our-blogs"
            onClick={() => setMobileOpen(false)} // ✅ close
            className="block w-full py-2 border-b border-gray-200"
          >
            Our Blogs
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)} // ✅ close
            className="block w-full py-2 border-b border-gray-200"
          >
            Contact Us
          </Link>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
            <a
              href="https://wa.me/+917042039777"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-md"
            >
              <FaWhatsapp size={22} />
            </a>
            <button
              onClick={() => setIsFormOpen(true)}
              className="w-full sm:w-auto bg-[#0075C9] text-white px-5 py-3 rounded-md font-semibold shadow hover:bg-[#005f9e] text-center transition"
            >
              Enquiry Now
            </button>
          </div>
        </nav>
      )}

      {/* Contact Form */}
      {isFormOpen && (
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </header>
  );
}
