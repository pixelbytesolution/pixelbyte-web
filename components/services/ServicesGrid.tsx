"use client";

import Container from "../ui/Container";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const coreOffers = [
  {
    number: "01",
    id: "web-development",
    title: "Static Websites",
    description:
      "Blazing fast, custom-crafted Jamstack applications optimized explicitly for flawless lighthouse diagnostics and global CDN delivery.",
    href: "/services#web-development",
  },
  {
    number: "02",
    id: "cloud-solutions",
    title: "Workflow Automation",
    description:
      "Eliminating manual friction and scaling bottlenecks by linking disparate software modules with performant, robust API frameworks.",
    href: "/services#cloud-solutions",
  },
  {
    number: "03",
    id: "mobile-apps",
    title: "Web Applications",
    description:
      "Highly responsive, component-driven dashboard interfaces and platforms built using modular, highly scalable architectures.",
    href: "/services#web-development",
  },
  {
    number: "04",
    id: "consulting",
    title: "Custom Software",
    description:
      "Tailor-made localized database architectures and systems built entirely around your active business rules and scaling checkpoints.",
    href: "/services#consulting",
  },
];

export default function ServicesGrid() {
  return (
    <section id="service-matrix" className="relative py-28 bg-black overflow-hidden border-b border-white/5">
      {/* Background Radial Core Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span
            className="
            inline-block
            px-4 py-2
            rounded-full
            bg-white/5
            border border-white/10
            text-cyan-400
            text-xs font-semibold
            tracking-widest
            uppercase
          "
          >
            Service Matrix
          </span>

          <h2
            className="
            mt-6
            text-3xl sm:text-4xl md:text-5xl
            font-bold
            text-white
            tracking-tight
            leading-tight
          "
          >
            Digital Ecosystems Engineered
            <br />
            For Complete Operational Mastery
          </h2>

          <p
            className="
            mt-6
            text-white/60
            text-sm sm:text-base
            font-light
            leading-relaxed
          "
          >
            We deploy production-grade software solutions crafted to remove local data silos, 
            optimize operations, and unlock systemic acceleration.
          </p>
        </motion.div>

        {/* Dynamic Card Generation Grid */}
        <div
          className="
          mt-20
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-2
          max-w-5xl
          mx-auto
        "
        >
          {coreOffers.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              id={service.id}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
