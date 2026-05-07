"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Message Sent Successfully!");
    }, 2000);
  };

  return (
    <main className="bg-[#FBF0E3] overflow-hidden">
      {/* HERO */}
      <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#061F3E]" />

        {/* Glow Left */}
        <div
          className="
            absolute
            top-[-180px]
            left-[-100px]
            w-[500px]
            h-[500px]
            bg-[#C8A96A]/20
            blur-[140px]
            rounded-full
          "
        />

        {/* Glow Right */}
        <div
          className="
            absolute
            bottom-[-220px]
            right-[-120px]
            w-[500px]
            h-[500px]
            bg-[#C8A96A]/10
            blur-[160px]
            rounded-full
          "
        />

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.04]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        <Container className="relative z-10">
          <div
            className="
              grid
              lg:grid-cols-[1fr_520px]
              gap-16
              items-center
            "
          >
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-5 py-2.5
                  rounded-full
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  text-sm
                  font-medium
                  text-[#C8A96A]
                "
              >
                ✦ Contact PixelByte Solutions
              </div>

              {/* Heading */}
              <h1
                className="
                  mt-8
                  text-5xl
                  sm:text-6xl
                  lg:text-7xl
                  font-bold
                  leading-[0.95]
                  tracking-tight
                  text-white
                "
              >
                Let’s Build
                <span className="block text-[#C8A96A]">Something Great</span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-8
                  max-w-xl
                  text-base
                  sm:text-lg
                  leading-relaxed
                  text-white/70
                "
              >
                Whether you're launching a startup, scaling a platform, or
                modernizing your business — PixelByte Solutions helps turn
                ambitious ideas into powerful digital products.
              </p>

              {/* Contact Cards */}
              <div className="mt-12 grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: <Phone size={18} />,
                    title: "Phone",
                    value: "+91 98765 43210",
                  },
                  {
                    icon: <Mail size={18} />,
                    title: "Email",
                    value: "pixelbytesolution.in@gmail.com",
                  },
                  {
                    icon: <MapPin size={18} />,
                    title: "Location",
                    value: "Calicut, Kerala",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                    }}
                    className="
                      rounded-3xl
                      border border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      p-5
                    "
                  >
                    <div
                      className="
                        w-11 h-11
                        rounded-2xl
                        bg-[#C8A96A]
                        text-[#061F3E]
                        flex items-center justify-center
                      "
                    >
                      {item.icon}
                    </div>

                    <p className="mt-4 text-sm text-white/50">{item.title}</p>

                    <h3
                      className="
                        mt-1
                        text-sm
                        font-medium
                        text-white
                        leading-relaxed
                      "
                    >
                      {item.value}
                    </h3>
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-10 flex items-center gap-4">
                {[
                  <FaFacebookF size={15} />,
                  <FaInstagram size={15} />,
                  <FaLinkedinIn size={15} />,
                ].map((icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                    }}
                    className="
                      w-12 h-12
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      text-white
                      flex items-center justify-center
                      cursor-pointer
                      hover:bg-[#C8A96A]
                      hover:text-[#061F3E]
                      transition-all duration-300
                    "
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FORM CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                relative
                rounded-[36px]
                border border-white/10
                bg-white
                p-8
                sm:p-10
                shadow-[0_20px_80px_rgba(0,0,0,0.25)]
                overflow-hidden
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-[220px]
                  h-[220px]
                  bg-[#C8A96A]/20
                  blur-[100px]
                  rounded-full
                "
              />

              <div className="relative z-10">
                {/* Heading */}
                <h2
                  className="
                    text-3xl
                    sm:text-4xl
                    font-bold
                    text-[#111827]
                  "
                >
                  Start Your Project
                </h2>

                <p
                  className="
                    mt-3
                    text-sm
                    sm:text-base
                    leading-relaxed
                    text-[#111827]/60
                  "
                >
                  Fill out the form below and our team will get back to you
                  shortly.
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Name */}
                  <div>
                    <label className="text-sm font-medium text-[#111827]">
                      Full Name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="
                        mt-2
                        w-full
                        rounded-2xl
                        border border-gray-200
                        bg-[#FBF0E3]/40
                        px-5 py-4
                        outline-none
                        focus:border-[#C8A96A]
                        focus:bg-[#FBF0E3]/70
                        transition-all
                      "
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm font-medium text-[#111827]">
                      Email Address
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="example@email.com"
                      className="
                        mt-2
                        w-full
                        rounded-2xl
                        border border-gray-200
                        bg-[#FBF0E3]/40
                        px-5 py-4
                        outline-none
                        focus:border-[#C8A96A]
                        focus:bg-[#FBF0E3]/70
                        transition-all
                      "
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium text-[#111827]">
                      Project Details
                    </label>

                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="
                        mt-2
                        w-full
                        rounded-2xl
                        border border-gray-200
                        bg-[#FBF0E3]/40
                        px-5 py-4
                        outline-none
                        resize-none
                        focus:border-[#C8A96A]
                        focus:bg-[#FBF0E3]/70
                        transition-all
                      "
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    disabled={loading}
                    className="
                      mt-4
                      w-full
                      rounded-2xl
                      bg-[#061F3E]
                      px-6 py-4
                      text-white
                      font-medium
                      flex items-center justify-center gap-3
                      hover:bg-[#0B2C56]
                      transition-all duration-300
                    "
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                          className="
                            w-5 h-5
                            rounded-full
                            border-2
                            border-white
                            border-t-transparent
                          "
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowUpRight size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
