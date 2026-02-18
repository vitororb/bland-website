type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div className="rounded-lg bg-white p-8 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {icon}
      <h3 className="text-secondary font-cinzel mb-2 text-xl font-bold">
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};
