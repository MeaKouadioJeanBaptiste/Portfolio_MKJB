"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PORTFOLIO_INFO } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Smartphone, Globe, Send, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Projets", href: "#projets" },
    { name: "Compétences", href: "#competences" },
    { name: "Parcours", href: "#parcours" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel bg-white/90 dark:bg-slate-950/85 border-b border-slate-200/80 dark:border-white/10 py-3 shadow-md dark:shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative h-10 w-auto flex items-center shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Logo Dev Loop"
              width={115}
              height={40}
              className="h-10 w-auto rounded-lg object-contain"
              priority
            />
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-base tracking-tight flex items-center gap-1.5">
              <span>{PORTFOLIO_INFO.name}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-medium">
                <Globe className="w-3 h-3" /> Web
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium">
                <Smartphone className="w-3 h-3" /> Mobile
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-slate-100 dark:hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Theme Toggler */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Switch Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all shadow-sm hover:scale-105"
            title={theme === "light" ? "Passer en mode sombre" : "Passer en mode clair (reposant)"}
            aria-label="Changer le thème"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-indigo-600" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Discuter d&apos;un projet</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            aria-label="Changer le thème"
          >
            {theme === "light" ? <Moon className="w-5 h-5 text-indigo-600" /> : <Sun className="w-5 h-5 text-amber-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-white/10 px-4 pt-4 pb-6 mt-2 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center text-sm font-semibold px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Discuter d&apos;un projet</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
