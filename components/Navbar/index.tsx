"use client";

import motel from "@/data/motel.json";
import Link from "next/link";
import { Button } from "../Button";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  const navItems = [
    { id: "", label: "Início" },
    { id: "suites", label: "Suítes" },
    // { id: "servicos", label: "Serviços" },
    { id: "promocoes", label: "Promoções" },
    // { id: "sobre", label: "Sobre" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <nav
      className="fixed top-0 z-50 flex w-screen flex-col items-center bg-black/10 backdrop-blur-xs"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent)",
      }}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0 hover:cursor-pointer">
          <img src="/logos/logo-h-white.png" alt="Logo" className="h-6 w-fit" />
        </Link>

        {/* Menu */}
        <div className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <NavItem key={item.id} url={`/${item.id}`} text={item.label} />
          ))}
        </div>

        {/* Contact Button */}
        <Button
          label="Reservar"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${motel.phone}`}
        />
      </div>

      {/* Mobile Menu*/}
      <div className="flex items-center gap-8 overflow-x-auto p-4 sm:hidden">
        {navItems.map((item) => (
          <NavItem key={item.id} url={`/${item.id}`} text={item.label} />
        ))}
      </div>
    </nav>
  );
};
