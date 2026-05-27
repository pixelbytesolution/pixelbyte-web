"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";

export default function ServiceInsights() {
  return (
    <section className="py-28 bg-[#F4EFE6] border-b border-white/5">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Block Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F3C] tracking-tight leading-tight">
              Driving Measurable Velocity Through Infrastructure Optimization
            </h2>

            <p className="mt-5 text-[#0A1F3C] text-sm sm:text-base font-light leading-relaxed">
              We eliminate technical debt by mapping out highly refined software architectures. 
              Our programmatic builds are structured from the ground up to achieve maximum throughput, 
              lower data-transfer expenses, and provide clean scalability.
            </p>

            <ul className="mt-8 space-y-4 text-[#0A1F3C] text-sm sm:text-base font-light">
              <li className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold">✓</span> Highly stable edge-layer data architecture
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold">✓</span> Performance-mapped clean code guidelines
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold">✓</span> Lightweight state management processes
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold">✓</span> Automated operational health alerting pipelines
              </li>
            </ul>
          </motion.div>

          {/* Right SVG Performance Chart */}
          <div className="w-full h-[300px] sm:h-[350px] relative bg-[#081B34] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <motion.svg
              viewBox="0 0 500 300"
              className="w-full h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* High Contrast Subtle Grid Grid Lines */}
              <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                <line x1="0" y1="250" x2="500" y2="250" />
                <line x1="0" y1="200" x2="500" y2="200" />
                <line x1="0" y1="150" x2="500" y2="150" />
                <line x1="0" y1="100" x2="500" y2="100" />
              </g>

              {/* Animated Vectors Path */}
              <motion.path
                d="M0 250 
                   C 80 220, 120 200, 180 180 
                   S 280 120, 320 100 
                   S 420 60, 500 40"
                fill="transparent"
                stroke="url(#cyanGlow)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
              />

              <defs>
                <linearGradient id="cyanGlow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2FA4FF" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>

              {/* Data Intersect Nodes */}
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
                  fill="#22D3EE"
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