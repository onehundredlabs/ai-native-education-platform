import { createFileRoute, Link } from "@tanstack/react-router";
import { Video } from "@/components/custom/video";
export const Route = createFileRoute("/_authenticated/introduction/material")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Introduction Material</h1>

      <Video videoId="dQw4w9WgXcQ" title="Introduction Video" />

      <Link to="/introduction/exercise">Let's start the exercise</Link>
    </div>
  );
}
