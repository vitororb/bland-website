import { Button } from "@/components/Button";
import { InfoCard } from "@/components/cards/InfoCard";
import { PromotionCard } from "@/components/cards/PromotionCard";
import { Divisor } from "@/components/Divisor";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/Section";
import motel from "@/data/motel.json";
import { pageMetadata } from "@/lib/metadata";
import { Gift, Sparkles } from "lucide-react";

export const metadata = pageMetadata({
  title: "Promoções",
  description:
    "Promoções e descontos exclusivos do Bland Motel. Confira as ofertas especiais e reserve pelo WhatsApp.",
  path: "/promocoes",
});

export default function Promocoes() {
  return (
    <>
      <PageBanner
        img="/bg-lencol-vermelho.webp"
        firstLine="Acompanhe nossas"
        title="Novidades"
        subtitle="Aproveite nossas ofertas especiais e descontos exclusivos"
      >
        <Button
          label="Fale Conosco"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${motel.phone}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20promoções.`}
        />
      </PageBanner>

      <Section
        title="Promoções Imperdíveis"
        subtitle="Experiências inesquecíveis com condições especiais pensadas para você."
      >
        <div className="flex flex-wrap justify-center gap-8">
          <PromotionCard
            img="/promotions/segunda.webp"
            alt="Segundas Intenções: às segundas-feiras, 10% de desconto nos produtos do sex shop"
          />
          <PromotionCard
            img="/promotions/quarta.webp"
            alt="Quarta Universitária: cerveja em dobro para estudantes às quartas-feiras, nas marcas Skol e Brahma"
          />
          <PromotionCard
            img="/promotions/fidelidade.webp"
            alt="Cartão Fidelidade: a cada 10 visitas, ganhe uma estadia"
          />
          <PromotionCard
            img="/promotions/aniversariante.webp"
            alt="Promoção do Aniversariante: 50% de desconto na estadia no seu aniversário, mediante documento oficial"
          />
        </div>
      </Section>

      <Divisor />

      <Section title="Informações Importantes">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <InfoCard
            icon={<Gift className="text-primary h-12 w-12" />}
            title="Como Usar as Promoções"
            items={[
              "Entre em contato conosco via WhatsApp",
              "Informe qual promoção deseja aproveitar",
              "Confirme a disponibilidade da data",
              "Faça a reserva com desconto",
            ]}
          />
          <InfoCard
            icon={<Sparkles className="text-primary h-12 w-12" />}
            title="Condições Gerais"
            items={[
              "Promoções não são cumulativas",
              "Sujeitas a disponibilidade",
              "Válidas mediante confirmação",
              "Consulte termos específicos",
            ]}
          />
        </div>
      </Section>
    </>
  );
}
