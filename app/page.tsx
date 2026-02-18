"use client";

import { CategoryCard } from "@/components/cards/CategoryCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { Divisor } from "@/components/shared/Divisor";
import { Section } from "@/components/shared/Section";
import categories from "@/data/categories.json";
import { Lock, Tv, Wifi, Wind } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen items-center bg-[url('/hero-banner.jpg')] bg-cover bg-center">
        <Section
          title="Pronto para uma Experiência Inesquecível?"
          subtitle="Reserve agora sua suíte e desfrute de conforto, privacidade e luxo"
        >
          <button className="bg-primary hover:bg-secondary inline-block rounded-lg px-6 py-3 font-semibold text-white transition-colors duration-300 hover:cursor-pointer">
            Faça sua Reserva
          </button>
        </Section>
      </div>

      <Section
        title="Seu refúgio de sofisticação!"
        subtitle="Mais do que uma estadia, o Bland Motel oferece a privacidade e o conforto que você merece. O cenário perfeito para fugir da rotina e viver experiências inesquecíveis."
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <FeatureCard
            icon={<Lock className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Privacidade Total"
            description="Discrição garantida! Seu sigilo é nossa prioridade"
          />

          <FeatureCard
            icon={<Wifi className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Tecnologia"
            description="WiFi de alta velocidade e sistemas modernos"
          />

          <FeatureCard
            icon={<Tv className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Conforto"
            description="Suítes equipadas com TV e sistemas de som"
          />

          <FeatureCard
            icon={<Wind className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Climatização"
            description="Ar-condicionado e ambiente pensado para o seu bem-estar"
          />
        </div>
      </Section>

      <Divisor />

      <Section title="Nossas Categorias">
        <div className="flex flex-wrap justify-center gap-8">
          {Object.entries(categories).map(([name, data]) => (
            <CategoryCard
              key={name}
              categoryName={name}
              additionalHour={data.additionalHour}
              overnight={data.overnight}
              price={data.twoHours}
              description={data.description}
              url="/suites"
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
