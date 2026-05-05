"use client";

import Container from "../ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ApproachSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* LEFT SIDE */}
          <div className="relative">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#0A1F3C] leading-[1.1] tracking-[-1px]"
            >
              OUR <br /> APPROACH
            </motion.h2>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-6 left-[140px] md:left-[200px] lg:left-[220px]"
            >
              <span className="text-3xl md:text-4xl text-[#0A1F3C]/70">↘</span>
            </motion.div>

            {/* Floating Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 md:mt-12 lg:mt-14"
            >
              <Image
                src="/images/abstract-shape-for-approach-section.png"
                alt="decorative"
                width={300}
                height={220}
                className="object-contain"
                style={{
                  transform: "rotate(-620deg)",
                }}
              />
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <p className="text-base md:text-lg text-[#1a1a1a] leading-relaxed font-light">
              <span className="font-medium">
                We analyze. We design. We implement. We support.
              </span>
              <br />
              <br />
              PIXELBYTE delivers tailored IT infrastructure and digital
              solutions through a strategic, step-by-step methodology focused on
              performance, security, and scalability.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
