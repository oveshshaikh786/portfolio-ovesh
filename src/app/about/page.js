// ABOUT (story + skills + certs)
// src/app/about/page.js

import AboutSection from "../../components/AboutSection";
import SkillsSection from "../../components/SkillsSection";
import CertificationSection from "../../components/CertificationSection";
import CurrentFocusSection from "../../components/CurrentFocusSection";

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <SkillsSection />
      <CertificationSection />
      <CurrentFocusSection />
    </main>
  );
}
