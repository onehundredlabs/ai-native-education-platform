import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/introduction/material")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Introduction Material</h1>

      <Link to="/introduction/exercise">Let's start the exercise</Link>
    </div>
  );
}
