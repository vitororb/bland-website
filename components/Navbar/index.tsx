import { LinkItem } from "./LinkItem";

export const Navbar = () => {
  return (
    <header className="flex-flex-col w-screen bg-[url('/bg-lencol-vermelho.png')] bg-cover bg-center">
      <div className="flex justify-center items-center relative h-24">
        <div className="flex flex-col items-center">
          <img src="/logo-bland.png" alt="logo-bland" className="w-8" />
          <h1 className="text-2xl uppercase font-family-cinzel font-semibold">
            Bland
          </h1>
          <span className="text-xs uppercase font-family-cinzel font-light">
            Motel
          </span>
        </div>
        <button
          onClick={() =>
            window.open(
              "https://wa.me/5564999500479?text=Olá, gostaria de fazer uma reserva",
              "_blank"
            )
          }
          className="items-center justify-center flex h-10 px-8 uppercase hover:cursor-pointer absolute right-8 bg-white text-neutral-900 hover:bg-red-900 hover:text-white hover:font-semibold transition-all duration-300"
        >
          reserve
        </button>
      </div>

      <nav className="flex gap-20 items-center justify-center h-14 backdrop-blur-xs">
        <LinkItem text="início" url="#" />
        <LinkItem text="sobre" url="#" />
        <LinkItem text="suítes" url="#suites" />
        <LinkItem text="gastronomia" url="#" />
        <LinkItem text="sex shop" url="#" />
        <LinkItem text="promoções" url="#" />
      </nav>
    </header>
  );
};
