"use client";

import Container from "../ui/Container";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="w-full text-white pt-16 md:pt-20 pb-10"
      style={{
        background: "linear-gradient(180deg, #071A2F 0%, #04101F 100%)",
      }}
    >
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">PIXELBYTE</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Empowering businesses with innovative IT solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: FaFacebookF },
                { icon: FaTwitter },
                { icon: FaLinkedinIn },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                    hover:bg-white hover:text-[#04101F] transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={16} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/90">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
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
            <h4 className="text-sm font-semibold mb-4 text-white/90">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
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
            <h4 className="text-sm font-semibold mb-4 text-white/90">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/70">
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

        <div className="w-full h-px bg-white/10 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
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
