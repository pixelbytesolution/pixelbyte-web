import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ServiceInsights from "@/components/services/ServiceInsights";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesStats from "@/components/services/ServicesStats";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",

  description:
    "Explore web development, mobile app development, SEO optimization, UI/UX design, ecommerce development, branding, and custom software solutions from PixelByte Solutions.",

  keywords: [
    "Web Development Services",
    "Mobile App Development",
    "SEO Services Kerala",
    "Next.js Developers",
    "React Developers",
    "Custom Software Development",
    "UI UX Design Services",
    "Ecommerce Website Development",
    "Business Website Solutions",
    "API Development Services",
  ],

  openGraph: {
    title: "Professional Digital Services | PixelByte Solutions",

    description:
      "Modern software, web development, SEO, branding, and digital transformation services.",

    url: "https://pixelbytesolutions.in/services",

    images: [
      {
        url: "https://pixelbytesolutions.in/pixelbyte-full.png",
        width: 1200,
        height: 630,
        alt: "PixelByte Services",
      },
    ],
  },

  alternates: {
    canonical: "https://pixelbytesolutions.in/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <ServiceInsights />
      <ServicesStats />
      <Footer />
    </main>
  );
}
