type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
};

export const FeatureCard = ({
  icon,
  title,
  description,
  href,
  external,
}: Props) => {
  const className =
    "block rounded-lg bg-white p-8 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl";

  const content = (
    <>
      {icon}
      <h3 className="text-secondary font-family-cinzel mb-2 text-xl font-bold">
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
};
