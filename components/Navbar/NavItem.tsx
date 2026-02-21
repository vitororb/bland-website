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
      className={`font-montserrat text-sm font-semibold uppercase transition-colors hover:cursor-pointer ${
        isActive
          ? "text-primary border-primary border-b-2 pb-1"
          : "hover:text-primary text-gray-700"
      }`}
    >
      {text}
    </Link>
  );
};
