"use client";

import Container from "../ui/Container";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, scalable, and high-performance web applications tailored for startups and enterprises.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Creating premium digital experiences with user-focused design systems and interfaces.",
  },
  {
    number: "03",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps optimized for performance, engagement, and scalability.",
  },
  {
    number: "04",
    title: "Cloud Infrastructure",
    description:
      "Secure cloud architecture, DevOps workflows, deployment pipelines, and monitoring.",
  },
  {
    number: "05",
    title: "Brand Strategy",
    description:
      "Helping brands position themselves through strategy, visuals, and digital transformation.",
  },
  {
    number: "06",
    title: "Custom Software",
    description:
      "Tailor-made business solutions built around your workflows and operational goals.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">
      {/* Background Glow */}
      <div
        className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-[700px] h-[700px]
        bg-blue-500/10 blur-[140px]
        rounded-full
      "
      />

      <Container className="relative z-10">
        {/* Heading */}
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
            bg-blue-100
            text-blue-600
            text-sm font-medium
          "
          >
            OUR SERVICES
          </span>

          <h2
            className="
            mt-6
            text-3xl sm:text-4xl md:text-5xl
            font-bold
            text-gray-900
            leading-tight
          "
          >
            Premium Digital Solutions
            <br />
            For Modern Businesses
          </h2>

          <p
            className="
            mt-6
            text-gray-600
            text-sm sm:text-base
            leading-relaxed
          "
          >
            We help companies build exceptional digital experiences through
            strategy, development, and innovative technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="
          mt-20
          grid gap-8
          sm:grid-cols-2
          xl:grid-cols-3
        "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
