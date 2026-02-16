type Props = {
  id: string;
  title: string;
  subtitle: string;
};

export const SectionTitle = ({ id, title, subtitle }: Props) => {
  return (
    <div className="flex flex-col gap-1 px-8 w-full items-center mb-8">
      <h1
        id={id}
        className="text-2xl uppercase text-red-700 font-family-cinzel font-bold tracking-wider"
      >
        {title}
      </h1>
      <h2 className="text-base text-center">{subtitle}</h2>
    </div>
  );
};
