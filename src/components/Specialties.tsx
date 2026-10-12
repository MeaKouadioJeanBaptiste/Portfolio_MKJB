"use client";

import { Globe, Smartphone, Zap, ShieldCheck, Layers, Repeat, Sparkles } from "lucide-react";

export default function Specialties() {
  const webFeatures = [
    "Applications Web Next.js 15 avec App Router & React Server Components",
    "Optimisation SEO poussée et scores Lighthouse 95+ (Core Web Vitals)",
    "Rendu hybride haute performance : SSR, SSG et Streaming",
    "Interfaces interactives riches avec Tailwind CSS, TypeScript et micro-animations",
    "Intégration d'APIs REST, GraphQL et WebSockets pour flux temps réel",
  ];

  const mobileFeatures = [
    "Applications mobiles cross-platform iOS & Android avec React Native & Flutter",
    "Architecture Offline-First avec base de données locale (SQLite, WatermelonDB)",
    "Animations ultra-fluides cadencées à 60/120 FPS avec Reanimated 3",
    "Intégration poussée du matériel : GPS, Appareil photo, Biométrie, Push Notifs",
    "Gestion complète du cycle de vie et publication sur App Store et Google Play",
  ];

  const synergies = [
    {
      icon: Layers,
      title: "Architecture Unifiée",
      description: "Une cohérence totale entre votre back-end, votre site web et vos applications mobiles.",
    },
    {
      icon: Repeat,
      title: "Partage de Code & Logique",
      description: "Réutilisation des types TypeScript, schémas de validation et règles métiers entre Web et Mobile.",
    },
    {
      icon: Zap,
      title: "Accélération du Time-to-Market",
      description: "Un seul interlocuteur technique maîtrise la chaîne complète, divisant les frictions par deux.",
    },
  ];

  return (
    <section id="specialites" className="py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-white/10 text-xs font-bold text-cyan-700 dark:text-cyan-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Double Spécialité Dédiée</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            L&apos;alliance parfaite du <span className="gradient-text">Web & du Mobile</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-medium">
            Chaque plateforme possède ses règles ergonomiques et ses contraintes d&apos;ingénierie. Je conçois vos projets avec une expertise native sur chacun des deux mondes.
          </p>
        </div>

        {/* Two Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pillar 1: Web Development */}
          <div className="bg-white dark:bg-[#131b2e] p-8 md:p-10 rounded-3xl border-2 border-slate-200/90 dark:border-white/10 shadow-lg relative group hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 group-hover:scale-110 transition-transform shadow-sm">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                  Écosystème Frontend & SSR
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Ingénierie Web Moderne</h3>
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              Du simple site vitrine ultra-rapide jusqu&apos;à la plateforme SaaS complexe, je crée des applications web rapides, responsives et prêtes pour une forte croissance.
            </p>

            <ul className="space-y-3.5">
              {webFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-100 font-medium">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
              {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "REST & GraphQL", "SEO & CWV"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 text-xs rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-cyan-500/30 text-slate-800 dark:text-cyan-300 font-mono font-bold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 2: Mobile Development */}
          <div className="bg-white dark:bg-[#131b2e] p-8 md:p-10 rounded-3xl border-2 border-slate-200/90 dark:border-white/10 shadow-lg relative group hover:border-indigo-500 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-700 dark:text-indigo-400 group-hover:scale-110 transition-transform shadow-sm">
                <Smartphone className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                  iOS & Android Natif / Cross-Platform
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Ingénierie Mobile Fluide</h3>
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              Des applications mobiles conçues avec amour du détail, respectant les Human Interface Guidelines d&apos;Apple et le Material Design de Google, tout en assurant une vitesse maximale.
            </p>

            <ul className="space-y-3.5">
              {mobileFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-100 font-medium">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
              {["React Native", "Expo SDK", "Flutter & Dart", "SQLite Offline", "Push Notifications", "App Stores"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 text-xs rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-indigo-500/30 text-slate-800 dark:text-indigo-300 font-mono font-bold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Synergy Bar */}
        <div className="mt-12 bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border-2 border-slate-200/90 dark:border-white/10 shadow-md">
          <div className="text-center mb-6">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Pourquoi cette double compétence fait la différence ?</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium">
              Vous bénéficiez d&apos;un écosystème homogène et sans rupture technique entre vos terminaux.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {synergies.map((syn, idx) => {
              const IconComp = syn.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-400 shrink-0 shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{syn.title}</h5>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed font-medium">{syn.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
