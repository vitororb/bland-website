"use client";

import Link from "next/link";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  const navItems = [
    { id: "", label: "Início" },
    { id: "suites", label: "Suítes" },
    { id: "servicos", label: "Serviços" },
    { id: "promocoes", label: "Promoções" },
    { id: "sobre", label: "Sobre" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 z-50 flex h-20 w-screen items-center justify-between bg-white/60 px-4 shadow-lg backdrop-blur-sm">
      {/* Logo */}
      <Link href="/" className="hover:cursor-pointer">
        <img
          src="/logos/logo-h.png"
          alt="Bland Motel"
          className="h-20 w-auto"
        />
      </Link>

      {/* Menu */}
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <NavItem key={item.id} url={`/${item.id}`} text={item.label} />
        ))}
      </div>

      {/* Contact Button */}
      <a
        href="https://wa.me/5564999500479"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary hover:bg-secondary flex items-center rounded-lg px-4 py-2 text-white transition-colors"
        title="WhatsApp"
      >
        Reserve
      </a>
    </nav>
  );
};
