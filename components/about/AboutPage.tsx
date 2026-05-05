"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import AboutCompany from "../home/about/AboutCompany";

export default function AboutPage() {
  return (
    <main className="w-full bg-white overflow-hidden">
      {/* HERO */}
      <section className="w-full py-20 md:py-28 bg-[#F4EFE6]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-semibold text-[#0A1F3C] mb-6 leading-tight">
              We Build Technology <br /> That Drives Growth
            </h1>

            <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed">
              At PIXELBYTE, we combine innovation, strategy, and engineering to
              deliver scalable IT solutions that empower businesses to grow,
              adapt, and lead in a digital-first world.
            </p>
          </motion.div>
        </Container>
      </section>

      <AboutCompany />

      {/* STORY */}
      <section className="w-full py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0A1F3C] mb-6">
                Our Story
              </h2>

              <p className="text-[#4a4a4a] text-lg leading-relaxed mb-6">
                PIXELBYTE was founded with a vision to bridge the gap between
                technology and business success. From startups to enterprises,
                we’ve helped organizations transform their infrastructure,
                enhance security, and unlock new growth opportunities.
              </p>

              <p className="text-[#4a4a4a] text-lg leading-relaxed">
                With a strong focus on innovation and performance, our team
                delivers solutions that are not only reliable but future-ready.
              </p>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-[#0A2547] rounded-3xl p-10 text-white"
            >
              <h3 className="text-xl font-semibold mb-4">
                Why Choose PIXELBYTE?
              </h3>

              <ul className="space-y-3 text-white/80 text-sm md:text-base">
                <li>✔ 13+ Years of Industry Expertise</li>
                <li>✔ 500+ Successful IT Projects</li>
                <li>✔ 100+ Enterprise Clients</li>
                <li>✔ 99% Client Satisfaction Rate</li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* VALUES SECTION */}
      <section className="w-full py-20 md:py-28 bg-[#F4EFE6]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0A1F3C] mb-4">
              Our Core Values
            </h2>
            <p className="text-[#4a4a4a] max-w-2xl mx-auto">
              We believe in building long-term relationships through innovation,
              transparency, and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                desc: "We continuously explore new technologies to deliver cutting-edge solutions.",
              },
              {
                title: "Integrity",
                desc: "We operate with transparency and honesty in every engagement.",
              },
              {
                title: "Excellence",
                desc: "We strive to exceed expectations and deliver measurable impact.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-[#0A1F3C]/10"
              >
                <h3 className="text-lg font-semibold text-[#0A1F3C] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4a4a4a]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS SECTION */}
      <section className="w-full py-20 md:py-28 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0A1F3C] mb-4">
              Our Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {["Analyze", "Design", "Build", "Support"].map((step, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-[#0A2547] mb-3">
                  0{i + 1}
                </div>
                <p className="text-[#4a4a4a]">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="w-full py-20 md:py-28 bg-[#081B34]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-4xl text-white font-semibold">
              Ready to Transform Your Business?
            </h2>

            <button className="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-[#081B34] transition">
              Get Started →
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
