import { ChevronDown } from "lucide-react";

type Props = {
  img: string;
  firstLine?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export const PageBanner = ({
  img,
  firstLine,
  title,
  subtitle,
  children,
}: Props) => {
  return (
    <div
      className="relative flex h-screen items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('${img}')`,
      }}
    >
      <div className="flex w-full flex-col items-center gap-8 px-8">
        <div className="flex max-w-3xl flex-col gap-8 text-center">
          {firstLine && (
            <p className="font-family-cinzel text-sm font-medium tracking-widest text-white uppercase">
              {firstLine}
            </p>
          )}

          <h1 className="font-family-cinzel text-5xl font-bold text-white md:text-6xl">
            {title}
          </h1>

          {subtitle && <p className="mb-4 text-lg text-gray-200">{subtitle}</p>}
        </div>

        {children}

        <div className="absolute bottom-8 flex flex-col items-center gap-1 text-[10px] text-white/70 uppercase">
          Explorar
          <div className="animate-bounce">
            <ChevronDown size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};
