"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { ArrowUpRight, Briefcase, Clock3, MapPin } from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote",
    description:
      "Build modern, scalable, and high-performance user interfaces using the latest frontend technologies.",
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Hybrid",
    description:
      "Develop secure APIs, scalable architectures, and optimized backend systems for modern applications.",
  },
  {
    title: "UI/UX Designer",
    type: "Contract",
    location: "Remote",
    description:
      "Design premium digital experiences with a strong focus on usability and modern interface systems.",
  },
  {
    title: "Project Manager",
    type: "Full Time",
    location: "On Site",
    description:
      "Coordinate teams, manage workflows, and ensure timely delivery of high-quality digital solutions.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-[#F4EFE6] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#061F3E]" />

        {/* Gold Glow */}
        <div
          className="
            absolute
            top-[-180px]
            left-1/2
            -translate-x-1/2
            w-[750px]
            h-[750px]
            bg-[#C8A96A]/20
            blur-[160px]
            rounded-full
          "
        />

        {/* Grid Pattern */}
        <div
          className="
            absolute inset-0
            opacity-[0.05]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex
                items-center
                gap-2
                px-5 py-2.5
                rounded-full
                bg-white/10
                border border-white/10
                backdrop-blur-md
                text-sm
                font-medium
                text-[#C8A96A]
              "
            >
              ✦ Join PixelByte Solutions
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-8
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-white
              "
            >
              Build The Future
              <span className="block text-[#C8A96A]">With PixelByte</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="
                mt-8
                max-w-2xl
                mx-auto
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-white/70
              "
            >
              We’re building innovative digital experiences for ambitious brands
              worldwide. Join our passionate team and help shape the next
              generation of technology solutions.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="mt-10"
            >
              <button
                className="
                  px-8 py-4
                  rounded-2xl
                  bg-[#C8A96A]
                  text-[#061F3E]
                  font-semibold
                  shadow-xl
                  hover:scale-[1.03]
                  hover:bg-[#d4b57b]
                  transition-all duration-300
                "
              >
                Explore Open Positions
              </button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* WHY JOIN */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#C8A96A] font-semibold text-sm tracking-wide">
                WHY JOIN US
              </span>

              <h2
                className="
                  mt-4
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  leading-tight
                  text-[#111827]
                "
              >
                Work With Passionate
                <br />
                Innovators & Creators
              </h2>

              <p
                className="
                  mt-6
                  text-[#111827]/70
                  leading-relaxed
                  text-sm
                  sm:text-base
                "
              >
                At PixelByte Solutions, we foster a collaborative environment
                focused on innovation, growth, and meaningful impact. We value
                creativity, ownership, and continuous learning.
              </p>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                grid
                sm:grid-cols-2
                gap-6
              "
            >
              {[
                "Flexible Work Environment",
                "Career Growth Opportunities",
                "Modern Technologies",
                "Creative Team Culture",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-3xl
                    bg-white
                    border border-[#C8A96A]/20
                    p-8
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-2
                    transition-all duration-300
                  "
                >
                  <div
                    className="
                      w-12 h-12
                      rounded-2xl
                      bg-[#C8A96A]/10
                      flex items-center justify-center
                      text-[#C8A96A]
                    "
                  >
                    <Briefcase size={22} />
                  </div>

                  <h3 className="mt-5 font-semibold text-lg text-[#111827]">
                    {item}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* JOB LISTINGS */}
      <section className="pb-24">
        <Container>
          {/* Heading */}
          <div className="max-w-2xl">
            <span className="text-[#C8A96A] font-semibold text-sm tracking-wide">
              OPEN POSITIONS
            </span>

            <h2
              className="
          mt-4
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-bold
          text-[#111827]
          leading-tight
        "
            >
              Current Opportunities
            </h2>

            <p
              className="
          mt-5
          text-[#111827]/70
          text-sm
          sm:text-base
          leading-relaxed
          max-w-2xl
        "
            >
              Join our growing team of creators, developers, designers, and
              innovators building modern digital solutions for businesses around
              the world.
            </p>
          </div>

          {/* Jobs */}
          <div className="mt-14 space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="
            group
            bg-white
            border border-[#C8A96A]/15
            rounded-3xl
            p-8
            shadow-sm
            hover:shadow-2xl
            transition-all duration-300
          "
              >
                <div
                  className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-8
            "
                >
                  {/* LEFT */}
                  <div>
                    <h3
                      className="
                  text-2xl
                  font-bold
                  text-[#111827]
                "
                    >
                      {job.title}
                    </h3>

                    <p
                      className="
                  mt-4
                  text-[#111827]/70
                  leading-relaxed
                  max-w-2xl
                  text-sm
                  sm:text-base
                "
                    >
                      {job.description}
                    </p>

                    {/* Meta */}
                    <div
                      className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  gap-5
                  text-sm
                  text-[#111827]/60
                "
                    >
                      <div className="flex items-center gap-2">
                        <Clock3 size={16} />
                        {job.type}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <button
                    className="
                flex items-center gap-2
                px-6 py-3
                rounded-2xl
                bg-[#061F3E]
                text-white
                font-medium
                hover:bg-[#0B2C56]
                transition-all duration-300
                w-fit
              "
                  >
                    Apply Now
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* NEW WHITE SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Glow */}
        <div
          className="
      absolute
      top-0
      right-0
      w-[400px]
      h-[400px]
      bg-[#C8A96A]/10
      blur-[120px]
      rounded-full
    "
        />

        <Container className="relative z-10">
          <div
            className="
        grid
        lg:grid-cols-2
        gap-16
        items-center
      "
          >
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#C8A96A] font-semibold text-sm tracking-wide">
                LIFE AT PIXELBYTE
              </span>

              <h2
                className="
            mt-4
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            text-[#111827]
            leading-tight
          "
              >
                A Culture Built Around
                <br />
                Innovation & Growth
              </h2>

              <p
                className="
            mt-6
            text-[#111827]/70
            text-sm
            sm:text-base
            leading-relaxed
          "
              >
                We believe great products are built by passionate people. At
                PixelByte Solutions, we create an environment where creativity,
                collaboration, and continuous learning thrive.
              </p>

              {/* Features */}
              <div className="mt-10 space-y-5">
                {[
                  "Collaborative and creative work culture",
                  "Flexible and remote-friendly environment",
                  "Continuous learning and mentorship",
                  "Opportunities to work on modern technologies",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="
                  mt-1
                  w-3 h-3
                  rounded-full
                  bg-[#C8A96A]
                  flex-shrink-0
                "
                    />

                    <p className="text-[#111827]/80 text-sm sm:text-base">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT CARDS */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
          grid
          sm:grid-cols-2
          gap-6
        "
            >
              {[
                {
                  number: "01",
                  title: "Creative Team",
                },
                {
                  number: "02",
                  title: "Flexible Work",
                },
                {
                  number: "03",
                  title: "Growth Focused",
                },
                {
                  number: "04",
                  title: "Modern Stack",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="
              bg-[#FBF0E3]
              border border-[#C8A96A]/20
              rounded-3xl
              p-8
              shadow-sm
              hover:shadow-xl
              transition-all duration-300
            "
                >
                  <span
                    className="
                text-[#C8A96A]
                text-sm
                font-semibold
              "
                  >
                    {item.number}
                  </span>

                  <h3
                    className="
                mt-4
                text-2xl
                font-bold
                text-[#111827]
              "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                mt-4
                text-[#111827]/70
                text-sm
                leading-relaxed
              "
                  >
                    Building an environment where innovation and collaboration
                    help teams grow together.
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
