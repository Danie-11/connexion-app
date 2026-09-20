import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Connexion — Des personnes. Des affinités. Une connexion choisie.",
  description:
    "Connexion est une plateforme de mise en relation humaine assistée par IA."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}