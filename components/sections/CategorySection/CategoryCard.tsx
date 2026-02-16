import { CaretRightIcon, ForkKnifeIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type Props = {
  categoryName: string;
  price: string;
  additionalHour: string;
  overnight: string;
  url: string;
};

export const CategoryCard = ({
  categoryName,
  price,
  additionalHour,
  overnight,
  url,
}: Props) => {
  return (
    <div className="flex flex-col w-2xs shadow-lg rounded-2xl bg-[url('/bg-lencol-vermelho.png')] bg-cover bg-center font-bold border-b-4 border-red-700">
      <header className="flex w-full items-center justify-center h-16 uppercase font-family-cinzel text-white">
        {categoryName}
      </header>

      <div className="flex flex-col p-4 gap-4 bg-white rounded-2xl">
        <div className="flex flex-col">
          <h2 className="text-xl font-family-cinzel font-bold text-red-700">
            R${price}
            <span className="text-xs text-neutral-500 font-medium font-family-montserrat">
              /2h
            </span>
          </h2>
          <p className="text-xs text-neutral-500 font-medium font-family-montserrat">
            + R${additionalHour} por hora adicional
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-family-cinzel font-bold text-red-700">
            R${overnight}
            <span className="text-xs text-neutral-500 font-medium font-family-montserrat">
              {" "}
              Pernoite
            </span>
          </h2>
          <p className="flex items-center gap-1 text-xs text-neutral-500 font-medium font-family-montserrat">
            + <ForkKnifeIcon size={16} /> Café da manhã incluso
          </p>
        </div>

        <div className="flex w-full items-center gap-2 text-neutral-400">
          <hr className="w-full" />
          <p className="text-xs font-medium">Inclui</p>
          <hr className="w-full" />
        </div>

        <div className="flex flex-col w-full h-20"></div>

        <Link
          href={url}
          className="flex items-center justify-center font-medium text-base relative w-full h-10 rounded-full border border-red-700 text-red-700"
        >
          Ver Suítes
          <CaretRightIcon size={16} className="absolute right-2" />
        </Link>
      </div>
    </div>
  );
};
