import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GiroBet - Apostas Esportivas e Cassino Online",
  description: "A maior plataforma de apostas esportivas do Brasil. Odds competitivas, pagamento rápido e suporte 24h.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
