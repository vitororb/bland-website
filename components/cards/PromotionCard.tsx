type Props = {
  img: string;
};

export const PromotionCard = ({ img }: Props) => {
  return (
    <div
      className="h-96 w-64 rounded-lg bg-cover bg-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ backgroundImage: `url('${img}')` }}
    />
  );
};
