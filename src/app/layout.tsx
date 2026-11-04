import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PDVPRO — Gestão inteligente",
  description: "Sistema moderno de ponto de venda e gestão comercial.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
