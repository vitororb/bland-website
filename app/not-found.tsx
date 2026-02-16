import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-cinzel text-9xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-2xl font-semibold text-foreground">
          Página não encontrada
        </p>
        <p className="mt-2 text-foreground/70">
          A página que você está procurando não existe.
        </p>
        
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-foreground px-6 py-3 text-background transition-opacity hover:opacity-80"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
