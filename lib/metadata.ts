import ogImage from "@/public/opengraph/bland-motel.jpg";
import type { Metadata } from "next";

export const SITE_URL = "https://www.blandmotel.com.br";
export const SITE_NAME = "Bland Motel";

// Parte do Open Graph que é igual em todas as páginas.
// O `openGraph` de uma página substitui por inteiro o do layout, então cada página repete esta base.
// A imagem é importada para o Next.js gerar o link com hash (evita cache antigo) e ler largura/altura do arquivo.
export const openGraphBase = {
  type: "website",
  locale: "pt_BR",
  siteName: SITE_NAME,
  images: [
    {
      url: ogImage.src,
      width: ogImage.width,
      height: ogImage.height,
      alt: "Logo do Bland Motel",
    },
  ],
} satisfies NonNullable<Metadata["openGraph"]>;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

// Gera o metadata de uma página: título (completado pelo template do layout), descrição,
// URL canônica e cartão de compartilhamento (WhatsApp, Instagram, Facebook).
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...openGraphBase,
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
    },
  };
}
