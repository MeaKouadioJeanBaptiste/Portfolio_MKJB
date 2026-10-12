"use client";

import { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import {
  Smartphone,
  Globe,
  Layers,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "mobile" | "web" | "fullstack">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projets" className="py-24 relative bg-grid-pattern overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-white/10 text-xs font-bold text-cyan-700 dark:text-cyan-400 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Réalisations & Études de Cas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Projets Récents <span className="gradient-text">Web & Mobile</span>
            </h2>
            <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base font-medium">
              Une sélection de projets concrets et d&apos;applications en production illustrant mon savoir-faire technique et ergonomique.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-white/10 shadow-sm">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md"
                  : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              Tous ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter("mobile")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === "mobile"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
            <button
              onClick={() => setActiveFilter("web")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === "web"
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md"
                  : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Web</span>
            </button>
            <button
              onClick={() => setActiveFilter("fullstack")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === "fullstack"
                  ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md"
                  : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Fullstack</span>
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#131b2e] rounded-3xl p-6 flex flex-col justify-between group border-2 border-slate-200/90 dark:border-white/10 shadow-md hover:border-indigo-400 dark:hover:border-slate-500 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top bar color indicator */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accentColor}`}
              />

              <div>
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-800 dark:text-cyan-300 font-bold px-2.5 py-1 rounded-md bg-cyan-100/90 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800/40">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1 mb-4">{project.subtitle}</p>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-200 text-sm line-clamp-3 leading-relaxed mb-4 font-normal">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Tech Stack & Actions */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] rounded bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono font-bold border border-slate-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[11px] rounded bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 font-mono font-bold">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-extrabold text-indigo-700 dark:text-cyan-400 hover:text-indigo-900 dark:hover:text-cyan-300 flex items-center gap-1 group/btn"
                  >
                    <span>Détails & Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shadow-sm"
                        title="Voir sur GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shadow-sm"
                        title="Voir la démo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
