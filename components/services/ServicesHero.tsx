"use client";

import Container from "../ui/Container";

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-16 bg-[#0b0f19] text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Our Services
          </h1>

          <p className="mt-4 text-white/70 text-sm sm:text-base">
            We provide cutting-edge digital solutions to help your business grow
            faster, smarter, and more efficiently.
          </p>
        </div>
      </Container>
    </section>
  );
}
