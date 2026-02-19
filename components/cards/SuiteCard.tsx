import { FireSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "lucide-react";

type Props = {
  imgUrl: string;
  suiteNumber: string;
  isTrending?: boolean;
};

export const SuiteCard = ({ imgUrl, suiteNumber, isTrending }: Props) => {
  return (
    <div className="relative flex w-full flex-col rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      {isTrending && (
        <span className="absolute top-2 right-2 flex items-center justify-center gap-1 rounded-full border border-red-700 bg-white/50 px-2 text-xs font-medium text-red-700">
          <FireSimpleIcon size={12} weight="bold" />
          {/* <Flame /> */}
          Em Alta
        </span>
      )}

      <div
        style={{ backgroundImage: `url('${imgUrl}')` }}
        className="h-48 rounded-t-lg bg-cover bg-center"
      />

      <div className="flex flex-col p-6">
        <h3 className="text-secondary font-family-cinzel text-2xl font-bold">
          {suiteNumber}
        </h3>
        <button className="text-primary hover:text-secondary flex items-center gap-2 transition-colors hover:cursor-pointer">
          Reservar <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
