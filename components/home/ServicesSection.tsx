"use client";

import Container from "../ui/Container";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Customized Technology Strategy",
    desc: "Tailor-made strategies to address your unique business challenges and opportunities, ensuring sustainable growth and competitive advantage.",
  },
  {
    title: "Infrastructure Optimization",
    desc: "Streamline your processes and improve efficiency with our expert guidance, helping you save time and resources.",
  },
  {
    title: "Technology Assessment & Consultation",
    desc: "Gain valuable market insights and stay ahead of the competition with our comprehensive analysis and data-driven recommendations.",
  },
  {
    title: "Implementation & Ongoing Support",
    desc: "Enhance your leadership capabilities and foster a high-performing team through our specialized training and development programs.",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="w-full py-16 md:py-24 lg:py-32"
      style={{ background: "#F4EFE6" }}
    >
      <Container>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl lg:text-5xl font-medium mb-12 md:mb-16"
        >
          <span className="text-[#9CA3AF]">WHAT WE CAN DO </span>
          <span className="text-[#0A1F3C]">FOR YOU?</span>
        </motion.h2>

        {/* Main Box */}
        <div
          className="rounded-[32px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
          }}
        >
          {/* Service Rows */}
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 px-6 md:px-12 py-8 md:py-10 items-start ${
                index !== services.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              {/* Arrow */}
              <div className="md:col-span-1 flex items-start">
                <span className="text-white/70 text-xl">↘</span>
              </div>

              {/* Title */}
              <div className="md:col-span-5">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Bottom CTA Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center px-6 md:px-12 py-10 bg-[#061F3E]">
            {/* Left Text */}
            <div className="md:col-span-6 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-[1.1] tracking-[-0.5px]">
                Get a Free IT <br className="hidden sm:block" />
                Consultation
              </h3>
            </div>

            {/* Button */}
            <div className="md:col-span-6 flex md:justify-end">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white hover:text-[#0A1F3C] transition-all duration-300">
                SCHEDULE A FREE CALL
                <span className="text-lg">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
