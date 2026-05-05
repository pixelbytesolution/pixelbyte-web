"use client";

import { motion } from "framer-motion";

const characterVariants = {
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
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
  hover: {
    y: -8,
    color: "#2FA4FF",
    textShadow: "0 0 20px rgba(47, 164, 255, 0.6)",
    transition: {
      duration: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const word = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const,
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
          whileHover={interactive ? "hover" : undefined}
        >
          {w.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              variants={
                interactive
                  ? characterVariants
                  : {
                      hidden: { opacity: 0, y: 10 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: charIndex * 0.02,
                        },
                      },
                    }
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
