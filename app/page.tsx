import About from "@/components/about/About";
import AboutCompany from "@/components/about/AboutCompany";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="relative h-screen">
      <Navbar />
      <Hero />
      <About />
      <AboutCompany />
    </main>
  );
};

export default page;
