import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/Section";
import motel from "@/data/motel.json";
import {
  ArrowDownIcon,
  FlowerLotusIcon,
  ToteIcon,
  WhatsappLogoIcon,
  WineIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Servicos() {
  return (
    <>
      <PageBanner
        img="/bg-lencol-vermelho.webp"
        firstLine="Personalize sua"
        title="Experiência"
        subtitle="Surpreenda e aproveite cada detalhe. Conheça nossos serviços e torne seu momento ainda mais especial"
      >
        <Button
          href="#servicos"
          label="Ver serviços"
          rightIcon={<ArrowDownIcon size={16} />}
        />
      </PageBanner>

      <Section
        id="servicos"
        title="Nossos Serviços"
        subtitle="Descubra os serviços que tornam sua estadia ainda mais especial. Desde decorações temáticas até um cardápio exclusivo, cada detalhe é pensado para proporcionar momentos inesquecíveis."
      >
        <div className="flex flex-wrap justify-center gap-8">
          <ServiceCard
            imageUrl="/services/card-decoration.webp"
            title="Decoração Especial"
            description="Celebre momentos inesquecíveis com decorações preparadas especialmente para você"
            icon={<FlowerLotusIcon size={40} />}
            buttonLabel="Ver decorações"
            href=""
          />
          <ServiceCard
            imageUrl="/bg-lencol-vermelho.webp"
            title="Cardápio da Cozinha"
            description="Durante a hospedagem, você pode solicitar bebidas, porções, refeições e outras opções do nosso cardápio"
            icon={<WineIcon size={40} />}
            buttonLabel="Ver cardápio"
            href=""
          />
          <ServiceCard
            imageUrl="/bg-lencol-vermelho.webp"
            title="Sex Shop"
            description="Conheça nosso catálogo de produtos eróticos e escolha os itens que combinam com o seu momento"
            icon={<ToteIcon size={40} />}
            buttonLabel="Ver catálogo"
            href=""
          />
        </div>
      </Section>

      <Section>
        <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg px-4 py-4 shadow-md sm:flex-row sm:justify-between">
          <Image
            src="/bg-lencol-vermelho.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/20" />

          <div className="relative flex flex-col items-center justify-center gap-2 sm:flex-row">
            <Image
              src="/logos/logo-v-white.png"
              alt="Bland Motel"
              width={750}
              height={750}
              className="h-20 w-fit"
            />

            <div className="text-center text-white sm:text-left">
              <h3 className="font-family-cinzel text-xl font-semibold">
                Ainda ficou com alguma dúvida?
              </h3>
              <span className="text-sm">
                Nossa equipe está disponível 24 horas para te ajudar
              </span>
            </div>
          </div>

          <Button
            href={`https://wa.me/${motel.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="relative"
            label="Fale conosco"
            leftIcon={<WhatsappLogoIcon size={20} />}
          />
        </div>
      </Section>
    </>
  );
}
