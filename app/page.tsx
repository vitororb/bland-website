"use client";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/hero-banner.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          <img
            src="/images/logos/icon.png"
            alt="Bland Motel"
            className="h-50 md:h-52 w-auto"
          />
          <p className="text-xl md:text-2xl mb-8 font-montserrat">
            VIVA MOMENTOS INESQUECÍVEIS!
          </p>
          <a
            href="https://wa.me/5564999500479"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Fazer Reserva Agora
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary font-cinzel mb-6">
              Seu refúgio de sofisticação!
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Mais do que uma estadia, o Bland Motel oferece a privacidade e o
              conforto que você merece. O cenário perfeito para fugir da rotina
              e viver experiências inesquecíveis.
            </p>
            <div className="divider-line my-8"></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="luxury-card p-8 text-center hover:scale-105 transition-transform">
              {/* <Lock className="w-12 h-12 text-primary mx-auto mb-4" /> */}
              <h3 className="text-xl font-bold text-secondary font-cinzel mb-2">
                Privacidade Total
              </h3>
              <p className="text-gray-600 text-sm">
                Discrição garantida! Seu sigilo é nossa prioridade
              </p>
            </div>

            <div className="luxury-card p-8 text-center hover:scale-105 transition-transform">
              {/* <Wifi className="w-12 h-12 text-primary mx-auto mb-4" /> */}
              <h3 className="text-xl font-bold text-secondary font-cinzel mb-2">
                Tecnologia
              </h3>
              <p className="text-gray-600 text-sm">
                WiFi de alta velocidade e sistemas modernos
              </p>
            </div>

            <div className="luxury-card p-8 text-center hover:scale-105 transition-transform">
              {/* <Tv className="w-12 h-12 text-primary mx-auto mb-4" /> */}
              <h3 className="text-xl font-bold text-secondary font-cinzel mb-2">
                Conforto
              </h3>
              <p className="text-gray-600 text-sm">
                Suítes equipadas com TV e sistemas de som
              </p>
            </div>

            <div className="luxury-card p-8 text-center hover:scale-105 transition-transform">
              {/* <Wind className="w-12 h-12 text-primary mx-auto mb-4" /> */}
              <h3 className="text-xl font-bold text-secondary font-cinzel mb-2">
                Climatização
              </h3>
              <p className="text-gray-600 text-sm">
                Ar-condicionado e ambiente pensado para o seu bem-estar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suites Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary font-cinzel mb-12 text-center">
            Nossas Suítes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Suite 1 */}
            <div className="luxury-card overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url(/images/suite-premium.jpg)",
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary font-cinzel mb-2">
                  Suíte Luxo
                </h3>
                <p className="text-gray-600 mb-4 text-justify">
                  Ambiente completo e aconchegante, perfeito para quem busca
                  praticidade sem abrir mão do conforto e da higiene impecável
                </p>
                <p className="text-primary font-bold text-lg mb-4">
                  A partir de R$ 95,00
                </p>
                <a
                  href="/suites"
                  className="text-primary hover:text-secondary transition-colors flex items-center gap-2"
                >
                  {/* Ver Detalhes <ArrowRight size={16} /> */}
                </a>
              </div>
            </div>

            {/* Suite 2 */}
            <div className="luxury-card overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url(/images/suite-deluxe.jpg)",
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary font-cinzel mb-2">
                  Suíte Premium
                </h3>
                <p className="text-gray-600 mb-4 text-justify">
                  Eleve a sua experiência, desfrute de uma banheira de
                  hidromassagem revigorante em um ambiente desenhado para o
                  prazer a dois
                </p>
                <p className="text-primary font-bold text-lg mb-4">
                  A partir de R$ 125,00
                </p>
                <a
                  href="#suites"
                  className="text-primary hover:text-secondary transition-colors flex items-center gap-2"
                >
                  {/* Ver Detalhes <ArrowRight size={16} /> */}
                </a>
              </div>
            </div>

            {/* Suite 3 */}
            <div className="luxury-card overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url(/images/suite-master.png)",
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary font-cinzel mb-2">
                  Suíte Master
                </h3>
                <p className="text-gray-600 mb-4 text-justify">
                  Espaço e conforto em dobro. Conta com hidromassagem, garagem
                  para dois veículos e opção com Pole Dance para momentos
                  inesquecíveis
                </p>
                <p className="text-primary font-bold text-lg mb-4">
                  A partir de R$ 135,00
                </p>
                <a
                  href="#suites"
                  className="text-primary hover:text-secondary transition-colors flex items-center gap-2"
                >
                  {/* Ver Detalhes <ArrowRight size={16} /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-cinzel mb-6">
            Pronto para uma Experiência Inesquecível?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reserve agora sua suíte e desfrute de conforto, privacidade e luxo
          </p>
          <a
            href="https://wa.me/5564999500479"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Fazer Reserva via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
