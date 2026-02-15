export const Footer = () => {
  return (
    <footer className="bg-red-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold font-cinzel mb-4">BLAND MOTEL</h3>
            <p className="text-gray-300 text-sm">
              Experiência premium de luxo e privacidade em Mineiros-GO.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-cinzel mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  // onClick={() => setCurrentPage("home")}
                  className="hover:text-accent transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  // onClick={() => setCurrentPage("suites")}
                  className="hover:text-accent transition-colors"
                >
                  Suítes
                </button>
              </li>
              <li>
                <button
                  // onClick={() => setCurrentPage("servicos")}
                  className="hover:text-accent transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  // onClick={() => setCurrentPage("promocoes")}
                  className="hover:text-accent transition-colors"
                >
                  Promoções
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-cinzel mb-4">Contato</h4>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+5564999500479"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                {/* <Phone size={16} /> */}
                (64) 9 9950-0479
              </a>
              <a
                href="https://wa.me/5564999500479"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                {/* <MessageCircle size={16} /> */}
                WhatsApp
              </a>
              <a
                href="mailto:recepcaobland@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
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
            <h4 className="font-bold font-cinzel mb-4">Horário</h4>
            <p className="text-sm">
              <span className="block font-semibold">Aberto 24 horas</span>
              <span className="text-gray-300">Todos os dias</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-light my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© 2026 Bland Motel. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Feito com amor para você
          </p>
        </div>
      </div>
    </footer>
  );
};
