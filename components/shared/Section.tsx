type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const Section = ({ id, title, subtitle, children }: Props) => {
  return (
    <div
      id={id}
      className="my-12 flex w-full flex-col items-center gap-12 px-8 text-neutral-900"
    >
      <div className="flex max-w-3xl flex-col gap-8 text-center">
        <h1 className="text-secondary font-family-cinzel text-4xl font-bold">
          {title}
        </h1>
        {subtitle && <p className="mb-4 text-lg text-gray-600">{subtitle}</p>}
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};
