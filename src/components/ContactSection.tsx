"use client";

import { useState } from "react";
import { PORTFOLIO_INFO } from "@/data/portfolioData";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Smartphone,
  Globe,
} from "lucide-react";
import { WhatsappIcon } from "@/components/icons/SocialIcons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "web-mobile",
    budget: "standard",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/meajeanbaptiste15@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nom: formData.name,
          Email: formData.email,
          "Type de Projet": formData.projectType,
          Message: formData.message,
          _subject: `🚀 Nouveau projet Portfolio de ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Erreur de transmission");
      }
    } catch (err) {
      console.warn("Échec FormSubmit, bascule vers mailto:", err);
      // Fallback direct vers client mail pour ne jamais perdre le message
      window.location.href = `mailto:${PORTFOLIO_INFO.email}?subject=${encodeURIComponent(
        `Nouveau projet Portfolio de ${formData.name}`
      )}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\nType de projet: ${formData.projectType}\n\nMessage:\n${formData.message}`
      )}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-white/10 text-xs font-bold text-cyan-700 dark:text-cyan-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Collaboration & Échange</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Parlons de votre <span className="gradient-text">Projet</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base font-medium">
            Vous avez une idée d&apos;application mobile, une refonte de plateforme web ou un défi technique ? Discutons-en dès aujourd&apos;hui.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border-2 border-slate-200/90 dark:border-white/10 shadow-md space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Coordonnées Directes</h3>
              <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed font-normal">
                N&apos;hésitez pas à m&apos;écrire directement par email ou me joindre sur WhatsApp pour un échange rapide.
              </p>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200/80 dark:border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block">Email Professionnel</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 truncate block">
                      {PORTFOLIO_INFO.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors shrink-0 border border-slate-300 dark:border-white/10 shadow-sm"
                  title="Copier l'adresse email"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp & Phone */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200/80 dark:border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <WhatsappIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block">WhatsApp & Téléphone</span>
                    <a
                      href={`tel:${PORTFOLIO_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block"
                    >
                      {PORTFOLIO_INFO.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/30 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold transition-colors flex items-center gap-1.5 border border-emerald-500/30 shrink-0"
                >
                  <span>Chatter</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200/80 dark:border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block">Localisation & Mobilité</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 block">
                    {PORTFOLIO_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="bg-white dark:bg-[#131b2e] p-6 rounded-3xl border-2 border-slate-200/90 dark:border-white/10 shadow-md space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-extrabold">
                Engagements de Qualité
              </h4>
              <div className="space-y-2.5 text-xs text-slate-800 dark:text-slate-200 font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <span>Réponse garantie sous 24 heures ouvrées</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <span>Étude de faisabilité et cadrage technique préalable</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <span>Code maintenable, documenté et testé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-10 rounded-3xl border-2 border-slate-200/90 dark:border-white/15 shadow-xl">
              {submitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Message envoyé avec succès !</h3>
                    <p className="text-slate-700 dark:text-slate-200 text-sm max-w-md mx-auto font-medium leading-relaxed">
                      Merci <strong className="text-slate-900 dark:text-white">{formData.name}</strong> ! Votre demande de projet a été transmise directement à Méa Kouadio Jean-Baptiste (<span className="text-indigo-600 dark:text-cyan-400 font-extrabold">{PORTFOLIO_INFO.email}</span>).
                    </p>
                  </div>

                  {/* Bouton direct WhatsApp en complément pour échange instantané */}
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 max-w-md mx-auto text-left flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <WhatsappIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <div className="text-xs">
                        <span className="font-bold text-slate-900 dark:text-white block">Échange encore plus rapide ?</span>
                        <span className="text-slate-600 dark:text-slate-400">Transférez aussi ce projet sur son WhatsApp</span>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/2250778312970?text=${encodeURIComponent(
                        `Bonjour Méa, je viens de vous envoyer une demande depuis votre portfolio :\n- Nom : ${formData.name}\n- Email : ${formData.email}\n- Type : ${formData.projectType}\n- Message : ${formData.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 shrink-0"
                    >
                      <span>WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "web-mobile",
                        budget: "standard",
                        message: "",
                      });
                    }}
                    className="mt-3 px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-300 dark:border-white/10"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">Envoyez-moi un message</h3>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 dark:text-slate-200">Votre Nom ou Entreprise</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Jean Dupont"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-indigo-600 dark:focus:border-cyan-400 transition-colors shadow-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 dark:text-slate-200">Votre Email</label>
                      <input
                        type="email"
                        required
                        placeholder="jean.dupont@entreprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-indigo-600 dark:focus:border-cyan-400 transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 dark:text-slate-200">Type de Projet</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: "web", label: "Application Web (Next.js)", icon: Globe },
                        { id: "mobile", label: "Application Mobile (iOS/Android)", icon: Smartphone },
                        { id: "web-mobile", label: "Pack Web & Mobile Fullstack", icon: Sparkles },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = formData.projectType === item.id;
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setFormData({ ...formData, projectType: item.id })}
                            className={`p-3 rounded-xl text-left border-2 text-xs font-bold flex items-center gap-2 transition-all ${
                              isSelected
                                ? "bg-indigo-50/80 dark:bg-slate-900 border-indigo-600 dark:border-cyan-400 text-indigo-900 dark:text-white shadow-sm"
                                : "bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                            }`}
                          >
                            <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-indigo-600 dark:text-cyan-400" : "text-slate-500"}`} />
                            <span className="truncate">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 dark:text-slate-200">Description du besoin</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Expliquez brièvement votre projet, objectifs et délais envisagés..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-indigo-600 dark:focus:border-cyan-400 transition-colors resize-none shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                        <span>Transmission en cours...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Envoyer ma demande</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
