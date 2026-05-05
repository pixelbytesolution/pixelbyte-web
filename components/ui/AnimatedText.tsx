"use client";

import { motion, Variants } from "framer-motion";

const characterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: 90,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

interface AnimatedTextProps {
  text: string;
  interactive?: boolean;
}

export default function AnimatedText({
  text,
  interactive = false,
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className="inline"
    >
      {words.map((w, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={word}
          className="inline-block mr-2"
        >
          {w.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              variants={interactive ? characterVariants : charVariants}
              whileHover={
                interactive
                  ? {
                      y: -8,
                      color: "#2FA4FF",
                      textShadow: "0 0 20px rgba(47, 164, 255, 0.6)",
                      transition: { duration: 0.3 },
                    }
                  : undefined
              }
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.span>
  );
}
