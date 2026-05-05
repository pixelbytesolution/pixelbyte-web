"use client";

import Image from "next/image";
import Container from "../../ui/Container";
import { motion, cubicBezier } from "framer-motion";
import AnimatedText from "../../ui/AnimatedText";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: "easeInOut" as const,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Background with enhanced cinematic zoom and parallax */}
      <motion.div
        initial={{ scale: 1.25, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.png"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dynamic gradient overlay with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"
      />

      {/* Animated light rays effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 rounded-full blur-3xl" />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Content */}
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          {/* Heading with line-by-line reveal and gradient effect */}
          <div className="mb-8">
            {["We are Here", "Grow Your", "Business with Us"].map((line, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={textVariant}
                className="relative overflow-hidden py-2"
              >
                <motion.h1
                  className="text-white font-black leading-[1.1] tracking-tighter
                  text-[40px] sm:text-[56px] md:text-[76px] lg:text-[92px]
                  bg-gradient-to-r from-white via-blue-200 to-cyan-300
                  bg-clip-text text-transparent
                  drop-shadow-2xl"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  {line}
                </motion.h1>
              </motion.div>
            ))}
          </div>

          {/* Subtitle with premium styling */}
          <motion.div
            variants={item}
            className="mt-10 mb-12 flex items-center justify-center gap-2"
          >
            <motion.div
              animate={{ width: [0, 60, 0] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity }}
              className="hidden sm:block h-px bg-gradient-to-r from-transparent to-cyan-400"
            />
            <p className="text-white/85 text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-widest uppercase">
              <span className="font-bold text-cyan-300">Pixelbyte</span> —
              Smarter Emergency Response
            </p>
            <motion.div
              animate={{ width: [0, 60, 0] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity }}
              className="hidden sm:block h-px bg-gradient-to-l from-transparent to-cyan-400"
            />
          </motion.div>

          {/* Enhanced subtitle text */}
          <motion.p
            variants={item}
            className="text-white/75 text-[13px] sm:text-[14px] md:text-[15px] font-light leading-relaxed max-w-2xl mx-auto"
          >
            <AnimatedText text="Creates Technology That Makes Work Easier by Empowering Faster, Smarter Emergency Response" />
          </motion.p>

          {/* Premium Button with enhanced interaction */}
          <motion.div variants={item} className="mt-14 flex justify-center">
            <motion.button
              whileHover={{
                scale: 1.12,
                boxShadow:
                  "0 20px 40px rgba(47, 164, 255, 0.4), 0 0 60px rgba(91, 140, 255, 0.3)",
              }}
              whileTap={{ scale: 0.92 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="group relative px-12 py-5 rounded-xl text-white font-semibold text-[16px] overflow-hidden"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#2FA4FF] via-[#5B8CFF] to-[#2FA4FF] rounded-xl"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />

              {/* Text */}
              <motion.span className="relative z-10 block">
                Get Started
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-white/60 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
