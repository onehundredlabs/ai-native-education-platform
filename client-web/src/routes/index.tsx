import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      Welcome to the app! Start by{" "}
      <Link to="/introduction/material">introduction</Link>
    </div>
  );
}
