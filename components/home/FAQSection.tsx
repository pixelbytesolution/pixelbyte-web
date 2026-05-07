"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import Container from "../ui/Container";

const faqs = [
  {
    question: "What services does PixelByte offer?",
    answer:
      "We offer a range of services including custom software development, web applications, UI/UX design, cloud solutions, digital transformation, and scalable business systems tailored to your needs.",
  },
  {
    question: "How can PixelByte help my business grow?",
    answer:
      "We help businesses improve operational efficiency, automate workflows, enhance digital presence, and build scalable technology solutions that drive measurable growth.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across multiple industries including healthcare, logistics, retail, SaaS platforms, education, and enterprise business solutions.",
  },
  {
    question: "Are your services customized to business needs?",
    answer:
      "Yes. Every solution we build is customized specifically around your workflows, goals, users, and operational requirements.",
  },
  {
    question: "What is the typical duration of a project?",
    answer:
      "Project timelines depend on scope and complexity. Smaller projects may take a few weeks, while larger enterprise systems can take several months.",
  },
  {
    question: "How do you ensure data confidentiality?",
    answer:
      "We follow secure development practices, encrypted communication, role-based access control, and strict confidentiality standards throughout the project lifecycle.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-[#EAE1D5] overflow-hidden">
      <Container>
        <div
          className="
            relative
            rounded-[40px]
            overflow-hidden
            bg-[#020817]
            px-6 py-10
            sm:px-10 sm:py-14
            md:px-16 md:py-16
          "
        >
          {/* Background Glow */}
          <div
            className="
              absolute
              bottom-0 left-0
              w-[250px] h-[250px]
              bg-[#B8860B]/20
              blur-[120px]
              rounded-full
            "
          />

          {/* Content */}
          <div className="relative z-10 max-w-4xl">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                text-white
                text-4xl
                sm:text-5xl
                font-bold
                tracking-tight
              "
            >
              FAQs
            </motion.h2>

            {/* FAQ Items */}
            <div className="mt-10 space-y-2">
              {faqs.map((faq, index) => {
                const isOpen = active === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/20 py-5"
                  >
                    {/* Question */}
                    <button
                      onClick={() => setActive(isOpen ? -1 : index)}
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        gap-6
                        text-left
                      "
                    >
                      <h3
                        className="
                          text-white
                          font-semibold
                          text-sm
                          sm:text-base
                          md:text-lg
                          leading-relaxed
                        "
                      >
                        {faq.question}
                      </h3>

                      <motion.div
                        animate={{
                          rotate: isOpen ? 45 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="
                          flex-shrink-0
                          text-white
                        "
                      >
                        <MoveUpRight size={18} />
                      </motion.div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="overflow-hidden"
                        >
                          <p
                            className="
                              pt-5
                              pr-8
                              text-white/70
                              text-sm
                              sm:text-[15px]
                              leading-relaxed
                              max-w-3xl
                            "
                          >
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
