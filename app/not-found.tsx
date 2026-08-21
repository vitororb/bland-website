import { Button } from "@/components/Button";
import { ArrowRightIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-family-cinzel text-foreground text-9xl font-bold">
        404
      </h1>

      <p className="text-foreground text-2xl font-semibold">
        Página não encontrada
      </p>

      <p className="text-foreground/70">
        A página que você está procurando não existe.
      </p>

      <Button
        label="Voltar para o Início"
        href="/"
        className="w-fit"
        rightIcon={<ArrowRightIcon size={16} />}
      />
    </div>
  );
}
