import { Divisor } from "../shared/Divisor";
import { SectionTitle } from "./SectionTitle";

type Props = {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export const Section = ({ id, title, subtitle, children }: Props) => {
  return (
    <div className="flex flex-col w-full text-neutral-900">
      <Divisor />
      <div className="flex flex-col w-full">
        <SectionTitle id={id} title={title} subtitle={subtitle} />
        {children}
      </div>
    </div>
  );
};
