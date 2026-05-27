"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../../ui/Container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ end, duration = 2, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      setCount(Math.floor(end * progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white overflow-hidden py-20 md:py-32 lg:py-40">
      <Container>
        <div className="space-y-24">
          {/* Top Section - Logo + Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
          >
            {/* Left - Logo and Label */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-start gap-10 flex-shrink-0"
            >
              {/* About Company Label with play icon */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-[#051E3D]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <polygon points="5 3 19 12 5 21" />
                </svg>
                <span className="text-[#051E3D] font-semibold text-base tracking-wide">
                  About Company
                </span>
              </div>

              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className="w-44 h-44 flex-shrink-0"
              >
                <Image
                  src="/images/pixelbyte-logo.png"
                  alt="Pixelbyte Logo"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Right - Description and Button */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1 pt-2"
            >
              <p className="text-[#1a1a1a] text-xl md:text-2xl leading-relaxed font-light mb-12">
                We deliver comprehensive, future-ready technology solutions
                designed to enhance operational efficiency, strengthen security,
                and support long-term business growth.{" "}
                <span className="text-[#666666]">
                  Our portfolio includes advanced IT infrastructure, networking,
                  security systems, data
                </span>
              </p>

              {/* About Button */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-8 py-3 rounded-full
                    border-2 border-[#1a1a1a] text-[#1a1a1a]
                    hover:bg-[#1a1a1a] hover:text-white
                    transition-all duration-300 font-medium text-base"
                >
                  <span>About us</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              {/* Stat 1 - 13+ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center lg:text-left"
              >
                <div className="flex items-baseline gap-2 justify-center lg:justify-start mb-4">
                  <span className="text-6xl md:text-7xl font-black text-[#051E3D]">
                    <Counter end={13} duration={2.5} />
                  </span>
                  <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#8B7355] to-[#C4A574] bg-clip-text text-transparent">
                    +
                  </span>
                </div>
                <p className="text-sm md:text-base text-[#1a1a1a] font-medium">
                  Years of Industry
                  <span className="block bg-gradient-to-r from-[#8B7355] to-[#C4A574] bg-clip-text text-transparent font-semibold">
                    Expertise
                  </span>
                </p>
              </motion.div>

              {/* Stat 2 - 500+ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center lg:text-left"
              >
                <div className="flex items-baseline gap-2 justify-center lg:justify-start mb-4">
                  <span className="text-6xl md:text-7xl font-black text-[#051E3D]">
                    <Counter end={500} duration={3} />
                  </span>
                  <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#8B7355] to-[#C4A574] bg-clip-text text-transparent">
                    +
                  </span>
                </div>
                <p className="text-sm md:text-base text-[#1a1a1a] font-medium">
                  Successful IT
                  <span className="block bg-gradient-to-r from-[#8B7355] to-[#C4A574] bg-clip-text text-transparent font-semibold">
                    Projects Completed
                  </span>
                </p>
              </motion.div>

              {/* Stat 3 - 100+ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center lg:text-left"
              >
                <div className="flex items-baseline gap-2 justify-center lg:justify-start mb-4">
                  <span className="text-6xl md:text-7xl font-black text-[#051E3D]">
                    <Counter end={100} duration={2.5} />
                  </span>
                  <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#8B7355] to-[#C4A574] bg-clip-text text-transparent">
                    +
                  </span>
                </div>
                <p className="text-sm md:text-base text-[#1a1a1a] font-medium">
                  Enterprise Clients
                  <span className="block bg-gradient-to-r from-[#8B7355] to-[#C4A574] bg-clip-text text-transparent font-semibold">
                    Served
                  </span>
                </p>
              </motion.div>

              {/* Stat 4 - 99% */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center lg:text-left"
              >
                <div className="flex items-baseline gap-2 justify-center lg:justify-start mb-4">
                  <span className="text-6xl md:text-7xl font-black text-[#051E3D]">
                    <Counter end={99} duration={2} />
                  </span>
                  <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#8B7355] to-[#C4A574] bg-clip-text text-transparent">
                    %
                  </span>
                </div>
                <p className="text-sm md:text-base text-[#1a1a1a] font-medium">
                  Client Satisfaction
                  <span className="block bg-gradient-to-r from-[#8B7355] to-[#C4A574] bg-clip-text text-transparent font-semibold">
                    Rate
                  </span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
