import { FaqCard } from "@/components/cards/FaqCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { Divisor } from "@/components/shared/Divisor";
import { PageBanner } from "@/components/shared/PageBanner";
import { Section } from "@/components/shared/Section";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";

export default function Contato() {
  return (
    <>
      <PageBanner
        img="/bg-lencol-branco.png"
        title="Ficou com Dúvidas?"
        subtitle="Entre em contato conosco! Nossa equipe está pronta para ajudar"
      >
        <button className="bg-primary hover:bg-secondary inline-block rounded-lg px-6 py-3 font-semibold text-white transition-colors duration-300 hover:cursor-pointer">
          Fale Conosco via WhatsApp
        </button>
      </PageBanner>

      <Section title="Contatos">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <FeatureCard
            icon={<Phone className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Telefone"
            description="(64) 9 9950-0479"
          />
          <FeatureCard
            icon={
              <MessageCircle className="text-primary mx-auto mb-4 h-12 w-12" />
            }
            title="WhatsApp"
            description="(64) 9 9950-0479"
          />
          <FeatureCard
            icon={<Mail className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Email"
            description="recepcaobland@gmail.com"
          />
          <FeatureCard
            icon={<Clock className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Horário"
            description="Aberto 24 horas todos os dias da semana"
          />
        </div>
      </Section>

      {/* TO DO */}
      {/* <Divisor/>

      <Section
        title="Formulário de Contato"
      >
        <></>
      </Section> */}

      <Divisor />

      <Section title="Mapa de Localização">
        <div className="h-96 overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="localização"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Mineiros%2C%20GO&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            allowFullScreen={true}
          ></iframe>
        </div>
      </Section>

      <Divisor />

      <Section title="Perguntas Frequentes">
        <div className="mx-auto max-w-3xl space-y-6">
          <FaqCard
            question="Como faço uma reserva?"
            answer="Você pode fazer uma reserva através do WhatsApp, telefone ou enviando uma mensagem através do formulário de contato. Nossa equipe responderá em breve com as opções disponíveis."
          />
          <FaqCard
            question="Qual é a política de cancelamento?"
            answer="Cancelamentos com 24 horas de antecedência recebem reembolso total. Cancelamentos com menos de 24 horas podem estar sujeitos a taxas. Consulte-nos para detalhes específicos."
          />
          <FaqCard
            question="Vocês oferecem estacionamento?"
            answer="Sim, oferecemos estacionamento privativo gratuito para todos os nossos hóspedes. É seguro e monitorado 24 horas."
          />
          <FaqCard
            question="Qual é a idade mínima para hospedar-se?"
            answer="A idade mínima é 18 anos. Será necessário apresentar um documento de identificação válido no check-in."
          />
        </div>
      </Section>
    </>
  );
}
