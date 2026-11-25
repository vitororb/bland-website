import { ChevronDown } from "lucide-react";
import Image from "next/image";

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
    <section className="relative flex min-h-svh items-center overflow-hidden">
      <Image
        src={img}
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/40" />

      <div className="relative flex w-full flex-col items-center gap-8 px-8">
        <div className="flex max-w-3xl flex-col gap-8 text-center">
          {firstLine && (
            <p className="font-family-cinzel text-sm font-medium tracking-widest text-white uppercase">
              {firstLine}
            </p>
          )}

          <h1 className="font-family-cinzel text-5xl font-bold text-white capitalize md:text-6xl">
            {title}
          </h1>

          {subtitle && <p className="text-lg text-gray-200">{subtitle}</p>}
        </div>

        {children}
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] text-white/70 uppercase">
        Explorar
        <div className="animate-bounce">
          <ChevronDown size={14} />
        </div>
      </div>
    </section>
  );
};
