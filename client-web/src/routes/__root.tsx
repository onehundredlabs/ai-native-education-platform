import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../components/custom/header";
import { LeftPanel } from "@/components/custom/left-panel";
import { RightPanel } from "@/components/custom/right-panel";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />

      <div className="container mx-auto flex justify-between">
        <LeftPanel />

        <Outlet />

        <RightPanel />
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
