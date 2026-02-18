import { CaretRightIcon, ForkKnifeIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type Props = {
  categoryName: string;
  price: string;
  additionalHour: string;
  overnight: string;
  description: string;
  url: string;
};

export const CategoryCard = ({
  categoryName,
  price,
  additionalHour,
  overnight,
  description,
  url,
}: Props) => {
  return (
    <div className="flex w-2xs flex-col rounded-2xl border-b-4 border-red-700 bg-[url('/bg-lencol-vermelho.png')] bg-cover bg-center font-bold shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <header className="font-family-cinzel flex h-16 w-full items-center justify-center text-2xl font-semibold text-white uppercase">
        {categoryName}
      </header>

      <div className="flex flex-col gap-4 rounded-2xl bg-white p-4">
        <div className="flex flex-col">
          <h2 className="font-family-cinzel text-xl font-bold text-red-700">
            R${price}
            <span className="font-family-montserrat text-xs font-medium text-neutral-500">
              /2h
            </span>
          </h2>
          <p className="font-family-montserrat text-xs font-medium text-neutral-500">
            + R${additionalHour} por hora adicional
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="font-family-cinzel text-xl font-bold text-red-700">
            R${overnight}
            <span className="font-family-montserrat text-xs font-medium text-neutral-500">
              {" "}
              Pernoite
            </span>
          </h2>
          <p className="font-family-montserrat flex items-center gap-1 text-xs font-medium text-neutral-500">
            + <ForkKnifeIcon size={16} /> Café da manhã incluso
          </p>
        </div>

        <hr className="w-full text-neutral-400" />

        <div className="h-20 w-full text-center text-xs font-medium text-neutral-500">
          {description}
        </div>

        <Link
          href={url}
          className="relative flex h-10 w-full items-center justify-center rounded-full border border-red-700 text-base font-medium text-red-700"
        >
          Ver Suítes
          <CaretRightIcon size={16} className="absolute right-2" />
        </Link>
      </div>
    </div>
  );
};
