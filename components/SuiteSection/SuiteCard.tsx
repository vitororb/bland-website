import {
  ArrowUpRightIcon,
  FireSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";

type Props = {
  suitName: string;
  suitType?: string;
  isTrending?: boolean;
};

export const SuiteCard = ({ suitName, suitType, isTrending }: Props) => {
  return (
    <div className="flex flex-col rounded-lg w-96 overflow-auto bg-white shadow-md text-neutral-900">
      <img
        src="/Suite-08/suite-08.jpeg"
        alt={suitName}
        className="h-52 bg-cover bg-center"
      />
      <div className="flex flex-col items-center justify-center p-2 border border-t-0 border-red-700 rounded-b-lg">
        <h1 className="uppercase font-semibold">{suitName}</h1>
        <h2 className="text-sm text-gray-500">{suitType}</h2>
        {isTrending && (
          <span className="text-red-700 text-xs flex gap-1 items-center justify-center border border-red-700 rounded-full px-2">
            <FireSimpleIcon size={12} />
            Em Alta
          </span>
        )}
        <button
          onClick={() =>
            window.open(
              `https://wa.me/5564999500479?text=Olá, gostaria de fazer uma reserva na ${suitName}.`,
              "_blank"
            )
          }
          className="flex items-center justify-center gap-2 hover:cursor-pointer text-xs border-b hover:text-red-700 hover:font-semibold transition-all duration-300"
        >
          Fazer Reserva
          <ArrowUpRightIcon size={12} />
        </button>
      </div>
    </div>
  );
};
