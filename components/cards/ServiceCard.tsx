import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Button } from "../Button";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  buttonLabel: string;
  href: string;
};

export const ServiceCard = ({
  title,
  description,
  imageUrl,
  icon,
  buttonLabel,
  href,
}: Props) => {
  return (
    <div className="group flex w-2xs shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-40">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="288px"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="relative flex flex-col gap-6 p-4 pt-14">
        <div className="bg-secondary shadow-secondary/30 absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white text-white shadow-lg">
          {icon}
        </div>

        <h3 className="text-secondary font-family-cinzel text-center text-xl font-semibold">
          {title}
        </h3>

        <p className="text-center text-sm text-neutral-600">{description}</p>

        {/* TODO: alinhar os botões na parte de baixo de todos os cards
            (hoje a altura do botão varia conforme o tamanho da descrição). */}
        <Button
          label={buttonLabel}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="justify-center"
          rightIcon={<ArrowRightIcon size={16} />}
        />
      </div>
    </div>
  );
};
