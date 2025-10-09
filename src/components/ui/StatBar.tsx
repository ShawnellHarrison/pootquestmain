"use client";

import { cn } from "@/lib/utils";

interface StatBarProps {
  value: number; // 0-100
  className?: string;
}

const StatBar = ({ value, className }: StatBarProps) => {
  const filledSegments = Math.round(value / 10);
  const emptySegments = 10 - filledSegments;

  return (
    <div className={cn("flex font-code text-sm", className)}>
      <span className="text-primary">
        {"█".repeat(filledSegments)}
      </span>
      <span className="text-primary/30">
        {"░".repeat(emptySegments)}
      </span>
      <span className="ml-2 w-10 text-left text-foreground">{value}%</span>
    </div>
  );
};

export default StatBar;
