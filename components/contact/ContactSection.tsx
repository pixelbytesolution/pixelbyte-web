"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { useState, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Swal from "sweetalert2";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success - Show success message
        await Swal.fire({
          icon: "success",
          title: "🎉 Message Sent!",
          text: "We'll get back to you soon.",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonColor: "#2FA4FF",
          confirmButtonText: "Awesome!",
          background: "#0a0f1a",
          color: "#ffffff",
          backdrop: "rgba(0,0,0,0.8)",
          customClass: {
            popup: "rounded-2xl border border-white/10",
            confirmButton: "px-6 py-2 rounded-xl font-semibold",
          },
        });

        // Reset form after success
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        // Show error from API
        await Swal.fire({
          icon: "error",
          title: "❌ Oops!",
          text: data.error || "Failed to send message. Please try again.",
          confirmButtonColor: "#FF6B6B",
          confirmButtonText: "Try Again",
          background: "#0a0f1a",
          color: "#ffffff",
          backdrop: "rgba(0,0,0,0.8)",
          customClass: {
            popup: "rounded-2xl border border-white/10",
            confirmButton: "px-6 py-2 rounded-xl font-semibold",
          },
        });
      }
    } catch (error) {
      console.error("Submission error:", error);

      // Show network error
      await Swal.fire({
        icon: "error",
        title: "🌐 Network Error",
        text: "Please check your internet connection and try again.",
        confirmButtonColor: "#FF6B6B",
        confirmButtonText: "Try Again",
        background: "#0a0f1a",
        color: "#ffffff",
        backdrop: "rgba(0,0,0,0.8)",
        customClass: {
          popup: "rounded-2xl border border-white/10",
          confirmButton: "px-6 py-2 rounded-xl font-semibold",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-black text-white overflow-hidden">
      {/* MAIN CONTAINER SECTION */}
      <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-[#040d1a] to-black">
        {/* Dynamic Inner Radial Blue Glows */}
        <div className="absolute top-[-100px] left-[-50px] w-[600px] h-[600px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-150px] right-[-50px] w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Digital Line Grid Pattern */}
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
          <div className="grid lg:grid-cols-[1fr_520px] gap-16 items-center">
            {/* LEFT SIDE CONTENT BLOCK */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Premium Mixed Badge */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4 py-2
                  rounded-full
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  text-xs sm:text-sm
                  font-semibold
                  tracking-widest
                  text-cyan-300
                  uppercase
                "
              >
                ✦ Contact PixelByte Solutions
              </div>

              {/* Header Grid */}
              <h1
                className="
                  mt-8
                  text-5xl
                  sm:text-6xl
                  lg:text-7xl
                  font-bold
                  leading-[1.1]
                  tracking-tighter
                  text-white
                "
              >
                Let’s Build <br />
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                  Something Great
                </span>
              </h1>

              {/* Subdescription text parameters */}
              <p className="mt-8 max-w-xl text-sm sm:text-base font-light leading-relaxed text-white/70">
                Whether you&apos;re launching a startup, scaling an automation
                layer, or modernizing your data systems — PixelByte Solutions
                turns business operational goals into high-performance digital
                architecture.
              </p>

              {/* Core Information Info Cards (Deep Blue Blocks) */}
              <div className="mt-12 grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: <Phone size={16} />,
                    title: "Phone",
                    value: "+91 98765 43210",
                    link: "tel:+919876543210",
                  },
                  {
                    icon: <Mail size={16} />,
                    title: "Email",
                    value: "pixelbytesolutions.in@gmail.com",
                    link: "mailto:pixelbytesolutions.in@gmail.com",
                  },
                  {
                    icon: <MapPin size={16} />,
                    title: "Location",
                    value: "HiLITE Business Park, Kozhikode, Kerala",
                    link: "https://share.google/WwODL6tEinUmWUo9w",
                  },
                ].map((item, index) => {
                  return item.link ? (
                    <motion.a
                      key={index}
                      href={item.link}
                      target={
                        item.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      whileHover={{
                        y: -6,
                        borderColor: "rgba(34, 211, 238, 0.3)",
                      }}
                      className="
                        rounded-2xl
                        bg-[#081B34]/40
                        border border-white/10
                        p-5
                        text-white
                        shadow-sm
                        transition-all duration-300
                        cursor-pointer block
                      "
                    >
                      <div
                        className="
                          w-9 h-9
                          rounded-xl
                          bg-cyan-400/10
                          text-cyan-300
                          flex items-center justify-center
                        "
                      >
                        {item.icon}
                      </div>

                      <p className="mt-4 text-[11px] font-mono tracking-wider uppercase text-white/40">
                        {item.title}
                      </p>
                      <h3 className="mt-1 text-xs sm:text-xs font-medium tracking-tight text-white leading-snug">
                        {item.value}
                      </h3>
                    </motion.a>
                  ) : (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -6,
                        borderColor: "rgba(34, 211, 238, 0.3)",
                      }}
                      className="
                        rounded-2xl
                        bg-[#081B34]/40
                        border border-white/10
                        p-5
                        text-white
                        shadow-sm
                        transition-all duration-300
                      "
                    >
                      <div
                        className="
                          w-9 h-9
                          rounded-xl
                          bg-cyan-400/10
                          text-cyan-300
                          flex items-center justify-center
                        "
                      >
                        {item.icon}
                      </div>

                      <p className="mt-4 text-[11px] font-mono tracking-wider uppercase text-white/40">
                        {item.title}
                      </p>
                      <h3 className="mt-1 text-xs sm:text-xs font-medium tracking-tight text-white leading-snug">
                        {item.value}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Channels Link Row */}
              <div className="mt-10 flex items-center gap-3">
                {[
                  {
                    icon: <FaFacebookF size={14} />,
                    href: "https://www.facebook.com/",
                  },
                  {
                    icon: <FaInstagram size={14} />,
                    href: "https://www.instagram.com/pixel_byte_solutions",
                  },
                  {
                    icon: <FaLinkedinIn size={14} />,
                    href: "https://www.linkedin.com/",
                  },
                  {
                    icon: <FaWhatsapp size={14} />,
                    href: "https://wa.me/919061334391",
                  },
                ].map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="
                      w-10 h-10
                      rounded-xl
                      border border-white/10
                      bg-white/5
                      text-white
                      flex items-center justify-center
                      cursor-pointer
                      hover:bg-cyan-400
                      hover:text-black
                      transition-all duration-300
                      shadow-sm
                    "
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* INTERACTIVE INPUT FORM CARD (Cinematic Navy/Dark Card) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                relative
                rounded-3xl
                border border-white/10
                bg-[#081B34]/30
                backdrop-blur-sm
                p-8
                sm:p-10
                shadow-2xl shadow-black/50
                overflow-hidden
              "
            >
              {/* Internal decorative blend filter glow */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Start Your Project
                </h2>

                <p className="mt-2 text-xs sm:text-sm font-light leading-relaxed text-white/60">
                  Fill out the criteria below and our technical team will review
                  your project specs shortly.
                </p>

                {/* PROJECT DATA INPUT PROTOCOLS */}
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {/* Name field */}
                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-white/80">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="
                        mt-2
                        w-full
                        text-sm
                        font-light
                        rounded-xl
                        border border-white/10
                        bg-black/40
                        px-4 py-3.5
                        text-white
                        placeholder-white/30
                        outline-none
                        focus:border-cyan-400
                        focus:bg-black/60
                        transition-all
                      "
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-white/80">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="example@email.com"
                      className="
                        mt-2
                        w-full
                        text-sm
                        font-light
                        rounded-xl
                        border border-white/10
                        bg-black/40
                        px-4 py-3.5
                        text-white
                        placeholder-white/30
                        outline-none
                        focus:border-cyan-400
                        focus:bg-black/60
                        transition-all
                      "
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-white/80">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your architectural goals..."
                      className="
                        mt-2
                        w-full
                        text-sm
                        font-light
                        rounded-xl
                        border border-white/10
                        bg-black/40
                        px-4 py-3.5
                        text-white
                        placeholder-white/30
                        outline-none
                        resize-none
                        focus:border-cyan-400
                        focus:bg-black/60
                        transition-all
                      "
                    />
                  </div>

                  {/* Submittal Trigger button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="
                      mt-4
                      w-full
                      rounded-xl
                      bg-gradient-to-r from-[#2FA4FF] to-[#5B8CFF]
                      px-6 py-4
                      text-white
                      text-sm
                      font-semibold
                      flex items-center justify-center gap-2
                      hover:opacity-90
                      transition-all duration-300
                      shadow-md shadow-blue-500/10
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                    "
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                          className="w-4 h-4 rounded-full border-2 border-white border-t-transparent"
                        />
                        Verifying Connection...
                      </>
                    ) : (
                      <>
                        Send Specs
                        <ArrowUpRight size={16} />
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
