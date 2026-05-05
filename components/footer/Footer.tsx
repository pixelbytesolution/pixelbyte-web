"use client";

import Container from "../ui/Container";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F4EFE6] text-[#0A1F3C] pt-16 md:pt-20 pb-10">
      <Container>
        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#0A1F3C]">
            Ready to Transform Your Business?
          </h2>

          <InteractiveHoverButton> Get Started </InteractiveHoverButton>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#0A1F3C]/20 mb-10" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">PIXELBYTE</h3>
            <p className="text-[#0A1F3C]/70 text-sm leading-relaxed mb-6">
              Empowering businesses with innovative IT solutions, scalable
              infrastructure, and digital transformation strategies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-[#0A1F3C]/10 flex items-center justify-center 
                  hover:bg-[#0A1F3C] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#0A1F3C]/90">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-[#0A1F3C]/70">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#0A1F3C]/90">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-[#0A1F3C]/70">
              <li>
                <Link href="#">Web Development</Link>
              </li>
              <li>
                <Link href="#">Mobile Apps</Link>
              </li>
              <li>
                <Link href="#">Cloud Solutions</Link>
              </li>
              <li>
                <Link href="#">Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#0A1F3C]/90">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-[#0A1F3C]/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} />
                <span>
                  HiLITE Business Park,
                  <br />
                  Kozhikode, Kerala, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>pixelbytesolution.in@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#0A1F3C]/60">
          <p>© {new Date().getFullYear()} Pixelbyte. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
