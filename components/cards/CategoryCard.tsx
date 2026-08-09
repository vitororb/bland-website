import { ArrowRightIcon, Check, UtensilsIcon } from "lucide-react";
import { Button } from "../Button";

type Props = {
  categoryName: string;
  price: string;
  additionalHour: string;
  overnight: string;
  items: { name: string; highlight?: boolean }[];
  url: string;
};

export const CategoryCard = ({
  categoryName,
  price,
  additionalHour,
  overnight,
  items,
  url,
}: Props) => {
  return (
    <div className="flex w-2xs flex-col rounded-2xl bg-[url('/bg-lencol-vermelho.png')] bg-cover bg-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <header className="font-family-cinzel flex h-20 w-full items-center justify-center text-2xl font-semibold text-white uppercase">
        {categoryName}
      </header>

      <div className="flex h-full flex-col gap-4 rounded-2xl bg-white p-4">
        {/* Pricing */}
        <div className="flex flex-col">
          <h2 className="font-family-cinzel text-secondary text-3xl font-semibold">
            R${price}
            <span className="font-family-montserrat text-muted text-sm font-normal text-neutral-600">
              /2h
            </span>
          </h2>
          <p className="font-family-montserrat text-muted text-xs text-neutral-600">
            + R${additionalHour} por hora adicional
          </p>
        </div>

        {/* Overnight */}
        <div className="flex flex-col">
          <h2 className="font-family-cinzel text-secondary/90 text-lg font-medium">
            R${overnight}
            <span className="font-family-montserrat text-muted text-xs font-normal text-neutral-600">
              {" "}
              Pernoite
            </span>
          </h2>
          <p className="font-family-montserrat flex items-center gap-1 text-xs text-neutral-600">
            + <UtensilsIcon size={12} /> Café da manhã incluso
          </p>
        </div>

        {/* Features */}
        <p className="font-family-cinzel text-center text-xs tracking-widest text-neutral-600 uppercase">
          — Comodidades —
        </p>

        <div className="flex h-full w-full flex-col gap-2">
          {items.map((item, idx) => (
            <span
              key={idx}
              className={`flex items-center gap-2 text-xs ${item.highlight ? "text-secondary font-medium" : "text-neutral-600"}`}
            >
              <Check
                className={
                  item.highlight ? "text-secondary" : "text-neutral-600"
                }
                size={16}
              />
              {item.name}
            </span>
          ))}
        </div>

        <Button
          label="Ver Suítes"
          href={url}
          variant="secondary"
          className="justify-center"
          rightIcon={<ArrowRightIcon size={16} />}
        />
      </div>
    </div>
  );
};
