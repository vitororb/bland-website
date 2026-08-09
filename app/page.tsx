"use client";

import { Button } from "@/components/Button";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { Divisor } from "@/components/Divisor";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/Section";
import categories from "@/data/categories.json";
import motel from "@/data/motel.json";
import { ArrowRight, Lock, Tv, Wifi, Wind } from "lucide-react";

export default function Home() {
  return (
    <>
      <PageBanner
        img="/bg-lencol-vermelho.png"
        firstLine="Bem-vindo ao"
        title="BLAND MOTEL"
        subtitle="Reserve agora sua suíte e desfrute de conforto e privacidade"
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            label="Faça sua reserva"
            href={`https://wa.me/${motel.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            rightIcon={<ArrowRight size={16} />}
          />
          <Button label="Ver Suítes" href="/suites" variant="outline" />
        </div>
      </PageBanner>

      <Section
        id="categorias"
        title="Nossas Categorias"
        subtitle="Escolha a categoria perfeita para sua estadia. Do conforto ao luxo absoluto, cada suíte é pensada para proporcionar momentos únicos e inesquecíveis."
      >
        <div className="flex flex-wrap justify-center gap-8">
          {Object.entries(categories).map(([name, data]) => (
            <CategoryCard
              key={name}
              categoryName={name}
              additionalHour={data.additionalHour}
              overnight={data.overnight}
              price={data.twoHours}
              items={data.amenities}
              url={`/suites#${name.toLowerCase()}`}
            />
          ))}
        </div>
      </Section>

      <Divisor />

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
    </>
  );
}
