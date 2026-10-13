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
  metadataBase: new URL("https://dealtoo.co"),
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
    images: [
      {
        url: "/logo.jpg",
        width: 1408,
        height: 768,
        alt: "Dev Loop - Méa Kouadio Jean-Baptiste",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.jpg" },
      { url: "/logo.jpg" },
      { url: "/icon.png" },
    ],
    apple: [
      { url: "/apple-icon.jpg" },
      { url: "/icon.jpg" },
    ],
    shortcut: "/icon.jpg",
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
