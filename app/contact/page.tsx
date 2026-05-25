import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Contact PixelByte Solutions for professional web development, mobile app development, SEO optimization, ecommerce solutions, branding, and software development services.",

  keywords: [
    "Contact PixelByte Solutions",
    "Software Company Contact",
    "Web Development Kerala",
    "SEO Agency Contact",
    "Website Development Company",
    "Business Software Contact",
    "Technology Company India",
  ],

  openGraph: {
    title: "Contact PixelByte Solutions",

    description:
      "Get in touch with PixelByte Solutions for modern digital solutions and software services.",

    url: "https://pixelbytesolutions.in/contact",

    images: [
      {
        url: "https://pixelbytesolutions.in/name-with-background.png",
        width: 1200,
        height: 630,
        alt: "Contact PixelByte Solutions",
      },
    ],
  },

  alternates: {
    canonical: "https://pixelbytesolutions.in/contact",
  },
};

const ContactPage = () => {
  return (
    <main>
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default ContactPage;
