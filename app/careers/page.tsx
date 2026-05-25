import CareersSection from "@/components/careers/CareersSection";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",

  description:
    "Join PixelByte Solutions and work on innovative web development, mobile app development, UI/UX design, SEO, and software engineering projects.",

  keywords: [
    "Careers at PixelByte",
    "Software Developer Jobs",
    "Web Developer Careers",
    "React Developer Jobs",
    "Next.js Jobs",
    "UI UX Designer Jobs",
    "SEO Specialist Jobs",
    "Technology Careers India",
  ],

  openGraph: {
    title: "Careers at PixelByte Solutions",

    description:
      "Build your career with a modern digital solutions and software development company.",

    url: "https://pixelbytesolutions.in/careers",

    images: [
      {
        url: "https://pixelbytesolutions.in/name.png",
        width: 1200,
        height: 630,
        alt: "PixelByte Careers",
      },
    ],
  },

  alternates: {
    canonical: "https://pixelbytesolutions.in/careers",
  },
};

const CareersPage = () => {
  return (
    <main>
      <Navbar />
      <CareersSection />
      <Footer />
    </main>
  );
};

export default CareersPage;
