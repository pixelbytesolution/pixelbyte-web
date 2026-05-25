import Footer from "@/components/footer/Footer";
import AboutPage from "@/components/about/AboutPage";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about PixelByte Solutions, a modern software and web development company delivering innovative digital solutions, UI/UX design, SEO services, ecommerce platforms, and scalable business applications.",

  keywords: [
    "About PixelByte Solutions",
    "Software Company Kerala",
    "Web Development Agency",
    "Digital Solutions Company",
    "Professional Developers",
    "Technology Company India",
    "Creative Software Team",
    "Business Software Solutions",
  ],

  openGraph: {
    title: "About PixelByte Solutions",
    description:
      "Discover our mission, vision, and expertise in software and web development.",
    url: "https://pixelbytesolutions.in/about",
    images: [
      {
        url: "https://pixelbytesolutions.in/logo-with-background.png",
        width: 1200,
        height: 630,
        alt: "About PixelByte Solutions",
      },
    ],
  },

  alternates: {
    canonical: "https://pixelbytesolutions.in/about",
  },
};

const page = () => {
  return (
    <main>
      <Navbar />
      <AboutPage />
      <Footer />
    </main>
  );
};

export default page;
