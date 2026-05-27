"use client";

import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WrenchIcon } from "lucide-react";

const services = [
  {
    title: "Branding & Strategy Design",
    desc: "Strategic brand development and visual identity design",
    image: "/images/service1.jpg",
    tags: ["Brand Identity", "Strategy", "Design"],
    href: "/services#consulting",
  },
  {
    title: "Web App Development",
    desc: "Strategic brand development and visual identity design",
    image: "/images/service2.jpg",
    tags: ["Frontend", "Backend", "API"],
    href: "/services#web-development",
  },
  {
    title: "Digital Marketing",
    desc: "Strategic brand development and visual identity design",
    image: "/images/service3.jpg",
    tags: ["SEO", "Social Media", "Ads"],
    href: "/services#consulting",
  },
  {
    title: "Mobile App Development",
    desc: "Strategic brand development and visual identity design",
    image: "/images/service4.jpg",
    tags: ["iOS", "Android", "Flutter"],
    href: "/services#mobile-apps",
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="w-full py-16 md:py-24 lg:py-32"
      style={{ background: "#F4EFE6" }}
    >
      <Container>
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#0A1F3C] mb-12 md:mb-16 tracking-wide">
          OUR SERVICE
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="relative w-full max-w-[607px] h-[612px] rounded-[30px] overflow-hidden bg-[#081B34] group transition-all duration-300"
            >
              {/* IMAGE AREA */}
              <div className="relative w-full h-[365px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* ICON */}
                <div className="absolute top-4 right-4 w-[67px] h-[65px] rounded-[20px] bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
                  <span className="text-white text-xl rotate-[-90deg]">
                    <WrenchIcon />
                  </span>
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#081B34]/40 to-[#081B34]" />
              </div>

              {/* TEXT SECTION */}
              <div
                className="absolute bottom-0 left-0 w-full h-[247px] px-6 md:px-7 pt-6 pb-6 
                bg-gradient-to-b from-[#081B34] to-[#06162A]
                rounded-b-[30px]"
              >
                {/* TITLE */}
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-base text-white/70 mb-4 leading-relaxed">
                  {item.desc}
                </p>

                {/* TAGS (Dynamic) */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.href}
                  className="w-full flex items-center justify-between px-5 py-3 rounded-xl text-sm text-white 
                  bg-gradient-to-r from-[#0A2547] to-[#0D2F5A]
                  border border-white/10
                  hover:from-[#123a6b] hover:to-[#15477f]
                  transition-all duration-300"
                >
                  Explore Service
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
