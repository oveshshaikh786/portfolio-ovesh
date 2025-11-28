// src/app/page.js
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import ExperienceSection from "../components/ExperienceSection";
import CertificationSection from "@/components/CertificationSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ResumeSection from "../components/ResumeSection";
import CurrentFocusSection from "../components/CurrentFocusSection";
import ContactForm from "../components/ContactForm";
import ScrollFeatures from "../components/ScrollFeatures";

export default function Home() {
  return (
    <main>
      <ScrollFeatures />
      <Navbar />
      <HomeSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <CertificationSection />
      <ResumeSection />
      <CurrentFocusSection />
      <ContactForm />
    </main>
  );
}
