"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_INFO, CODE_SNIPPETS } from "@/data/portfolioData";
import {
  Globe,
  Smartphone,
  ArrowRight,
  Mail,
  CheckCircle2,
  Terminal,
  Sparkles,
  Code2,
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Hero() {
  const [activeCodeTab, setActiveCodeTab] = useState<"nextjs" | "reactnative" | "flutter">("nextjs");
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeCodeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-950 text-white"
    >
      {/* Image d'arrière-plan - 100% visible, lumineuse et éclatante */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/hero-bg.jpg"
          alt="Méa Kouadio Jean-Baptiste en plein développement"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] lg:object-[center_15%] opacity-100 transition-all duration-700"
        />
        {/* Voile sombre très léger : préserve l'éclat et les couleurs de la photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/25 to-slate-950/10" />
        {/* Dégradé doux et discret en bas */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-50 dark:from-[#0b0f19] to-transparent" />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-500/20 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/20 text-xs font-semibold text-slate-200 shadow-sm backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 -ml-3.5"></span>
              <span>{PORTFOLIO_INFO.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Portfolio Professionnel
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-md">
                Bonjour, je suis{" "}
                <span className="gradient-text block mt-1">{PORTFOLIO_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-100 drop-shadow-sm">
                Développeur Fullstack{" "}
                <span className="text-cyan-400 border-b-2 border-cyan-400/50 pb-0.5">Web</span> &{" "}
                <span className="text-indigo-400 border-b-2 border-indigo-400/50 pb-0.5">Mobile</span>
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-sm">
              {PORTFOLIO_INFO.tagline} Spécialisé dans les écosystèmes{" "}
              <strong className="text-white font-bold">Next.js & React</strong> pour le Web haute
              performance, et{" "}
              <strong className="text-white font-bold">React Native & Flutter</strong> pour des applications
              mobiles natives et multiplateformes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projets"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold shadow-lg shadow-indigo-600/35 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explorer mes projets</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold hover:scale-[1.02] transition-all backdrop-blur-md shadow-sm"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Me contacter</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-slate-300 text-sm font-medium">
              <a
                href={PORTFOLIO_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-300 text-xs sm:text-sm font-semibold">{PORTFOLIO_INFO.location}</span>
            </div>
          </div>

          {/* Right Column: Interactive Code Sandbox Card avec effet verre dépoli */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-950/65 backdrop-blur-md">
              {/* Window Header */}
              <div className="bg-slate-900/70 px-4 py-3 border-b border-white/10 flex items-center justify-between backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="text-xs text-slate-200 font-mono ml-2 flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    mkjb-architecture.ts
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="text-xs text-slate-200 hover:text-white px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 transition-colors flex items-center gap-1 border border-white/10 font-medium"
                  title="Copier le code"
                >
                  {copiedCode ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copié !</span>
                    </>
                  ) : (
                    <span>Copier</span>
                  )}
                </button>
              </div>

              {/* Tabs Switch */}
              <div className="bg-slate-950/60 border-b border-white/10 flex px-2 pt-2 gap-1">
                <button
                  onClick={() => setActiveCodeTab("nextjs")}
                  className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-t-lg transition-all ${
                    activeCodeTab === "nextjs"
                      ? "bg-slate-900/90 text-cyan-400 border-t-2 border-cyan-400 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Next.js 15 Web</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab("reactnative")}
                  className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-t-lg transition-all ${
                    activeCodeTab === "reactnative"
                      ? "bg-slate-900/90 text-indigo-400 border-t-2 border-indigo-400 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>React Native</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab("flutter")}
                  className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-t-lg transition-all ${
                    activeCodeTab === "flutter"
                      ? "bg-slate-900/90 text-purple-400 border-t-2 border-purple-400 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Flutter BLoC</span>
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="p-4 bg-slate-950/50 font-mono text-xs text-slate-100 leading-relaxed overflow-x-auto max-h-[340px]">
                <pre>
                  <code>{CODE_SNIPPETS[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Card Footer Features */}
              <div className="bg-slate-900/70 p-3 border-t border-white/10 grid grid-cols-3 text-center text-[11px] text-slate-300 backdrop-blur-sm">
                <div className="border-r border-white/10">
                  <span className="block font-bold text-white">SSR & SSG</span>
                  <span className="text-slate-300 font-medium">Next.js App Router</span>
                </div>
                <div className="border-r border-white/10">
                  <span className="block font-bold text-white">Offline-First</span>
                  <span className="text-slate-300 font-medium">React Native & SQLite</span>
                </div>
                <div>
                  <span className="block font-bold text-white">Clean Code</span>
                  <span className="text-slate-300 font-medium">TypeScript & Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip (affiché uniquement si défini) */}
        {PORTFOLIO_INFO.stats && PORTFOLIO_INFO.stats.length > 0 && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {PORTFOLIO_INFO.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-[#131b2e] p-6 rounded-2xl text-center border-2 border-slate-200/90 dark:border-white/10 shadow-md hover:border-indigo-400 transition-all group"
              >
                <div className="text-3xl md:text-4xl font-extrabold gradient-text tracking-tight group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-100 mt-2 font-bold tracking-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
