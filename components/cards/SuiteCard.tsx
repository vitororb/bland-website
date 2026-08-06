import motel from "@/data/motel.json";
import { ArrowRight, Flame } from "lucide-react";

type Props = {
  imgUrl: string;
  suiteNumber: string;
  isTrending?: boolean;
};

export const SuiteCard = ({ imgUrl, suiteNumber, isTrending }: Props) => {
  return (
    <div className="bg-muted relative flex h-96 w-72 flex-col justify-between overflow-hidden rounded-lg shadow-md transition-shadow duration-500 hover:shadow-2xl">
      <img
        src={imgUrl}
        alt={`Suíte ${suiteNumber}`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
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

      <a
        href={`https://wa.me/${motel.phone}?text=Olá,%20gostaria%20de%20reservar%20a%20Suíte%20${suiteNumber}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white-10 hover:text-foreground absolute right-4 bottom-4 flex cursor-pointer items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:border-transparent hover:bg-white"
      >
        Reservar <ArrowRight size={16} />
      </a>
    </div>
  );
};
