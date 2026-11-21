import Image from "next/image";

type Props = {
  img: string;
  alt: string;
};

export const PromotionCard = ({ img, alt }: Props) => {
  return (
    <div className="relative h-96 min-w-64 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <Image
        src={img}
        alt={alt}
        fill
        sizes="256px"
        className="object-cover object-center"
      />
    </div>
  );
};
