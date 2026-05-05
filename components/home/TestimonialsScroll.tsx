"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    text: "Working with Conscellence was a game-changer for us. Their market analysis and insights helped us navigate challenging market conditions and seize new opportunities.",
    author: "MICHAEL THOMPSON",
    role: "FOUNDER, ECOGREEN",
    logo: "/images/client.png",
    active: true,
  },
  {
    text: "Conscellence transformed our business operations with their customized strategies. Their team identified key areas for improvement and delivered strong results.",
    author: "EMMA RODRIGUEZ",
    role: "CEO, TRENDTECH",
    logo: "/images/client.png",
  },
  {
    text: "The leadership training and team-building programs provided by Conscellence have been invaluable. Our team is now more cohesive and productive.",
    author: "LISA NGUYEN",
    role: "COO, HEALTHYBITES",
    logo: "/images/client.png",
    active: true,
  },
  {
    text: "Conscellence transformed our business operations with their customized strategies. Their team identified key areas for improvement and delivered strong results.",
    author: "EMMA RODRIGUEZ",
    role: "CEO, TRENDTECH",
    logo: "/images/client.png",
  },
];

export default function TestimonialsScroll() {
  const loopData = [...reviews, ...reviews];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-[#081B34] overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            <span className="text-white/40 block">CLIENT</span>
            <span className="text-white">SUCCESS</span>{" "}
            <span className="text-white/40">STORIES</span>
          </h2>
        </div>

        {/* Scroll Wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Edge fade */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#081B34] to-transparent z-10" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#081B34] to-transparent z-10" />

          {/* Scrolling row */}
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loopData.map((item, index) => (
              <div
                key={index}
                className={`w-[416px] h-[330px] flex-shrink-0 rounded-[40px] p-10 flex flex-col justify-between transition-all duration-300 ${
                  item.active
                    ? "bg-[#0A2547]"
                    : "border border-white/30 bg-transparent"
                }`}
              >
                {/* Top Content */}
                <div className="flex flex-col gap-6">
                  {/* Quote */}
                  <div className="text-[#C6A15B] text-lg">“</div>

                  {/* Text */}
                  <p className="text-white/90 text-sm leading-relaxed line-clamp-4">
                    {item.text}
                  </p>
                </div>

                {/* Bottom (Logo + Author) */}
                <div className="flex items-center gap-4">
                  {/* Logo */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={item.logo}
                      alt="client logo"
                      fill
                      className="object-contain opacity-80"
                    />
                  </div>

                  {/* Author */}
                  <div>
                    <p className="text-sm text-white font-medium">
                      {item.author}
                    </p>
                    <p className="text-xs text-white/60">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
