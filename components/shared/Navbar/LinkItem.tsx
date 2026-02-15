"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  url: string;
  text: string;
};

export const LinkItem = ({ text, url }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <Link
      href={url}
      className={`uppercase hover:cursor-pointer text-sm font-medium h-full flex items-center hover:border-b-4 hover:border-white/90 ${
        isActive ? "border-b-4 border-white" : ""
      }`}
    >
      {text}
    </Link>
  );
};
