import Footer from "@/components/footer/Footer";
import About from "@/components/home/about/About";
import AboutCompany from "@/components/home/about/AboutCompany";
import ApproachSection from "@/components/home/ApproachSection";
import ChallengesSection from "@/components/home/ChallengesSection";
import Hero from "@/components/home/hero/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsScroll from "@/components/home/TestimonialsScroll";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

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
      <Footer />
    </main>
  );
};

export default page;
