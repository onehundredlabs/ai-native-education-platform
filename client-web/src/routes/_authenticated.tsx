import { Header } from "@/components/custom/header";
import { LeftPanel } from "@/components/custom/left-panel";
import { RightPanel } from "@/components/custom/right-panel";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
});

function RouteComponent() {
  console.log("RouteComponent");

  return (
    <>
      <SignedIn>
        <Header />

        <div className="container mx-auto flex justify-between">
          <LeftPanel className="w-2/12" />

          <main className="w-8/12">
            <Outlet />
          </main>

          <RightPanel className="w-2/12" />
        </div>
      </SignedIn>
      <SignedOut>
        
        <Navigate to="/sign-in" />
      </SignedOut>
    </>
  );
}
