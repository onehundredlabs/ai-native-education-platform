import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/introduction/exercise")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Introduction Exercise</h1>

      <Link to="/introduction/material">Move back to the material</Link>
    </div>
  );
}
