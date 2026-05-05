"use client";

import Container from "../ui/Container";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, scalable web applications built with cutting-edge technologies.",
  },
  {
    title: "Mobile App Development",
    description: "High-performance mobile apps for Android and iOS platforms.",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs focused on user experience and conversion.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud infrastructure tailored for your needs.",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategies to grow your brand and reach the right audience effectively.",
  },
  {
    title: "Custom Software",
    description:
      "Tailored solutions designed specifically for your business workflows.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-[white]">
      <Container>
        <div
          className="
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
