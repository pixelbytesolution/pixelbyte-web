"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import { motion, cubicBezier } from "framer-motion";
import AboutCompany from "../home/about/AboutCompany";

const easeCustom = cubicBezier(0.42, 0, 0.58, 1);

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCustom },
  },
};

const cardStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function AboutPage() {
  return (
    <main className="w-full bg-black text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-28 md:py-40 bg-gradient-to-b from-black via-[#040d1a] to-black border-b border-white/5">
        {/* Subtle Ambient Light Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-cyan-400" />
              <p className="text-cyan-300 text-xs md:text-sm font-semibold tracking-widest uppercase">
                About Pixelbyte Solutions
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
              Engineering Smarter <br /> Digital Infrastructure
            </h1>

            <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-3xl">
              Based in the tech ecosystem of Kozhikode, Pixelbyte Solutions delivers 
              high-performance digital engineering. We transform manual bottlenecks 
              into autonomous workflows and elevate regional brands into global digital leaders.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 2. THE COMPONENT INJECTION */}
      <AboutCompany />

      {/* 3. CAPABILITIES / CORE SERVICES MATRIX */}
      <section className="w-full py-24 md:py-32 bg-black relative border-b border-white/5">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Our Core Architecture
            </h2>
            <p className="text-white/60 font-light max-w-xl">
              Engineered for absolute performance, stability, and growth.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                num: "01",
                title: "Static Websites",
                desc: "Blazing fast, secure, and optimized Jamstack deployments custom-tuned for exceptional SEO performance.",
              },
              {
                num: "02",
                title: "Workflow Automation",
                desc: "Eliminating human overhead by bridging legacy business systems together through smart API-driven automations.",
              },
              {
                num: "03",
                title: "Web Applications",
                desc: "Highly-scalable, reactive browser experiences built with modern enterprise frameworks for seamless use.",
              },
              {
                num: "04",
                title: "Custom Software",
                desc: "Tailored backend architectures designed explicitly around your local workflows and operational pain points.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8, borderColor: "rgba(34, 211, 238, 0.3)" }}
                className="bg-[#081B34]/20 border border-white/10 rounded-2xl p-8 transition-colors duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-xs font-mono tracking-widest text-cyan-400 font-bold mb-6 group-hover:text-cyan-300">
                    {"// SERVICE_"}
                    {service.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 4. CHRONOLOGICAL OPERATION METRICS */}
      <section className="w-full py-24 md:py-32 bg-gradient-to-b from-black via-[#030b14] to-black">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-5"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Our Mission From Kozhikode
              </h2>
              <p className="text-white/70 font-light text-base md:text-lg leading-relaxed mb-6">
                We believe that premium engineering shouldn&apos;t be gated behind multinational 
                consulting fees. Pixelbyte Solutions operates locally to deliver enterprise-grade 
                technical infrastructure to expanding businesses.
              </p>
              <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">
                By designing clean software models, we provide business owners with complete operational visibility, lowering runtime overhead and increasing total throughput.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-7 bg-gradient-to-br from-[#081B34]/60 to-[#0A2547]/30 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-xl font-semibold mb-8 text-cyan-300 tracking-wide uppercase text-xs">
                Performance Benchmarks
              </h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { value: "99.9%", label: "System Uptime" },
                  { value: "4.2x", label: "Workflow Velocity" },
                  { value: "100%", label: "Tailored Execution" },
                  { value: "SEO 100", label: "Web Optimization" },
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-cyan-500/30 pl-4">
                    <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-white/50 tracking-wider font-light uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 5. METRIC CTA */}
      <section className="w-full py-24 bg-black relative border-t border-white/5">
        <Container>
          <div className="relative bg-gradient-to-r from-[#081B34] to-black border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,164,255,0.15),transparent_50%)]" />
            
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to automate and optimize?
              </h2>
              <p className="text-white/60 font-light text-sm md:text-base">
                Let&apos;s plan out your architecture. Connect with our technical team in Kozhikode to schedule an engineering review.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <Link
                href="/contact"
                className="block whitespace-nowrap px-8 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#2FA4FF] to-[#5B8CFF] text-white shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                Initiate Discovery →
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

    </main>
  );
}
