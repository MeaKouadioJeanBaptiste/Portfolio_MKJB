"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-indigo-500/20 selection:text-indigo-700 dark:selection:text-cyan-200 transition-colors duration-300">
        <Navbar />
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceTimeline />
        <ContactSection />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
