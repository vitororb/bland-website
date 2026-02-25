import { InfoCard } from "@/components/cards/InfoCard";
import { PromotionCard } from "@/components/cards/PromotionCard";
import { Divisor } from "@/components/Divisor";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/Section";
import { Gift, Sparkles } from "lucide-react";

export default function Promocoes() {
  return (
    <>
      <PageBanner
        img="/bg-lencol-branco.png"
        title="Fique por Dentro das Novidades"
        subtitle="Aproveite nossas ofertas especiais e descontos exclusivos"
      >
        <button className="bg-primary hover:bg-secondary inline-block rounded-lg px-6 py-3 font-semibold text-white transition-colors duration-300 hover:cursor-pointer">
          Fale Conosco
        </button>
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
