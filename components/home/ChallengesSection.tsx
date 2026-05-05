"use client";

import Container from "../ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";

const challenges = [
  {
    id: "01",
    title: "Outdated IT Systems?",
    desc: "Unleash your business's true potential by identifying growth barriers and implementing strategic solutions.",
  },
  {
    id: "02",
    title: "Network & Security Risks?",
    desc: "Streamline your operations with our consulting expertise, optimizing processes for enhanced efficiency.",
  },
  {
    id: "03",
    title: "Lack of Technical Support?",
    desc: "Overcome market challenges with tailored strategies designed to position your business for success.",
  },
  {
    id: "01",
    title: "Poor Data Management?",
    desc: "Unleash your business's true potential by identifying growth barriers and implementing strategic solutions.",
  },
  {
    id: "02",
    title: "Inefficient Communication Systems?",
    desc: "Streamline your operations with our consulting expertise, optimizing processes for enhanced efficiency.",
  },
  {
    id: "03",
    title: "Lack of Reliable IT Support?",
    desc: "Overcome market challenges with tailored strategies designed to position your business for success.",
  },
];

export default function ChallengesSection() {
  return (
    <section
      className="w-full py-16 md:py-24 lg:py-32"
      style={{ background: "#F4EFE6" }}
    >
      <Container>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1a1a1a] mb-12 md:mb-16"
        >
          Facing IT & Infrastructure Challenges?
        </motion.h2>

        {/* Grid */}
        <div className="relative">
          {/* Floating Image */}
          <div className="hidden lg:block absolute left-[30%] top-[55%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <Image
              src="/images/abstract-shape.png"
              alt="decorative"
              width={220}
              height={180}
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-transparent border border-[#B8A98F] rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[220px] hover:shadow-lg transition-all duration-300"
              >
                {/* Number */}
                <span className="text-sm font-semibold text-[#1E4FFF] mb-3">
                  {item.id}
                </span>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-[#1a1a1a] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-[#5a5a5a] leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
