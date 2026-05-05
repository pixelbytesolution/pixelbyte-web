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
    { name: "Works", href: "/works" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full flex justify-center absolute top-6 z-50 px-4">
      <div className="w-full max-w-[1000px] bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-md px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="PixelByte"
            width={140}
            height={40}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
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
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[90px] w-full max-w-[1000px] bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:hidden">
          <div className="flex flex-col gap-4 text-center">
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
    </div>
  );
}
