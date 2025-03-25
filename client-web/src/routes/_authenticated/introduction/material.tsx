import { createFileRoute, Link } from "@tanstack/react-router";
import { Video } from "@/components/custom/video";
export const Route = createFileRoute("/_authenticated/introduction/material")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Úvodní materiál</h1>

          <div className="prose max-w-none">
            <p className="text-base text-muted-foreground">
              Vítejte v úvodním modulu. Toto video poskytuje přehled toho, co se
              v tomto kurzu naučíte.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden border border-gray-200">
            <Video videoId="dQw4w9WgXcQ" title="Introduction Video" />
          </div>

          <div className="pt-4">
            <Link
              to="/introduction/exercise"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Pokračovat na cvičení
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
