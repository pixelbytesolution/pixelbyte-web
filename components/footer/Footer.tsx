"use client";

import Container from "../ui/Container";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/" },
  { icon: FaTwitter, href: "https://x.com/" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F4EFE6] text-[#0A1F3C] pt-16 md:pt-20 pb-10">
      <Container>
        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#0A1F3C]">
            Ready to Transform Your Business?
          </h2>

          <InteractiveHoverButton href="/contact">Get Started</InteractiveHoverButton>
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
              {socialLinks.map(({ icon: Icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Pixelbyte social profile"
                  className="w-10 h-10 rounded-full bg-[#0A1F3C]/10 flex items-center justify-center 
                  hover:bg-[#0A1F3C] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <Icon size={16} />
                </Link>
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
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
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
                <Link href="/services#web-development">Web Development</Link>
              </li>
              <li>
                <Link href="/services#mobile-apps">Mobile Apps</Link>
              </li>
              <li>
                <Link href="/services#cloud-solutions">Cloud Solutions</Link>
              </li>
              <li>
                <Link href="/services#consulting">Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#0A1F3C]/90">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-[#0A1F3C]/70">
              <li>
                <Link
                  href="https://share.google/WwODL6tEinUmWUo9w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#0A1F3C] transition-colors"
                >
                <MapPin size={18} />
                <span>
                  HiLITE Business Park,
                  <br />
                  Kozhikode, Kerala, India
                </span>
                </Link>
              </li>

              <li>
                <Link href="tel:+919876543210" className="flex items-center gap-3 hover:text-[#0A1F3C] transition-colors">
                  <Phone size={18} />
                  <span>+91 98765 43210</span>
                </Link>
              </li>

              <li>
                <Link href="mailto:pixelbytesolutions.in@gmail.com" className="flex items-center gap-3 hover:text-[#0A1F3C] transition-colors">
                  <Mail size={18} />
                  <span>pixelbytesolutions.in@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#0A1F3C]/60">
          <p>© {new Date().getFullYear()} Pixelbyte. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
