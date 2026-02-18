import { PromotionCard } from "@/components/cards/PromotionCard";
import { Divisor } from "@/components/shared/Divisor";
import { PageBanner } from "@/components/shared/PageBanner";
import { Section } from "@/components/shared/Section";

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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <PromotionCard img="/promotions/segunda.jpeg" />
          <PromotionCard img="/promotions/quarta.jpeg" />
          <PromotionCard img="/promotions/fidelidade.jpeg" />
          <PromotionCard img="/promotions/aniversariante.jpeg" />
        </div>
      </Section>

      <Divisor />

      <Section title="Informações Importantes">
        <p>TO DO</p>
      </Section>
    </>
  );
}
