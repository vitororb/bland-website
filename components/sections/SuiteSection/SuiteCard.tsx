import {
  CrownSimpleIcon,
  FireSimpleIcon,
  SketchLogoIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";

type Props = {
  suitName: string;
  suitType: string;
  price: string;
  adicionalHours: string;
  isTrending?: boolean;
};

export const SuiteCard = ({
  suitName,
  suitType,
  price,
  adicionalHours,
  isTrending,
}: Props) => {
  const getTypeColor = () => {
    switch (suitType) {
      case "Luxo":
        return "text-gray-800 bg-gray-800/30";
      case "Premium":
        return "text-amber-600 bg-amber-600/30";
      case "Master":
        return "text-purple-950 bg-purple-950/30";
      default:
        return "text-gray-500 bg-gray-500/30";
    }
  };

  const getTypeIcon = () => {
    switch (suitType) {
      case "Luxo":
        return <SparkleIcon size={12} weight="bold" />;
      case "Premium":
        return <CrownSimpleIcon size={12} weight="bold" />;
      case "Master":
        return <SketchLogoIcon size={12} weight="bold" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl max-w-xs relative">
      {isTrending && (
        <span className="text-red-700 text-xs flex gap-1 items-center absolute justify-center border border-red-700 rounded-full px-2 right-2 top-2 bg-white/50 font-medium">
          <FireSimpleIcon size={12} weight="bold" />
          Em Alta
        </span>
      )}

      <img
        src="/Suite-08/suite-08.jpeg"
        alt={suitName}
        className="h-52 w-full bg-cover bg-center rounded-2xl"
      />

      <div className="flex flex-col gap-2 p-4">
        <div className="flex w-full items-center justify-between">
          <h1 className="font-semibold font-family-cinzel text-xl">
            {suitName}
          </h1>
          <h2
            className={`flex items-center justify-center px-2 gap-2 font-medium rounded-sm text-sm ${getTypeColor()}`}
          >
            {getTypeIcon()}
            {suitType}
          </h2>
        </div>
      </div>
    </div>

    //   <div className="flex flex-col items-center justify-center p-3 gap-2 rounded-b-lg">
    //     <div className="flex w-full"></div>

    //     <hr className="w-full roudend-full text-gray-200" />

    //     <div className="flex w-full items-center justify-between">
    //       <div className="flex flex-col">
    //         <p className="font-semibold text-green-800">
    //           R$ {price}
    //           <span className="text-xs text-gray-400 font-normal">/2h</span>
    //         </p>
    //         <p className="text-xs text-gray-400">
    //           + R${adicionalHours} por hora adicional
    //         </p>
    //       </div>

    //       <button
    //         onClick={() =>
    //           window.open(
    //             `https://wa.me/5564999500479?text=Olá, gostaria de fazer uma reserva na ${suitName}.`,
    //             "_blank"
    //           )
    //         }
    //         className="flex items-center justify-center gap-2 hover:cursor-pointer text-xs hover:bg-gray-400/16 px-2 py-1 border rounded-sm border-gray-400"
    //       >
    //         Ver detalhes
    //         <CaretRightIcon size={12} />
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};
