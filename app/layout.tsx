import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { openGraphBase, SITE_NAME, SITE_URL } from "@/lib/metadata";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const description =
  "Bland Motel em Mineiros - GO. Suítes Luxo, Premium e Master com conforto e privacidade, aberto 24 horas. Reserve pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Mineiros - GO`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    ...openGraphBase,
    title: `${SITE_NAME} | Mineiros - GO`,
    description,
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cinzel.variable} ${montserrat.variable} antialiased`}>
        <main className="flex w-screen flex-col">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
