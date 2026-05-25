import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";

export default function PrivacyPage() {
  return (
    <main className="bg-[#F4EFE6] text-[#0A1F3C]">
      <Navbar />
      <section className="pt-40 pb-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-6 text-[#0A1F3C]/70 leading-relaxed">
              Pixelbyte uses contact form details only to respond to project,
              service, and career enquiries. We do not sell personal
              information. For privacy questions, contact
              pixelbytesolutions.in@gmail.com.
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
