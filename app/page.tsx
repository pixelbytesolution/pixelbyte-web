import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="relative h-screen">
      <Navbar />
      <Hero />
    </main>
  );
};

export default page;
