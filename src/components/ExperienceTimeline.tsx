"use client";

import { EXPERIENCES } from "@/data/portfolioData";
import { Calendar, MapPin, CheckCircle, Sparkles } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="parcours" className="py-24 relative bg-grid-pattern overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-white/10 text-xs font-bold text-cyan-700 dark:text-cyan-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Évolution & Expériences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mon Parcours <span className="gradient-text">Professionnel</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base font-medium">
            Une trajectoire tournée vers la livraison de produits robustes, le travail en équipe et l&apos;amélioration continue.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-300 dark:border-slate-700 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[41px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 flex items-center justify-center group-hover:scale-125 transition-transform shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-[#131b2e] rounded-3xl p-6 sm:p-8 border-2 border-slate-200/90 dark:border-white/10 shadow-md hover:border-indigo-500 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-extrabold text-cyan-700 dark:text-cyan-400">{exp.company}</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-300 dark:border-white/10 font-mono font-bold">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-300 dark:border-white/10 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-4 font-normal">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-2 mb-5">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-semibold">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-xs rounded-md bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono font-bold border border-slate-300 dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
