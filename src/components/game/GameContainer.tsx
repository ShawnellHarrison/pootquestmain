import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GameContainer({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn("container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8", className)}>
      {children}
    </div>
  );
}
