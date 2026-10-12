import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Méa Kouadio Jean-Baptiste | Développeur Web & Mobile Fullstack",
  description:
    "Portfolio de Méa Kouadio Jean-Baptiste (MKJB) - Développeur d'applications Web modernes (Next.js, React, Node.js) et Mobiles (React Native, Flutter, iOS & Android). Conception de solutions digitales performantes et scalables.",
  keywords: [
    "Méa Kouadio Jean-Baptiste",
    "MKJB",
    "Développeur Web",
    "Développeur Mobile",
    "Next.js",
    "React",
    "React Native",
    "Flutter",
    "TypeScript",
    "Node.js",
    "Fullstack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Méa Kouadio Jean-Baptiste" }],
  openGraph: {
    title: "Méa Kouadio Jean-Baptiste | Développeur Web & Mobile Fullstack",
    description:
      "Conception et développement d'applications web et mobiles modernes, fluides et scalables.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-indigo-500/30 selection:text-cyan-200`}
      >
        {children}
      </body>
    </html>
  );
}
