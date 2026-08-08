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
      className="fixed top-0 z-50 flex w-screen flex-col bg-black/10 px-4 backdrop-blur-xs"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent)",
      }}
    >
      <div className="flex h-20 w-full items-center justify-between">
        {/* Logo */}
        <Link href="/" className="hover:cursor-pointer">
          <img
            src="/logos/logo-h-white.png"
            alt="Bland Motel"
            className="h-6 w-auto"
          />
        </Link>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
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
      <div className="flex items-center gap-8 overflow-x-auto p-4 md:hidden">
        {navItems.map((item) => (
          <NavItem key={item.id} url={`/${item.id}`} text={item.label} />
        ))}
      </div>
    </nav>
  );
};
