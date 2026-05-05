"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        bg-white
        rounded-xl
        p-6
        shadow-md
        border border-gray-100
        hover:shadow-xl
        transition
      "
    >
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
