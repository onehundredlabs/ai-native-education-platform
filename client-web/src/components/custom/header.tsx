import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
    <header className="h-10 border-b border-gray-200 flex items-center justify-between">
      <div className="container mx-auto">
        <Link to="/">AI-native education platform</Link>
      </div>
    </header>
  );
};
