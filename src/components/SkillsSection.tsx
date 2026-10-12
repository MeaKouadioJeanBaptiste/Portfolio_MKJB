"use client";

import { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Globe, Smartphone, Server, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export default function SkillsSection() {
  const [selectedCatIndex, setSelectedCatIndex] = useState(0);

  const iconsMap: Record<string, React.ElementType> = {
    Globe: Globe,
    Smartphone: Smartphone,
    Server: Server,
    Cpu: Cpu,
  };

  const activeCategory = SKILL_CATEGORIES[selectedCatIndex];
  const ActiveIcon = iconsMap[activeCategory.icon] || Globe;

  return (
    <section id="competences" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-white/10 text-xs font-bold text-cyan-700 dark:text-cyan-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Stack & Savoir-Faire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Compétences & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base font-medium">
            Une maîtrise complète des outils modernes pour concevoir des applications web rapides et des applications mobiles robustes.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = iconsMap[cat.icon] || Globe;
            const isSelected = selectedCatIndex === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setSelectedCatIndex(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border-2 ${
                  isSelected
                    ? "bg-white dark:bg-[#131b2e] border-indigo-600 text-indigo-700 dark:text-cyan-400 shadow-lg shadow-indigo-500/15 scale-[1.02]"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-indigo-600 dark:text-cyan-400" : "text-slate-500"}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Showcase */}
        <div className="bg-white dark:bg-[#131b2e] rounded-3xl p-6 sm:p-10 border-2 border-slate-200/90 dark:border-white/10 shadow-lg">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shadow-sm">
              <ActiveIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{activeCategory.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 font-medium">{activeCategory.subtitle}</p>
            </div>
          </div>

          {/* Skills Bars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono font-extrabold text-indigo-700 dark:text-cyan-300">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 mb-3 pl-6 font-semibold">{skill.description}</p>

                {/* Progress Bar */}
                <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden p-[1px] border border-slate-300/80 dark:border-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quick summary footer inside card */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="font-bold">Veille technologique active et adhésion stricte aux standards de code</span>
            </div>
            <span className="font-mono text-cyan-800 dark:text-cyan-400 font-extrabold">TypeScript • Clean Architecture • TDD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
