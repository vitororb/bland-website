"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  url: string;
  text: string;
};

export const NavItem = ({ text, url }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <Link
      href={url}
      className={`font-montserrat text-sm font-medium transition-colors duration-200 hover:cursor-pointer ${
        isActive
          ? "border-b-2 border-white pb-1 text-white"
          : "text-white/80 hover:text-white"
      }`}
    >
      {text}
    </Link>
  );
};
