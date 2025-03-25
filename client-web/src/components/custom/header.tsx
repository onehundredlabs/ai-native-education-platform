import { SignOutButton } from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-background to-secondary/20 border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          Feynman Lab
        </Link>

        <SignOutButton>
          <Button
            variant="outline"
            className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Odhlásit se
          </Button>
        </SignOutButton>
      </div>
    </header>
  );
};
