import { SuiteCard } from "@/components/cards/SuiteCard";
import { Divisor } from "@/components/shared/Divisor";
import { PageBanner } from "@/components/shared/PageBanner";
import { Section } from "@/components/shared/Section";

export default function Suites() {
  return (
    <>
      <PageBanner
        img="/bg-lencol-branco.png"
        title="Escolha Sua Suíte Ideal"
        subtitle="Todas as nossas suítes oferecem privacidade total, conforto máximo e experiência premium"
      />

      <Section
        id="luxo"
        title="Suítes Luxo"
        subtitle="Descubra nossas suítes de luxo, onde cada detalhe foi pensado para proporcionar uma experiência inesquecível. Com decoração sofisticada, amenidades exclusivas e um ambiente acolhedor, nossas suítes são o refúgio perfeito para momentos de relaxamento e romance."
      >
        <SuiteCard
          suitName="Suíte Luxo"
          suitType="Luxo"
          price="R$ 150,00"
          adicionalHours="R$ 25,00"
        />
      </Section>

      <Divisor />

      <Section
        id="premium"
        title="Suítes Premium"
        subtitle="Suítes Premium são espaços luxuosos e bem equipados, com acabamentos de alta qualidade e amenidades exclusivas. Ideal para quem busca conforto e sofisticação em cada detalhe."
      >
        <></>
      </Section>

      <Divisor />

      <Section
        id="master"
        title="Suítes Master"
        subtitle="Suítes Master são o auge do luxo e conforto, oferecendo espaços amplos, decoração elegante e uma variedade de amenidades exclusivas. Perfeitas para quem deseja uma experiência verdadeiramente inesquecível."
      >
        <></>
      </Section>

      <Divisor />

      <Section title="Tabela de Preços">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="font-cinzel px-6 py-4 text-left">Suíte</th>
                <th className="px-6 py-4 text-center">2 Horas</th>
                <th className="px-6 py-4 text-center">Hora Adicional</th>
                <th className="px-6 py-4 text-center">Pernoite</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="text-secondary px-6 py-4 font-semibold">
                  Suíte Luxo
                </td>
                <td className="px-6 py-4 text-center">R$ 95</td>
                <td className="px-6 py-4 text-center">R$ 25</td>
                <td className="px-6 py-4 text-center">R$ 195</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="text-secondary px-6 py-4 font-semibold">
                  Suíte Premium
                </td>
                <td className="px-6 py-4 text-center">R$ 125</td>
                <td className="px-6 py-4 text-center">R$ 25</td>
                <td className="px-6 py-4 text-center">R$ 225</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="text-secondary px-6 py-4 font-semibold">
                  Suíte Master
                </td>
                <td className="px-6 py-4 text-center">R$ 135</td>
                <td className="px-6 py-4 text-center">R$ 25</td>
                <td className="px-6 py-4 text-center">R$ 235</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          * Valores sujeitos a alterações. Consulte-nos para promoções especiais
          e pacotes personalizados. Valores referentes para duas pessoas, para
          cada pessoa extra, será aplicado acréscimo de 40% sobre o valor da
          estadia.
        </p>
      </Section>
    </>
  );
}
