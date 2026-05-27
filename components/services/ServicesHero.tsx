"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white pt-40 pb-28 border-b border-white/5">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-[-100px] left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Cinematic Digital Grid Overlap */}
      <div
        className="
          absolute inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:50px_50px]
          pointer-events-none
        "
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              items-center
              gap-2
              px-4 py-2
              rounded-full
              bg-white/5
              border border-white/10
              backdrop-blur-md
              text-xs sm:text-sm
              font-semibold
              tracking-widest
              text-cyan-300
              uppercase
            "
          >
            ✦ Engineering Capabilities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.42, 0, 0.58, 1],
            }}
            className="
              mt-8
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-[1.1]
              tracking-tighter
            "
          >
            Our Technical
            <span className="block mt-2 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
              Production Matrix
            </span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="
              mt-8
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              leading-relaxed
              text-white/70
              font-light
            "
          >
            Pixelbyte Solutions designs and deploys optimized digital architecture out of Kozhikode. 
            We build lightning-fast web infrastructure and bulletproof business tools engineered to scale.
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-4
            "
          >
            <Link
              href="#service-matrix"
              className="
                w-full sm:w-auto
                px-8 py-4
                rounded-xl
                bg-gradient-to-r
                from-[#2FA4FF]
                to-[#5B8CFF]
                text-white
                text-sm
                font-semibold
                shadow-lg shadow-blue-500/20
                hover:scale-[1.03]
                transition-all duration-300
              "
            >
              Explore Architecture
            </Link>

            <Link
              href="/contact"
              className="
                w-full sm:w-auto
                px-8 py-4
                rounded-xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                text-white
                text-sm
                font-medium
                hover:bg-white/10
                transition-all duration-300
              "
            >
              Request Tech Audit
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
