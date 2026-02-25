import { FaqCard } from "@/components/cards/FaqCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { Divisor } from "@/components/Divisor";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/Section";
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

      <Divisor />

      <Section title="Mapa de Localização">
        <div className="h-96 overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="localização"
            width="100%"
            height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.123!2d-52.5261843!3d-17.5810575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93632606d5dd8547%3A0xb17273c4daad57ae!2sBland%20Motel%20-%20Mineiros!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
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
