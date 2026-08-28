type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const Section = ({ id, title, subtitle, children }: Props) => {
  return (
    <div
      id={id}
      className="mx-auto my-12 flex w-full max-w-7xl flex-col items-center gap-8 px-6"
    >
      <div className="flex max-w-3xl flex-col gap-8 text-center">
        {title && (
          <h1 className="text-secondary font-family-cinzel text-4xl font-bold">
            {title}
          </h1>
        )}
        {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};
