"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  number: string;
};

export default function ServiceCard({ title, description, number }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        border border-gray-200
        p-8
        shadow-sm
        hover:shadow-2xl
        transition-all duration-500
      "
    >
      {/* Gradient Glow */}
      <div
        className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        transition duration-500
        bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent
      "
      />

      {/* Number */}
      <div className="relative z-10">
        <span className="text-sm font-semibold text-blue-500">{number}</span>

        {/* Title */}
        <h3
          className="
          mt-4
          text-2xl
          font-bold
          text-gray-900
          leading-tight
        "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
          mt-4
          text-gray-600
          leading-relaxed
          text-sm sm:text-base
        "
        >
          {description}
        </p>

        {/* Bottom */}
        <div
          className="
          mt-8
          flex items-center justify-between
        "
        >
          <span className="text-sm text-gray-500">Learn More</span>

          <motion.div
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.3 }}
            className="
              w-10 h-10 rounded-full
              bg-gray-100
              flex items-center justify-center
              group-hover:bg-blue-500
              group-hover:text-white
              transition-all duration-300
            "
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
