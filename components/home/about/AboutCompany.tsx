"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../../ui/Container";
import { motion } from "framer-motion";

export default function AboutCompany() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section
      className="w-full py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{
        background: "#F4EFE6",
      }}
    >
      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left - Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about-hero.png"
              alt="About Company"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            className="space-y-8 md:space-y-10 lg:space-y-12"
          >
            <motion.p
              variants={itemVariants}
              className="text-[#0A2F51] font-semibold text-base tracking-wide"
            >
              About Company
            </motion.p>

            <motion.div variants={itemVariants} className="mb-2">
              <Image
                src="/images/logo.png"
                alt="Pixelbyte Logo with Tagline"
                width={300}
                height={100}
                className="w-full max-w-xs h-auto object-contain"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-[#1a1a1a] font-light leading-relaxed"
            >
              Empowering Progress. Delivering Excellence.
            </motion.p>

            {/* Vision */}
            <motion.div variants={sectionVariants} className="space-y-4">
              <div className="flex gap-4 items-start">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="flex-shrink-0 w-6 h-6 bg-[#0A5F8A] rounded-full flex items-center justify-center mt-1 shadow-md"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                    Vision
                  </h3>
                  <p className="text-[#4a4a4a] font-light leading-relaxed text-base">
                    To become a trusted industry leader by consistently
                    delivering innovative solutions that inspire growth,
                    performance, and long-term success.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div variants={sectionVariants} className="space-y-4">
              <div className="flex gap-4 items-start">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="flex-shrink-0 w-6 h-6 bg-[#0A5F8A] rounded-full flex items-center justify-center mt-1 shadow-md"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                    Mission
                  </h3>
                  <p className="text-[#4a4a4a] font-light leading-relaxed text-base">
                    To provide high-quality, customer-focused services through
                    innovation, integrity, and continuous improvement while
                    building lasting relationships with our clients.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={sectionVariants} className="space-y-4">
              <div className="flex gap-4 items-start">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="flex-shrink-0 w-6 h-6 bg-[#0A5F8A] rounded-full flex items-center justify-center mt-1 shadow-md"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                    Our values and beliefs
                  </h3>
                  <p className="text-[#4a4a4a] font-light leading-relaxed text-base">
                    To provide high-quality, customer-focused services through
                    innovation, integrity, and continuous improvement while
                    building lasting relationships with our clients.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button (UNCHANGED - gradient is correct here) */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(10, 47, 81, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full
                  bg-gradient-to-r from-[#0A2F51] to-[#AD8C52] text-white font-semibold text-base
                  transition-all duration-300
                  shadow-lg hover:shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">Partner With Us Today</span>

                <motion.svg
                  className="w-5 h-5 relative z-10"
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
      </Container>
    </section>
  );
}
