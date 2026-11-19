import motel from "@/data/motel.json";
import { ArrowRight, Flame } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button";

type Props = {
  imgUrl: string;
  suiteNumber: string;
  isTrending?: boolean;
};

export const SuiteCard = ({ imgUrl, suiteNumber, isTrending }: Props) => {
  return (
    <div className="group relative flex h-96 w-72 shrink-0 flex-col overflow-hidden rounded-lg bg-neutral-800 shadow-md transition-shadow duration-500 hover:shadow-2xl">
      <Image
        src={imgUrl}
        alt={`Suíte ${suiteNumber}`}
        fill
        sizes="288px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {isTrending && (
        <span className="bg-secondary/70 absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-white">
          <Flame size={12} />
          Em Alta
        </span>
      )}

      <div className="absolute bottom-4 left-4 flex flex-col gap-1">
        <span className="font-family-cinzel block text-xs tracking-widest text-white uppercase">
          Suíte
        </span>
        <p className="font-family-cinzel text-5xl font-bold text-white">
          {suiteNumber}
        </p>
      </div>

      <Button
        label="Reservar"
        href={`https://wa.me/${motel.phone}?text=Olá,%20gostaria%20de%20reservar%20a%20Suíte%20${suiteNumber}.`}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        className="absolute right-4 bottom-4"
        rightIcon={<ArrowRight size={16} />}
      />
    </div>
  );
};
