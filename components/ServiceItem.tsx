type Props = {
  icon: React.ReactNode;
  service: string;
  price?: string;
};

export const ServiceItem = ({ icon, service, price }: Props) => {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100">
      {icon}
      <span className="flex-1 font-semibold text-gray-700">{service}</span>
      {price && (
        <p className="text-primary text-sm font-medium text-gray-500">
          R$ {price}
        </p>
      )}
    </div>
  );
};
