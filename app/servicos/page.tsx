import { InfoCard } from "@/components/cards/InfoCard";
import { Divisor } from "@/components/Divisor";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/Section";
import { ServiceItem } from "@/components/ServiceItem";
import { CheckCircle, CirclePlus } from "lucide-react";

export default function Servicos() {
  const servicesIncluded = [
    "WiFi de alta velocidade",
    "Ar-condicionado regulável",
    "TV com canais abertos",
    "Banheiro completo com água quente",
    "Frigobar com bebidas",
    "Estacionamento privativo",
    "Toalhas limpas e macias",
    "Sabonete e shampoo",
  ];

  const addicionalServices = [
    { name: "Champagne Premium", price: "80,00" },
    { name: "Cesta de Frutas", price: "60,00" },
    { name: "Pétalas de Rosa", price: "50,00" },
    { name: "Velas Aromáticas", price: "40,00" },
    { name: "Música Ambiente", price: "30,00" },
    { name: "Café da Manhã", price: "100,00" },
  ];

  const specialAmenties = [
    {
      title: "Ambiente Climatizado",
      description:
        "Todas as nossas suítes contam com ar-condicionado de última geração, permitindo que você ajuste a temperatura conforme sua preferência.",
      items: [
        "Controle de temperatura individual",
        "Ar-condicionado silencioso",
        "Circulação de ar otimizada",
      ],
    },
    {
      title: "Entretenimento Premium",
      description:
        "Desfrute de uma experiência audiovisual de primeira qualidade com nossas TVs de alta definição e som envolvente.",
      items: ["TV de alta definição", "Som surround", "Canais variados"],
    },
    {
      title: "Conectividade Total",
      description:
        "Mantenha-se conectado com nosso WiFi de alta velocidade, perfeito para trabalho ou entretenimento.",
      items: ["WiFi 5G ultra rápido", "Conexão estável", "Cobertura total"],
    },
    {
      title: "Banheiro de Luxo",
      description:
        "Relaxe em nossos banheiros equipados com chuveiro quente, produtos de higiene premium e toalhas macias.",
      items: [
        "Chuveiro com água quente",
        "Produtos premium",
        "Toalhas de qualidade",
      ],
    },
  ];

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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {servicesIncluded.map((service, idx) => (
            <ServiceItem
              key={idx}
              icon={<CheckCircle className="text-primary shrink-0" size={24} />}
              service={service}
            />
          ))}
        </div>
      </Section>

      <Divisor />

      <Section title="Serviços Adicionais">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {addicionalServices.map((service, idx) => (
            <ServiceItem
              key={idx}
              icon={<CirclePlus className="text-primary shrink-0" size={24} />}
              service={service.name}
              price={service.price}
            />
          ))}
        </div>
      </Section>

      <Divisor />

      <Section title="Comodidades Especiais">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {specialAmenties.map((amenity, isx) => (
            <InfoCard
              key={isx}
              title={amenity.title}
              description={amenity.description}
              items={amenity.items}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
