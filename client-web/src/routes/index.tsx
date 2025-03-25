import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary/20 px-4">
      <div className="max-w-5xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Feynman Lab
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Odemkněte budoucnost vzdělávání s naší špičkovou vzdělávací
            platformou poháněnou umělou inteligencí. Osvojte si nové dovednosti
            vlastním tempem s personalizovaným vedením.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link
            to="/introduction/material"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            Začít
          </Link>
          <button className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
            Více informací
          </button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            Připojte se k tisícům studentů, kteří se již učí s AI Školou
          </p>
        </div>
      </div>
    </div>
  );
}
