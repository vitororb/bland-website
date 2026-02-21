import { FeatureCard } from "@/components/cards/FeatureCard";
import { Divisor } from "@/components/Divisor";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/Section";
import { Award, Heart, Users, Zap } from "lucide-react";

export default function Sobre() {
  return (
    <>
      <PageBanner
        img="/bg-lencol-branco.png"
        title="Bland Motel"
        subtitle="Conheça nossa história e os valores que nos guiam"
      />

      <Section title="Nossa História">
        <div className="max-w-3xl space-y-6 text-lg text-gray-700">
          <p>
            O Bland Motel foi fundado com a missão de oferecer uma experiência
            premium de luxo, conforto e privacidade em Mineiros-GO. Desde o
            início, nos dedicamos a criar um ambiente sofisticado e acolhedor
            para nossos clientes.
          </p>

          <p>
            Ao longo dos anos, investimos constantemente em melhorias, renovação
            de nossas suítes e aperfeiçoamento de nossos serviços. Cada detalhe
            foi cuidadosamente pensado para proporcionar momentos inesquecíveis.
          </p>

          <p>
            Hoje, somos referência em qualidade e discrição na região, atendendo
            clientes que buscam privacidade e conforto de primeira classe. Nossa
            equipe está sempre preparada para oferecer o melhor atendimento.
          </p>

          <p>
            Continuamos inovando e buscando formas de melhorar a experiência de
            nossos hóspedes, mantendo os valores de qualidade, confiança e
            excelência que nos definem.
          </p>
        </div>
      </Section>

      <Divisor />

      <Section title="Nossos Valores">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <FeatureCard
            icon={<Heart className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Qualidade"
            description="Comprometidos com a excelência em cada detalhe"
          />
          <FeatureCard
            icon={<Award className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Confiança"
            description="Discrição e segurança garantidas para nossos clientes"
          />
          <FeatureCard
            icon={<Users className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Atendimento"
            description="Equipe preparada para oferecer o melhor serviço"
          />
          <FeatureCard
            icon={<Zap className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Inovação"
            description="Sempre buscando melhorias e novas experiências"
          />
        </div>
      </Section>

      <section className="bg-primary py-16 text-white md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="font-family-cinzel mb-2 text-5xl font-bold">
                10+
              </div>
              <p className="text-lg">Anos de Experiência</p>
            </div>
            <div>
              <div className="font-family-cinzel mb-2 text-5xl font-bold">
                3
              </div>
              <p className="text-lg">Suítes Premium</p>
            </div>
            <div>
              <div className="font-family-cinzel mb-2 text-5xl font-bold">
                1000+
              </div>
              <p className="text-lg">Clientes Satisfeitos</p>
            </div>
            <div>
              <div className="font-family-cinzel mb-2 text-5xl font-bold">
                24h
              </div>
              <p className="text-lg">Atendimento</p>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Nossa Equipe"
        subtitle="Contamos com uma equipe profissional, discreta e sempre preparada para oferecer o melhor atendimento. Nossos colaboradores são treinados para garantir sua satisfação e conforto."
      >
        <div className="rounded-lg bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
          <h3 className="text-secondary font-family-cinzel mb-4 text-2xl font-bold">
            Compromisso com a Excelência
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Profissionais experientes e treinados</li>
            <li>✓ Atendimento 24 horas</li>
            <li>✓ Discrição garantida</li>
            <li>✓ Comprometidos com sua satisfação</li>
            <li>✓ Sempre buscando melhorias</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
