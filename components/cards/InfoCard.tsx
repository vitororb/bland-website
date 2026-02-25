type Props = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  items?: string[];
};

export const InfoCard = ({ icon, title, description, items }: Props) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      {icon}

      <h3 className="text-secondary font-family-cinzel text-2xl font-bold">
        {title}
      </h3>

      {description && <p className="text-gray-600">{description}</p>}

      {items && items.length > 0 && (
        <ul className="space-y-2 text-sm text-gray-600">
          {items.map((item, idx) => (
            <li key={idx}>✓ {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
