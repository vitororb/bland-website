type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const Section = ({ title, subtitle, children }: Props) => {
  return (
    <div className="my-12 flex w-full flex-col items-center gap-12 px-8 text-neutral-900">
      <div className="flex max-w-3xl flex-col gap-8 text-center">
        <h1 className="text-secondary font-family-cinzel text-5xl font-bold">
          {title}
        </h1>
        {subtitle && <p className="mb-4 text-lg text-gray-600">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
};
