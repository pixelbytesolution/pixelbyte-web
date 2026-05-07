"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] text-white pt-36 pb-24">
      {/* Background Glow */}
      <div
        className="
          absolute
          top-[-120px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-blue-500/10
          blur-[140px]
          rounded-full
        "
      />

      {/* Small Grid Effect */}
      <div
        className="
          absolute inset-0
          opacity-[0.04]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              items-center
              gap-2
              px-4 py-2
              rounded-full
              bg-white/10
              border border-white/10
              backdrop-blur-md
              text-sm
              font-medium
              text-blue-300
            "
          >
            ✦ Premium Digital Solutions
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-8
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              leading-[1.05]
              tracking-tight
            "
          >
            Transforming Ideas Into
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Powerful Digital Products
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
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
              md:text-lg
              leading-relaxed
              text-white/70
            "
          >
            We craft scalable digital experiences through cutting-edge
            development, modern UI/UX design, cloud infrastructure, and
            intelligent business solutions tailored for ambitious brands.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
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
            {/* Primary */}
            <button
              className="
                px-8 py-4
                rounded-2xl
                bg-gradient-to-r
                from-[#2FA4FF]
                to-[#5B8CFF]
                text-white
                font-medium
                shadow-lg shadow-blue-500/20
                hover:scale-[1.03]
                transition-all duration-300
              "
            >
              Explore Services
            </button>

            {/* Secondary */}
            <button
              className="
                px-8 py-4
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                text-white
                font-medium
                hover:bg-white/10
                transition-all duration-300
              "
            >
              Contact Us
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="
              mt-16
              grid
              grid-cols-2
              sm:grid-cols-4
              gap-6
            "
          >
            {[
              { value: "120+", label: "Projects" },
              { value: "40+", label: "Clients" },
              { value: "98%", label: "Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  py-5 px-4
                "
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-white/60">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
