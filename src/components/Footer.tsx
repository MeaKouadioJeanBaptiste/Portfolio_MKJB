"use client";

import { PORTFOLIO_INFO } from "@/data/portfolioData";
import { ArrowUp, Mail, Smartphone, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-slate-950/90 pt-16 pb-12 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow-sm">
                {PORTFOLIO_INFO.initials}
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white block text-sm">{PORTFOLIO_INFO.name}</span>
                <span className="text-xs text-slate-600 dark:text-slate-400 block font-medium">{PORTFOLIO_INFO.title}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed">
              Création d&apos;applications web modernes, fluides et sécurisées avec Next.js et développement mobile natif / cross-platform (iOS & Android).
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={PORTFOLIO_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              <li>
                <a href="#hero" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#projets" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                  Projets & Réalisations
                </a>
              </li>
              <li>
                <a href="#competences" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                  Compétences & Stack
                </a>
              </li>
              <li>
                <a href="#parcours" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                  Parcours Professionnel
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies Showcase */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4">
              Écosystème
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              <li className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Next.js 15 & React 19</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>React Native & Expo</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Flutter & Dart</span>
              </li>
              <li>TypeScript & Tailwind CSS</li>
              <li>PostgreSQL, Prisma & Supabase</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © 2026 {PORTFOLIO_INFO.name}. Tous droits réservés.
          </div>

          <div className="flex items-center gap-2">
            <span>Conçu avec Next.js 15 & Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
