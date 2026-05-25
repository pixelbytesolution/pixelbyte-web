import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <main className="bg-[#F4EFE6] text-[#0A1F3C]">
      <Navbar />
      <section className="pt-40 pb-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-6 text-[#0A1F3C]/70 leading-relaxed">
              Website content is provided for general information about
              Pixelbyte services. Project scope, delivery terms, pricing, and
              support commitments are confirmed separately in written client
              agreements.
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
