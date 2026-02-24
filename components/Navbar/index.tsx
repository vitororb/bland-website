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
    <nav className="fixed top-0 z-50 flex w-screen flex-col bg-white/60 px-4 shadow-lg backdrop-blur-sm">
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <Link href="/" className="hover:cursor-pointer">
          <img
            src="/logos/logo-h.png"
            alt="Bland Motel"
            className="h-20 w-auto"
          />
        </Link>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
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
      </div>

      {/* Mobile Menu Aberto*/}
      <div className="flex items-center gap-8 overflow-x-auto border-t border-gray-200 p-4 md:hidden">
        {navItems.map((item) => (
          <NavItem key={item.id} url={`/${item.id}`} text={item.label} />
        ))}
      </div>
    </nav>
  );
};
