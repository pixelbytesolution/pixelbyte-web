"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";

export default function ServiceInsights() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Driving Growth Through Smart Digital Solutions
            </h2>

            <p className="mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
              We combine technology, strategy, and design to help businesses
              scale efficiently. Our solutions are built to improve performance,
              enhance user experience, and accelerate growth.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
              <li>✔ Scalable architecture for long-term growth</li>
              <li>✔ Performance-driven development approach</li>
              <li>✔ User-focused design systems</li>
              <li>✔ Continuous optimization & analytics</li>
            </ul>
          </div>

          {/* RIGHT GRAPH */}
          <div className="w-full h-[300px] sm:h-[350px] relative">
            <motion.svg
              viewBox="0 0 500 300"
              className="w-full h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Grid Lines */}
              <g stroke="#e5e7eb" strokeWidth="1">
                <line x1="0" y1="250" x2="500" y2="250" />
                <line x1="0" y1="200" x2="500" y2="200" />
                <line x1="0" y1="150" x2="500" y2="150" />
                <line x1="0" y1="100" x2="500" y2="100" />
              </g>

              {/* Animated Line */}
              <motion.path
                d="M0 250 
                   C 80 220, 120 200, 180 180 
                   S 280 120, 320 100 
                   S 420 60, 500 40"
                fill="transparent"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Gradient */}
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2FA4FF" />
                  <stop offset="100%" stopColor="#5B8CFF" />
                </linearGradient>
              </defs>

              {/* Dots */}
              {[
                [0, 250],
                [180, 180],
                [320, 100],
                [500, 40],
              ].map(([x, y], i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="5"
                  fill="#2FA4FF"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.3 }}
                />
              ))}
            </motion.svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
