import { Heart, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import motel from "../../data/motel.json";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="font-family-cinzel mb-4 text-xl font-bold">
              BLAND MOTEL
            </h3>
            <p className="text-sm text-gray-300">
              Experiência premium de luxo e privacidade em Mineiros-GO.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-family-cinzel mb-4 font-bold">Localização</h4>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                title="localização"
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.123!2d-52.5261843!3d-17.5810575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93632606d5dd8547%3A0xb17273c4daad57ae!2sBland%20Motel%20-%20Mineiros!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                allowFullScreen={true}
              />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-family-cinzel mb-4 font-bold">Contato</h4>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+5564999500479"
                className="hover:text-accent flex items-center gap-2 transition-colors"
              >
                <Phone size={16} />
                (64) 9 9950-0479
              </a>
              <a
                href={`https://wa.me/${motel.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent flex items-center gap-2 transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="mailto:recepcaobland@gmail.com"
                className="hover:text-accent flex items-center gap-2 transition-colors"
              >
                <Mail size={16} />
                recepcaobland@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Mineiros, GO
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-family-cinzel mb-4 font-bold">Horário</h4>
            <p className="text-sm">
              <span className="block font-semibold">Aberto 24 horas</span>
              <span className="text-gray-300">Todos os dias</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-accent-light my-8 border-t"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between text-sm text-gray-300 md:flex-row">
          <p>© 2026 Bland Motel. Todos os direitos reservados.</p>
          <p className="mt-4 flex items-center gap-1 md:mt-0">
            Feito com <Heart className="text-red-200" size={16} /> para você
          </p>
        </div>
      </div>
    </footer>
  );
};
