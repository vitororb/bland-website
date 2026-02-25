import { FeatureCard } from "@/components/cards/FeatureCard";
import { InfoCard } from "@/components/cards/InfoCard";
import { Divisor } from "@/components/Divisor";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/Section";
import { StatItem } from "@/components/StatItem";
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

      <Divisor />

      <Section title="A Experiência Bland Motel">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <InfoCard
            icon={
              <div className="text-primary font-family-cinzel text-4xl font-bold">
                01
              </div>
            }
            title="Privacidade Total"
            description="Ambiente discreto e seguro, onde você pode desfrutar de momentos especiais sem preocupações."
          />
          <InfoCard
            icon={
              <div className="text-primary font-family-cinzel text-4xl font-bold">
                02
              </div>
            }
            title="Conforto Supremo"
            description="Suítes equipadas com tecnologia moderna e decoração sofisticada para seu máximo conforto."
          />
          <InfoCard
            icon={
              <div className="text-primary font-family-cinzel text-4xl font-bold">
                03
              </div>
            }
            title="Atendimento Impecável"
            description="Equipe profissional e atenciosa, sempre pronta para atender suas necessidades com discrição."
          />
        </div>
      </Section>

      <section className="bg-primary py-16 text-white md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <StatItem value="10+" label="Anos de Experiência" />
            <StatItem value="3" label="Suítes Premium" />
            <StatItem value="1000+" label="Clientes Satisfeitos" />
            <StatItem value="24h" label="Atendimento" />
          </div>
        </div>
      </section>

      <Section
        title="Nossa Equipe"
        subtitle="Contamos com uma equipe profissional, discreta e sempre preparada para oferecer o melhor atendimento. Nossos colaboradores são treinados para garantir sua satisfação e conforto."
      >
        <InfoCard
          title="Compromisso com a Excelência"
          items={[
            "Profissionais experientes e treinados",
            "Atendimento 24 horas",
            "Discrição garantida",
            "Comprometidos com sua satisfação",
            "Sempre buscando melhorias",
          ]}
        />
      </Section>
    </>
  );
}
