"use client";

import Link from "next/link";
import { motion, cubicBezier } from "framer-motion";
import Container from "../ui/Container";
import { ArrowUpRight, Briefcase, Clock3, MapPin } from "lucide-react";

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
    transition: { staggerChildren: 0.1 },
  },
};

const jobs = [
  {
    title: "Frontend Engineer",
    type: "Full Time",
    location: "Kozhikode / Remote",
    description:
      "Architect responsive, modular user interfaces with exceptional performance metrics utilizing modern client-side production stacks.",
  },
  {
    title: "Backend Engineer",
    type: "Full Time",
    location: "Kozhikode / Hybrid",
    description:
      "Design secure core database schemas, structure reliable API routing layers, and configure highly scalable operational servers.",
  },
  {
    title: "UI/UX Systems Designer",
    type: "Contract",
    location: "Remote",
    description:
      "Craft premium layout prototypes, interactive wireframes, and unified multi-platform user experiences for modern products.",
  },
  {
    title: "Technical Project Manager",
    type: "Full Time",
    location: "On Site (Kozhikode)",
    description:
      "Coordinate active development sprints, smooth over cross-team friction, and guarantee structured delivery of client milestones.",
  },
];

export default function CareersSection() {
  return (
    <main className="w-full bg-[#F4EFE6] text-[#0A1F3C] overflow-hidden">
      
      {/* 1. HERO SECTION (High-Contrast Premium Dark Blue Canvas) */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-black text-white border-b border-[#0A1F3C]/10">
        {/* Ambient Cosmic Radial Glows */}
        <div className="absolute top-[-100px] left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Digital Line Overlay */}
        <div
          className="
            absolute inset-0
            opacity-[0.03]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:50px_50px]
            pointer-events-none
          "
        />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex
                items-center
                gap-2
                px-4 py-2
                rounded-full
                bg-white/5
                border border-white/10
                backdrop-blur-md
                text-xs sm:text-sm
                font-semibold
                tracking-widest
                text-cyan-300
                uppercase
              "
            >
              ✦ Engineering Core Expansion
            </motion.div>

            {/* Main Header */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeCustom }}
              className="
                mt-8
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-[1.1]
                tracking-tighter
              "
            >
              Build the Next Era of
              <span className="block mt-2 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                Digital Infrastructure
              </span>
            </motion.h1>

            {/* Sub description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="
                mt-8
                max-w-2xl
                mx-auto
                text-sm
                sm:text-base
                leading-relaxed
                text-white/70
                font-light
              "
            >
              We&apos;re assembling a team of passionate developers and creators to architect automated, 
              scalable solutions out of Kozhikode. Join us in shaping modern business tools.
            </motion.p>

            {/* Action Trigger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-10"
            >
              <Link
                href="#open-positions"
                className="
                  px-8 py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-[#2FA4FF]
                  to-[#5B8CFF]
                  text-white
                  text-sm
                  font-semibold
                  shadow-lg shadow-blue-500/20
                  hover:scale-[1.03]
                  transition-all duration-300
                "
              >
                Explore Open Positions
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. WHY JOIN CULTURE (Beige Canvas mixed with Deep Blue Cards) */}
      <section id="open-positions" className="py-28 bg-[#F4EFE6] border-b border-[#0A1F3C]/10">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-6 bg-[#2FA4FF]" />
                <span className="text-[#2FA4FF] font-semibold text-xs tracking-widest uppercase">
                  Ecosystem Benefits
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-[#0A1F3C]">
                Work Alongside Team <br />
                Innovators & Architects
              </h2>

              <p className="mt-6 text-[#0A1F3C]/70 font-light text-sm sm:text-base leading-relaxed">
                At Pixelbyte Solutions, we cut out micromanagement and foster local tech development. 
                We give engineers complete ownership to deploy scalable software parameters while supporting active workspace learning.
              </p>
            </motion.div>

            {/* Right Matrix Cards Grid */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardStagger}
              className="grid sm:grid-cols-2 gap-6"
            >
              {[
                "Autonomous Workspace Models",
                "Linear Skill Advancements",
                "Production-Grade Tooling",
                "Collaborative Team Mindsets",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -6, borderColor: "rgba(47, 164, 255, 0.4)" }}
                  className="
                    rounded-2xl
                    bg-[#081B34]
                    border border-[#0A1F3C]/10
                    p-8
                    text-white
                    shadow-md
                    transition-all duration-300
                  "
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-300">
                    <Briefcase size={18} />
                  </div>

                  <h3 className="mt-5 font-bold text-lg text-white tracking-tight">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 3. OPPORTUNITIES TRACKS (Clean Beige Canvas mixed with High Contrast Blue/Cyan accents) */}
      <section className="py-28 bg-[#F4EFE6] border-b border-[#0A1F3C]/10">
        <Container>
          {/* Section Indicator */}
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#2FA4FF]" />
              <span className="text-[#2FA4FF] font-semibold text-xs tracking-widest uppercase">
                Active Pipelines
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A1F3C]">
              Current Openings
            </h2>

            <p className="mt-4 text-[#0A1F3C]/70 font-light text-sm sm:text-base leading-relaxed">
              Find your path inside our engineering teams. We review candidate application protocols with speed and clarity.
            </p>
          </div>

          {/* Job Postings Mapping Stack */}
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4, borderColor: "rgba(10, 31, 60, 0.2)" }}
                className="
                  bg-white
                  border border-[#0A1F3C]/10
                  rounded-2xl
                  p-8
                  shadow-sm hover:shadow-md
                  transition-all duration-300
                "
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  {/* Info details left block */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#0A1F3C] tracking-tight">
                      {job.title}
                    </h3>

                    <p className="text-[#0A1F3C]/70 font-light leading-relaxed max-w-2xl text-sm sm:text-base">
                      {job.description}
                    </p>

                    {/* Metadata chips row */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono tracking-wider text-[#2FA4FF] uppercase">
                      <div className="flex items-center gap-2 bg-[#0A1F3C]/5 px-3 py-1.5 rounded-md border border-[#0A1F3C]/5 text-[#0A1F3C]/80">
                        <Clock3 size={14} className="text-[#2FA4FF]" />
                        {job.type}
                      </div>

                      <div className="flex items-center gap-2 bg-[#0A1F3C]/5 px-3 py-1.5 rounded-md border border-[#0A1F3C]/5 text-[#0A1F3C]/80">
                        <MapPin size={14} className="text-[#2FA4FF]" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Operational Action CTA button right */}
                  <Link
                    href={`mailto:pixelbytesolutions.in@gmail.com?subject=Application%20for%20${encodeURIComponent(job.title)}`}
                    className="
                      flex items-center gap-2
                      px-6 py-3.5
                      rounded-xl
                      bg-[#0A1F3C]
                      text-white
                      text-sm
                      font-semibold
                      hover:bg-[#2FA4FF]
                      transition-all duration-300
                      w-fit shrink-0
                    "
                  >
                    Apply Now
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. WORK CULTURE METRIC SLATE (Flipped: Deep Blue Canvas with Beige Accent Cards) */}
      <section className="py-28 bg-[#051329] text-white relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Context Statement */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-6 bg-cyan-400" />
                <span className="text-cyan-400 font-semibold text-xs tracking-widest uppercase">
                  Operation Standards
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Life Within <br /> Our Architecture
              </h2>

              <p className="mt-6 text-white/70 font-light text-sm sm:text-base leading-relaxed">
                Great systems demand pristine engineering focus. We prioritize deep work parameters and construct platforms that enhance collaborative communication pipelines.
              </p>

              {/* Functional bullets column layout */}
              <div className="mt-10 space-y-4 font-light text-sm text-white/80">
                {[
                  "Component-driven clean architecture paradigms",
                  "Flexible operational structure frameworks",
                  "Peer code auditing and direct skill reviews",
                  "Direct deployment involvement across stacks",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <p>{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Cards Stack Layout */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
            >
              {[
                { number: "01", title: "Creative Focus" },
                { number: "02", title: "Flexible Runtime" },
                { number: "03", title: "Velocity Driven" },
                { number: "04", title: "Modern Repos" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, backgroundColor: "#ffffff", color: "#0A1F3C" }}
                  className="
                    bg-[#081B34]
                    border border-white/5
                    rounded-2xl
                    p-8
                    transition-all duration-300
                  "
                >
                  <span className="text-xs font-mono tracking-widest text-cyan-400 font-bold">
                    {"// CORE_"}
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-white/60 font-light text-sm leading-relaxed">
                    Structuring clear collaborative methods so our product loops execute smoothly.
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </Container>
      </section>

    </main>
  );
}
