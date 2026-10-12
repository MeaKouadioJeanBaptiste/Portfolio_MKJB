# Portfolio MKJB — Développeur Web & Mobile Fullstack

Portfolio moderne et interactif développé avec **Next.js 15 (App Router)**, **React 19**, **TypeScript** et **Tailwind CSS**.

---

## 🌟 Présentation

Ce portfolio met en valeur la double compétence en ingénierie logicielle :
- **Développement Web Moderne** : Next.js, React, Tailwind CSS, Server Actions, Server Components, SSR/SSG, SEO & Core Web Vitals.
- **Développement Mobile Haute Performance** : React Native, Flutter, Expo, SQLite Offline-First, Animations 60 FPS, déploiement App Store & Google Play.

---

## 🚀 Fonctionnalités Clés

1. **Header & Navigation Glassmorphism** : Navigation fluide avec menu responsive mobile et bouton d'action rapide.
2. **Hero Section Immersive** :
   - Titre accrocheur et indicateur de disponibilité en temps réel.
   - Bac à sable de code interactif avec bascule en direct entre Next.js, React Native et Flutter.
   - Statistiques clés et liens réseaux professionnels.
3. **Double Spécialité Dédiée** : Comparatif visuel des piliers Web vs Mobile et bénéfices de l'architecture unifiée.
4. **Projets & Réalisations avec Filtres Dynamiques** :
   - Filtres par catégorie (*Tous*, *Mobile*, *Web*, *Fullstack*).
   - Cartes de projets avec tags technologiques et points forts.
   - **Modale de Détails & Architecture** : Ouverture d'une vue détaillée avec problème résolu, métriques d'impact et liens directs.
5. **Compétences & Stack Technique** :
   - Catégorisation claire (Web, Mobile, Back-End, DevOps/Outils).
   - Jauges de maîtrise interactives et descriptifs précis.
6. **Parcours & Expériences** : Timeline chronologique détaillée avec réalisations chiffrées.
7. **Formulaire de Contact & Coordonnées** :
   - Formulaire interactif avec retour visuel immédiat.
   - Bouton de copie rapide de l'adresse email en un clic.
   - Liens WhatsApp, LinkedIn et GitHub.

---

## 🛠️ Stack Technique

- **Framework** : [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Bibliothèque UI** : [React 19](https://react.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/) + SVGs optimisés

---

## 💻 Démarrage Rapide

### 1. Installation des dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 3. Compiler pour la production
```bash
npm run build
```

### 4. Lancer la version de production
```bash
npm run start
```

---

## 📁 Structure du Projet

```text
├── src/
│   ├── app/
│   │   ├── globals.css        # Styles globaux, glassmorphism, animations
│   │   ├── layout.tsx         # Layout racine & métadonnées SEO
│   │   └── page.tsx           # Page d'accueil assemblant les composants
│   ├── components/
│   │   ├── Navbar.tsx         # Barre de navigation responsive
│   │   ├── Hero.tsx           # Section Hero & bac à sable de code
│   │   ├── Specialties.tsx    # Spécialités Web vs Mobile
│   │   ├── ProjectsSection.tsx# Galerie de projets avec filtres
│   │   ├── ProjectModal.tsx   # Modale détaillée des projets
│   │   ├── SkillsSection.tsx  # Compétences et jauges de progression
│   │   ├── ExperienceTimeline.tsx # Timeline du parcours professionnel
│   │   ├── ContactSection.tsx # Formulaire de contact et coordonnées
│   │   ├── Footer.tsx         # Pied de page et bouton retour en haut
│   │   └── icons/
│   │       └── SocialIcons.tsx# Icônes SVG haute fidélité (GitHub, LinkedIn)
│   └── data/
│       └── portfolioData.ts   # Données configurables (projets, compétences, bio)
├── package.json
└── tsconfig.json
```
