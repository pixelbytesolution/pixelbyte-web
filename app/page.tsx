import About from "@/components/home/about/About";
import AboutCompany from "@/components/home/about/AboutCompany";
import ChallengesSection from "@/components/home/ChallengesSection";
import Hero from "@/components/home/hero/Hero";
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
    </main>
  );
};

export default page;
