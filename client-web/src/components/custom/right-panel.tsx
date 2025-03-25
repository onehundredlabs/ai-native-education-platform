import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface RightPanelProps {
  className?: string;
}

export const RightPanel = ({ className }: RightPanelProps) => {
  return (
    <div
      className={cn(
        "h-full border-l border-gray-200 p-4 flex flex-col",
        className
      )}
    >
      <div className="text-lg font-semibold mb-4">Zeptejte se na materiál</div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        <div className="bg-muted p-3 rounded-lg max-w-[80%]">
          <p className="text-sm">Jak vám mohu pomoci s učebními materiály?</p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex flex-col gap-2">
          <Textarea
            placeholder="Napište svůj dotaz zde..."
            className="w-full resize-none"
          />

          <Button type="submit">Odeslat</Button>
        </div>
      </div>
    </div>
  );
};
