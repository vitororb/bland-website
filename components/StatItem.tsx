type Props = {
  value: string;
  label: string;
};

export const StatItem = ({ value, label }: Props) => {
  return (
    <div className="text-center">
      <div className="font-family-cinzel mb-2 text-5xl font-bold">{value}</div>
      <p className="text-lg">{label}</p>
    </div>
  );
};
