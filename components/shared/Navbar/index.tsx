import { LinkItem } from "./LinkItem";

export const Navbar = () => {
  return (
    <header className="flex-flex-col w-screen bg-[url('/bg-lencol-vermelho.png')] bg-cover bg-center text-white">
      <div className="flex justify-center items-center h-24">
        <img src="/logo-2.png" alt="some description" className="w-24" />
      </div>

      <nav className="flex gap-20 items-center justify-center h-14 backdrop-blur-xs">
        <LinkItem text="início" url="/" />
        <LinkItem text="sobre" url="/about" />
        <LinkItem text="suítes" url="/suites" />
        <LinkItem text="cardápio" url="/menu" />
        <LinkItem text="sex shop" url="/sex-shop" />
        <LinkItem text="promoções" url="/#promotions" />
      </nav>
    </header>
  );
};
