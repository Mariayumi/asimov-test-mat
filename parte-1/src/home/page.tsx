import CaseStudiesSection from "./sections/case_studies";
import HeroSection from "./sections/hero";
import MakeThingsSection from "./sections/make_things";
import ServicesSection from "./sections/services";
import "./page.css";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "140px" }}>
      <HeroSection />
      <ServicesSection />
      <MakeThingsSection />
      <CaseStudiesSection />
    </main>
  );
}
