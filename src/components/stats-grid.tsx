import { CircleDollarSign, ListOrdered, Users } from "lucide-react";
import { StatsItem, StatsItemProps } from "./stats-item";

const STATS: StatsItemProps[] = [
  {
    label: "Total draws",
    newValue: 4001,
    oldValue: 3800,
    compareWith: "last year",
    icon: <ListOrdered />,
  },
  {
    label: "Total prize",
    newValue: 1000000,
    oldValue: 2500000,
    compareWith: "last year",
    icon: <CircleDollarSign />,
  },
  {
    label: "Total winners",
    newValue: 100000000,
    oldValue: 75000000,
    compareWith: "last year",
    icon: <Users />,
  },
  {
    label: "Average prize",
    newValue: 2342141,
    oldValue: 3421312,
    compareWith: "last year",
    icon: <Users />,
  },
];

interface StatsGridProps {
  stats?: StatsItemProps[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  stats = STATS;
  return (
    <div className="from-sidebar to-sidebar border-muted grid grid-cols-2 rounded-xl border bg-gradient-to-br min-[1200px]:grid-cols-4">
      {stats.map((stat) => (
        <StatsItem key={stat.label} {...stat} />
      ))}
    </div>
  );
}
