import { SignOutButton } from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="h-10 border-b border-gray-200 flex items-center justify-between">
      <div className="container mx-auto flex justify-between">
        <Link to="/">AI-native education platform</Link>

        <SignOutButton>
          <Button variant="outline" className="cursor-pointer">
            Odhlásit se
          </Button>
        </SignOutButton>
      </div>
    </header>
  );
};
