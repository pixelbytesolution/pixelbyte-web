"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Our Works", href: "/works" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center z-50 px-4 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`w-full max-w-[1100px] rounded-xl transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl border border-gray-200"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        {/* Inner Navbar */}
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="PixelByte"
            width={160}
            height={40}
            priority
          />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`transition ${
                  isActive(item.href)
                    ? "text-[#c9a55c]"
                    : "text-gray-800 hover:text-[#c9a55c]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden border-t border-gray-200 px-6 py-6 bg-white rounded-b-xl">
            <div className="flex flex-col gap-5 text-center">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-[16px] font-medium ${
                    isActive(item.href) ? "text-[#c9a55c]" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
