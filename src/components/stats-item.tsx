import { cn } from "@/lib/utils";

export interface StatsItemProps {
  label: string;
  newValue: number;
  oldValue: number;
  compareWith: string;
  icon: React.ReactNode;
}

export function StatsItem({
  label,
  newValue,
  oldValue,
  compareWith,
  icon,
}: StatsItemProps) {
  const change = ((newValue - oldValue) / oldValue) * 100;
  const isPositive = change > 0;
  const trendColor = isPositive ? "text-emerald-500" : "text-red-500";

  return (
    <div className="p-4 lg:p-5">
      <div className="flex items-center gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-amber-500/50 bg-amber-500/25 text-amber-400 max-[480px]:hidden">
          {icon}
        </div>
        {/* Content */}
        <div>
          <div className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            {label}
          </div>
          <div className="mb-2 text-2xl font-semibold">
            {newValue.toLocaleString()}
          </div>
          <div className="text-muted-foreground text-xs">
            <span className={cn("font-medium", trendColor)}>
              {isPositive ? "↗" : "↘"} {change.toLocaleString()}%
            </span>{" "}
            vs {compareWith}
          </div>
        </div>
      </div>
    </div>
  );
}
