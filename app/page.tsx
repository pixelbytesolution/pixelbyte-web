import Footer from "@/components/footer/Footer";
import About from "@/components/home/about/About";
import AboutCompany from "@/components/home/about/AboutCompany";
import ApproachSection from "@/components/home/ApproachSection";
import ChallengesSection from "@/components/home/ChallengesSection";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/hero/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsScroll from "@/components/home/TestimonialsScroll";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PixelByte Solutions | Web Development & Software Company",

  description:
    "PixelByte Solutions is a leading web development and software company delivering powerful digital solutions including Next.js development, React applications, SEO optimization, UI/UX design, ecommerce development, and custom software solutions.",

  keywords: [
    "PixelByte Solutions",
    "Web Development Company",
    "Software Company India",
    "Website Development Kerala",
    "Next.js Development",
    "React Development",
    "SEO Services",
    "UI UX Design",
    "Mobile App Development",
    "Custom Software Development",
    "Business Website Development",
    "Ecommerce Website Development",
    "Digital Solutions Company",
    "Technology Company Kerala",
    "Professional Web Designers",
    "Modern Website Development",
    "Full Stack Development",
    "API Development",
    "Responsive Website Design",
    "Digital Agency India",
  ],

  openGraph: {
    title: "PixelByte Solutions | From Pixels to Powerful Solutions",

    description:
      "Professional web development, mobile app development, UI/UX design, SEO optimization, and scalable software solutions for startups and businesses.",

    url: "https://pixelbytesolutions.in",

    siteName: "PixelByte Solutions",

    images: [
      {
        url: "https://pixelbytesolutions.in/name-with-background.png",
        width: 1200,
        height: 630,
        alt: "PixelByte Solutions",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "PixelByte Solutions",

    description:
      "Modern web development, software development, SEO, and digital solutions company.",

    images: ["https://pixelbytesolutions.in/name-with-background.png"],
  },

  alternates: {
    canonical: "https://pixelbytesolutions.in",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <main className="relative h-screen">
      <Navbar />
      <Hero />
      <About />
      <AboutCompany />
      <ChallengesSection />
      <ServicesSection />
      <ApproachSection />
      <ServicesGrid />
      <TestimonialsScroll />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default page;
