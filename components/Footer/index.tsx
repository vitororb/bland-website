import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-red-700 text-white">
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

          {/* Quick Links */}
          <div>
            <h4 className="font-family-cinzel mb-4 font-bold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/suites"
                  className="hover:text-accent transition-colors"
                >
                  Suítes
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="hover:text-accent transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/promocoes"
                  className="hover:text-accent transition-colors"
                >
                  Promoções
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-family-cinzel mb-4 font-bold">Contato</h4>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+5564999500479"
                className="hover:text-accent flex items-center gap-2 transition-colors"
              >
                {/* <Phone size={16} /> */}
                (64) 9 9950-0479
              </a>
              <a
                href="https://wa.me/5564999500479"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent flex items-center gap-2 transition-colors"
              >
                {/* <MessageCircle size={16} /> */}
                WhatsApp
              </a>
              <a
                href="mailto:recepcaobland@gmail.com"
                className="hover:text-accent flex items-center gap-2 transition-colors"
              >
                {/* <Mail size={16} /> */}
                recepcaobland@gmail.com
              </a>
              <div className="flex items-center gap-2">
                {/* <MapPin size={16} /> */}
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
            Feito com amor para você
          </p>
        </div>
      </div>
    </footer>
  );
};
