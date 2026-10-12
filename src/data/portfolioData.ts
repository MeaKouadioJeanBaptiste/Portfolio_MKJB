export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "mobile" | "web" | "fullstack";
  categoryLabel: string;
  description: string;
  longDescription: string;
  technologies: string[];
  metrics: string;
  role: string;
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  accentColor: string;
  badge: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    description: string;
    icon?: string;
  }[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface PortfolioInfo {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  bio: string;
  stats?: { label: string; value: string }[];
}

export const PORTFOLIO_INFO: PortfolioInfo = {
  name: "Méa Kouadio Jean-Baptiste",
  initials: "MKJB",
  title: "Développeur Fullstack Web & Mobile",
  tagline:
    "Je transforme vos idées en applications Web ultra-rapides et applications Mobiles fluides, scalables et centrées sur l'utilisateur.",
  location: "Abidjan, Côte d'Ivoire & En Remote International",
  email: "contact.jeanbaptistemea@gmail.com",
  phone: "+225 07 00 00 00 00",
  availability: "Disponible pour nouveaux projets & missions freelance / CDI",
  github: "https://github.com/MeaKouadioJeanBaptiste",
  linkedin: "https://www.linkedin.com/in/jean-baptiste-mea-a2a098224",
  whatsapp: "https://wa.me/2250700000000",
  bio: `Passionné par l'écosystème numérique et les architectures modernes, je conçois des solutions logicielles end-to-end. D'un côté, le développement Web haute performance avec Next.js, React et TypeScript ; de l'autre, des applications Mobiles natives et cross-platform ergonomiques avec React Native et Flutter. Mon objectif : allier rigueur d'ingénierie logicielle et expérience utilisateur exceptionnelle.`,
};

export const PROJECTS: Project[] = [
  {
    id: "dealtoo-marketplace",
    title: "Dealtoo Marketplace",
    subtitle: "Plateforme Web & Application Mobile de commerce géolocalisé",
    category: "fullstack",
    categoryLabel: "Web & Mobile Fullstack",
    description:
      "Plateforme omnicanale combinant une application mobile cross-platform et une plateforme web Next.js avec géolocalisation en temps réel, messagerie instantanée et paiement sécurisé.",
    longDescription:
      "Dealtoo permet à des milliers d'utilisateurs de vendre et acheter des biens et services de proximité. Le projet comprend une application mobile réactive, un portail web moderne optimisé pour le référencement (SEO), ainsi qu'une API centrale résiliente avec synchronisation en temps réel.",
    technologies: [
      "Next.js 15",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
      "Mobile Money API",
    ],
    metrics: "+15k utilisateurs actifs, 99.8% uptime",
    role: "Lead Développeur Fullstack & Mobile",
    features: [
      "Système de géolocalisation des annonces et calcul d'itinéraires",
      "Messagerie instantanée chiffrée entre acheteurs et vendeurs",
      "Intégration passerelles de paiement Mobile Money (Orange, Wave, MTN)",
      "PWA avec support offline et notifications push ciblées",
      "Dashboard d'administration analytique avec graphiques en temps réel",
    ],
    githubUrl: "https://github.com/MeaKouadioJeanBaptiste",
    demoUrl: "https://dealtoo.co",
    accentColor: "from-blue-500 to-cyan-400",
    badge: "Projet Phare",
    highlights: ["Temps réel", "Multi-plateforme", "Paiements mobiles"],
  },
  {
    id: "pulsetrack-mobile",
    title: "PulseTrack Health & Fitness",
    subtitle: "Application mobile de santé connectée & suivi sportif",
    category: "mobile",
    categoryLabel: "Application Mobile (iOS & Android)",
    description:
      "Application mobile intuitive de suivi d'activité physique, de nutrition et de constantes vitales, compatible avec les capteurs Bluetooth et montres connectées.",
    longDescription:
      "Conçue avec React Native et Expo pour des performances fluides à 60 FPS, PulseTrack offre un suivi offline-first grâce à SQLite local et se synchronise automatiquement dès qu'une connexion internet est détectée.",
    technologies: [
      "React Native",
      "Expo SDK",
      "TypeScript",
      "SQLite / WatermelonDB",
      "HealthKit / Google Fit API",
      "Zustand",
      "Reanimated 3",
    ],
    metrics: "4.8/5 étoiles sur les stores, 60 FPS constant",
    role: "Développeur Mobile",
    features: [
      "Synchronisation bidirectionnelle Apple Health et Google Fit",
      "Architecture Offline-first avec synchronisation automatique en arrière-plan",
      "Animations fluides via Reanimated 3 et graphiques interactifs",
      "Rappels intelligents et alertes via Push Notifications locales",
      "Export de rapports PDF médicaux pour les professionnels de santé",
    ],
    githubUrl: "https://github.com/MeaKouadioJeanBaptiste",
    demoUrl: "https://apps.apple.com",
    accentColor: "from-emerald-500 to-teal-400",
    badge: "Mobile iOS & Android",
    highlights: ["Offline-first", "Reanimated 3", "HealthKit"],
  },
  // {
  //   id: "novafintech-dashboard",
  //   title: "NovaFintech Banking Suite",
  //   subtitle: "Portail Web de gestion financière & transactions multi-devises",
  //   category: "web",
  //   categoryLabel: "Application Web Next.js",
  //   description:
  //     "Tableau de bord bancaire nouvelle génération avec visualisations de flux financiers complexes, gestion multi-comptes et conformité bancaire stricte.",
  //   longDescription:
  //     "Développé avec Next.js App Router et Server Components pour garantir des temps de chargement records et une sécurité maximale des données transactionnelles sensibles.",
  //   technologies: [
  //     "Next.js 15",
  //     "React 19",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "TanStack Query",
  //     "Chart.js",
  //     "NextAuth.js",
  //     "Prisma ORM",
  //   ],
  //   metrics: "Score 100/100 Google Lighthouse, <0.8s LCP",
  //   role: "Architecte Frontend & Développeur Web",
  //   features: [
  //     "Rendu hybride SSR et Server Components pour une rapidité absolue",
  //     "Visualisations dynamiques des flux de trésorerie avec filtres avancés",
  //     "Double authentification (2FA) et conformité OWASP",
  //     "Gestion des exports comptables en format Excel et PDF crypté",
  //     "Mode sombre / clair synchronisé avec le système d'exploitation",
  //   ],
  //   githubUrl: "https://github.com/MeaKouadioJeanBaptiste",
  //   demoUrl: "https://novafintech.demo.app",
  //   accentColor: "from-indigo-500 to-violet-500",
  //   badge: "Web Haute Performance",
  //   highlights: ["Server Components", "Lighthouse 100", "Sécurité bancaire"],
  // },
  {
    id: "voyage-afrik-app",
    title: "VoyageAfrik Explorer",
    subtitle: "Application mobile de réservation touristique & billetterie",
    category: "mobile",
    categoryLabel: "Application Mobile Cross-Platform",
    description:
      "Guide touristique immersif et billetterie en temps réel pour vols, hôtels et circuits en Afrique de l'Ouest, avec génération de billets sécurisés par QR Code.",
    longDescription:
      "Développée avec Flutter et Dart pour un rendu pixel-perfect sur iOS et Android, cette solution intègre une cartographie interactive hors-ligne et la génération de passes numériques.",
    technologies: [
      "Flutter",
      "Dart",
      "Bloc State Management",
      "Mapbox SDK",
      "Firebase Auth",
      "Cloud Firestore",
      "QR Code Generator",
    ],
    metrics: "+50,000 billets émis sans incident",
    role: "Développeur Mobile Flutter",
    features: [
      "Cartes interactives avec téléchargement de zones hors-ligne",
      "Billetterie intégrée avec scan QR Code de validation à l'entrée",
      "Gestion des favoris et itinéraires de voyage personnalisés",
      "Support multilingue (Français, Anglais) et multi-devises (XOF, EUR, USD)",
    ],
    githubUrl: "https://github.com/MeaKouadioJeanBaptiste",
    demoUrl: "https://play.google.com",
    accentColor: "from-amber-500 to-orange-400",
    badge: "Flutter & Dart",
    highlights: ["Flutter", "Cartes Offline", "Billetterie QR"],
  },
  {
    id: "cloudtask-saas",
    title: "CloudTask Enterprise SaaS",
    subtitle: "Système collaboratif de gestion de projets agiles",
    category: "web",
    categoryLabel: "Plateforme Web Collaborative",
    description:
      "Outil SaaS complet inspiré de Linear et Notion avec tableaux Kanban réactifs, diagrammes de Gantt, attribution de tâches et notifications push.",
    longDescription:
      "Architecture orientée événements avec synchronisation optimiste des données pour que chaque interaction utilisateur soit instantanée sans latence perceptible.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "WebSockets",
    ],
    metrics: "Mises à jour UI < 50ms par WebSocket",
    role: "Développeur Fullstack",
    features: [
      "Kanban drag-and-drop avec mises à jour multi-utilisateurs en direct",
      "Moteur de recherche full-text ultra-rapide avec raccourcis clavier",
      "Gestion des permissions d'équipes et espaces de travail séparés",
      "Historique complet des modifications et commentaires d'équipe",
    ],
    githubUrl: "https://github.com/MeaKouadioJeanBaptiste",
    demoUrl: "https://cloudtask.demo.app",
    accentColor: "from-pink-500 to-rose-400",
    badge: "SaaS Collaboratif",
    highlights: ["WebSockets", "Drag & Drop", "Zustand"],
  },
  {
    id: "artisanconnect-mobile",
    title: "ArtisanConnect Direct",
    subtitle: "Réseau d'artisans certifiés et dépannage d'urgence",
    category: "mobile",
    categoryLabel: "Application Mobile Géolocalisée",
    description:
      "Mise en relation instantanée entre particuliers et artisans qualifiés (plomberie, électricité, serrurerie) avec suivi du professionnel en direct sur carte.",
    longDescription:
      "Une interface pensée pour la rapidité en situation d'urgence, avec appel direct masqué, devis numérique immédiat et notation des interventions.",
    technologies: [
      "React Native",
      "TypeScript",
      "Google Maps API",
      "Firebase Cloud Messaging",
      "Stripe & Mobile Money",
      "NestJS Backend",
    ],
    metrics: "Temps moyen de mise en relation < 4 minutes",
    role: "Développeur Mobile & API",
    features: [
      "Suivi de l'artisan en route en temps réel sur carte interactive",
      "Système de devis instantané avec signature électronique sur l'écran",
      "Évaluation transparente et vérification d'identité des prestataires",
      "Appels vocaux sécurisés in-app sans partage du numéro privé",
    ],
    githubUrl: "https://github.com/MeaKouadioJeanBaptiste",
    demoUrl: "https://artisanconnect.demo.app",
    accentColor: "from-cyan-500 to-blue-500",
    badge: "Temps Réel & Cartes",
    highlights: ["Tracking GPS", "Signature in-app", "FCM Push"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Développement Web",
    subtitle: "Front-end moderne, réactif & optimisé pour le référencement",
    icon: "Globe",
    skills: [
      { name: "Next.js (App Router)", level: 95, description: "SSR, SSG, Server Actions, API Routes" },
      { name: "React & TypeScript", level: 96, description: "Hooks, Contexte, Clean Architecture, Strict Types" },
      { name: "Tailwind CSS & CSS3", level: 94, description: "Design Systems, Glassmorphism, Responsive" },
      { name: "State Management", level: 90, description: "Zustand, Redux Toolkit, TanStack Query" },
      { name: "Performances & SEO", level: 92, description: "Core Web Vitals, Optimisation bundle, Métadonnées" },
    ],
  },
  {
    title: "Développement Mobile",
    subtitle: "Applications natives & cross-platform fluides",
    icon: "Smartphone",
    skills: [
      { name: "React Native & Expo", level: 94, description: "Applications iOS & Android, EAS Build, Fast Refresh" },
      { name: "Flutter & Dart", level: 86, description: "Bloc Pattern, Widgets personnalisés, Rendu 60 FPS" },
      { name: "Offline-First & Local DB", level: 90, description: "SQLite, WatermelonDB, AsyncStorage" },
      { name: "APIs Matérielles & Capteurs", level: 88, description: "GPS / Cartes, Caméra, Biométrie, Push Notifs" },
      { name: "Déploiement Stores", level: 85, description: "Google Play Console, Apple App Store, TestFlight" },
    ],
  },
  {
    title: "Back-End & Base de Données",
    subtitle: "APIs robustes, micro-services et architectures scalables",
    icon: "Server",
    skills: [
      { name: "Node.js & Express / NestJS", level: 90, description: "APIs RESTful, WebSockets, Sécurité JWT" },
      { name: "Bases de données SQL", level: 88, description: "PostgreSQL, MySQL, Prisma ORM, Drizzle" },
      { name: "Bases NoSQL & BaaS", level: 86, description: "MongoDB, Firebase Firestore, Supabase" },
      { name: "Paiements & FinTech", level: 92, description: "Orange Money, Wave, MTN, Stripe" },
      { name: "Sécurité & Auth", level: 89, description: "OAuth2, JWT, Hachage Argon2, Rate Limiting" },
    ],
  },
  {
    title: "Outils & Méthodologie",
    subtitle: "DevOps, gestion de versions et ergonomie",
    icon: "Cpu",
    skills: [
      { name: "Git & GitHub CI/CD", level: 92, description: "Workflows automatisés, PR review, Git Flow" },
      { name: "Docker & Conteneurs", level: 80, description: "Images légères, docker-compose pour dev/prod" },
      { name: "UI/UX & Prototypage", level: 85, description: "Figma vers Code pixel-perfect, Accessibilité (a11y)" },
      { name: "Testing & Qualité", level: 84, description: "Jest, React Testing Library, ESLint, TypeScript" },
      { name: "Méthodologie Agile", level: 90, description: "Scrum, Sprints, Communication claire, Kanban" },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    period: "2023 - Présent",
    role: "Développeur Fullstack Web & Mobile Senior / Indépendant",
    company: "Projets d'Entreprises & Startups",
    location: "Abidjan & International (Remote)",
    type: "Freelance / CDI",
    description:
      "Conception, développement et déploiement d'applications Web et Mobiles d'envergure. Accompagnement technique de bout en bout pour des startups et PME.",
    achievements: [
      "Développement de plusieurs applications mobiles déployées avec succès sur App Store et Google Play",
      "Migration de plateformes vers Next.js avec amélioration de 65% de la vitesse de chargement",
      "Mise en place de systèmes de paiement Mobile Money et Stripe hautement sécurisés",
    ],
    technologies: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    period: "2021 - 2023",
    role: "Développeur Web & Mobile",
    company: "Agence Digitale & Solutions Logicielles",
    location: "Côte d'Ivoire",
    type: "Plein temps",
    description:
      "Développement de solutions métiers interactives, d'applications mobiles réactives et d'APIs REST.",
    achievements: [
      "Création de plus de 15 portails web et d'applications mobiles sur mesure",
      "Réduction du temps de build et automatisation des déploiements via CI/CD",
      "Collaboration étroite avec les équipes design UX/UI pour une intégration fidèle",
    ],
    technologies: ["React", "React Native", "Flutter", "Express.js", "MySQL", "Firebase", "Git"],
  },
  {
    period: "2019 - 2021",
    role: "Développeur Frontend & Intégrateur",
    company: "Studio Tech & Web",
    location: "Côte d'Ivoire",
    type: "Plein temps",
    description:
      "Intégration d'interfaces web dynamiques, responsive design et maintenance d'applications existantes.",
    achievements: [
      "Optimisation de la compatibilité multi-navigateurs et multi-écrans",
      "Création de composants UI réutilisables et documentation technique",
    ],
    technologies: ["JavaScript (ES6+)", "React", "HTML5/CSS3", "Sass", "REST APIs", "WordPress Headless"],
  },
];

export const CODE_SNIPPETS = {
  nextjs: `// Next.js 15 Server Action & App Router
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createProjectAction(formData: FormData) {
  "use server";
  
  const title = formData.get("title") as string;
  const platform = formData.get("platform") as "web" | "mobile";
  
  const project = await db.project.create({
    data: {
      title,
      platform,
      status: "PUBLISHED",
      createdAt: new Date(),
    },
  });

  revalidatePath("/projets");
  return { success: true, project };
}`,
  reactnative: `// React Native & Expo: Hook avec synchronisation offline
import { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { localStore } from "./storage";

export function useSyncableData(key: string) {
  const [data, setData] = useState(null);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(!!state.isConnected);
      if (state.isConnected) {
        localStore.syncWithCloud(key);
      }
    });
    return () => unsubscribe();
  }, [key]);

  return { data, isOnline };
}`,
  flutter: `// Flutter & Dart: State Management avec BLoC
class ProjectBloc extends Bloc<ProjectEvent, ProjectState> {
  final ProjectRepository repository;

  ProjectBloc({required this.repository}) : super(ProjectInitial()) {
    on<FetchProjects>((event, emit) async {
      emit(ProjectLoading());
      try {
        final items = await repository.getProjects(event.filter);
        emit(ProjectLoaded(items: items));
      } catch (error) {
        emit(ProjectError(message: error.toString()));
      }
    });
  }
}`,
};
