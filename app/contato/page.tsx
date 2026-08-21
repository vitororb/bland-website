import { Button } from "@/components/Button";
import { FaqCard } from "@/components/cards/FaqCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { Divisor } from "@/components/Divisor";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/Section";
import faqs from "@/data/faqs.json";
import motel from "@/data/motel.json";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";

export default function Contato() {
  return (
    <>
      <PageBanner
        img="/bg-lencol-vermelho.png"
        firstLine="AINDA COM"
        title="Dúvidas?"
        subtitle="Entre em contato conosco! Nossa equipe está pronta para ajudar"
      >
        <Button
          label="Fale Conosco via WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${motel.phone}?text=Olá,%20gostaria%20de%20falar%20com%20vocês.`}
        />
      </PageBanner>

      <Section title="Contatos">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Phone className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Telefone"
            description={motel.phoneFormatted}
          />
          <FeatureCard
            icon={
              <MessageCircle className="text-primary mx-auto mb-4 h-12 w-12" />
            }
            title="WhatsApp"
            description={motel.phoneFormatted}
          />
          <FeatureCard
            icon={<Mail className="text-primary mx-auto mb-4 h-12 w-12" />}
            title="Email"
            description={motel.email}
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
        <div className="mx-auto space-y-6">
          {Object.values(faqs).map((faq) => (
            <FaqCard key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>
    </>
  );
}
