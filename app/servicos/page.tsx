import { Divisor } from "@/components/shared/Divisor";
import { PageBanner } from "@/components/shared/PageBanner";
import { Section } from "@/components/shared/Section";

export default function ServicosPage() {
  return (
    <>
      <PageBanner
        img="/bg-lencol-branco.png"
        title="Personalize Sua Experiência"
        subtitle="Solicite nossos serviços adicionais para tornar seu momento ainda mais especial"
      >
        <button className="bg-primary hover:bg-secondary inline-block rounded-lg px-6 py-3 font-semibold text-white transition-colors duration-300 hover:cursor-pointer">
          Fale Conosco
        </button>
      </PageBanner>

      <Section title="Serviços Inclusos">
        <p>TO DO</p>
      </Section>

      <Divisor />

      <Section title="Serviços Adicionais">
        <p>TO DO</p>
      </Section>

      <Divisor />

      <Section title="Comodidades Especiais">
        <p>TO DO</p>
      </Section>
    </>
  );
}
