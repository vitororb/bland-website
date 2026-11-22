import { SITE_URL } from "@/lib/metadata";
import type { MetadataRoute } from "next";

// Páginas públicas do site. Ao criar uma página nova (ex.: /servicos), adicione aqui.
const routes = ["/", "/suites", "/promocoes", "/contato"];

// Gera o /sitemap.xml: a lista de páginas que o Google deve indexar.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified,
  }));
}
