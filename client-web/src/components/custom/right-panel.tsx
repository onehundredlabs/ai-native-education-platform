import { cn } from "@/lib/utils";

interface RightPanelProps {
  className?: string;
}
export const RightPanel = ({ className }: RightPanelProps) => {
  return <div className={cn("h-full", className)}>RightPanel</div>;
};
