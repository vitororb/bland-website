import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-cinzel text-foreground text-9xl font-bold">404</h1>

        <p className="text-foreground mt-4 text-2xl font-semibold">
          Página não encontrada
        </p>

        <p className="text-foreground/70 mt-2">
          A página que você está procurando não existe.
        </p>

        <Button label="Voltar para o início" href="/" className="mt-6 w-fit" />
      </div>
    </div>
  );
}
