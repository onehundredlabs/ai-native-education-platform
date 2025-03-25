import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/introduction/exercise")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">
            Úvodní materiál - cvičení
          </h1>

          <div className="prose max-w-none">
            <p className="text-base text-muted-foreground">
              Vítejte v úvodním cvičení. Zde si můžete procvičit znalosti
              získané z úvodního materiálu.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/introduction/material"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Zpět na materiál
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
