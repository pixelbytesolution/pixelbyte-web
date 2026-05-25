import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";
import Link from "next/link";

const projects = [
  "Business workflow dashboards",
  "Static brand websites",
  "Automation portals",
  "Custom software systems",
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#F4EFE6] text-[#0A1F3C]">
      <Navbar />
      <section className="pt-40 pb-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#2FA4FF]">
              Project Portfolio
            </p>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              Digital systems built for real operations.
            </h1>
            <p className="mt-6 text-[#0A1F3C]/70 leading-relaxed">
              Pixelbyte designs and ships fast websites, web applications,
              automation tools, and tailored business platforms for teams that
              need reliable digital infrastructure.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <div
                key={project}
                className="rounded-2xl border border-[#0A1F3C]/10 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold">{project}</h2>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-12 inline-flex rounded-xl bg-[#0A1F3C] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2FA4FF]"
          >
            Discuss a Project
          </Link>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
