import categories from "@/data/categories.json";
import motel from "@/data/motel.json";
import { SITE_NAME, SITE_URL } from "@/lib/metadata";
import ogImage from "@/public/opengraph/bland-motel.jpg";

// Faixa de preço calculada a partir da tabela: do menor valor (2 horas) ao maior (pernoite).
const prices = Object.values(categories).flatMap((c) => [Number(c.twoHours), Number(c.overnight)]);
const priceRange = `R$ ${Math.min(...prices)} - R$ ${Math.max(...prices)}`;

// Dados estruturados (schema.org) lidos pelo Google: tipo de negócio, endereço, contato, horário e preços.
// Teste em https://search.google.com/test/rich-results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Motel",
  name: SITE_NAME,
  url: SITE_URL,
  image: new URL(ogImage.src, SITE_URL).toString(),
  telephone: `+${motel.phone}`,
  email: motel.email,
  priceRange,
  currenciesAccepted: "BRL",
  paymentAccepted: "Dinheiro, Pix, Cartão",
  address: {
    "@type": "PostalAddress",
    streetAddress: "GO-341, Km 1 - Zona Rural",
    addressLocality: "Mineiros",
    addressRegion: "GO",
    postalCode: "75837-160",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -17.5810575,
    longitude: -52.5261843,
  },
  hasMap: motel.mapsUrl,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [motel.instagramUrl, motel.facebookUrl],
};

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      // O replace impede que um "<" no texto feche a tag <script> antes da hora.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
