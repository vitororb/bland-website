import { SITE_URL } from "@/lib/metadata";
import type { MetadataRoute } from "next";

// Gera o /robots.txt: libera todo o site para os buscadores e informa onde está o sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
  };
}
