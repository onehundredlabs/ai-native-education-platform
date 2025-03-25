import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

interface LeftPanelProps {
  className?: string;
}

export const LeftPanel = ({ className }: LeftPanelProps) => {
  return (
    <div className={cn("h-full border-r border-gray-200 p-4", className)}>
      <nav className="space-y-4">
        <Link
          to="/introduction/material"
          className="flex items-center gap-2 text-base font-medium hover:text-primary hover:bg-secondary/50 p-2 rounded-md transition-colors"
        >
          <BookOpen className="text-primary" size={16} />
          Úvodní materiál
        </Link>
      </nav>
    </div>
  );
};
