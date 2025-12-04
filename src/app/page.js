// src/app/page.js
import HomeHeroSection from "../components/HomeHeroSection";
import HomeSkillsPreview from "@/components/subcomponents/HomeSkillsPreview";
import HomeExperiencePreview from "@/components/subcomponents/HomeExperiencePreview";
import HomeProjectsPreview from "@/components/subcomponents/HomeProjectsPreview";
import HomeAboutPreview from "@/components/subcomponents/HomeAboutPreview";

export default function Home() {
  return (
    <main>
      <HomeHeroSection />
      <HomeSkillsPreview />
      <HomeExperiencePreview />
      <HomeProjectsPreview />
      <HomeAboutPreview />
    </main>
  );
}
