import { Button } from "@/components/Button";
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
        img="/bg-lencol-vermelho.png"
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
