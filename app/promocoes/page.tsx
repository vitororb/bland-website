import { InfoCard } from "@/components/cards/InfoCard";
import { PromotionCard } from "@/components/cards/PromotionCard";
import { Divisor } from "@/components/Divisor";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/Section";
import motel from "@/data/motel.json";
import { Gift, Sparkles } from "lucide-react";

export default function Promocoes() {
  return (
    <>
      <PageBanner
        img="/bg-lencol-branco.png"
        title="Fique por Dentro das Novidades"
        subtitle="Aproveite nossas ofertas especiais e descontos exclusivos"
      >
        <a
          href={`https://wa.me/${motel.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary hover:bg-secondary/90 rounded-full px-6 py-3 text-sm text-white transition-colors duration-200"
        >
          Fale Conosco
        </a>
      </PageBanner>

      <Section
        title="Promoções Imperdíveis"
        subtitle="Experiências inesquecíveis com condições especiais pensadas para você."
      >
        <div className="flex flex-wrap justify-center gap-8">
          <PromotionCard img="/promotions/segunda.jpeg" />
          <PromotionCard img="/promotions/quarta.jpeg" />
          <PromotionCard img="/promotions/fidelidade.jpeg" />
          <PromotionCard img="/promotions/aniversariante.jpeg" />
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
