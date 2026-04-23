import CaseStudiesSection from "./sections/case_studies/case_studies";
import HeroSection from "./sections/hero/hero";
import MakeThingsSection from "./sections/make_things/make_things";
import ServicesSection from "./sections/services/services";
import "../index.css";
import "./page.css";

export default function Home() {
  return (
    <main className="main-home">
      <HeroSection />
      <ServicesSection />
      <MakeThingsSection />
      <CaseStudiesSection />
    </main>
  );
}
