import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="relative h-screen">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default page;
