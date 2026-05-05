import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ServiceInsights from "@/components/services/ServiceInsights";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesHero from "@/components/services/ServicesHero";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <ServiceInsights />
      <Footer />
    </main>
  );
}
