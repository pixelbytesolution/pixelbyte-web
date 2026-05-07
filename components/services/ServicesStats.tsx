"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";

const stats = [
  {
    value: "120+",
    label: "Projects Completed",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "40+",
    label: "Global Clients",
  },
  {
    value: "24/7",
    label: "Support & Maintenance",
  },
];

export default function ServicesStats() {
  return (
    <section className="py-24 bg-[#0b1120] text-white overflow-hidden">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.04 }}
              className="
                relative
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                p-8
                text-center
                overflow-hidden
              "
            >
              {/* Glow */}
              <div
                className="
                absolute -top-10 -right-10
                w-32 h-32
                bg-blue-500/20
                blur-3xl
                rounded-full
              "
              />

              <div className="relative z-10">
                <h3
                  className="
                  text-4xl sm:text-5xl
                  font-bold
                  bg-gradient-to-r
                  from-blue-400 to-indigo-400
                  bg-clip-text text-transparent
                "
                >
                  {stat.value}
                </h3>

                <p
                  className="
                  mt-4
                  text-white/70
                  text-sm sm:text-base
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
