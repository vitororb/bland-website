import { LinkItem } from "./LinkItem";

export const Navbar = () => {
  return (
    <header className="flex-flex-col w-screen bg-[url('/bg-lencol-vermelho.png')] bg-cover bg-center">
      <div className="flex justify-center items-center h-24">
        <div className="flex flex-col items-center">
          <img src="/logo-bland.png" alt="logo-bland" className="w-8" />
          <h1 className="text-2xl uppercase font-family-cinzel font-semibold">
            Bland
          </h1>
          <span className="text-xs uppercase font-family-cinzel font-light">
            Motel
          </span>
        </div>
      </div>

      <nav className="flex gap-20 items-center justify-center h-14 backdrop-blur-xs">
        <LinkItem text="início" url="#" />
        <LinkItem text="sobre" url="#" />
        <LinkItem text="suítes" url="#suites" />
        <LinkItem text="gastronomia" url="#gastronomia" />
        <LinkItem text="sex shop" url="#sex-shop" />
        <LinkItem text="promoções" url="#promocoes" />
      </nav>
    </header>
  );
};
