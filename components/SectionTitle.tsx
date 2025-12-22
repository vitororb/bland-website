type Props = {
  id: string;
  title: string;
  subtitle: string;
};

export const SectionTitle = ({ id, title, subtitle }: Props) => {
  return (
    <div className="flex flex-col gap-1 px-8 w-full items-center">
      <h1 id={id} className="text-2xl font-semibold uppercase">
        {title}
      </h1>
      <h2 className="text-base text-center">{subtitle}</h2>
    </div>
  );
};
