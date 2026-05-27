"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";

const companyMetrics = [
  {
    value: "99.9%",
    label: "Infrastructure Uptime",
  },
  {
    value: "4.2x",
    label: "Workflow Acceleration",
  },
  {
    value: "100%",
    label: "Custom Tailored Delivery",
  },
  {
    value: "SEO 100",
    label: "Production Optimization",
  },
];

export default function ServicesStats() {
  return (
    <section className="py-28 bg-gradient-to-b from-black via-[#040d1a] to-black text-white overflow-hidden">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyMetrics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6, borderColor: "rgba(34, 211, 238, 0.2)" }}
              className="
                relative
                rounded-2xl
                border border-white/10
                bg-[#081B34]/20
                backdrop-blur-sm
                p-8
                text-center
                overflow-hidden
                transition-colors duration-300
              "
            >
              {/* Internal Blur Mask Accent */}
              <div
                className="
                absolute -top-10 -right-10
                w-32 h-32
                bg-blue-500/10
                blur-2xl
                rounded-full
                pointer-events-none
              "
              />

              <div className="relative z-10">
                <h3
                  className="
                  text-4xl sm:text-5xl
                  font-extrabold
                  tracking-tight
                  bg-gradient-to-r
                  from-cyan-400 to-blue-400
                  bg-clip-text text-transparent
                "
                >
                  {stat.value}
                </h3>

                <p
                  className="
                  mt-4
                  text-white/60
                  text-xs sm:text-sm
                  tracking-wider
                  uppercase
                  font-light
                "
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}