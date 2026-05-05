"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Works", href: "/works" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      {/* Container */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="PixelByte"
            width={160}
            height={40}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`transition ${
                item.name === "Home"
                  ? "text-[#c9a55c]"
                  : "text-gray-800 hover:text-[#c9a55c]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden w-full bg-white border-t border-gray-200 px-6 py-6 shadow-md">
          <div className="flex flex-col gap-5 text-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-[16px] font-medium ${
                  item.name === "Home" ? "text-[#c9a55c]" : "text-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
