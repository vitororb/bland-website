type Props = {
  img: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export const PageBanner = ({ img, title, subtitle, children }: Props) => {
  return (
    <div
      className="flex h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className="flex w-full flex-col items-center gap-12 px-8 text-neutral-900">
        <div className="flex max-w-3xl flex-col gap-8 text-center">
          <h1 className="text-secondary font-family-cinzel text-5xl font-bold md:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mb-4 text-lg text-gray-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
};
