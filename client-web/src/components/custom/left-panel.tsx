import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

interface LeftPanelProps {
  className?: string;
}
export const LeftPanel = ({ className }: LeftPanelProps) => {
  return (
    <div className={cn("h-full", className)}>
      <Link to="/introduction/material">Introduction</Link>
    </div>
  );
};
